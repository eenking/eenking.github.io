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
│   ├─ Rekap Tahun Berjalan
│   └─ Rekap Tahun Sebelumnya
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
| 2 | Akses Cepat | 3 kartu: **SPMB**, **PMM**, **E-Rapor SD** (masing-masing bertaut) | 3 kolom |
| 2b | Layanan | 4 kartu: **Dapodik**, **SPMB Online**, **E-Rapor SD**, **PMM** | 4 kolom |
| 3 | Sambutan | Foto kepala sekolah + teks sambutan + nama & NIP | 2 kolom (gambar kiri) |
| 4 | Statistik | 4 kotak angka: Peserta Didik (392), Guru & Pegawai (23), Rombel (14), Tingkat Kelas (6) | 4 kolom |
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
3. **Struktur Organisasi**: Canva **tidak bisa** disematkan. Buat tombol
   **Buka Bagan Struktur (Canva)** → tempel `https://canva.link/0srchjtd0mdni95`.
   Bila ingin tampil langsung di halaman, ekspor bagan Canva ke PNG lalu
   **Sisipkan → Gambar**.
4. **Data Siswa**: **Sisipkan → Spreadsheet** → tempel
   `https://docs.google.com/spreadsheets/d/1kRRy8URTSJl-FaaKpCGREc0U3v5LH_nqnNqkdI_prdM/edit`
   → pilih sheet **JUMLAH SISWA**. Angka ringkas: 392 siswa (206 laki-laki, 186 perempuan), 14 rombel.
5. **Fasilitas**: bagian 3 kolom × 2 baris, tiap kolom: ikon/emoji + judul + 1 kalimat.
6. **Prestasi & Ekstrakurikuler**: **Sisipkan → Tabel** (Kegiatan, Bidang, Keterangan)
   atau tautkan ke halaman **Galeri** untuk video kegiatan.

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

Halaman ini **hanya menampilkan rekap bulanan** — tidak ada formulir, dan **tidak
menampilkan jam masuk/pulang**. Hanya jumlah: Hadir, Izin, Sakit, Cuti, Tanpa Keterangan.

1. **Rekap Tahun Berjalan**
   - **Sisipkan → Spreadsheet** → pilih spreadsheet presensi → sheet rekap tahun ini.
   - Tambahkan teks pengantar: *“Rekap jumlah kehadiran guru dan tenaga kependidikan.”*
2. **Rekap Tahun Sebelumnya**
   - Ulangi langkah di atas dengan sheet arsip tahun lalu (sebagai pembanding).
3. **Keterangan kolom** (kotak teks 3 kolom): arti Hadir, Izin & Sakit, Tanpa Keterangan.
4. **Jangan** menautkan situs absensi lama, PDF lama, atau formulir apa pun.

**Penting:** spreadsheet rekap harus dibagikan **Siapa saja yang memiliki link (Lihat)**
atau dipublikasikan (**File → Bagikan → Publikasikan ke web**). Jangan beri akses edit.

> Absensi **tidak** ditampilkan di “Akses Cepat” maupun di bagian “Layanan”.
> Halaman ini hanya bisa dibuka dari menu navigasi.

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

**G. Foto/video kegiatan dari Google Drive**
```html
<iframe src="https://drive.google.com/file/d/GANTI_ID_FILE/preview"
        width="100%" height="640" frameborder="0" allow="autoplay"></iframe>
```
Untuk **foto**, cukup tempel tautan Drive pada **Sisipkan → Gambar → Berdasarkan URL**
(pola `https://drive.google.com/file/d/ID/view`), atau unggah langsung file fotonya.

**H. Sematan seluruh halaman website (opsional)**
Bila ingin menampilkan situs HTML ini di dalam Google Sites, gunakan
**Sisipkan → Sematkan → Kode sematan** dengan `<iframe>` ke URL GitHub Pages.
Google Sites sendiri **tidak bisa** disematkan, tetapi situs HTML statis bisa.

---

## 10. Menyiapkan spreadsheet rekap absensi

Karena halaman absensi **tidak memakai formulir**, rekap cukup disusun di satu spreadsheet.

1. Buat spreadsheet **“Absensi SDN 22 Pontianak Barat”** (akun sekolah).
2. Sheet **Absen Harian** (diisi manual atau impor dari mesin absen), kolom:
   `Tanggal · Nama · Jabatan · Status` (Hadir/Izin/Sakit/Cuti/Dinas Luar/Tanpa Keterangan).
3. Sheet **Rekap 2026** dan **Rekap 2025**, kolom:
   `Nama · Jabatan · Hadir · Izin · Sakit · Cuti · Tanpa Keterangan · % Kehadiran`.
4. **Jangan** menambahkan kolom jam masuk/pulang pada sheet rekap — halaman hanya menampilkan jumlah.
5. Bagikan: **File → Bagikan → Publikasikan ke web → HTML** (atau “Siapa saja yang memiliki link · Lihat”).

---

## 11. Rekap otomatis di Google Sheets

Anggap sheet harian bernama `Absen Harian`, kolom: `A` Tanggal, `B` Nama, `D` Status.

Buat sheet **Rekap 2026**, lalu:

```
A2: Nama guru (daftar nama)
B2: =COUNTIFS('Absen Harian'!$B:$B;$A2;'Absen Harian'!$D:$D;"Hadir";TEXT('Absen Harian'!$A:$A;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
C2: =COUNTIFS('Absen Harian'!$B:$B;$A2;'Absen Harian'!$D:$D;"Izin";TEXT('Absen Harian'!$A:$A;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
D2: =COUNTIFS('Absen Harian'!$B:$B;$A2;'Absen Harian'!$D:$D;"Sakit";TEXT('Absen Harian'!$A:$A;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
E2: =COUNTIFS('Absen Harian'!$B:$B;$A2;'Absen Harian'!$D:$D;"Cuti";TEXT('Absen Harian'!$A:$A;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
F2: =COUNTIFS('Absen Harian'!$B:$B;$A2;'Absen Harian'!$D:$D;"Tanpa Keterangan";TEXT('Absen Harian'!$A:$A;"YYYY-MM");TEXT(TODAY();"YYYY-MM"))
G2: =IFERROR(B2/(B2+C2+D2+E2+F2);0)      ← format sebagai persen
```

Tarik rumus ke bawah, lalu **Publikasikan ke web** sheet `Rekap 2026` dan sematkan
ke halaman **Absensi → Rekap Tahun Berjalan** (kode E di bagian 9).
Untuk tahun sebelumnya, duplikat sheet dan ganti `TEXT(TODAY();"YYYY-MM")` menjadi `"2025-*"`.

> Jika regional sheet memakai koma, ganti `;` menjadi `,` pada rumus.

---

## 12. Aset resmi terbaru (pakai ini, jangan tautkan yang lama)

| Aset | URL |
|---|---|
| SPMB Kota Pontianak (pendaftaran) | `https://spmb.pontianak.go.id/` |
| Aktivasi Token SPMB siswa | `https://siswa.spmb.id/pontianak/login` |
| E-Rapor SD (tautan resmi, berubah-ubah) | `https://ditsd.kemendikdasmen.go.id/s/erapor2025` |
| PMM | `https://guru.kemendikdasmen.go.id/` |
| Dapodik | `https://dapo.kemendikdasmen.go.id/` |
| Kanal YouTube sekolah | `https://www.youtube.com/@sdn22pontianakbarat` |
| Instagram | `https://www.instagram.com/sdn22ponbar` |
| Facebook (akun) | `https://www.facebook.com/sdn22ponbar/` |
| Facebook (halaman) | `https://www.facebook.com/sdn22pontianakbarat/` |
| TikTok | `https://www.tiktok.com/@esdeenduaduaponba` |
| Logo sekolah (Drive) | `https://drive.google.com/file/d/1qIecAxdkPr3Aswl0EKl4QcpUTXXmB_S0/view` |
| Spreadsheet jumlah siswa (sheet `JUMLAH SISWA`) | `https://docs.google.com/spreadsheets/d/1kRRy8URTSJl-FaaKpCGREc0U3v5LH_nqnNqkdI_prdM/edit` |
| Spreadsheet data personil | `https://docs.google.com/spreadsheets/d/1qW-ASxa-IEPlwGSJvzLXtiWzxUD-Q6RxTXMAggdqPrQ/edit` |
| Bagan struktur organisasi (Canva) | `https://canva.link/0srchjtd0mdni95` |
| Kalender Pendidikan (Apps Script) | `https://script.google.com/macros/s/AKfycbw6eN0bod7b-YxijMDdnsUDeDPeT_GZJxMUirdANQUEfKbd_uP_eeFpDL7o_UZJnK8o/exec` |
| Kalender Sekolah (Apps Script) | `https://script.google.com/macros/s/AKfycbyWmZ3a3KKgdbVXB1X582k3jYhOC5c0mElSMKKn_9oRzSossNw8DM-8_mQLLtd82vQs/exec` |

**Tautan lama yang sudah dihapus** (jangan dipakai lagi): keempat situs Google Sites lama
dan tiga PDF rekap absensi lama. Semua datanya sudah digantikan halaman rekap baru.

---

## 13. Publikasi

1. **Publikasikan** → **Siapa yang dapat melihat** → **Siapa saja**.
   Jika opsi ini terkunci oleh admin, gunakan **Siapa saja di [domain sekolah]**
   atau minta admin mengizinkan publikasi.
2. Klik **Publikasikan** → konfirmasi.
3. Uji di **jendela privat/incognito** (tanpa login): semua halaman, semua embed,
   rekap absensi tampil, video bisa diputar.
4. Salin tautan pendek (bit.ly) untuk dibagikan ke orang tua siswa.
5. Setelah situs baru stabil ±1 bulan:
   - Situs lama 1: ubah beranda menjadi "Situs telah pindah ke [tautan baru]".
   - Situs lama 2, 3, 4: arsipkan. Jangan menautkan kembali tautan lama dari situs baru.
6. Unduh salinan arsip penting dari Drive ke perangkat sekolah sebagai cadangan.

---

## 14. Checklist akhir

- [ ] Semua 5 halaman utama + sub-halaman sudah dibuat & urut di menu
- [ ] Warna `#C1121F` + font Plus Jakarta Sans terpasang
- [ ] Banner memakai foto asli sekolah (bukan ilustrasi)
- [ ] Nama, NIP, foto kepala sekolah & guru sudah benar
- [ ] Peta menunjuk lokasi benar (Jl. H. Rais A. Rahman, Gg. Selamat III, Sungai Jawi Dalam)
- [ ] Rekap absensi tampil (tahun berjalan & tahun sebelumnya), tanpa jam masuk/pulang
- [ ] Absensi **tidak** muncul di “Akses Cepat” maupun “Layanan”
- [ ] Video YouTube bisa diputar & foto galeri tampil
- [ ] Tautan SPMB / Token / E-Rapor / PMM / Dapodik tidak ada yang kosong
- [ ] Tidak ada tautan situs lama/PDF lama yang masih aktif
- [ ] Diuji di HP (menu & tabel tidak terpotong)
- [ ] Tautan situs baru dibagikan; situs lama diberi pengumuman pindah

---

### Catatan

Template HTML di folder ini (`sdn22-website/`) tetap bisa dipakai sebagai **acuan visual**
saat menyusun Google Sites: buka `index.html` di browser di sebelah tab Google Sites,
lalu tiru susunan bagian, teks, dan warnanya.
