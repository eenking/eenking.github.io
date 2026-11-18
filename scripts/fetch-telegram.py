#!/usr/bin/env python3
"""Ambil foto terbaru dari channel/group Telegram sekolah.

Hasilnya ditulis ke assets/data/telegram.js sehingga halaman Galeri dapat
menampilkan foto langsung tanpa server tambahan.

Jalankan manual:
    python scripts/fetch-telegram.py

Di GitHub, skrip ini dijalankan otomatis setiap hari oleh
.github/workflows/telegram-gallery.yml.
"""

from __future__ import annotations

import html
import json
import re
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

CHANNEL = "sdn22pontianakbarat"
BASE_URL = "https://t.me/{channel}/{post_id}?embed=1"
ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "assets" / "data" / "telegram.js"

MAX_PHOTOS = 72          # jumlah foto yang ditampilkan di galeri
MAX_SCAN_BACK = 90       # jumlah pesan terakhir yang diperiksa
BATCH_SIZE = 15          # pesan yang diunduh per gelombang
WORKERS = 8
TIMEOUT = 25

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
    ),
    "Accept-Language": "id,en;q=0.8",
}

PHOTO_RE = re.compile(r"https://cdn\d*\.telesco\.pe/file/[^'\"]+")
DATE_RE = re.compile(r'datetime="([^"]+)"')
POST_RE = re.compile(r'data-post="' + re.escape(CHANNEL) + r'/(\d+)"')


def fetch(post_id: int) -> str:
    """Unduh halaman embed satu pesan Telegram."""
    url = BASE_URL.format(channel=CHANNEL, post_id=post_id)
    for _ in range(2):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=TIMEOUT) as response:
                return response.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as exc:
            if exc.code in (404, 410):
                return ""
        except Exception:
            continue
    return ""


def parse(post_id: int, page: str) -> dict | None:
    """Ambil tanggal, teks, dan URL foto dari halaman embed."""
    if not page or "js-widget_message" not in page or not POST_RE.search(page):
        return None

    match_date = DATE_RE.search(page)
    if not match_date:
        return None

    photos: list[str] = []
    for url in PHOTO_RE.findall(page):
        url = html.unescape(url)
        if url not in photos:
            photos.append(url)

    text = ""
    match_text = re.search(
        r'tgme_widget_message_text[^>]*>(.*?)</div>', page, re.S
    )
    if match_text:
        raw = re.sub(r"<br\s*/?>", "\n", match_text.group(1))
        raw = re.sub(r"<[^>]+>", "", raw)
        text = html.unescape(raw)
        text = re.sub(r"[ \t]+", " ", text).strip()

    if not photos and not text:
        return None

    return {
        "id": post_id,
        "date": match_date.group(1),
        "url": f"https://t.me/{CHANNEL}/{post_id}",
        "text": text[:500],
        "photos": photos,
    }


def fetch_pages(ids: list[int]) -> dict[int, str]:
    """Unduh banyak halaman embed sekaligus."""
    if not ids:
        return {}
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        return dict(zip(ids, pool.map(fetch, ids)))


def page_valid(page: str) -> bool:
    return bool(page and POST_RE.search(page) and DATE_RE.search(page))


def fetch_valid(ids: list[int]) -> dict[int, str]:
    return {i: page for i, page in fetch_pages(ids).items() if page_valid(page)}


def fetch_many(ids: list[int]) -> dict[int, dict]:
    """Unduh dan parsing banyak pesan secara paralel."""
    pages = fetch_pages(ids)
    result: dict[int, dict] = {}
    for post_id in ids:
        parsed = parse(post_id, pages.get(post_id, ""))
        if parsed:
            result[post_id] = parsed
    return result


def is_valid(post_id: int) -> bool:
    """True jika nomor pesan ada (walau isinya teks/kosong tanpa foto)."""
    return page_valid(fetch(post_id))


def read_last_id() -> int:
    if not OUTPUT.exists():
        return 0
    match = re.search(r'"last_id"\s*:\s*(\d+)', OUTPUT.read_text(encoding="utf-8"))
    return int(match.group(1)) if match else 0


def find_latest_bootstrap() -> int:
    """Pencarian awal saat belum ada data sama sekali."""
    low, step = 0, 1000
    high = 0
    while step <= 500_000:
        if is_valid(step):
            low = step
            step *= 2
        else:
            high = step
            break

    if high <= low:
        high = low + step

    while high - low > 1:
        mid = (low + high) // 2
        if is_valid(mid):
            low = mid
        else:
            high = mid

    latest = low
    for post_id in range(low + 1, min(low + 60, high + 60)):
        if is_valid(post_id):
            latest = post_id
    return latest


def find_latest(previous: int) -> int:
    """Cari nomor pesan terbaru; pesan baru diperiksa per gelombang."""
    if previous <= 0:
        return find_latest_bootstrap()

    if not is_valid(previous):
        for post_id in range(previous - 1, previous - 51, -1):
            if is_valid(post_id):
                previous = post_id
                break
        else:
            return find_latest_bootstrap()

    latest = previous
    cursor = previous + 1
    misses = 0

    while cursor <= previous + 600:
        ids = list(range(cursor, cursor + 20))
        found = fetch_valid(ids)
        if found:
            latest = max(found)
            misses = 0
        else:
            misses += len(ids)
            if misses >= 20:
                break
        cursor += 20

    return latest


def collect(latest: int) -> list[dict]:
    """Kumpulkan pesan terakhir yang memiliki foto, terbaru lebih dulu."""
    posts: list[dict] = []
    seen_photos: set[str] = set()
    total_photos = 0

    for start in range(latest, max(0, latest - MAX_SCAN_BACK), -BATCH_SIZE):
        ids = [i for i in range(start, start - BATCH_SIZE, -1) if i > 0]
        if not ids:
            break
        messages = fetch_many(ids)

        for post_id in ids:
            message = messages.get(post_id)
            if not message:
                continue

            fresh = [url for url in message["photos"] if url not in seen_photos]
            if not fresh:
                continue

            for url in fresh:
                seen_photos.add(url)
            message["photos"] = fresh
            posts.append(message)
            total_photos += len(fresh)

        if total_photos >= MAX_PHOTOS:
            break

    return posts


def write_output(latest: int, posts: list[dict]) -> None:
    data = {
        "channel": CHANNEL,
        "channel_url": f"https://t.me/{CHANNEL}",
        "updated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "last_id": latest,
        "posts": posts,
    }

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    body = json.dumps(data, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "/* Galeri Telegram — dibuat otomatis oleh scripts/fetch-telegram.py. */\n"
        "window.TELEGRAM_GALLERY = " + body + ";\n",
        encoding="utf-8",
    )
    print(f"{len(posts)} pesan, {sum(len(p['photos']) for p in posts)} foto -> {OUTPUT}")


def main() -> int:
    previous = read_last_id()
    latest = find_latest(previous)
    if latest <= 0:
        print("Tidak ada pesan Telegram yang dapat dibaca.", file=sys.stderr)
        return 1

    posts = collect(latest)
    if not posts:
        print("Tidak ada foto pada pesan terbaru.", file=sys.stderr)
        return 1

    write_output(latest, posts)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
