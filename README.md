# Green Harvest Hub 🌱

Menghubungkan petani organik lokal dengan konsumen yang sadar akan produk segar dan pengalaman agrowisata yang tak terlupakan di Jawa Barat.

[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/Qira-Qira/green-harvest-hub)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Actively Developed](https://img.shields.io/badge/Status-Actively_Developed-brightgreen.svg)]()

---

## 🧩 Fitur Utama

Green Harvest Hub dirancang untuk menjadi jembatan antara petani lokal dan konsumen, menawarkan pengalaman berbelanja produk organik yang mudah dan informatif.

* **Katalog Produk Organik Komprehensif**: Jelajahi berbagai buah, sayuran, dan jamu tradisional organik.
* **Pencarian & Filter Produk**: Temukan produk dengan mudah menggunakan fitur pencarian dan filter berdasarkan kategori (buah, sayur, jamu).
* **Sistem Keranjang Belanja Interaktif**: Tambahkan, hapus, dan perbarui kuantitas produk di keranjang Anda dengan tampilan modal yang intuitif. Data keranjang tersimpan di penyimpanan lokal browser.
* **Checkout via WhatsApp**: Proses pemesanan produk dengan mudah melalui integrasi WhatsApp yang langsung menghasilkan pesan pemesanan.
* **Profil Petani Mendalam**: Kenali petani di balik produk Anda melalui profil lengkap yang mencakup biografi, spesialisasi, pengalaman, dan detail kontak.
* **Peta Agrowisata Interaktif**: Jelajahi lokasi agrowisata di Jawa Barat dengan filter kategori seperti kebun buah, wisata kopi, pertanian organik, dan wisata sawah, didukung oleh OpenStreetMap.
* **Kalender Panen**: Dapatkan informasi tentang produk musiman dan waktu panen terbaik.
* **Resep Sehat**: Temukan inspirasi resep bergizi menggunakan bahan-bahan organik kami.
* **Chatbot Interaktif**: Dapatkan jawaban cepat atas pertanyaan umum tentang produk, harga, pengiriman, atau agrowisata.
* **Desain Responsif & Modern**: Tampilan yang optimal di berbagai perangkat, dari desktop hingga mobile.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 📸 Preview UI

Untuk melihat preview UI, Anda dapat membuka file `index.html` dan `products.html` di browser Anda.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 🛠️ Tech Stack

Proyek ini dibangun menggunakan teknologi web standar yang kuat dan ringan:

* **HTML5**: Untuk struktur konten.
* **CSS3 (dengan Tailwind CSS)**: Untuk styling dan responsivitas, memungkinkan pengembangan UI yang cepat dan fleksibel.
* **JavaScript (Vanilla JS)**: Untuk fungsionalitas interaktif, termasuk pengelolaan keranjang, filter, modal, dan chatbot.
* **Leaflet.js**: Untuk menampilkan peta agrowisata interaktif.
* **Font Awesome**: Untuk ikonografi.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 📦 Cara Instalasi / Setup Lokal

Untuk menjalankan proyek Green Harvest Hub di lingkungan lokal Anda, ikuti langkah-langkah sederhana ini:

1.  **Clone Repositori:**
    ```bash
    git clone [https://github.com/Qira-Qira/green-harvest-hub.git](https://github.com/Qira-Qira/green-harvest-hub.git)
    ```
    Ini akan mengunduh semua berkas proyek ke direktori lokal Anda dengan nama `green-harvest-hub`.
    Jika Anda menggunakan SSH, perintahnya akan menjadi:
    ```bash
    git clone git@github.com:Qira-Qira/green-harvest-hub.git
    ```
2.  **Masuk ke Direktori Proyek:**
    ```bash
    cd green-harvest-hub
    ```

3.  **Buka File HTML:**
    Karena ini adalah proyek frontend murni tanpa backend atau build proses yang kompleks, Anda cukup membuka file `index.html` atau `products.html` langsung di browser web favorit Anda (misalnya Chrome, Firefox, Edge).
    ```bash
    # Contoh untuk membuka dengan browser default (tergantung OS Anda)
    open index.html
    # atau
    start index.html
    ```

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 🧪 Cara Menjalankan Testing

Saat ini, proyek ini tidak menyertakan unit atau integrasi tes otomatis. Fungsionalitas diuji secara manual.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 📁 Struktur Folder/Arsitektur Proyek

Struktur direktori proyek dirancang agar intuitif dan mudah dinavigasi:

green-harvest-hub/
├── assets/                 # Berkas aset seperti gambar, ikon, dll.
│   ├── icons/
│   └── images/
├── index.html              # Halaman utama (landing page)
├── index.js                # Logika JavaScript untuk halaman utama
├── products.html           # Halaman katalog produk
└── products.js             # Logika JavaScript untuk halaman produk dan keranjang


[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## ⚙️ Fungsionalitas / Cara Menggunakan

### Beranda (`index.html`)

* **Navigasi**: Gunakan menu navigasi di bagian atas atau menu mobile (untuk perangkat kecil) untuk berpindah antar bagian seperti "Petani Kami", "Kalender Panen", "Resep", dan "Kontak".
* **Agrowisata**: Jelajahi titik-titik agrowisata di peta interaktif. Gunakan tombol filter untuk menampilkan kategori yang berbeda (Kebun Buah, Wisata Kopi, dll.).
* **Profil Petani**: Klik "Pelajari Lebih Lanjut" pada setiap kartu petani untuk melihat detail profil mereka dalam modal.
* **Resep**: Klik "Lihat Resep" pada kartu resep untuk melihat bahan dan langkah-langkah pembuatannya.
* **Pengalaman Stroberi**: Gunakan tombol "Pesan Pengalaman Sekarang" untuk memulai percakapan WhatsApp dan memesan pengalaman panen stroberi.

### Katalog Produk (`products.html`)

* **Telusuri Produk**: Gulir ke bawah untuk melihat daftar semua produk organik yang tersedia.
* **Cari Produk**: Gunakan bilah pencarian untuk mencari produk berdasarkan nama atau deskripsi.
* **Filter Kategori**: Klik tombol filter (Semua, Buah, Sayur, Jamu) untuk menampilkan produk dari kategori tertentu.
* **Tambah ke Keranjang**: Klik tombol "Tambah" pada setiap produk untuk menambahkannya ke keranjang belanja Anda.
* **Lihat Keranjang**: Klik ikon keranjang di header atau tombol keranjang mengambang di pojok kanan bawah untuk membuka modal keranjang belanja. Di dalam modal, Anda bisa mengubah kuantitas atau menghapus item.
* **Checkout**: Dari modal keranjang, klik "Bayar via WhatsApp" untuk menghasilkan pesan WhatsApp berisi detail pesanan Anda dan melanjutkan proses pembelian.

### Chatbot

* Klik ikon chatbot mengambang di pojok kanan bawah halaman manapun untuk membuka modal chatbot.
* Ketik pertanyaan Anda di kolom input dan tekan Enter atau klik ikon kirim untuk berinteraksi dengan chatbot.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 🚧 Status Pengembangan

Proyek ini sedang dalam tahap pengembangan aktif. Fitur-fitur inti telah diimplementasikan dan fungsional, namun masih ada ruang untuk penyempurnaan, optimasi, dan penambahan fitur baru. Kami menyambut kontribusi dari komunitas!

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 📌 TODO / Roadmap

Berikut adalah beberapa fitur yang direncanakan untuk pengembangan selanjutnya:

* **Integrasi Backend**: Mengganti data statis dengan API backend untuk manajemen produk, petani, dan pesanan yang dinamis.
* **Sistem Otentikasi Pengguna**: Fitur login/registrasi untuk pengalaman berbelanja yang lebih personal.
* **Dashboard Petani**: Antarmuka bagi petani untuk mengelola produk dan pesanan mereka.
* **Sistem Pembayaran Online**: Integrasi gateway pembayaran untuk pengalaman checkout yang lebih mulus.
* **Optimasi SEO**: Meningkatkan visibilitas situs di mesin pencari.
* **Internasionalisasi**: Menambahkan dukungan untuk bahasa lain selain Bahasa Indonesia.
* **Fitur Ulasan Produk**: Memungkinkan konsumen untuk memberikan ulasan dan rating produk.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 🤝 Kontribusi

Kami sangat senang menerima kontribusi untuk proyek Green Harvest Hub! Jika Anda tertarik untuk berkontribusi, silakan ikuti panduan berikut:

1.  **Fork** repositori ini.
2.  **Clone** repositori yang sudah Anda fork ke mesin lokal Anda.
3.  Buat **branch baru** untuk fitur atau perbaikan Anda: `git checkout -b feature/nama-fitur-anda`
4.  Lakukan perubahan Anda dan **commit** dengan pesan yang jelas: `git commit -m "feat: Menambahkan fitur X"`
5.  **Push** branch Anda ke GitHub: `git push origin feature/nama-fitur-anda`
6.  Buka **Pull Request (PR)** dari branch Anda ke branch `main` repositori asli.

Pastikan kode Anda bersih, terdokumentasi dengan baik, dan mengikuti gaya kode yang sudah ada.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 🧠 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**. Lihat file [LICENSE](https://opensource.org/licenses/MIT) untuk detail lebih lanjut.

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 🙋‍♂️ Tentang Developer

Hai! Kami adalah Salamander Code, seorang pengembang web yang bersemangat dalam menciptakan solusi digital yang berdampak. Proyek Green Harvest Hub ini adalah upaya kami untuk mendukung pertanian lokal dan mempromosikan gaya hidup sehat.

* [Profil GitHub Kami](https://github.com/Qira-Qira)
* [Profil LinkedIn Kami](https://linkedin.com/in/nawaf-ariq-hilalbi)

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## 📬 Kontak

Untuk pertanyaan, saran, atau kolaborasi, jangan ragu untuk menghubungi kami:

* **Email**: nawafariq3@gmail.com
* **WhatsApp**: +6282338184728

[⬆ Kembali ke atas](#green-harvest-hub-🌱)

## ✨ Special Thanks / Acknowledgment

Terima kasih khusus kepada:

* **Tailwind CSS**: Untuk kerangka kerja CSS yang utility-first, mempercepat pengembangan UI.
* **Leaflet.js**: Untuk pustaka JavaScript interaktif open-source untuk peta yang ramah seluler.
* **Font Awesome**: Untuk koleksi ikon yang fantastis.
* Semua inspirasi dan sumber daya open-source yang telah membantu proyek ini berkembang.

---