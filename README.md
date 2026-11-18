# eenking.github.io
# Panduan Membangun Ulang di Google Sites
### SDN 22 Pontianak Barat — versi id.belajar (gratis)

Panduan klik-demi-klik untuk menggabungkan 4 situs lama menjadi **satu** Google Sites,
dengan tema putih–merah dan semua embed yang sudah disiapkan.
Kerjakan berurutan; perkiraan waktu 2–3 jam (bisa dicicil).

---

## 0. Baca dulu — 5 batasan Google Sites gratis

| Batasan | Akibatnya | Solusi |
|---|---|---|
| Google Sites **tidak bisa** di-embed di Google Sites lain | 4 situs lama tidak bisa "ditumpuk" dengan iframe | Isi dipindah/disalin ke halaman baru, atau ditautkan |
| Tidak ada CSS/JS kustom | Animasi, lightbox, menu hamburger, statistik berjalan **tidak bisa** ditiru | Pakai komponen bawaan: banner, korsel, kartu, tombol |
| Domain tetap `sites.google.com/admin.sd.belajar.id/...` | Tidak bisa pakai domain sekolah sendiri | Perpendek dengan bit.ly, atau lanjut pakai tautan panjang |
| Publikasi "Siapa saja" bisa dibatasi admin sekolah | Situs tidak bisa dibuka orang luar | Cek di **Publikasikan → Kelola → Siapa yang dapat melihat** |
| Form/Sheet milik domain | Pengunjung luar yang tidak login **tidak bisa mengisi** form | Set form: **Siapa saja yang memiliki link** |

> Kalau butuh tampilan persis seperti template `sdn22-website` (animasi, lightbox,
> menu mobile), itu hanya bisa lewat hosting HTML gratis (Netlify/GitHub Pages),
> lalu ditautkan dari Google Sites. Untuk sekarang kita pakai jalur Google Sites.

---

## 1. Persiapan (10 menit)

1. Buka <https://sites.google.com> → login **akun sekolah** (`...@admin.sd.belajar.id`).
2. Klik **Kosong** (Blank) untuk membuat situs baru.
3. Klik judul di kiri atas → ganti menjadi: **SDN 22 Pontianak Barat**.
4. Klik **Publikasikan** → **Alamat web** → **Kelola** → isi:
   `sdn22-pontianak-barat` → **Simpan**. (Alamat akhir:
   `sites.google.com/admin.sd.belajar.id/sdn22-pontianak-barat`)
5. Jangan hapus 4 situs lama dulu — dipakai sebagai sumber salin-tempel.

---

## 2. Struktur halaman

Klik **Halaman** (panel kanan) → **+** → **Halaman baru** untuk setiap baris.
Gunakan menu **⋮ → Tambahkan ke menu navigasi** agar muncul di atas.

```
Beranda                  (halaman utama)
├─ Profil
│   ├─ Visi & Misi
│   ├─ Struktur Organisasi
│   └─ Fasilitas
├─ Guru & Pegawai
│   ├─ Kepala Sekolah
│   ├─ Guru
│   └─ Pegawai
├─ Absensi
│   ├─ Absen Hari Ini
│   └─ Rekap & Arsip
└─ Galeri
```

Menu navigasi: **Halaman → Menu navigasi → Di atas** (gaya paling mirip template).
Supaya rapi, sembunyikan sub-halaman dari menu dengan ikon mata (⋮ → Sembunyikan dari navigasi),
lalu tautkan dari halaman induknya memakai tombol.

---

## 3. Tema & warna (sekali saja)

**Tema** (panel kanan) → **Sesuaikan**:

| Pengaturan | Nilai |
|---|---|
| Warna utama / kustom | `#C1121F` (merah) |
| Warna sekunder | `#8B0F1A` (merah tua) |
| Latar/isi | `#FFFFFF` (putih) |
| Warna aksen/latar lembut | `#FFF8F8` |
| Font judul | **Plus Jakarta Sans** (jika tidak ada: *Inter* / *Lato*) |
| Font isi | **Plus Jakarta Sans** atau *Roboto* |
| Gaya | Sudut membulat/Lembut, latar terang |

**Banner Beranda:** klik area banner → **Ganti gambar** → unggah foto gedung sekolah
(rasio lebar, minimal 1600×600 px). Isi judul banner: *SDN 22 Pontianak Barat*,
subjudul: *Membangun Generasi Cerdas, Berkarakter, dan Berbudaya*,
tombol: *SPMB Online* → tautkan ke halaman pendaftaran.

---

## 4. Halaman Beranda — urutan bagian

Untuk menambah bagian baru: arahkan kursor ke bawah bagian terakhir → klik **+** atau
**Tambahkan bagian**. Tata letak diatur lewat ikon **Tata letak** pada toolbar bagian.

| # | Bagian | Isi | Tata letak |
|---|---|---|---|
| 1 | Banner | Judul + subjudul + tombol **SPMB Online** & **Profil Sekolah** | Banner besar |
| 2 | Layanan | 4 kartu: **SPMB**, **E-Rapor**, **Absensi**, **PMM** (masing-masing tombol ke URL) | 4 kolom |
| 3 | Sambutan | Foto kepala sekolah + teks sambutan + nama & NIP | 2 kolom (gambar kiri) |
| 4 | Statistik | 4 kotak angka: Peserta Didik, Guru & Pegawai, Rombel, Prestasi | 4 kolom |
| 5 | Agenda | Sematan **Google Calendar** + 2–3 kartu pengumuman | 2 kolom |
| 6 | Galeri | **Korsel** gambar (6 foto) + tombol *Lihat semua galeri* | 1 kolom |
| 7 | Video | Sematan **YouTube** video profil | 1 kolom |
| 8 | Lokasi & Kontak | Sematan **Google Maps** + teks alamat/telepon/email/jam layanan | 2 kolom |
| 9 | Penutup | Teks ajakan + tombol SPMB | 1 kolom |

**Tombol:** **Sisipkan → Tombol** → isi label → **Tautan** → pilih halaman atau tempel URL
→ gaya **Diisi** (merah) untuk aksi utama, **Garis besar** untuk aksi kedua.

**Kartu layanan:** gunakan **Sisipkan → Kotak teks** di dalam bagian 4 kolom, beri
latar `#FFF8F8`, lalu tambahkan tombol kecil di bawah teks.

---

## 5. Halaman Profil

1. **Identitas**: bagian 2 kolom — kiri tabel identitas (Nama, NPSN, Jenjang,
   Akreditasi, Alamat, Jam Layanan), kanan kotak motto.
   Tabel: **Sisipkan → Tabel** (2 kolom).
2. **Visi & Misi**: bagian 1 kolom berisi 3 kotak teks berjudul *Visi*, *Misi*, *Tujuan*.
   Google Sites tidak punya akordeon — gunakan sub-halaman *Visi & Misi* bila isinya panjang.
3. **Struktur Organisasi**: **Sisipkan → Gambar** bagan (buat di Canva/Slides, ekspor PNG),
   atau **Sisipkan → Drive** bila bagan berupa Slides/PDF.
4. **Fasilitas**: bagian 3 kolom × 2 baris, tiap kolom: ikon/emoji + judul + 1 kalimat.
5. **Prestasi**: **Sisipkan → Tabel** (Tahun, Prestasi, Tingkat, Keterangan).

---

## 6. Halaman Guru & Pegawai

Google Sites tidak punya tab, jadi pakai sub-halaman (sudah dibuat di langkah 2):

- **Kepala Sekolah** — 2 kolom: foto (rasio 3:4) + tabel jabatan/NIP/pendidikan/masa tugas.
- **Guru** — bagian 4 kolom berisi kartu: foto (rasio 1:1), nama, jabatan, NIP.
  Cara cepat: buat 1 kartu, lalu **duplikat bagian** (ikon duplikat pada toolbar bagian)
  dan ganti isinya.
- **Pegawai** — sama, 4 kolom.
- **Data & Grafik** — **Sisipkan → Drive** pilih spreadsheet grafik, atau sematkan
  grafik Sheets (kode di bagian 9).

Di halaman induk **Guru & Pegawai**, buat 3 tombol besar menuju sub-halaman tersebut.

---

## 7. Halaman Absensi

1. **Absen Hari Ini**
   - **Sisipkan → Formulir** → pilih form absensi (atau tempel kode iframe, bagian 9).
   - Tambahkan kotak catatan: "Isi absen sebelum pukul 07.15 WIB".
2. **Rekap & Arsip**
   - **Sisipkan → Drive** → pilih file PDF rekap terbaru (atau sematkan lewat iframe).
   - Daftar arsip: **Sisipkan → Daftar isi** atau tombol-tombol menuju file PDF.
3. **Tombol ke situs lama** (opsional, masa transisi):
   *"Buka arsip absensi lama"* → `https://sites.google.com/admin.sd.belajar.id/absensisdn22pb/halaman-muka`

**Penting:** bila pengunjung situs bukan warga sekolah, buka form → **Setelan →
Respons → Siapa yang dapat merespons: Siapa saja yang memiliki link** (jangan "Dibatasi").
Jika admin sekolah melarang, form hanya bisa diisi setelah login akun sekolah.

---

## 8. Halaman Galeri

1. **Sisipkan → Korsel** → unggah 6–8 foto (otomatis bisa digeser).
2. **Sisipkan → YouTube** → tempel tautan video (bukan kode iframe).
3. **Sisipkan → Drive** → pilih folder dokumentasi
   (folder harus dibagikan **Siapa saja yang memiliki link**).
4. Tambahkan keterangan singkat di bawah setiap media.

---

## 9. Kode embed siap tempel

**Sisipkan → Sematkan → tab "Kode sematan" → tempel → Berikutnya → Sisipkan.**
Ganti bagian `GANTI_...` dengan ID milik Anda.

**A. Peta lokasi (sudah terverifikasi — lokasi sekolah ditemukan di Maps)**
```html
<iframe src="https://www.google.com/maps?q=SDN%2022%20Pontianak%20Barat&output=embed"
        width="100%" height="420" style="border:0" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
```
> Untuk versi resmi: Google Maps → cari lokasi → **Bagikan → Sematkan peta → Salin HTML**.

**B. Sematan Google Maps resmi (pola umum)**
```html
<iframe src="GANTI_SRC_DARI_MAPS" width="100%" height="420" style="border:0"
        loading="lazy" allowfullscreen></iframe>
```

**C. YouTube (video profil / kegiatan)**
```html
<iframe width="100%" height="420"
        src="https://www.youtube.com/embed/GANTI_ID_VIDEO"
        title="Video SDN 22 Pontianak Barat" frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
```
Kanal sekolah: <https://www.youtube.com/@sdn22pontianakbarat>

**D. Google Forms (absensi)**
```html
<iframe src="https://docs.google.com/forms/d/e/GANTI_ID_FORM/viewform?embedded=true"
        width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
```

**E. Google Sheets rekap (hanya tampil, tidak bisa diedit)**
```html
<iframe src="https://docs.google.com/spreadsheets/d/e/GANTI_ID_PUBLIKASI/pubhtml?widget=true&headers=false"
        width="100%" height="600" frameborder="0"></iframe>
```
Cara dapat URL: spreadsheet → **File → Bagikan → Publikasikan ke web → HTML** → salin.

**F. Google Calendar (agenda)**
```html
<iframe src="GANTI_SRC_KALENDER" width="100%" height="500" frameborder="0"
        scrolling="no"></iframe>
```
Cara dapat: **Setelan kalender → Integrasikan kalender → salin isi `src="..."`**.

**G. Dokumen PDF Drive (rekap yang sudah ada)**
```html
<iframe src="https://drive.google.com/file/d/1JrE73YfbTjv88PMHF7-ZQohI55dnY0cr/preview"
        width="100%" height="640" frameborder="0" allow="autoplay"></iframe>
```

---

## 10. Kalau belum punya Google Form absensi

Buat di <https://forms.new> (akun sekolah), judul **"Absensi Guru & Pegawai SDN 22 Pontianak Barat"**.

| No | Pertanyaan | Jenis | Wajib |
|---|---|---|---|
| 1 | Nama lengkap | Jawaban singkat | Ya |
| 2 | NIP / ID Pegawai | Jawaban singkat | Tidak |
| 3 | Jabatan | Dropdown (Kepala Sekolah, Guru Kelas, Guru Mapel, Tata Usaha, Pegawai) | Ya |
| 4 | Jenis absen | Pilihan ganda (Masuk, Pulang) | Ya |
| 5 | Tanggal | Tanggal | Ya |
| 6 | Jam | Waktu | Ya |
| 7 | Status | Pilihan ganda (Hadir, Izin, Sakit, Cuti, Dinas Luar) | Ya |
| 8 | Keterangan | Paragraf | Tidak |

Setelan form:
- **Respons → Kumpulkan alamat email: Terverifikasi** (agar tidak ada entri palsu).
- **Respons → Siapa yang dapat merespons: Siapa saja yang memiliki link** (untuk pengunjung umum).
- **Respons → Buat spreadsheet** → dapat sheet otomatis untuk rekap.

---

## 11. Rekap otomatis di Google Sheets

Anggap sheet respons bernama `Form Responses 1`, kolom: `B` Nama, `E` Tanggal, `H` Status.

Buat sheet **Rekap**, lalu:

```
A2: Nama guru (daftar nama)
B2: =COUNTIFS('Form Responses 1'!$B:$B;$A2;'Form Responses 1'!$H:$H;"Hadir";TEXT('Form Responses 1'!$E:$E;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
C2: =COUNTIFS('Form Responses 1'!$B:$B;$A2;'Form Responses 1'!$H:$H;"Izin";TEXT('Form Responses 1'!$E:$E;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
D2: =COUNTIFS('Form Responses 1'!$B:$B;$A2;'Form Responses 1'!$H:$H;"Sakit";TEXT('Form Responses 1'!$E:$E;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
E2: =COUNTIFS('Form Responses 1'!$B:$B;$A2;'Form Responses 1'!$H:$H;"Cuti";TEXT('Form Responses 1'!$E:$E;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
F2: =IFERROR(B2/(B2+C2+D2+E2);0)      ← format sebagai persen
```

Tarik rumus ke bawah, lalu **Publikasikan ke web** sheet `Rekap` dan sematkan
ke halaman **Absensi → Rekap** (kode E di atas).

> Jika regional sheet memakai koma, ganti `;` menjadi `,` pada rumus.

---

## 12. Aset yang sudah ditemukan (pakai ulang, tidak perlu bikin baru)

| Aset | URL |
|---|---|
| Kanal YouTube sekolah | `https://www.youtube.com/@sdn22pontianakbarat` |
| Rekap absensi April 2025 (PDF) | `https://drive.google.com/file/d/1JrE73YfbTjv88PMHF7-ZQohI55dnY0cr/view` |
| Laporan absensi 9 Mei 2025 (PDF) | `https://drive.google.com/file/d/1btHzKuWdARIcddXP7SqajOY7cuNNbW5y/view` |
| Laporan absensi 8 Mei 2025 (PDF) | `https://drive.google.com/file/d/1RiaKkm0gNeCRpCJAwPuy4W3B1yPWefrN/view` |
| Portal PMM | `https://guru.kemdikbud.go.id/` |
| Situs lama 1 (Beranda, Profil, Galeri, SPMB) | `https://sites.google.com/admin.sd.belajar.id/sdn-22-pontianak-barat/beranda` |
| Situs lama 2 (Absensi) | `https://sites.google.com/admin.sd.belajar.id/absensisdn22pb/halaman-muka` |
| Situs lama 3 (Login, Profil, Berita, Lokasi) | `https://sites.google.com/admin.sd.belajar.id/sdn22pontianakbarat/loginsdn22pb` |
| Situs lama 4 (Guru & Pegawai) | `https://sites.google.com/admin.sd.belajar.id/gurudanpegawai/kepala-sekolah` |

**Peta halaman situs lama 3** (untuk memastikan tidak ada yang terlewat):
`/home` · `/profile/logo-sekolah` · `/profile/visi-misi` ·
`/profile/struktur-organisasi-sekolah` · `/berita/prestasi-akademik` ·
`/berita/prestasi-non-akademik` · `/berita/bukti-video-kegiatan` ·
`/berita/kantin-sehat` · `/lokasi`

---

## 13. Publikasi

1. **Publikasikan** → **Siapa yang dapat melihat** → **Siapa saja**.
   Jika opsi ini terkunci oleh admin, gunakan **Siapa saja di [domain sekolah]**
   atau minta admin mengizinkan publikasi.
2. Klik **Publikasikan** → konfirmasi.
3. Uji di **jendela privat/incognito** (tanpa login): semua halaman, semua embed,
   form bisa dibuka.
4. Salin tautan pendek (bit.ly) untuk dibagikan ke orang tua siswa.
5. Setelah situs baru stabil ±1 bulan:
   - Situs lama 1: ubah beranda menjadi "Situs telah pindah ke [tautan baru]".
   - Situs lama 2, 3, 4: arsipkan (jangan langsung dihapus — masih menyimpan PDF lama).
6. Unduh salinan PDF/arsip penting dari Drive ke perangkat sekolah sebagai cadangan.

---

## 14. Checklist akhir

- [ ] Semua 5 halaman utama + sub-halaman sudah dibuat & urut di menu
- [ ] Warna `#C1121F` + font Plus Jakarta Sans terpasang
- [ ] Banner memakai foto asli sekolah (bukan ilustrasi)
- [ ] Nama, NIP, foto kepala sekolah & guru sudah benar
- [ ] Peta menunjuk lokasi benar (Gg. Selamat 3 No. 46, Sungai Jawi Dalam)
- [ ] Form absensi bisa diisi dari incognito
- [ ] Rekap Sheets tampil (mode publikasi, bukan edit)
- [ ] Video YouTube bisa diputar
- [ ] Tautan SPMB / E-Rapor / PMM tidak ada yang kosong
- [ ] Diuji di HP (menu & tabel tidak terpotong)
- [ ] Tautan situs baru dibagikan; situs lama diberi pengumuman pindah

---

### Catatan

Template HTML di folder ini (`sdn22-website/`) tetap bisa dipakai sebagai **acuan visual**
saat menyusun Google Sites: buka `index.html` di browser di sebelah tab Google Sites,
lalu tiru susunan bagian, teks, dan warnanya.
