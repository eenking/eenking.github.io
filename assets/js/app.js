/* =========================================================
   SDN 22 PONTIANAK BARAT — Konfigurasi & Interaksi
   ---------------------------------------------------------
   SEMUA DATA SEKOLAH, LINK, EMBED, DAN DAFTAR GURU DIATUR
   DI SINI SAJA. Halaman lain otomatis mengikuti.
   ========================================================= */

const SITE_CONFIG = {
  sekolah: {
    nama: "SD Negeri 22 Pontianak Barat",
    namaPendek: "SDN 22 Pontianak Barat",
    motto: "Membangun Generasi Cerdas, Berkarakter, dan Berbudaya",
    alamat: "Jl. H. Rais A. Rahman, Gg. Selamat III, Sungai Jawi Dalam, Kec. Pontianak Barat, Kota Pontianak, Kalimantan Barat 78244",
    telepon: "0812-5414-9295",
    whatsapp: "6281254149295",
    email: "sdn22pontianakbarat@gmail.com",
    npsn: "30105373",
    nss: "101136004022",
    akreditasi: "A",
    jamLayanan: "Senin – Jumat, 07.00 – 15.30 WIB · Sabtu & Minggu tutup",
    kepalaSekolah: "Amalia Lamuri, S.Pd.",
    editor: "Rendra Setiadi, S.Kom — TU & Operator Sekolah",
    tahunPelajaran: "2026/2027",
    logo: "https://lh3.googleusercontent.com/d/1qIecAxdkPr3Aswl0EKl4QcpUTXXmB_S0=w512",
    fotoKepsek: "https://lh3.googleusercontent.com/d/1YVoHog2kG9OpDnzcEwGal63nplIoQcbP=w600",
  },

  statistik: { siswa: 392, laki: 206, perempuan: 186, rombel: 14, personil: 23, tingkat: 6, pns: 8, pppk: 11, honor: 4 },

  /* ------------------------------------------------------------------
     REKAP ABSENSI — jumlah kehadiran per bulan (tanpa jam masuk/pulang).
     Sumber: rekap fingerprint SDN 22 Pontianak Barat (folder Drive
     "ABSEN SDN 22" → REKAP ABSENSI). Perbarui angka di sini setiap bulan.
     hari    = jumlah hari tercatat
     pegawai = jumlah pegawai yang memiliki catatan kehadiran
     hadir   = total kehadiran (hari-orang)
     ------------------------------------------------------------------ */
  rekap: {
    sumber: "Rekap fingerprint SDN 22 Pontianak Barat",
    diperbarui: "November 2026",
    2026: [
      { bulan: "Januari", hari: 20, pegawai: 24, hadir: 480 },
      { bulan: "Februari", hari: 18, pegawai: 23, hadir: 414 },
      { bulan: "Maret", hari: 17, pegawai: 22, hadir: 374 },
      { bulan: "April", hari: 21, pegawai: 22, hadir: 462 },
      { bulan: "Mei", hari: 16, pegawai: 23, hadir: 365 },
      { bulan: "Juni", hari: 20, pegawai: 23, hadir: 426 },
      { bulan: "Juli", hari: 23, pegawai: 23, hadir: 500 },
      { bulan: "Agustus", hari: 19, pegawai: 23, hadir: 436 },
      { bulan: "September", hari: 22, pegawai: 23, hadir: 506 },
      { bulan: "Oktober", hari: 22, pegawai: 22, hadir: 484 },
    ],
    2025: [
      { bulan: "September", hari: 21, pegawai: 22, hadir: 462 },
      { bulan: "Oktober", hari: 23, pegawai: 23, hadir: 520 },
      { bulan: "November", hari: 20, pegawai: 23, hadir: 460 },
      { bulan: "Desember", hari: 21, pegawai: 23, hadir: 380 },
    ],
  },

  /* ------------------------------------------------------------------
     EMBED — tempel URL embed di sini. Kosongkan bila belum ada.
     • Kalender Apps Script : tempel URL /exec (sudah terpasang)
     • Google Maps   : Bagikan → Sematkan peta → salin isi src="..."
     • YouTube       : https://www.youtube.com/embed/ID_VIDEO
     • Google Forms  : Kirim → ikon < > → URL + "?embedded=true"
     • Google Sheets : File → Bagikan → Publikasikan ke web → pubhtml
     • Google Drive  : Sematkan file → salin src="..."
     ------------------------------------------------------------------ */
  embeds: {
    maps: "https://www.google.com/maps?q=SDN%2022%20Pontianak%20Barat&output=embed",
    kalenderPendidikan: "https://script.google.com/macros/s/AKfycbw6eN0bod7b-YxijMDdnsUDeDPeT_GZJxMUirdANQUEfKbd_uP_eeFpDL7o_UZJnK8o/exec",
    kalenderSekolah: "https://script.google.com/macros/s/AKfycbyWmZ3a3KKgdbVXB1X582k3jYhOC5c0mElSMKKn_9oRzSossNw8DM-8_mQLLtd82vQs/exec",
  },

  /* ------------------------------------------------------------------
     TELEGRAM — channel dokumentasi kegiatan.
     Galeri foto diperbarui otomatis dari channel oleh
     scripts/fetch-telegram.py → assets/data/telegram.js.
     ------------------------------------------------------------------ */
  telegram: {
    channel: "sdn22pontianakbarat",
    judul: "SDN 22 Pontianak Barat",
  },

  /* ------------------------------------------------------------------
     LINK — tombol, menu layanan, dan media sosial
     ------------------------------------------------------------------ */
  links: {
    spmb: "https://spmb.pontianak.go.id/",
    spmbToken: "https://siswa.spmb.id/pontianak/login",
    erapor: "https://ditsd.kemendikdasmen.go.id/s/erapor2025",
    pmm: "https://guru.kemendikdasmen.go.id/",
    dapodik: "https://dapo.kemendikdasmen.go.id/",
    canvaStruktur: "https://canva.link/0srchjtd0mdni95",
    kalenderPendidikan: "https://script.google.com/macros/s/AKfycbw6eN0bod7b-YxijMDdnsUDeDPeT_GZJxMUirdANQUEfKbd_uP_eeFpDL7o_UZJnK8o/exec",
    youtube: "https://www.youtube.com/@sdn22pontianakbarat",
    instagram: "https://www.instagram.com/sdn22ponbar",
    facebook: "https://www.facebook.com/sdn22ponbar/",
    facebookPage: "https://www.facebook.com/sdn22pontianakbarat/",
    tiktok: "https://www.tiktok.com/@esdeenduaduaponba",
    telegram: "https://t.me/sdn22pontianakbarat",
  },

  /* ------------------------------------------------------------------
     GALERI — cukup tempel tautan, foto & video langsung tampil.
     jenis: "video" → isi ID YouTube (contoh: "evGm9PC0E18")
                      atau tautan YouTube/Drive lengkap
            "foto"  → tautan Drive (…/file/d/ID/view), URL gambar,
                      atau path lokal (assets/img/foto.jpg)
     judul & ket opsional.
     ------------------------------------------------------------------ */
  media: [
    { jenis: "video", src: "evGm9PC0E18", judul: "Menyambut Isra Mi'raj", ket: "Kegiatan keagamaan" },
    { jenis: "video", src: "u_TewnKguAw", judul: "Persari Pramuka", ket: "Ekstrakurikuler" },
    { jenis: "video", src: "R0fTYYP_yR0", judul: "Pembukaan Kegiatan P5", ket: "Projek Penguatan Profil Pelajar" },
    { jenis: "video", src: "6FO_z-O9LhM", judul: "Prestasi Karate Siswa", ket: "Prestasi non-akademik" },
    { jenis: "video", src: "Y0VJrWeMxaM", judul: "Latihan Pencak Silat Wekasan22", ket: "Ekstrakurikuler" },
    { jenis: "foto", src: "assets/img/gedung.svg", judul: "Gedung & Halaman Sekolah" },
    { jenis: "foto", src: "assets/img/upacara.svg", judul: "Upacara Bendera" },
    { jenis: "foto", src: "assets/img/belajar.svg", judul: "Pembelajaran di Kelas" },
    { jenis: "foto", src: "assets/img/prestasi.svg", judul: "Prestasi Siswa" },
    { jenis: "foto", src: "assets/img/ekskul.svg", judul: "Ekstrakurikuler" },
    { jenis: "foto", src: "assets/img/kantin.svg", judul: "Kantin Sehat" },
  ],

  /* ------------------------------------------------------------------
     DAFTAR PERSONIL (sumber: spreadsheet Data Personil sekolah)
     kategori: "kepsek" | "guru" | "pegawai"
     ------------------------------------------------------------------ */
  staff: [
    { nama: "AMALIA LAMURI, S.Pd", jk: "P", nip: "197910242009022001", pend: "S.1 PGSD", status: "PNS", tugas: "Kepala Sekolah", kategori: "kepsek" },
    { nama: "SRI SUYATI, S.Pd", jk: "P", nip: "197903022009022002", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "JULIANI, S.Pd", jk: "P", nip: "198607122010012001", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "NOVITA AYU WARDANI, S.Pd", jk: "P", nip: "199406252019032007", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas · GPK", kategori: "guru" },
    { nama: "IRMA CHABRINA YANH PURBOSARI, S.Pd", jk: "P", nip: "199001192020122011", pend: "S.1 PJOK", status: "PNS", tugas: "Guru Mapel · Wali Kelas", kategori: "guru" },
    { nama: "ARTIYA NENGSIH, S.Pd", jk: "P", nip: "199010252020122010", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "NAYANK RAGILIA, M.Pd", jk: "P", nip: "199301302020122009", pend: "S.2 PGSD", status: "PNS", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "SYUKRON MAKMUN, S.Pd", jk: "L", nip: "199311202020121006", pend: "S.1 PGSD", status: "PNS", tugas: "Wali Kelas · Bendahara BOSP", kategori: "guru" },
    { nama: "EARLYA REZKIANA, S.Pd", jk: "P", nip: "197310102023212007", pend: "S.1 PGSD", status: "PPPK", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "TRI RAHAYU FITRIASARI, S.Pd", jk: "P", nip: "198905052023212034", pend: "S.1 PJOK", status: "PPPK", tugas: "Guru Mapel PJOK", kategori: "guru" },
    { nama: "NADIA HIDAYATI, S.Pd", jk: "P", nip: "199301122023212027", pend: "S.1 PGSD", status: "PPPK", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "ELLA KURNIAWATI, S.Pd", jk: "P", nip: "199502222023212031", pend: "S.1 PGSD", status: "PPPK", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "NURUL FAHMI, S.Pd", jk: "P", nip: "199512112023212019", pend: "S.1 Bahasa Indonesia", status: "PPPK", tugas: "Guru Mapel", kategori: "guru" },
    { nama: "ERAWATI RIZKY, S.Pd", jk: "P", nip: "199408212023212020", pend: "S.1 PGSD", status: "PPPK", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "SAERANI, S.Pd", jk: "L", nip: "199207072024211008", pend: "S.1 PAI", status: "PPPK", tugas: "Guru PAI & BP · Koordinator Keagamaan", kategori: "guru" },
    { nama: "JUNI ELSA, S.Pd", jk: "P", nip: "198006252024212002", pend: "S.1 PGSD", status: "PPPK", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "SAPARINA RAHMA, S.Pd., Gr", jk: "P", nip: "200105052025212010", pend: "S.1 Pendidikan Kimia", status: "PPPK", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "ANDI MARIFA", jk: "P", nip: "198005152025212005", pend: "SMA IPS", status: "PPPK", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
    { nama: "AYU SUFA ARFIARDJA", jk: "P", nip: "199610032025212002", pend: "SMK Akuntansi", status: "PPPK", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
    { nama: "RENDRA SETIADI, S.Kom", jk: "L", nip: "", pend: "S.1 Sistem Informasi", status: "Honor", tugas: "Tata Usaha & Operator Sekolah", kategori: "pegawai" },
    { nama: "DIAN SAPUTRA, A.Ma", jk: "L", nip: "", pend: "D.2 PJOK", status: "Honor", tugas: "Guru PJOK", kategori: "guru" },
    { nama: "HERI", jk: "L", nip: "", pend: "SMA", status: "Honor", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
    { nama: "HERI GUAN", jk: "L", nip: "", pend: "SMA", status: "Honor", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
  ],
};

/* =========================================================
   FOTO PERSONIL (ID file Google Drive, sumber: kolom "URL Pas Foto")
   ---------------------------------------------------------
   Kosongkan / hapus entri bila foto belum tersedia — kartu akan
   otomatis menampilkan inisial nama.
   ========================================================= */
const STAFF_FOTO = {
  "AMALIA LAMURI, S.Pd": "1YVoHog2kG9OpDnzcEwGal63nplIoQcbP",
  "SRI SUYATI, S.Pd": "1TNYTmhktKtZAkk2wSMj5O86tuy1_dqJw",
  "JULIANI, S.Pd": "1gHy3HxsHVdeTfxSPYuzOhHG2PBFQknuE",
  "NOVITA AYU WARDANI, S.Pd": "1u22eY7TDmnoK-mQ1oj4Fk1u-_1onrWWZ",
  "IRMA CHABRINA YANH PURBOSARI, S.Pd": "1c3x2JjRsu8tiz1eWc7Paoy4vcJez6lMV",
  "ARTIYA NENGSIH, S.Pd": "1w0ebu3HyKLWJE_F8zpCs2K3GM5jWBqCe",
  "NAYANK RAGILIA, M.Pd": "1zxZTBNMbXaMoU09cLiEUws8ejZK5wnqp",
  "SYUKRON MAKMUN, S.Pd": "1jjaYW-oMpiDoxWcMTBcL_61-e6v-qnu0",
  "EARLYA REZKIANA, S.Pd": "17e0Jwzur5RVNhGJ3lE9pVeu6_9Mlh-KJ",
  "TRI RAHAYU FITRIASARI, S.Pd": "14ZL0XpSir1sAw6neRFeQ56qQb5eGJTR1",
  "NADIA HIDAYATI, S.Pd": "1Ni501p-xx2rrmUZ2-34X_5rahYYhk36K",
  "ELLA KURNIAWATI, S.Pd": "1MM-u-eZ_EegMOWy2v9EPWszh8Uji9p79",
  "NURUL FAHMI, S.Pd": "1yUcZ2dcDt9URhGo9GFqdx7jwhetJrSX8",
  "ERAWATI RIZKY, S.Pd": "1jDyjTZM_CQzxrWvruTdjFcY0Myd7VFmE",
  "SAERANI, S.Pd": "1xI9wuRec3hMUjbyL5NufXEJS3DC4lnla",
  "JUNI ELSA, S.Pd": "124j8jg8TuQelL_uYOfxMmWcp_svwGTQL",
  "SAPARINA RAHMA, S.Pd., Gr": "1jRdK7hviaq0fbbtwlNAEyVICI2djsAfQ",
  "ANDI MARIFA": "1ko7qHSJ3jOPdSlTePI7UBzUPYJNIZOA7",
  "AYU SUFA ARFIARDJA": "1uuhufZ688MZvk6bHGcUZ-ovK25nUgrne",
  "RENDRA SETIADI, S.Kom": "19uQJ5UjT-__sUqoeUD4y-1Ym1ujcLpdi",
  "DIAN SAPUTRA, A.Ma": "1hqtAD1drodzHSu9jgh_zSyYoSaXWdjeb",
  "HERI": "1wSl7qvweP1_-eJ67vGMQOPuuB5LZ5WLC",
  "HERI GUAN": "1nmBXaIaNQomsoSk141KHjzfIhBOt3XtQ",
};

const staffPhoto = (nama) => {
  const id = STAFF_FOTO[nama];
  return id ? `https://lh3.googleusercontent.com/d/${id}=w600` : "";
};

/* =========================================================
   Helper
   ========================================================= */
const cfgGet = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), SITE_CONFIG);

function youtubeId(src) {
  if (!src) return "";
  if (/^[\w-]{11}$/.test(src)) return src;
  const m = src.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : "";
}

function driveId(url) {
  const m = String(url).match(/(?:\/file\/d\/|\/d\/|id=)([\w-]{20,})/);
  return m ? m[1] : "";
}

function mediaThumb(item) {
  const yt = youtubeId(item.src);
  if (item.jenis === "video" && yt) return `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`;
  const d = driveId(item.src);
  if (d) return `https://lh3.googleusercontent.com/d/${d}=w1200`;
  return item.src;
}

function initials(name) {
  const clean = String(name).split(",")[0].trim().replace(/[^A-Za-z\s]/g, " ");
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0] || "?")[0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
}

/* =========================================================
   Terapkan konfigurasi ke halaman
   ========================================================= */
(function applyConfig() {
  document.querySelectorAll("[data-cfg]").forEach((el) => {
    const val = cfgGet(el.getAttribute("data-cfg"));
    if (val !== undefined && val !== "") el.textContent = val;
  });

  document.querySelectorAll("[data-img]").forEach((el) => {
    const val = cfgGet(el.getAttribute("data-img"));
    if (val) el.setAttribute("src", val);
  });

  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = SITE_CONFIG.links[el.getAttribute("data-link")];
    if (url) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    } else {
      el.setAttribute("href", "#");
      el.addEventListener("click", (e) => e.preventDefault());
    }
  });

  document.querySelectorAll("[data-count]").forEach((el) => {
    const key = el.getAttribute("data-count");
    if (SITE_CONFIG.statistik[key] !== undefined) el.setAttribute("data-count", SITE_CONFIG.statistik[key]);
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    const offset = Number(el.getAttribute("data-year-offset") || 0);
    el.textContent = new Date().getFullYear() + offset;
  });

  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", `https://wa.me/${SITE_CONFIG.sekolah.whatsapp}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
})();

/* =========================================================
   Kalender: skala otomatis agar tidak ada scroll horizontal
   ========================================================= */
var fitCalendarEmbed = function () {};
(function calendarFit() {
  const BASE_W = 640;
  const BASE_H = 760;

  const apply = () => {
    document.querySelectorAll(".embed--kalender").forEach((box) => {
      const inner = box.querySelector(".embed__inner");
      const iframe = inner && inner.querySelector("iframe");
      if (!inner || !iframe) return;

      const w = inner.clientWidth;
      if (w > 0 && w < BASE_W) {
        const s = w / BASE_W;
        iframe.style.width = BASE_W + "px";
        iframe.style.height = BASE_H + "px";
        iframe.style.transform = "scale(" + s + ")";
        iframe.style.transformOrigin = "top left";
        inner.style.height = Math.round(BASE_H * s) + "px";
        inner.style.overflow = "hidden";
      } else {
        iframe.style.width = "";
        iframe.style.height = "";
        iframe.style.transform = "";
        iframe.style.transformOrigin = "";
        inner.style.height = "";
        inner.style.overflow = "";
      }
    });
  };

  fitCalendarEmbed = apply;
  window.addEventListener("resize", apply);
})();

/* =========================================================
   Embed: muat otomatis saat mendekati layar
   ========================================================= */
(function embedLoader() {
  document.querySelectorAll("[data-embed]").forEach((box) => {
    const key = box.getAttribute("data-embed");
    const url = SITE_CONFIG.embeds[key];
    const ph = box.querySelector(".embed__placeholder");

    if (!url) {
      const btn = ph && ph.querySelector("[data-load]");
      if (btn) btn.remove();
      if (box.hasAttribute("data-custom-note")) return;
      if (ph) {
        ph.querySelector("h4").textContent = "Embed belum diatur";
        ph.querySelector("p").textContent =
          "Buka assets/js/app.js lalu isi SITE_CONFIG.embeds." + key + " dengan URL embed.";
      }
      return;
    }

    const load = () => {
      if (box.classList.contains("is-loaded")) return;
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.title = box.getAttribute("data-title") || "Konten tersemat";
      iframe.loading = "lazy";
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "clipboard-write; encrypted-media; picture-in-picture");
      box.querySelector(".embed__inner").appendChild(iframe);
      box.classList.add("is-loaded");
      fitCalendarEmbed();
      iframe.addEventListener("load", fitCalendarEmbed);
    };

    const btn = box.querySelector("[data-load]");
    if (btn) btn.addEventListener("click", load);

    const nearViewport = () => {
      const r = box.getBoundingClientRect();
      return r.top < window.innerHeight + 400 && r.bottom > -400;
    };
    if (nearViewport()) load();
    window.addEventListener("load", () => nearViewport() && load());
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && nearViewport()) load();
    });

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              load();
              io.disconnect();
            }
          });
        },
        { rootMargin: "400px" }
      );
      io.observe(box);
    } else {
      load();
    }
  });
})();

/* =========================================================
   Galeri: render dari SITE_CONFIG.media
   ========================================================= */
(function renderGallery() {
  document.querySelectorAll("[data-gallery]").forEach((wrap) => {
    const limit = wrap.getAttribute("data-gallery");
    const items = limit === "all" ? SITE_CONFIG.media : SITE_CONFIG.media.slice(0, Number(limit) || 6);

    wrap.innerHTML = items
      .map((item) => {
        const thumb = mediaThumb(item);
        const isVideo = item.jenis === "video";
        return `<button class="gallery__item" type="button"
            data-media="${isVideo ? "video" : "foto"}"
            data-src="${String(item.src).replace(/"/g, "&quot;")}"
            data-caption="${String(item.judul || "").replace(/"/g, "&quot;")}">
            <img src="${thumb}" alt="${String(item.judul || "Kegiatan").replace(/"/g, "&quot;")}" loading="lazy" />
            ${isVideo ? '<span class="gallery__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>' : ""}
            <span class="gallery__cap">${item.judul || ""}${item.ket ? `<em>${item.ket}</em>` : ""}</span>
          </button>`;
      })
      .join("");
  });
})();

/* =========================================================
   Telegram: tampilkan foto terbaru langsung dari channel
   (data diperbarui oleh scripts/fetch-telegram.py)
   ========================================================= */
(function renderTelegramGallery() {
  const wrap = document.querySelector("[data-telegram-gallery]");
  if (!wrap) return;

  const data = window.TELEGRAM_GALLERY;
  const note = document.querySelector("[data-telegram-updated]");
  const posts = (data && Array.isArray(data.posts)) ? data.posts : [];

  const tanggal = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  };

  if (!posts.length) {
    wrap.innerHTML = `<div class="card" style="grid-column:1/-1"><div class="card__body">
      <h3 style="font-size:1.05rem">Dokumentasi di Telegram</h3>
      <p class="small muted" style="margin-bottom:0">Foto kegiatan sekolah dapat dilihat langsung di channel
      Telegram <strong>@sdn22pontianakbarat</strong>.</p>
    </div></div>`;
    return;
  }

  const photos = [];
  posts.forEach((post) => {
    (post.photos || []).forEach((src) => {
      photos.push({ src, date: post.date, url: post.url });
    });
  });

  wrap.innerHTML = photos
    .map((photo, i) => {
      const src = String(photo.src).replace(/"/g, "&quot;");
      const caption = "Dokumentasi Kegiatan";
      const tanggalTeks = tanggal(photo.date);
      return `<button class="gallery__item" type="button"
          data-media="foto"
          data-src="${src}"
          data-caption="${caption} ${tanggalTeks}">
          <img src="${src}" alt="${caption} ${tanggalTeks}" loading="${i < 8 ? "eager" : "lazy"}" />
          <span class="gallery__cap">${caption}<em>${tanggalTeks}</em></span>
        </button>`;
    })
    .join("");

  if (note) {
    note.textContent = `Diperbarui otomatis dari Telegram · ${tanggal(data.updated) || "baru saja"}`;
  }
})();

/* =========================================================
   Daftar personil: render dari SITE_CONFIG.staff
   ========================================================= */
(function renderStaff() {
  const counts = { kepsek: 0, guru: 0, pegawai: 0 };
  SITE_CONFIG.staff.forEach((s) => { counts[s.kategori] = (counts[s.kategori] || 0) + 1; });

  document.querySelectorAll("[data-staff-count]").forEach((el) => {
    const k = el.getAttribute("data-staff-count");
    if (counts[k] !== undefined) el.textContent = counts[k];
  });

  document.querySelectorAll("[data-staff-panel]").forEach((panel) => {
    const kat = panel.getAttribute("data-staff-panel");
    const list = SITE_CONFIG.staff.filter((s) => s.kategori === kat);
    panel.innerHTML = list
      .map(
        (s) => {
          const foto = staffPhoto(s.nama);
          return `<article class="card person">
        <div class="card__body">
          <div class="person__avatar" aria-hidden="true">${
            foto
              ? `<img src="${foto}" alt="" loading="lazy" />`
              : initials(s.nama)
          }</div>
          <h3 class="person__name">${s.nama}</h3>
          <div class="person__role">${s.tugas || "Guru"}</div>
          <div class="person__meta">${s.pend}</div>
          <div class="person__meta">${s.status}${s.nip ? ` · NIP ${s.nip}` : ""}</div>
        </div>
      </article>`;
        }
      )
      .join("");
  });
})();

/* =========================================================
   Rekap absensi: render tabel jumlah kehadiran per bulan
   ========================================================= */
(function renderRekap() {
  const groups = document.querySelectorAll("[data-rekap-stats]");
  if (!groups.length) return;

  const NAMA_BULAN = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  const now = new Date().getFullYear();
  const years = { now, prev: now - 1 };

  const fmtNum = (n) =>
    String(Math.round(Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const fmtAvg = (n) => (Number(n) || 0).toFixed(1).replace(".", ",");

  // Ubah daftar bulan menjadi rentang: [8,9,10] -> "September–Oktober"
  const rentang = (list) => {
    if (!list.length) return "";
    const out = [];
    let start = list[0];
    let prev = list[0];
    for (let i = 1; i <= list.length; i++) {
      const cur = list[i];
      if (cur === prev + 1) { prev = cur; continue; }
      out.push(start === prev ? NAMA_BULAN[start] : `${NAMA_BULAN[start]}–${NAMA_BULAN[prev]}`);
      start = cur;
      prev = cur;
    }
    return out.join(", ");
  };

  Object.entries(years).forEach(([suffix, year]) => {
    const rows = (SITE_CONFIG.rekap[year] || []).slice();
    const statsEl = document.querySelector(`[data-rekap-stats="${suffix}"]`);
    const bodyEl = document.querySelector(`[data-rekap-body="${suffix}"]`);
    const footEl = document.querySelector(`[data-rekap-foot="${suffix}"]`);
    const noteEl = document.querySelector(`[data-rekap-note="${suffix}"]`);
    if (!statsEl || !bodyEl) return;

    if (!rows.length) {
      statsEl.innerHTML = ["Bulan Tercatat", "Total Kehadiran", "Rata-rata per Hari", "Hari Tercatat"]
        .map((lbl) => `<div class="stat"><div class="stat__num">—</div><div class="stat__lbl">${lbl}</div></div>`)
        .join("");
      bodyEl.innerHTML = `<tr><td colspan="5" class="muted">Belum ada rekap untuk tahun ${year}.</td></tr>`;
      if (footEl) footEl.innerHTML = "";
      if (noteEl) {
        noteEl.textContent = `Rekap tahun ${year} belum tersedia. Data akan ditampilkan setelah operator sekolah memperbaruinya.`;
      }
      return;
    }

    const totalHari = rows.reduce((a, r) => a + Number(r.hari || 0), 0);
    const totalHadir = rows.reduce((a, r) => a + Number(r.hadir || 0), 0);
    const pegawaiMaks = rows.reduce((a, r) => Math.max(a, Number(r.pegawai || 0)), 0);
    const rata = totalHari ? totalHadir / totalHari : 0;

    statsEl.innerHTML = [
      { num: fmtNum(rows.length), lbl: "Bulan Tercatat" },
      { num: fmtNum(totalHadir), lbl: "Total Kehadiran" },
      { num: fmtAvg(rata), lbl: "Rata-rata per Hari" },
      { num: fmtNum(totalHari), lbl: "Hari Tercatat" },
    ]
      .map((s) => `<div class="stat"><div class="stat__num">${s.num}</div><div class="stat__lbl">${s.lbl}</div></div>`)
      .join("");

    bodyEl.innerHTML = rows
      .map(
        (r) => `<tr>
          <td>${r.bulan}</td>
          <td>${fmtNum(r.hari)}</td>
          <td>${fmtNum(r.pegawai)}</td>
          <td>${fmtNum(r.hadir)}</td>
          <td>${fmtAvg(Number(r.hari) ? Number(r.hadir) / Number(r.hari) : 0)}</td>
        </tr>`
      )
      .join("");

    if (footEl) {
      footEl.innerHTML = `<tr>
        <td>Total ${fmtNum(rows.length)} bulan</td>
        <td>${fmtNum(totalHari)}</td>
        <td>${fmtNum(pegawaiMaks)} <small class="muted">maks.</small></td>
        <td>${fmtNum(totalHadir)}</td>
        <td>${fmtAvg(rata)}</td>
      </tr>`;
    }

    if (noteEl) {
      const tersedia = rows.map((r) => NAMA_BULAN.indexOf(r.bulan)).filter((i) => i >= 0).sort((a, b) => a - b);
      const belum = NAMA_BULAN.map((_, i) => i).filter((i) => !tersedia.includes(i));
      noteEl.textContent =
        `Data tersedia: ${rentang(tersedia)} ${year} (${rows.length} bulan).` +
        (belum.length ? ` Belum tersedia: ${rentang(belum)} ${year}.` : "");
    }
  });

  document.querySelectorAll("[data-rekap-meta]").forEach((el) => {
    const sumber = SITE_CONFIG.rekap.sumber || "rekap presensi sekolah";
    const diperbarui = SITE_CONFIG.rekap.diperbarui || "";
    el.textContent = `Sumber: ${sumber}${diperbarui ? ` · Diperbarui ${diperbarui}` : ""}.`;
  });
})();

/* =========================================================
   Navigasi
   ========================================================= */
(function nav() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const page = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav__link").forEach((a) => {
    if (a.getAttribute("data-nav") === page) a.classList.add("is-active");
  });
})();

/* =========================================================
   Header shadow, tombol ke atas, reveal
   ========================================================= */
(function scrollFx() {
  const header = document.querySelector(".header");
  const toTop = document.querySelector(".to-top");

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 500);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    items.forEach((el, i) => { el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`; });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-visible"));
  }
})();

/* =========================================================
   Angka statistik berjalan
   ========================================================= */
(function counters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;

  const run = (el) => {
    const target = Number(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const dur = 900;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach((n) => io.observe(n));
  } else {
    nums.forEach(run);
  }
})();

/* =========================================================
   Tab
   ========================================================= */
(function tabs() {
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const buttons = group.querySelectorAll(".tab");
    const panels = group.querySelectorAll(".tab-panel");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-tab");
        buttons.forEach((b) => {
          const on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-selected", String(on));
        });
        panels.forEach((p) => { p.hidden = p.getAttribute("data-panel") !== id; });
      });
    });
  });
})();

/* =========================================================
   Accordion
   ========================================================= */
(function acc() {
  document.querySelectorAll(".acc__head").forEach((head) => {
    head.addEventListener("click", () => {
      const item = head.closest(".acc");
      const body = item.querySelector(".acc__body");
      const open = item.classList.toggle("is-open");
      body.hidden = !open;
      head.setAttribute("aria-expanded", String(open));
    });
  });
})();

/* =========================================================
   Lightbox: foto & video (YouTube / Drive)
   ========================================================= */
(function lightbox() {
  const box = document.querySelector(".lightbox");
  if (!box) return;
  const body = box.querySelector(".lightbox__body");
  const close = () => {
    box.classList.remove("is-open");
    body.innerHTML = "";
  };

  document.addEventListener("click", (e) => {
    const item = e.target.closest("[data-media]");
    if (!item) return;
    const kind = item.getAttribute("data-media");
    const src = item.getAttribute("data-src");
    const caption = item.getAttribute("data-caption") || "Kegiatan";

    if (kind === "video") {
      const yt = youtubeId(src);
      const d = driveId(src);
      const url = yt
        ? `https://www.youtube.com/embed/${yt}?autoplay=1&rel=0`
        : d
        ? `https://drive.google.com/file/d/${d}/preview`
        : "";
      if (!url) return;
      body.innerHTML = `<iframe src="${url}" title="${caption}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else {
      const d = driveId(src);
      const url = d ? `https://lh3.googleusercontent.com/d/${d}=w1600` : src;
      body.innerHTML = `<img src="${url}" alt="${caption}" />`;
    }
    box.classList.add("is-open");
  });

  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest(".lightbox__close")) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();
