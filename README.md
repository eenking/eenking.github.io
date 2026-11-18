# Website SDN 22 Pontianak Barat

Website resmi **SD Negeri 22 Pontianak Barat** — satu situs modern bertema putih–merah
yang menggabungkan konten dari 4 Google Sites lama. Semua data sekolah, tautan, dan
sematan diatur di satu tempat: `assets/js/app.js` → `SITE_CONFIG`.

| Halaman | Isi |
|---|---|
| `index.html` | Beranda: hero, **Akses Cepat** (SPMB · PMM · E-Rapor SD), **Layanan** (Dapodik · SPMB · E-Rapor · PMM), sambutan kepala sekolah, agenda (2 kalender), galeri, lokasi & kontak |
| `profil.html` | Identitas (NPSN/NSS/alamat/jam layanan), visi & misi, struktur organisasi + tombol Canva, data siswa (sheet “JUMLAH SISWA”), fasilitas, prestasi & ekstrakurikuler |
| `guru-pegawai.html` | Tab Kepala Sekolah / Guru / Pegawai / Data & Grafik, kartu personil dengan foto asli dari spreadsheet |
| `absensi.html` | **Rekap bulanan saja** (tahun berjalan & tahun sebelumnya): bulan tercatat, pegawai, total kehadiran, rata-rata per hari — tanpa jam masuk/pulang dan tanpa formulir |
| `galeri.html` | Galeri foto & video (klik untuk memutar/memperbesar), kanal YouTube, media sosial, folder Drive |

> **Catatan penempatan:** Absensi **tidak** ada di “Akses Cepat” atau “Layanan”.
> Halaman absensi hanya bisa dibuka dari menu navigasi.

---

## 1. Struktur folder

```
sdn22-website/
├─ index.html
├─ profil.html
├─ guru-pegawai.html
├─ absensi.html
├─ galeri.html
├─ PANDUAN-GOOGLE-SITES.md   Panduan klik-demi-klik membangun ulang di Google Sites
├─ README.md
└─ assets/
   ├─ css/style.css          Semua tampilan (warna, tipografi, responsif)
   ├─ js/app.js              KONFIGURASI + interaksi (menu, tab, embed, galeri, lightbox)
   └─ img/*.svg              Ilustrasi bawaan (boleh diganti foto asli)
```

---

## 2. Menjalankan di komputer

Buka `index.html` langsung, atau jalankan server lokal agar semua embed tampil normal:

```bat
cd C:\Users\BOGEM\sdn22-website
python -m http.server 8787
```

Lalu buka <http://localhost:8787/index.html>.

---

## 3. Bagian penting di `SITE_CONFIG`

| Kunci | Isi saat ini |
|---|---|
| `sekolah` | Nama, motto, alamat, WhatsApp `0812-5414-9295`, email, NPSN `30105373`, NSS `101136004022`, jam layanan, kepala sekolah, editor, logo, foto kepala sekolah |
| `statistik` | 392 siswa (206 L / 186 P), 14 rombel, 23 personil (8 PNS · 11 PPPK · 4 honor) |
| `rekap` | Angka rekap absensi per bulan (`bulan`, `hari`, `pegawai`, `hadir`) untuk tahun berjalan & sebelumnya, plus `sumber` dan `diperbarui` |
| `links` | SPMB, aktivasi token, E-Rapor SD, PMM, Dapodik, Canva struktur, spreadsheet siswa & personil, YouTube, Instagram, Facebook, halaman Facebook, TikTok |
| `embeds` | Maps, 2 kalender Apps Script, tabel personil, sheet jumlah siswa, `dokumentasi` |
| `media` | Daftar foto & video galeri — tempel tautan, langsung tampil |
| `staff` + `STAFF_FOTO` | 23 personil beserta foto (ID Drive) — kartu dirender otomatis |

### Menambah foto/video galeri

Cukup tambah satu baris di `SITE_CONFIG.media`:

```js
{ jenis: "video", src: "ID_YOUTUBE", judul: "Nama Kegiatan", ket: "Keterangan" },
{ jenis: "foto",  src: "https://drive.google.com/file/d/ID_FILE/view", judul: "Foto Kegiatan" },
```

- `video` menerima ID YouTube, tautan `youtu.be`/`watch?v=`, atau tautan file Drive.
- `foto` menerima tautan Drive, URL gambar, atau file lokal `assets/img/...`.
- Foto Drive otomatis dikonversi ke `lh3.googleusercontent.com`, video YouTube memakai
  thumbnail asli dan diputar di lightbox.

### Memperbarui rekap absensi

Rekap ditulis langsung di `SITE_CONFIG.rekap` (bukan embed), dikelompokkan per tahun:

```js
rekap: {
  sumber: "Rekap fingerprint SDN 22 Pontianak Barat",
  diperbarui: "November 2026",
  2026: [
    { bulan: "Januari", hari: 20, pegawai: 24, hadir: 480 },
    // ...
  ],
  2025: [ /* arsip tahun sebelumnya */ ],
}
```

- `hari` = jumlah hari yang memiliki catatan presensi pada bulan itu.
- `pegawai` = jumlah pegawai yang muncul pada bulan itu.
- `hadir` = total kehadiran (hari-orang), bukan persentase.
- Setiap awal bulan: tambahkan satu baris pada tahun berjalan, lalu ubah `rekap.diperbarui`.
- Halaman **hanya menampilkan jumlah** — jam masuk/pulang dan formulir tidak pernah dimuat.
- Sumber angka: folder Drive **“ABSEN SDN 22” → REKAP ABSENSI** (sheet `REKAP ABSEN <BULAN> <TAHUN>`).
- Bulan tanpa data cukup dihilangkan dari daftar; halaman otomatis menuliskan bulan yang belum tersedia.
- Tahun baru: tambahkan kunci tahun (mis. `2027: []`) — tab tahun berjalan mengikuti tanggal komputer.

---

## 4. Mengganti tautan

Semua tautan tombol memakai `data-link="kunci"`, jadi cukup ubah di `SITE_CONFIG.links`:

| Kunci | Tautan |
|---|---|
| `spmb` | <https://spmb.pontianak.go.id/> |
| `spmbToken` | <https://siswa.spmb.id/pontianak/login> |
| `erapor` | <https://ditsd.kemendikdasmen.go.id/s/erapor2025> |
| `pmm` | <https://guru.kemendikdasmen.go.id/> |
| `dapodik` | <https://dapo.kemendikdasmen.go.id/> |
| `canvaStruktur` | <https://canva.link/0srchjtd0mdni95> |
| `youtube` | <https://www.youtube.com/@sdn22pontianakbarat> |
| `instagram` | <https://www.instagram.com/sdn22ponbar> |
| `facebook` / `facebookPage` | <https://www.facebook.com/sdn22ponbar/> · <https://www.facebook.com/sdn22pontianakbarat/> |
| `tiktok` | <https://www.tiktok.com/@esdeenduaduaponba> |

Tautan E-Rapor SD bisa berubah sewaktu-waktu. Bila berubah, cukup perbarui `links.erapor`.

---

## 5. Publikasi (GitHub Pages — sudah aktif)

Situs berjalan di **<https://eenking.github.io/>** dari repositori
`eenking/eenking.github.io` (branch `main`, folder root, file `.nojekyll`).

Cara memperbarui:

1. Buka repositori di GitHub → pilih file (mis. `index.html`) → ikon pensil.
2. Tempel isi file terbaru → **Commit changes**.
3. Tunggu 1–2 menit → buka situs → **Ctrl + F5**.

File yang perlu diunggah ulang setelah perubahan besar:
`index.html`, `profil.html`, `guru-pegawai.html`, `absensi.html`, `galeri.html`,
`assets/js/app.js`, `assets/css/style.css` (dan `assets/img/` bila berganti gambar).

Alternatif hosting: Netlify Drop (<https://app.netlify.com/drop>) — tarik seluruh folder.

---

## 6. Catatan teknis

- Tanpa framework, tanpa build step: HTML + CSS + JavaScript biasa.
- Embed dimuat **hanya saat hampir terlihat** (hemat kuota, halaman tetap ringan).
- Video diputar di lightbox (YouTube/Drive), foto Drive memakai `lh3.googleusercontent.com`.
- Canva **tidak bisa** disematkan (`X-Frame-Options: deny`) → memakai tombol keluar tab.
- Instagram/Facebook/TikTok juga tidak bisa disematkan → memakai ikon tautan.
- Aksesibilitas: `aria-*` pada menu, tab, akordeon, dan lightbox; fokus keyboard tetap jalan.
- Responsif pada ≤1000px, ≤860px, ≤560px; ada gaya cetak (`@media print`).

---

## 7. Checklist sebelum rilis

- [ ] Nama, NPSN, NSS, alamat, WhatsApp, email, kepala sekolah, editor benar
- [ ] Statistik siswa/personil sesuai spreadsheet terbaru
- [ ] Foto kepala sekolah & personil tampil (bukan inisial)
- [ ] Kalender pendidikan & kalender sekolah termuat
- [ ] Rekap absensi terisi (tahun berjalan & sebelumnya) tanpa kolom jam
- [ ] Absensi tidak muncul di “Akses Cepat”/“Layanan”
- [ ] Semua tombol layanan membuka tautan resmi terbaru
- [ ] Tidak ada tautan situs/PDF lama yang masih aktif
- [ ] Diuji di HP: menu hamburger, tabel bisa digeser, galeri rapi
