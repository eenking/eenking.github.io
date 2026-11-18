# Website SDN 22 Pontianak Barat — Template Gabungan

Satu project website berisi gabungan konten dari 4 Google Sites lama, dengan desain
modern bertema **putih–merah** untuk Sekolah Dasar Negeri.

| Situs lama | Digabung menjadi |
|---|---|
| `sdn-22-pontianak-barat` (Beranda, Profil, Galeri, SPMB) | `index.html`, `profil.html`, `galeri.html` |
| `absensisdn22pb` (absen masuk/pulang, rekap, PDF) | `absensi.html` |
| `sdn22pontianakbarat` (Login, Visi Misi, Struktur, Prestasi, Video, Kantin) | `profil.html`, `absensi.html`, `index.html` |
| `gurudanpegawai` (Kepala Sekolah, Guru, Pegawai, Grafik) | `guru-pegawai.html` |

---

## 1. Isi folder

```
sdn22-website/
├─ index.html            Beranda (hero, sambutan, agenda, galeri, video, peta)
├─ profil.html           Profil, visi & misi, struktur organisasi, fasilitas, prestasi
├─ guru-pegawai.html     Tab: Kepala Sekolah / Guru / Pegawai / Data & Grafik
├─ absensi.html          Form absen, rekap bulanan, arsip laporan
├─ galeri.html           Album foto (lightbox) + video + dokumen Drive
├─ PANDUAN-GOOGLE-SITES.md  Panduan klik-demi-klik membangun ulang di Google Sites
└─ assets/
   ├─ css/style.css      Semua tampilan (warna, tipografi, responsif)
   ├─ js/app.js          KONFIGURASI + interaksi (menu, tab, embed, lightbox)
   └─ img/*.svg          Gambar ilustrasi (ganti dengan foto asli)
```

Prinsipnya: **semua teks sekolah, link, dan URL embed diatur di satu tempat**
(`assets/js/app.js` → `SITE_CONFIG`). Halaman lain otomatis mengikuti.

---

## 2. Melihat hasilnya

Buka `index.html` langsung di browser (klik dua kali). Untuk hasil terbaik
(embed iframe kadang dibatasi saat dibuka sebagai `file://`), jalankan server lokal:

```bat
cd C:\Users\BOGEM\sdn22-website
python -m http.server 8787
```

Lalu buka <http://localhost:8787/index.html>.

---

## 3. Yang perlu diisi sebelum dipakai

Buka `assets/js/app.js`, isi bagian `SITE_CONFIG`:

| Bagian | Isi |
|---|---|
| `sekolah.alamat` | Sudah diisi dari Google Maps: **Gg. Selamat 3 No. 46, Sungai Jawi Dalam, Pontianak Barat 78244** — mohon dicek |
| `sekolah.telepon`, `whatsapp`, `email` | Nomor & email resmi sekolah (`whatsapp` format `62812...`) |
| `sekolah.npsn`, `kepalaSekolah`, `editor` | Data resmi |
| `links.erapor`, `links.pengumuman`, `links.drive`, `links.instagram`, dll. | URL asli layanan sekolah |
| `embeds.*` | URL sematan (lihat bagian 4) |

Data contoh (jumlah siswa 420, guru 28, prestasi, dst.) ada di file HTML masing-masing —
ganti angka pada atribut `data-count="..."` dan isi tabel prestasi/rekap.

---

## 4. Mengambil URL embed

| Kunci di `SITE_CONFIG.embeds` | Sumber | Cara mengambil |
|---|---|---|
| `maps` | Google Maps | Cari lokasi → **Bagikan** → **Sematkan peta** → salin isi `src="..."` |
| `youtubeProfil`, `youtubeKegiatan` | YouTube | **Bagikan** → **Sematkan** → salin `https://www.youtube.com/embed/ID` |
| `formAbsen` | Google Forms | **Kirim** → ikon `< >` → salin URL, tambahkan `?embedded=true` |
| `rekapAbsen`, `grafikGuru` | Google Sheets | **File** → **Bagikan** → **Publikasikan ke web** → pakai URL `pubhtml` |
| `kalender` | Google Calendar | **Setelan kalender** → **Integrasikan kalender** → salin `src="..."` |
| `dokumentasi` | Google Drive | File/folder → **Bagikan** → **Sematkan** (folder harus "Siapa saja yang punya link") |

Embed dimuat **otomatis saat hampir terlihat** (hemat kuota, halaman tetap cepat).
Kalau suatu kunci dibiarkan kosong, kotaknya menampilkan panduan, bukan kotak kosong.

> **Penting soal absensi:** jangan bagikan spreadsheet absensi dengan mode
> "siapa saja bisa mengedit". Rekap untuk publik cukup versi `pubhtml`
> (hanya tampil), sedangkan form absensi tetap butuh login akun sekolah.

---

## 5. Menggabungkan 4 Google Sites — langkah nyata

> **Pengguna id.belajar (Google Sites gratis):** ikuti panduan klik-demi-klik di
> **`PANDUAN-GOOGLE-SITES.md`** — sudah disesuaikan dengan batasan akun
> `admin.sd.belajar.id` (tanpa domain kustom, tanpa CSS/JS, batasan form).

Google Sites **tidak menyediakan fitur merge/gabung project**, dan **tidak ada API**
untuk memindahkan halaman antar-situs. Jadi penggabungan dilakukan dengan salah satu
dari dua cara berikut.

### Cara A (disarankan) — pakai website ini sebagai situs utama

1. **Isi konfigurasi** seperti bagian 3 dan 4.
2. **Hosting gratis** (pilih salah satu):
   - **Netlify Drop**: buka <https://app.netlify.com/drop>, tarik folder `sdn22-website` → langsung dapat URL.
   - **GitHub Pages**: buat repo → unggah semua file → Settings → Pages → Deploy from branch.
   - **Cloudflare Pages**: hubungkan repo/folder yang sama.
3. **Domain**: bisa tetap memakai subdomain gratis, atau pasang domain sekolah
   (mis. `sdn22pontianakbarat.sch.id`) lewat pengaturan DNS di penyedia hosting.
4. **Situs lama**: jangan dihapus dulu. Ubah menu situs lama menjadi tautan ke situs
   baru ("Situs ini telah pindah ke ..."), atau arsipkan setelah 1–2 bulan.
5. Semua konten lama yang berupa teks/foto **disalin** ke halaman yang sesuai
   (lihat tabel di bagian atas). Form absensi dan rekap otomatis ikut karena
   ditampilkan lewat embed — datanya tidak berubah.

### Cara B — tetap di Google Sites (satu project baru)

1. Google Sites → **Kosong** → beri nama "SDN 22 Pontianak Barat".
2. Buat halaman: **Beranda, Profil, Guru & Pegawai, Absensi, Galeri**.
3. Untuk tiap halaman, **salin-tempel** isi dari situs lama (buka dua tab berdampingan;
   blok teks → Ctrl+C → Ctrl+V di halaman baru). Gambar diunduh dari situs lama lalu
   diunggah ulang.
4. Samakan tema: **Tema** → warna khusus `#C1121F`, font *Plus Jakarta Sans* /
   *Inter*, sudut membulat, header putih.
5. Tambahkan embed: **Sisipkan** → **Sematkan** → **Kode sematan**
   (untuk Maps/YouTube/Forms/Sheets/Calendar, salin kode `<iframe>` dari sumbernya).
6. **Publikasikan** → atur "Siapa yang dapat melihat" → *Siapa saja*.

**Batasan yang perlu diketahui:**
- Google Sites **tidak bisa** di-embed di dalam Google Sites lain (diblokir
  `X-Frame-Options`), jadi keempat situs lama tidak bisa sekadar ditumpuk dengan iframe.
  Yang bisa ditumpuk adalah konten *di dalamnya* (Forms, Sheets, Maps, YouTube, Drive).
- Menu, desain, dan warna tidak bisa diimpor otomatis — harus diatur manual.

---

## 6. Catatan desain

- Warna: merah `#C1121F` / `#8B0F1A`, putih `#FFFFFF`, latar lembut `#FFF8F8`.
- Font: *Plus Jakarta Sans* (dengan fallback sistem jika offline).
- Komponen: navbar sticky + menu mobile, hero, kartu layanan, statistik berjalan,
  tab, akordeon, galeri + lightbox, embed lazy-load, tombol ke atas, footer 4 kolom.
- Sudah responsif (≤1000px, ≤860px, ≤560px) dan ramah cetak (`@media print`).
- Gambar di `assets/img/*.svg` hanya ilustrasi. Ganti dengan foto asli:
  simpan `assets/img/upacara.jpg`, lalu ubah `src` dan `data-lightbox` di HTML.

---

## 7. Checklist sebelum rilis

- [ ] Alamat, telepon, email, NPSN, nama kepala sekolah sudah benar
- [ ] Angka statistik & tabel prestasi sesuai data terbaru
- [ ] Foto kepala sekolah, guru, dan galeri sudah foto asli (bukan ilustrasi)
- [ ] URL embed sudah diisi dan diuji (peta, video, form, rekap, kalender)
- [ ] Link SPMB / E-Rapor / PMM tidak ada yang `href="#"` (cek di konsol browser)
- [ ] Spreadsheet absensi tidak dapat diedit publik
- [ ] Diuji di HP (menu hamburger, tabel bisa digeser)
