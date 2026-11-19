#!/usr/bin/env python3
"""Ambil foto dari postingan Telegram yang dipilih.

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
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

CHANNEL = "sdn22pontianakbarat"
# Galeri hanya mengambil foto dari nomor postingan yang tercantum di sini.
SELECTED_POST_IDS = (
    2700,   # Dokumentasi
    3598,   # PENCAKSILAT
    2570,   # FUTSAL
    16243,  # HUT KOTE PTK
    16193,
    13455,
    12144,
    11843,
    13994,
    9991,
    12658,
)
BASE_URL = "https://t.me/{channel}/{post_id}?embed=1"
ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "assets" / "data" / "telegram.js"

MAX_PHOTOS = 72          # jumlah foto yang ditampilkan di galeri
WORKERS = 2              # kurangi beban permintaan paralel ke Telegram
RETRIES = 3
TIMEOUT = 25

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
    ),
    "Accept-Language": "id,en;q=0.8",
}

# URL diparsing dari atribut HTML maupun markup mentah sebagai fallback jika
# Telegram memindahkan URL gambar ke atribut atau struktur HTML yang berbeda.
URL_RE = re.compile(r"https?://[^\s\"'<>]+", re.I)


class TelegramEmbedParser(HTMLParser):
    """Ekstrak metadata embed tanpa bergantung pada satu class CSS tertentu."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.post_ids: set[int] = set()
        self.dates: list[str] = []
        self.attribute_values: list[str] = []
        self.text_parts: list[str] = []
        self._text_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key.lower(): value or "" for key, value in attrs}
        for key, value in values.items():
            if value:
                self.attribute_values.append(value)
            if key == "data-post":
                match = re.fullmatch(rf"{re.escape(CHANNEL)}/(\d+)", value)
                if match:
                    self.post_ids.add(int(match.group(1)))
            elif key == "datetime" and value:
                self.dates.append(value)

        classes = set(values.get("class", "").split())
        if "tgme_widget_message_text" in classes:
            self._text_depth = 1
        elif self._text_depth and tag not in {"br", "img", "meta", "link", "input", "hr"}:
            self._text_depth += 1

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)
        self.handle_endtag(tag)

    def handle_endtag(self, tag: str) -> None:
        if self._text_depth:
            self._text_depth -= 1

    def handle_data(self, data: str) -> None:
        if self._text_depth and data.strip():
            self.text_parts.append(data.strip())


def fetch(post_id: int) -> str:
    """Unduh halaman embed dengan retry terbatas untuk error sementara."""
    url = BASE_URL.format(channel=CHANNEL, post_id=post_id)
    for attempt in range(RETRIES):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=TIMEOUT) as response:
                return response.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as exc:
            if exc.code in (404, 410):
                print(f"Postingan {post_id}: HTTP {exc.code} (tidak tersedia).", file=sys.stderr)
                return ""
            if exc.code != 429 and not 500 <= exc.code < 600:
                print(f"Postingan {post_id}: HTTP {exc.code}.", file=sys.stderr)
                return ""
            retry_after = exc.headers.get("Retry-After") if exc.headers else None
            try:
                delay = min(float(retry_after), 30) if retry_after else 2 ** attempt
            except ValueError:
                delay = 2 ** attempt
            error = f"HTTP {exc.code}"
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            delay = 2 ** attempt
            error = str(getattr(exc, "reason", exc))

        if attempt + 1 < RETRIES:
            print(
                f"Postingan {post_id}: {error}; coba lagi dalam {delay:g} detik "
                f"({attempt + 1}/{RETRIES - 1}).",
                file=sys.stderr,
            )
            time.sleep(delay)
        else:
            print(f"Postingan {post_id}: gagal setelah {RETRIES} percobaan ({error}).", file=sys.stderr)
    return ""


def _image_urls(values: list[str], page: str) -> list[str]:
    """Temukan URL berkas gambar pada atribut dan markup embed."""
    urls: list[str] = []
    for value in [*values, page]:
        for candidate in URL_RE.findall(html.unescape(value)):
            candidate = candidate.rstrip(").,;]")
            parsed = urlparse(candidate)
            host = (parsed.hostname or "").lower()
            if "/file/" not in parsed.path.lower():
                continue
            if not (host.endswith("telesco.pe") or host.endswith("telegram.org")):
                continue
            if candidate not in urls:
                urls.append(candidate)
    return urls


def parse(post_id: int, page: str) -> dict | None:
    """Ambil tanggal, teks, dan URL foto dari halaman embed Telegram."""
    if not page:
        return None

    parser = TelegramEmbedParser()
    try:
        parser.feed(page)
        parser.close()
    except Exception as exc:
        print(f"Postingan {post_id}: HTML tidak dapat diparse ({exc}).", file=sys.stderr)
        return None

    # Pastikan halaman yang diterima memang postingan yang diminta.
    if post_id not in parser.post_ids or not parser.dates:
        print(
            f"Postingan {post_id}: metadata postingan/tanggal tidak ditemukan; "
            "struktur embed mungkin berubah.",
            file=sys.stderr,
        )
        return None

    photos = _image_urls(parser.attribute_values, page)
    text = re.sub(r"\s+", " ", " ".join(parser.text_parts)).strip()

    if not photos and not text:
        print(f"Postingan {post_id}: embed terbaca, tetapi foto/teks tidak ditemukan.", file=sys.stderr)
        return None

    return {
        "id": post_id,
        "date": parser.dates[0],
        "url": f"https://t.me/{CHANNEL}/{post_id}",
        "text": text[:500],
        "photos": photos,
    }


def fetch_many(ids: list[int]) -> dict[int, dict]:
    """Unduh dan parsing banyak pesan secara paralel dengan concurrency rendah."""
    if not ids:
        return {}
    with ThreadPoolExecutor(max_workers=min(WORKERS, len(ids))) as pool:
        pages = dict(zip(ids, pool.map(fetch, ids)))

    result: dict[int, dict] = {}
    for post_id in ids:
        parsed = parse(post_id, pages.get(post_id, ""))
        if parsed:
            result[post_id] = parsed
    return result


def collect_selected() -> list[dict]:
    """Ambil foto hanya dari postingan yang dipilih, sesuai urutan daftar."""
    messages = fetch_many(list(SELECTED_POST_IDS))
    posts: list[dict] = []
    seen_photos: set[str] = set()
    total_photos = 0

    for post_id in SELECTED_POST_IDS:
        message = messages.get(post_id)
        if not message:
            print(f"Postingan {post_id} dilewati karena data tidak tersedia.", file=sys.stderr)
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
        "selected_ids": list(SELECTED_POST_IDS),
        "posts": posts,
    }

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    body = json.dumps(data, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "/* Galeri Telegram — dibuat otomatis oleh scripts/fetch-telegram.py. */\n"
        "window.TELEGRAM_GALLERY = " + body + ";\n",
        encoding="utf-8",
    )
    print(f"{len(posts)} postingan terpilih, {sum(len(p['photos']) for p in posts)} foto -> {OUTPUT}")


def main() -> int:
    posts = collect_selected()
    if not posts:
        print(
            "Tidak ada foto yang dapat diambil dari postingan terpilih. "
            "Output sebelumnya dipertahankan.",
            file=sys.stderr,
        )
        return 1

    write_output(max(SELECTED_POST_IDS, default=0), posts)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
