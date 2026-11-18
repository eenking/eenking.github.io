/* =========================================================
   SDN 22 PONTIANAK BARAT — Konfigurasi & Interaksi
   ---------------------------------------------------------
   SEMUA DATA SEKOLAH, LINK, DAN EMBED DIATUR DI SINI SAJA.
   Cukup edit objek SITE_CONFIG di bawah, halaman lain
   otomatis mengikuti.
   ========================================================= */

const SITE_CONFIG = {
  sekolah: {
    nama: "SD Negeri 22 Pontianak Barat",
    namaPendek: "SDN 22 Pontianak Barat",
    motto: "Membangun Generasi Cerdas, Berkarakter, dan Berbudaya",
    alamat: "Gg. Selamat 3 No. 46, Sungai Jawi Dalam, Kec. Pontianak Barat, Kota Pontianak, Kalimantan Barat 78244",
    telepon: "(0561) 000000",
    whatsapp: "6281200000000",
    email: "sdn22pontianakbarat@gmail.com",
    npsn: "________",
    akreditasi: "A",
    jamLayanan: "Senin – Jumat, 07.00 – 14.00 WIB",
    kepalaSekolah: "____________________, S.Pd.",
    editor: "Rendra Setiadi, S.Kom (TU)",
    tahun: "2026",
  },

  /* ------------------------------------------------------------------
     EMBED — tempel URL embed di sini.
     Cara ambil URL:
     • Google Maps   : Maps → Bagikan → Sematkan peta → salin isi src="..."
     • YouTube       : Share → Embed → salin src="https://www.youtube.com/embed/XXXX"
     • Google Forms  : Kirim → ikon < > → salin src="..." (akhiri ?embedded=true)
     • Google Sheets : spreadsheet → File → Bagikan → Publikasikan ke web
                       → gunakan https://docs.google.com/spreadsheets/d/e/2PACX-.../pubhtml?widget=true&headers=false
     • Google Drive  : file → Bagikan → Sematkan file → salin src="..."
     • Google Calendar: Setelan kalender → Integrasikan kalender → salin src="..."
     Kosongkan ("") bila belum ada — kotak akan menampilkan panduan.
     ------------------------------------------------------------------ */
  embeds: {
    // Contoh siap pakai: peta pencarian lokasi sekolah (ganti dengan sematan resmi dari Google Maps).
    maps: "https://www.google.com/maps?q=SDN%2022%20Pontianak%20Barat&output=embed",
    youtubeProfil: "",
    youtubeKegiatan: "",
    formAbsen: "",
    // Diambil dari situs absensi lama: PDF rekap April 2025 (sudah publik).
    rekapAbsen: "https://drive.google.com/file/d/1JrE73YfbTjv88PMHF7-ZQohI55dnY0cr/preview",
    kalender: "",
    grafikGuru: "",
    dokumentasi: "",
  },

  /* ------------------------------------------------------------------
     LINK — tombol & menu cepat
     ------------------------------------------------------------------ */
  links: {
    spmb: "https://sites.google.com/admin.sd.belajar.id/sdn-22-pontianak-barat/beranda",
    erapor: "",
    pengumuman: "",
    pmm: "https://guru.kemdikbud.go.id/",
    drive: "",
    situsAbsensi: "https://sites.google.com/admin.sd.belajar.id/absensisdn22pb/halaman-muka",
    situsProfil: "https://sites.google.com/admin.sd.belajar.id/sdn22pontianakbarat/loginsdn22pb",
    situsGuru: "https://sites.google.com/admin.sd.belajar.id/gurudanpegawai/kepala-sekolah",
    instagram: "",
    facebook: "",
    youtube: "https://www.youtube.com/@sdn22pontianakbarat",
    tiktok: "",
    // Dokumen yang ditemukan dari situs lama (sudah dapat diakses publik):
    rekapAprPdf: "https://drive.google.com/file/d/1JrE73YfbTjv88PMHF7-ZQohI55dnY0cr/view",
    pdf9mei: "https://drive.google.com/file/d/1btHzKuWdARIcddXP7SqajOY7cuNNbW5y/view",
    pdf8mei: "https://drive.google.com/file/d/1RiaKkm0gNeCRpCJAwPuy4W3B1yPWefrN/view",
  },
};

/* =========================================================
   Terapkan konfigurasi ke halaman
   ========================================================= */
(function applyConfig() {
  const s = SITE_CONFIG.sekolah;

  // Teks bertanda data-cfg="sekolah.alamat" dll.
  document.querySelectorAll("[data-cfg]").forEach((el) => {
    const path = el.getAttribute("data-cfg").split(".");
    let val = SITE_CONFIG;
    for (const key of path) val = val?.[key];
    if (val !== undefined && val !== "") el.textContent = val;
  });

  // Link bertanda data-link="spmb"
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = SITE_CONFIG.links[el.getAttribute("data-link")];
    if (url) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    } else {
      el.setAttribute("href", "#");
      el.setAttribute("data-empty-link", "true");
      el.addEventListener("click", (e) => e.preventDefault());
    }
  });

  // Tahun otomatis
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Nomor WhatsApp siap pakai
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", `https://wa.me/${s.whatsapp}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
})();

/* =========================================================
   Embed: muat otomatis saat mendekati layar
   ========================================================= */
(function embedLoader() {
  const boxes = document.querySelectorAll("[data-embed]");

  boxes.forEach((box) => {
    const key = box.getAttribute("data-embed");
    const url = SITE_CONFIG.embeds[key];
    const ph = box.querySelector(".embed__placeholder");

    if (!url) {
      if (ph) {
        ph.querySelector("h4").textContent = "Embed belum diatur";
        ph.querySelector("p").textContent =
          "Buka assets/js/app.js lalu isi SITE_CONFIG.embeds." + key + ' dengan URL embed.';
        const btn = ph.querySelector("[data-load]");
        if (btn) btn.remove();
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
    };

    const btn = box.querySelector("[data-load]");
    if (btn) btn.addEventListener("click", load);

    // Muat langsung bila sudah dekat layar (tidak menunggu callback observer).
    const nearViewport = () => {
      const r = box.getBoundingClientRect();
      return r.top < window.innerHeight + 400 && r.bottom > -400;
    };
    if (nearViewport()) load();

    // Cadangan: tab yang dibuka di latar belakang / baru diaktifkan.
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

  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    });
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
          if (e.isIntersecting) {
            run(e.target);
            io.unobserve(e.target);
          }
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
        panels.forEach((p) => {
          p.hidden = p.getAttribute("data-panel") !== id;
        });
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
   Lightbox galeri
   ========================================================= */
(function lightbox() {
  const box = document.querySelector(".lightbox");
  if (!box) return;

  const img = box.querySelector("img");

  document.querySelectorAll("[data-lightbox]").forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-lightbox");
      if (!src) return;
      img.src = src;
      img.alt = item.getAttribute("data-caption") || "Foto kegiatan";
      box.classList.add("is-open");
    });
  });

  const close = () => box.classList.remove("is-open");
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest(".lightbox__close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
