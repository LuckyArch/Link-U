import type { LinktreeConfig } from './types';

export const config: LinktreeConfig = {

  profile: {
    name: "Zann", // Nama Kamu
    isVerified: true, // Centang biru verified (true/false)
    bio: "Software Engineer • Gamer • Open Source", // Bio Kamu
    avatarUrl: "https://files.catbox.moe/im21eo.webp", // URL Foto Avatar kamu, 1:1 ya
    avatarFrameUrl: "", // ini bingkai nya, wajib 1:1, kosongin aja kalau gak mau pakai bingkai custom ( bingkai yang di maksud itu yang kayak di border ml itu )
  },

  seo: {
    title: "Zann. | Link U", // Judul website yang muncul di tab browser & pencarian Google
    description: "Personal linktree and portfolio of Zann. Software Engineer & Open Source Enthusiast.", // Deskripsi untuk meta tags (penting untuk SEO & AI)
    keywords: ["zann", "software engineer", "portfolio", "links", "developer"], // Kata kunci pencarian
    image: "https://files.catbox.moe/im21eo.webp", // Gambar besar yang muncul kalau link website kamu di-share ke WhatsApp/Twitter/dll
    url: "https://linku.vercel.app", // URL asli website kamu setelah di-deploy (penting untuk SEO)
    // twitterHandle: "@zann" // Username Twitter (opsional)
  },

  theme: {
    backgroundImage: "url('https://files.catbox.moe/aoldzv.webp')", // bg image, pastiin gantinya yang ada di dalam '' yak, contoh: url('ISI_URL_GAMBAR_DISINI')
    cardBackground: "rgba(255, 255, 255, 0.95)", // warna card
    textColor: "#ffffff", // warna text di luar card
    cardTextColor: "#1f2937", // warna text di dalam card
    buttonColor: "#ffffff", // warna tombol
    buttonHoverColor: "#f9fafb", // warna tombol ketika di-hover
    buttonTextColor: "#111827", // warna text di dalam tombol
    buttonHoverAnimation: 'tilt', // Pilih animasi tombol ketika di-hover: 'scale', 'lift', 'glow', 'shake', 'tilt', 'none'. bahasa indonesianya translate sendiri xixixi :b
    buttonHoverVibrate: false, // ubah jadi true, jika mau tombol bisa bergetar saat di-hover
  },

  links: [ //ini adalah link nya, silahkan tambah atau hapus sesuka hatimu

    /**
     * cara nambahin link nya kayak dibawah, ingat, tanda koma, kurung dan string di perhatikan
     * 
     * {
     *    title: "Judul Linknya",
     *    url: "URL Linknya",
     *    icon: "Iconnya. bisa via url. 1:1",
     *    // addPopupAfterClickingButton: `` ini opsional, kalau gak mau pakai popup, kosongin aja, kalau mau pakai popup, tinggal kasih html di dalam string nya
     *    // Contoh:
     *    addPopupAfterClickingButton: `
     *    <div class="text-center p-4">
     *      <h2 class="text-2xl font-bold mb-2">Subscribe Now!</h2>
     *      <p class="mb-4 text-gray-600">Dapatkan update terbaru langsung di email kamu.</p>
     *      <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
     *      <button class="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition">Subscribe</button>
     *    </div>
     *  `
     * },
     * 
     */

    {
      title: "ITEM KE 1",
      url: "https://itemkesatu.com",
      icon: "https://files.catbox.moe/2suaq4.jpg"
    },
    {
      title: "ITEM KE 2",
      url: "#",
      addPopupAfterClickingButton: `
        <div class="text-center p-4">
          <h2 class="text-2xl font-bold mb-2">Subscribe Now!</h2>
          <p class="mb-4 text-gray-600">Dapatkan update terbaru langsung di email kamu.</p>
          <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button class="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition">Subscribe</button>
        </div>
      `
    },
  ],

  socials: [
    { platform: "github", url: "https://github.com/example" }, // Github kamu
    { platform: "twitter", url: "https://twitter.com/example" }, // Twitter kamu
    { platform: "instagram", url: "https://instagram.com/example" }, // Instagram kamu
    { platform: "email", url: "mailto:hello@example.com" }, // Email kamu
    // Kalau mau nambah custom icon via Class (Boxicons):
    // { iconClass: "bx bxl-discord", url: "https://discord.com" },
    // Kalau mau nambah custom icon (pakai link gambar):
    // { iconUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png", url: "https://linkedin.com/in/example" }
  ],
  features: {
    // Fitur Analitik (Penghitung Klik)
    // Jika diset ke 'true', sistem akan mencatat setiap kali ada pengunjung yang ngeklik tombol link kamu.
    // Data jumlah kliknya akan disimpan ke dalam database (lokal atau Turso) secara otomatis.
    // Kalau kamu ngerasa gak butuh fitur ini atau pengen server lebih ringan, ubah aja jadi 'false'.
    enableAnalytics: true
  },

  footer: {
    show: true, // Ubah jadi false kalau mau menyembunyikan tulisan di paling bawah
    text: "Built with Hono", // Teks yang muncul di bawah
    url: "https://github.com/honojs/hono" // Link saat teksnya diklik
  }
};
