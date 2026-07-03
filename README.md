# 🚀 Link U - Source Code Mirip LinkTree

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=white)

Halo! Selamat datang di **Link U**, sebuah proyek *open-source* dengan *source code* mirip **LinkTree**. Ini adalah platform *Link-in-bio* super cepat dan elegan yang dirancang spesial buat para Developer, Content Creator, dan Profesional. Dibangun pakai ekosistem **Bun** + **Hono**, jadinya performa website kamu bakal ngebut banget dan pastinya hemat *resource*. 😎

> [!TIP]
> Proyek ini sudah *Serverless-ready* lho! Artinya kamu bisa langsung *deploy* ke Vercel atau Cloudflare Workers tanpa ribet.

---

## ✨ Fitur Keren Apa Aja Sih?

| Fitur | Penjelasan |
| :--- | :--- |
| ⚡ **Performa Kilat** | Ditenagai oleh ekosistem Bun dan Hono, ngasih respon data dalam hitungan milidetik. |
| 🎨 **Gampang Dikustom** | Tema, warna, dan animasi tombol semuanya bisa diatur dari satu file aja (`config.ts`). Nggak perlu ngoding CSS lagi! |
| 📊 **Analitik Terintegrasi** | Bisa otomatis ngerekam berapa kali link kamu diklik orang. Disimpan di SQLite atau Turso! |
| 🤖 **SEO & AI Ready** | Meta tag-nya udah lengkap banget (OpenGraph, Twitter Cards, JSON-LD Schema). AI dan Google pasti suka baca website kamu. |
| ✨ **Desain Modern** | Ada efek *glassmorphism*, centang biru *verified*, dan *hover vibration* ala iOS. |

---

## 📸 Tampilan (Showcase)

````carousel
![Dark Mode View](https://files.catbox.moe/aoldzv.webp)
<!-- slide -->
![Custom Avatar & Verified Badge](https://files.catbox.moe/im21eo.webp)
<!-- slide -->
![Clean UI Buttons](https://files.catbox.moe/2suaq4.jpg)
````

---

## 🛠️ Cara Jalanin di Komputer Kamu

Gampang banget kok! Asal kamu udah punya [Bun](https://bun.sh) terinstall di komputermu, tinggal ikutin langkah ini:

1. Clone atau download *repository* ini.
2. Buka terminal, terus jalanin:
   ```bash
   bun install
   ```
3. Nyalain server lokalnya:
   ```bash
   bun run dev
   ```
4. Selesai! Tinggal buka `http://localhost:3000` di browsermu. 🎉

---

## ⚙️ Gimana Cara Kustomisasinya?

Semua 'sihir' ada di file `config.ts`. Kamu nggak perlu pusing buka-buka file komponen lain.

> [!IMPORTANT]
> Jangan hapus file `config.ts` ya! File ini adalah otak dari seluruh pengaturan website kamu.

Di dalam `config.ts` kamu bebas ngatur:
- **Profile**: Nama, bio, foto (avatar), dan centang biru (isVerified).
- **SEO**: Atur meta deskripsi dan kata kunci web kamu biar gampang dicari Google.
- **Theme**: Ubah background, warna tombol, sampai efek animasi saat tombol disorot (scale, lift, tilt, dll).
- **Links & Socials**: Tambahin link apapun. Kamu bahkan bisa pakai class dari *Boxicons* langsung lho (misal: `iconClass: "bx bxl-discord"`)!

> [!NOTE]
> Fitur Socials udah pakai template otomatis. Jadi kalau kamu masukin `platform: "twitter"`, warna dan logonya otomatis bakal menyesuaikan dengan *brand* asli Twitter!

---

## 🗄️ Database Analitik

Secara *default*, sistem akan ngebuat file database bernama `sqlite.db` di foldermu secara diam-diam. Gunanya buat nyimpen jumlah klik dari pengunjung kamu.

> [!WARNING]
> Kalau kamu mau *deploy* proyek ini ke cloud (seperti Vercel), database lokal (SQLite) bakal kerestart setiap saat! 

**Solusinya?** Gunakan Turso!
1. Daftar gratis di [Turso](https://turso.tech).
2. *Copy* file `.env.example` menjadi `.env`.
3. Masukkan `TURSO_DATABASE_URL` dan `TURSO_AUTH_TOKEN` ke dalam `.env`.
4. Boom! Data analitik kamu sekarang aman tersimpan di *cloud*.

---

## 📄 Lisensi

Proyek ini dibagikan di bawah lisensi [MIT](LICENSE). Singkatnya: *Bebas kamu pakai, bebas kamu modifikasi, dan bebas kamu bagikan!* ❤️
