const DataUmkm = [
  {
    id: 1,
    nama: "Warung Ibu Koki",
    profil:
      "Warung Ibu Koki adalah restoran keluarga yang menyajikan masakan tradisional Indonesia dengan rasa otentik.",
    foto: "ibu-koki.jpg",
    ulasan:
      "Makanan di Warung Ibu Koki selalu lezat. Saya suka datang ke sini bersama keluarga.",
    program:
      "Kami memiliki program masak bersama di mana kami mengajak pelanggan untuk memasak bersama koki kami.",
    dukungan:
      "Kami mendukung pelatihan koki lokal untuk memastikan kualitas masakan kami tetap tinggi.",
    produk: [
      {
        id: 1,
        nama: "Nasi Goreng Special",
        deskripsi:
          "Nasi goreng dengan campuran bumbu rahasia dan irisan telur dadar.",
        harga: "Rp 25.000",
        foto: "nasigoreng.jpg",
      },
      {
        id: 2,
        nama: "Sate Ayam Madura",
        deskripsi: "Sate ayam dengan bumbu kacang khas Madura.",
        harga: "Rp 30.000",
        foto: "sateayam.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kelas Masak Bersama",
        tanggal: "12 Februari 2023",
        deskripsi:
          "Kelas memasak bersama koki kami untuk pelanggan yang ingin belajar masakan tradisional.",
      },
      {
        id: 2,
        nama: "Promosi Menu Baru",
        tanggal: "5 Maret 2023",
        deskripsi:
          "Promosi menu baru kami dengan diskon khusus untuk pelanggan setia.",
      },
    ],
    kontak: {
      alamat: "Jl. Kuliner No. 123, Desa Kuliner",
      telepon: "+62 1234 5678",
      email: "warungibuKoki@email.com",
      website: "www.warungibukoki.com",
    },
    sosialMedia: {
      facebook: "facebook.com/warungibuKoki",
      instagram: "instagram.com/warungibuKoki",
      twitter: "twitter.com/warungibuKoki",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.500.000.000",
      labaBersih: "Rp 350.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan menu dengan lebih banyak variasi untuk memenuhi selera pelanggan yang beragam.",
      "Mengadakan promosi khusus dan acara untuk meningkatkan kunjungan pelanggan.",
      "Menggali peluang kemitraan dengan penyedia bahan baku lokal.",
      "Melakukan ekspansi ke area sekitar untuk menjangkau lebih banyak pelanggan.",
      "Terus mengadakan kelas memasak bersama untuk melibatkan pelanggan lebih aktif.",
    ],
  },
  {
    id: 2,
    nama: "Koperasi Tani Sejahtera",
    profil:
      "Koperasi Tani Sejahtera adalah koperasi yang berfokus pada pertanian organik dan produk-produk alami.",
    foto: "tani-sejahtera.jpg",
    ulasan:
      "Saya selalu mendapatkan produk segar dan berkualitas dari Koperasi Tani Sejahtera. Terima kasih!",
    program:
      "Kami memiliki program pelatihan pertanian organik bagi petani di desa kami.",
    dukungan:
      "Kami juga memberikan akses pasar yang lebih luas kepada petani melalui jaringan distribusi kami.",
    produk: [
      {
        id: 1,
        nama: "Sayur Organik",
        deskripsi: "Sayuran segar hasil pertanian organik lokal.",
        harga: "Rp 10.000/kg",
        foto: "sayurorganik.jpg",
      },
      {
        id: 2,
        nama: "Madu Murni",
        deskripsi: "Madu murni dari lebah lokal.",
        harga: "Rp 50.000/botol",
        foto: "madumurni.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Pertanian Organik",
        tanggal: "15 Februari 2023",
        deskripsi:
          "Pelatihan bagi petani lokal dalam teknik pertanian organik yang berkelanjutan.",
      },
      {
        id: 2,
        nama: "Pameran Produk Lokal",
        tanggal: "10 Maret 2023",
        deskripsi:
          "Pameran produk-produk pertanian organik dan alami di desa kami.",
      },
    ],
    kontak: {
      alamat: "Jl. Pertanian No. 45, Desa Sejahtera",
      telepon: "+62 1234 6789",
      email: "koperasitanisejahtera@email.com",
      website: "www.koperasitanisejahtera.com",
    },
    sosialMedia: {
      facebook: "facebook.com/koperasitanisejahtera",
      instagram: "instagram.com/koperasitanisejahtera",
      twitter: "twitter.com/koperasitanisejahtera",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 2.200.000.000",
      labaBersih: "Rp 400.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan lahan pertanian organik kami untuk memenuhi permintaan yang meningkat.",
      "Mengadakan pameran produk di daerah sekitar untuk menjangkau lebih banyak pelanggan.",
      "Menggali potensi ekspor produk pertanian organik ke pasar internasional.",
      "Meningkatkan kapasitas pelatihan pertanian organik bagi petani lokal.",
      "Membangun pusat distribusi produk pertanian organik untuk meningkatkan akses pasar.",
    ],
  },
  {
    id: 3,
    nama: "Kreatif Desa",
    profil:
      "Kreatif Desa adalah toko seni dan kerajinan lokal yang menjual produk-produk unik buatan tangan.",
    foto: "kreatif-desa.jpg",
    ulasan:
      "Saya selalu menemukan hadiah kreatif di toko Kreatif Desa. Produk mereka sangat unik.",
    program:
      "Kami memiliki program pelatihan seni dan kerajinan untuk masyarakat desa.",
    dukungan:
      "Kami mendukung pameran seni lokal dan mempromosikan karya seniman desa.",
    produk: [
      {
        id: 1,
        nama: "Kerajinan Tangan Kayu",
        deskripsi: "Kerajinan tangan kayu dengan motif tradisional.",
        harga: "Rp 50.000 - Rp 200.000",
        foto: "kerajinantangan.jpg",
      },
      {
        id: 2,
        nama: "Lukisan Kanvas",
        deskripsi: "Lukisan kanvas dengan berbagai tema artistik.",
        harga: "Rp 100.000 - Rp 500.000",
        foto: "lukisankanvas.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Seni Lukis",
        tanggal: "20 Februari 2023",
        deskripsi:
          "Pelatihan seni lukis bagi warga desa yang ingin mengembangkan keterampilan seni mereka.",
      },
      {
        id: 2,
        nama: "Pameran Seni Lokal",
        tanggal: "8 Maret 2023",
        deskripsi: "Pameran karya seni lokal di pusat seni desa.",
      },
    ],
    kontak: {
      alamat: "Jl. Seni No. 12, Desa Kreatif",
      telepon: "+62 1234 9876",
      email: "kreatifdesa@email.com",
      website: "www.kreatifdesa.com",
    },
    sosialMedia: {
      facebook: "facebook.com/kreatifdesa",
      instagram: "instagram.com/kreatifdesa",
      twitter: "twitter.com/kreatifdesa",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 800.000.000",
      labaBersih: "Rp 200.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan keragaman produk seni dan kerajinan kami.",
      "Mengadakan pameran seni yang lebih besar untuk menarik wisatawan.",
      "Membantu seniman desa mengakses pasar online untuk penjualan produk.",
      "Melakukan kerja sama dengan sekolah-sekolah untuk pelatihan seni.",
      "Membangun galeri seni dan pusat kreatif di desa.",
    ],
  },
  {
    id: 4,
    nama: "Sembako Berkah",
    profil:
      "Sembako Berkah adalah toko kelontong yang menyediakan berbagai kebutuhan sehari-hari.",
    foto: "sembako-berkah.jpg",
    ulasan:
      "Saya selalu belanja di Sembako Berkah. Stoknya lengkap dan harganya terjangkau.",
    program:
      "Kami memiliki program memberikan paket sembako gratis kepada keluarga yang membutuhkan.",
    dukungan:
      "Kami mendukung program pangan lokal dan bekerja sama dengan petani desa.",
    produk: [
      {
        id: 1,
        nama: "Beras",
        deskripsi: "Beras berkualitas dalam kemasan berat atau eceran.",
        harga: "Rp 10.000/kg",
        foto: "beras.jpg",
      },
      {
        id: 2,
        nama: "Mie Instan",
        deskripsi: "Mie instan berbagai merek dan rasa.",
        harga: "Rp 2.000 - Rp 5.000/pack",
        foto: "mieinstan.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Bagi Sembako Gratis",
        tanggal: "25 Februari 2023",
        deskripsi:
          "Program memberikan paket sembako gratis kepada keluarga kurang mampu di desa.",
      },
      {
        id: 2,
        nama: "Pameran Produk Lokal",
        tanggal: "18 Maret 2023",
        deskripsi:
          "Pameran produk pangan lokal dan olahan di toko Sembako Berkah.",
      },
    ],
    kontak: {
      alamat: "Jl. Sembako No. 34, Desa Berkah",
      telepon: "+62 1234 5678",
      email: "sembakoberkah@email.com",
      website: "www.sembakoberkah.com",
    },
    sosialMedia: {
      facebook: "facebook.com/sembakoberkah",
      instagram: "instagram.com/sembakoberkah",
      twitter: "twitter.com/sembakoberkah",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.000.000.000",
      labaBersih: "Rp 100.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan program bagi sembako berkualitas dengan harga terjangkau.",
      "Memperluas program bagi sembako gratis kepada lebih banyak keluarga yang membutuhkan.",
      "Menggandeng lebih banyak petani lokal untuk memasok produk pangan.",
      "Mengadakan promosi spesial dan diskon pada pameran produk lokal.",
      "Mengoptimalkan layanan pengiriman produk kepada pelanggan.",
    ],
  },
  {
    id: 5,
    nama: "Pusat Oleh-oleh Desa",
    profil:
      "Pusat Oleh-oleh Desa adalah tempat untuk membeli oleh-oleh khas desa.",
    foto: "oleholeh.jpg",
    ulasan:
      "Oleh-olehnya enak dan bervariasi.Stoknya lengkap dan harganya terjangkau.",
    program:
      "Program peningkatan kualitas oleh-oleh kepada keluarga yang membutuhkan.",
    dukungan: "Dukungan pemasaran oleh-oleh desa secara nasional.",
    produk: [
      {
        id: 1,
        nama: "Keripik Pisang",
        deskripsi: "Keripik pisang dengan rasa khas desa.",
        harga: "Rp 15.000/pack",
        foto: "keripikpisang.jpg",
      },
      {
        id: 2,
        nama: "Kacang Telur",
        deskripsi: "Kacang telur dengan bumbu tradisional.",
        harga: "Rp 10.000/pack",
        foto: "kacangtelur.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Peluncuran Produk Baru",
        tanggal: "10 Februari 2023",
        deskripsi: "Peluncuran produk baru oleh Pusat Oleh-oleh Desa.",
      },
      {
        id: 2,
        nama: "Partisipasi Pameran Nasional",
        tanggal: "3 Maret 2023",
        deskripsi:
          "Pusat Oleh-oleh Desa akan berpartisipasi dalam pameran oleh-oleh nasional.",
      },
    ],
    kontak: {
      alamat: "Jl. Oleh-oleh No. 56, Desa Oleh-oleh",
      telepon: "+62 1234 5678",
      email: "pusatoleholeh@email.com",
      website: "www.pusatoleholehdesa.com",
    },
    sosialMedia: {
      facebook: "facebook.com/pusatoleholehdesa",
      instagram: "instagram.com/pusatoleholehdesa",
      twitter: "twitter.com/pusatoleholehdesa",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 800.000.000",
      labaBersih: "Rp 150.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan variasi produk oleh-oleh yang lebih banyak.",
      "Menghadiri lebih banyak pameran nasional untuk meningkatkan visibilitas.",
      "Membangun kolaborasi dengan agen perjalanan untuk mempromosikan oleh-oleh desa.",
      "Meningkatkan kualitas kemasan produk oleh-oleh kami.",
      "Memperluas jaringan distribusi oleh-oleh desa.",
    ],
  },
  {
    id: 6,
    nama: "Toko Batik Cantik",
    profil:
      "Toko Batik Cantik adalah toko batik lokal yang menyediakan berbagai pakaian dan kain batik.",
    foto: "batik-cantik.jpg",
    ulasan:
      "Saya selalu membeli batik dari Toko Batik Cantik. Koleksinya sangat indah.",
    program:
      "Kami memiliki program pelatihan membuat batik untuk warga desa yang tertarik.",
    dukungan:
      "Kami juga mendukung promosi batik tradisional melalui pameran dan workshop.",
    produk: [
      {
        id: 1,
        nama: "Batik Tulis",
        deskripsi: "Batik dengan motif tulisan tangan yang unik.",
        harga: "Rp 300.000 - Rp 800.000",
        foto: "batiktulis.jpg",
      },
      {
        id: 2,
        nama: "Kain Batik",
        deskripsi: "Kain batik dalam berbagai warna dan desain.",
        harga: "Rp 150.000 - Rp 400.000/meter",
        foto: "kainbatik.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Membatik",
        tanggal: "10 Februari 2023",
        deskripsi: "Pelatihan membuat batik untuk pemula.",
      },
      {
        id: 2,
        nama: "Pameran Batik Lokal",
        tanggal: "5 Maret 2023",
        deskripsi: "Pameran batik lokal di desa.",
      },
    ],
    kontak: {
      alamat: "Jl. Batik No. 87, Desa Batik",
      telepon: "+62 1234 5678",
      email: "tokobatikcantik@email.com",
      website: "www.tokobatikcantik.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokobatikcantik",
      instagram: "instagram.com/tokobatikcantik",
      twitter: "twitter.com/tokobatikcantik",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.200.000.000",
      labaBersih: "Rp 250.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan koleksi batik dengan motif modern.",
      "Membuka cabang toko di kota terdekat untuk memperluas pasar.",
      "Mengadakan workshop batik secara reguler untuk pelanggan.",
      "Memperluas jaringan distribusi untuk mencapai pasar luar desa.",
      "Berpartisipasi dalam pameran batik nasional untuk meningkatkan eksposur.",
    ],
  },
  {
    id: 7,
    nama: "Tani Mandiri",
    profil:
      "Tani Mandiri adalah kelompok tani yang fokus pada pertanian organik dan budidaya ikan.",
    foto: "tani-mandiri.jpg",
    ulasan:
      "Produk dari Tani Mandiri selalu segar dan berkualitas tinggi. Saya senang berbelanja di sini.",
    program:
      "Kami memberikan pelatihan tentang pertanian organik kepada petani lokal.",
    dukungan:
      "Kami bekerja sama dengan restoran-restoran lokal untuk memasarkan produk kami.",
    produk: [
      {
        id: 1,
        nama: "Sayur Organik",
        deskripsi: "Sayuran segar hasil pertanian organik.",
        harga: "Rp 10.000/kg",
        foto: "sayurorganik.jpg",
      },
      {
        id: 2,
        nama: "Ikan Segar",
        deskripsi: "Ikan segar dari budidaya lokal.",
        harga: "Rp 50.000/kg",
        foto: "ikansegar.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Pertanian Organik",
        tanggal: "15 Februari 2023",
        deskripsi:
          "Pelatihan bagi petani lokal dalam teknik pertanian organik yang berkelanjutan.",
      },
      {
        id: 2,
        nama: "Pameran Produk Lokal",
        tanggal: "10 Maret 2023",
        deskripsi:
          "Pameran produk-produk pertanian organik dan ikan lokal di desa kami.",
      },
    ],
    kontak: {
      alamat: "Jl. Pertanian No. 56, Desa Mandiri",
      telepon: "+62 1234 5678",
      email: "tanimandiri@email.com",
      website: "www.tanimandiri.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tanimandiri",
      instagram: "instagram.com/tanimandiri",
      twitter: "twitter.com/tanimandiri",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 2.500.000.000",
      labaBersih: "Rp 450.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan lahan pertanian organik kami untuk memenuhi permintaan yang meningkat.",
      "Mengadakan pameran produk di daerah sekitar untuk menjangkau lebih banyak pelanggan.",
      "Menggali potensi ekspor produk pertanian organik ke pasar internasional.",
      "Meningkatkan kapasitas pelatihan pertanian organik bagi petani lokal.",
      "Membangun pusat distribusi produk pertanian organik untuk meningkatkan akses pasar.",
    ],
  },
  {
    id: 8,
    nama: "Toko Kerajinan Cantik",
    profil:
      "Toko Kerajinan Cantik adalah toko yang menjual berbagai kerajinan tangan kreatif.",
    foto: "kerajinan-cantik.jpg",
    ulasan:
      "Saya selalu menemukan kerajinan tangan unik di Toko Kerajinan Cantik. Produk mereka sangat cantik.",
    program:
      "Kami memiliki program pelatihan seni dan kerajinan untuk masyarakat desa.",
    dukungan:
      "Kami mendukung pameran seni lokal dan mempromosikan karya seniman desa.",
    produk: [
      {
        id: 1,
        nama: "Kerajinan Tangan Rajut",
        deskripsi: "Kerajinan tangan rajut dengan berbagai motif.",
        harga: "Rp 50.000 - Rp 200.000",
        foto: "kerajinantangan.jpg",
      },
      {
        id: 2,
        nama: "Lukisan Kanvas",
        deskripsi: "Lukisan kanvas dengan berbagai tema artistik.",
        harga: "Rp 100.000 - Rp 500.000",
        foto: "lukisankanvas.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Seni Lukis",
        tanggal: "20 Februari 2023",
        deskripsi:
          "Pelatihan seni lukis bagi warga desa yang ingin mengembangkan keterampilan seni mereka.",
      },
      {
        id: 2,
        nama: "Pameran Seni Lokal",
        tanggal: "8 Maret 2023",
        deskripsi: "Pameran karya seni lokal di pusat seni desa.",
      },
    ],
    kontak: {
      alamat: "Jl. Seni No. 78, Desa Cantik",
      telepon: "+62 1234 5678",
      email: "tokokerajinancantik@email.com",
      website: "www.tokokerajinancantik.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokokerajinancantik",
      instagram: "instagram.com/tokokerajinancantik",
      twitter: "twitter.com/tokokerajinancantik",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 800.000.000",
      labaBersih: "Rp 200.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan keragaman produk seni dan kerajinan kami.",
      "Mengadakan pameran seni yang lebih besar untuk menarik wisatawan.",
      "Membantu seniman desa mengakses pasar online untuk penjualan produk.",
      "Melakukan kerja sama dengan sekolah-sekolah untuk pelatihan seni.",
      "Membangun galeri seni dan pusat kreatif di desa.",
    ],
  },
  {
    id: 9,
    nama: "Toko Pangan Berkah",
    profil:
      "Toko Pangan Berkah adalah toko kelontong yang menyediakan berbagai kebutuhan sehari-hari.",
    foto: "pangan-berkah.jpg",
    ulasan:
      "Saya selalu berbelanja di Toko Pangan Berkah karena harga mereka terjangkau dan pilihan produknya lengkap.",
    program:
      "Kami memiliki program bagi sembako berkualitas dengan harga terjangkau.",
    dukungan:
      "Kami juga memberikan paket sembako gratis kepada keluarga yang membutuhkan.",
    produk: [
      {
        id: 1,
        nama: "Beras",
        deskripsi: "Beras berkualitas dalam kemasan berat atau eceran.",
        harga: "Rp 10.000/kg",
        foto: "beras.jpg",
      },
      {
        id: 2,
        nama: "Mie Instan",
        deskripsi: "Mie instan berbagai merek dan rasa.",
        harga: "Rp 2.000 - Rp 5.000/pack",
        foto: "mieinstan.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Bagi Sembako Gratis",
        tanggal: "25 Februari 2023",
        deskripsi:
          "Program memberikan paket sembako gratis kepada keluarga kurang mampu di desa.",
      },
      {
        id: 2,
        nama: "Pameran Produk Lokal",
        tanggal: "18 Maret 2023",
        deskripsi:
          "Pameran produk pangan lokal dan olahan di toko Sembako Berkah.",
      },
    ],
    kontak: {
      alamat: "Jl. Sembako No. 89, Desa Berkah",
      telepon: "+62 1234 5678",
      email: "tokopanganberkah@email.com",
      website: "www.tokopanganberkah.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokopanganberkah",
      instagram: "instagram.com/tokopanganberkah",
      twitter: "twitter.com/tokopanganberkah",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.000.000.000",
      labaBersih: "Rp 100.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Memperluas program bagi sembako gratis kepada lebih banyak keluarga yang membutuhkan.",
      "Menggandeng lebih banyak petani lokal untuk memasok produk pangan.",
      "Mengadakan promosi spesial dan diskon pada pameran produk lokal.",
      "Mengoptimalkan layanan pengiriman produk kepada pelanggan.",
    ],
  },
  {
    id: 10,
    nama: "Pusat Kerajinan Desa",
    profil:
      "Pusat Kerajinan Desa adalah tempat untuk membeli kerajinan tangan khas desa.",
    foto: "kerajinandesa.jpg",
    ulasan:
      "Kerajinan tangan dari Pusat Kerajinan Desa selalu unik dan berkualitas. Saya suka sekali!",
    program:
      "Program peningkatan kualitas kerajinan tangan untuk keluarga yang membutuhkan.",
    dukungan: "Dukungan pemasaran kerajinan desa secara nasional.",
    produk: [
      {
        id: 1,
        nama: "Anyaman Rotan",
        deskripsi: "Anyaman rotan dengan berbagai bentuk dan ukuran.",
        harga: "Rp 20.000 - Rp 100.000",
        foto: "anyamanrotan.jpg",
      },
      {
        id: 2,
        nama: "Kerajinan Perak",
        deskripsi: "Kerajinan perak dengan motif tradisional.",
        harga: "Rp 50.000 - Rp 200.000",
        foto: "kerajinanperak.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Peluncuran Produk Baru",
        tanggal: "10 Februari 2023",
        deskripsi: "Peluncuran produk baru oleh Pusat Kerajinan Desa.",
      },
      {
        id: 2,
        nama: "Partisipasi Pameran Nasional",
        tanggal: "3 Maret 2023",
        deskripsi:
          "Pusat Kerajinan Desa akan berpartisipasi dalam pameran kerajinan nasional.",
      },
    ],
    kontak: {
      alamat: "Jl. Kerajinan No. 45, Desa Kerajinan",
      telepon: "+62 1234 5678",
      email: "pusatkerajinandesa@email.com",
      website: "www.pusatkerajinandesa.com",
    },
    sosialMedia: {
      facebook: "facebook.com/pusatkerajinandesa",
      instagram: "instagram.com/pusatkerajinandesa",
      twitter: "twitter.com/pusatkerajinandesa",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 900.000.000",
      labaBersih: "Rp 180.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan variasi produk kerajinan tangan yang lebih banyak.",
      "Menghadiri lebih banyak pameran nasional untuk meningkatkan visibilitas.",
      "Membangun kolaborasi dengan agen perjalanan untuk mempromosikan kerajinan desa.",
      "Meningkatkan kualitas kemasan produk kerajinan tangan kami.",
      "Memperluas jaringan distribusi produk kerajinan desa.",
    ],
  },
  {
    id: 11,
    nama: "Warung Rasa Desa",
    profil:
      "Warung Rasa Desa adalah restoran keluarga yang menyajikan masakan tradisional Indonesia.",
    foto: "warungrasadesa.jpg",
    ulasan:
      "Saya suka sekali makan di Warung Rasa Desa. Rasa masakannya sangat autentik.",
    program:
      "Kami memiliki program masak bersama di mana kami mengajak pelanggan untuk memasak bersama koki kami.",
    dukungan:
      "Kami mendukung pelatihan koki lokal untuk memastikan kualitas masakan kami tetap tinggi.",
    produk: [
      {
        id: 1,
        nama: "Nasi Goreng Spesial",
        deskripsi:
          "Nasi goreng dengan campuran bumbu rahasia dan irisan telur dadar.",
        harga: "Rp 25.000",
        foto: "nasigorengspesial.jpg",
      },
      {
        id: 2,
        nama: "Sate Ayam Madura",
        deskripsi: "Sate ayam dengan bumbu kacang khas Madura.",
        harga: "Rp 30.000",
        foto: "sateayammadura.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kelas Masak Bersama",
        tanggal: "12 Februari 2023",
        deskripsi:
          "Kelas memasak bersama koki kami untuk pelanggan yang ingin belajar masakan tradisional.",
      },
      {
        id: 2,
        nama: "Promosi Menu Baru",
        tanggal: "5 Maret 2023",
        deskripsi: "Promosi menu baru kami dengan diskon khusus.",
      },
    ],
    kontak: {
      alamat: "Jl. Rasa No. 23, Desa Rasa",
      telepon: "+62 1234 5678",
      email: "warungrasadesa@email.com",
      website: "www.warungrasadesa.com",
    },
    sosialMedia: {
      facebook: "facebook.com/warungrasadesa",
      instagram: "instagram.com/warungrasadesa",
      twitter: "twitter.com/warungrasadesa",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.800.000.000",
      labaBersih: "Rp 360.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan menu makanan khas desa yang lebih beragam.",
      "Mengadakan acara tematik untuk menarik wisatawan.",
      "Mengadakan festival kuliner desa untuk mempromosikan masakan tradisional.",
      "Mengoptimalkan layanan pesan antar untuk meningkatkan omzet.",
      "Mengembangkan layanan katering untuk acara-acara khusus.",
    ],
  },
  {
    id: 12,
    nama: "Toko Kecantikan Wulan",
    profil:
      "Toko Kecantikan Wulan adalah toko yang menjual produk kecantikan dan perawatan kulit.",
    foto: "tokokecantikanwulan.jpg",
    ulasan:
      "Saya selalu membeli produk kecantikan di Toko Kecantikan Wulan. Kualitasnya terjamin.",
    program:
      "Kami memberikan konsultasi kecantikan gratis kepada pelanggan kami.",
    dukungan:
      "Kami mendukung penggunaan produk kecantikan lokal dengan kualitas tinggi.",
    produk: [
      {
        id: 1,
        nama: "Pelembab Wajah",
        deskripsi: "Pelembab wajah dengan kandungan alami untuk kulit sehat.",
        harga: "Rp 50.000 - Rp 150.000",
        foto: "pelembabwajah.jpg",
      },
      {
        id: 2,
        nama: "Sabun Mandi",
        deskripsi: "Sabun mandi dengan aroma segar dan lembut di kulit.",
        harga: "Rp 20.000 - Rp 50.000",
        foto: "sabunmandi.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Konsultasi Kecantikan Gratis",
        tanggal: "18 Februari 2023",
        deskripsi:
          "Konsultasi kecantikan gratis untuk pelanggan yang ingin saran tentang perawatan kulit.",
      },
      {
        id: 2,
        nama: "Promosi Produk Baru",
        tanggal: "10 Maret 2023",
        deskripsi: "Promosi produk kecantikan baru kami dengan diskon khusus.",
      },
    ],
    kontak: {
      alamat: "Jl. Kecantikan No. 34, Desa Kecantikan",
      telepon: "+62 1234 5678",
      email: "tokokecantikanwulan@email.com",
      website: "www.tokokecantikanwulan.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokokecantikanwulan",
      instagram: "instagram.com/tokokecantikanwulan",
      twitter: "twitter.com/tokokecantikanwulan",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 600.000.000",
      labaBersih: "Rp 120.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan produk kecantikan yang lebih beragam dan inovatif.",
      "Membangun layanan konsultasi kecantikan online.",
      "Mengadakan pelatihan kecantikan bagi wanita di desa.",
      "Meningkatkan promosi produk kecantikan kami secara online.",
      "Berinvestasi dalam penelitian dan pengembangan produk kecantikan.",
    ],
  },
  {
    id: 13,
    nama: "Taman Bunga Indah",
    profil:
      "Taman Bunga Indah adalah taman bunga yang menawarkan berbagai jenis bunga dan tanaman hias.",
    foto: "tamanbungaindah.jpg",
    ulasan:
      "Taman Bunga Indah adalah tempat yang indah untuk berjalan-jalan. Bunga-bunga di sini sangat cantik.",
    program:
      "Kami memberikan pelatihan bercocok tanam dan tata cara merawat tanaman.",
    dukungan:
      "Kami mendukung kegiatan taman bunga dan kebun buah lokal di desa.",
    produk: [
      {
        id: 1,
        nama: "Tanaman Hias",
        deskripsi: "Tanaman hias berbagai jenis dan ukuran.",
        harga: "Rp 10.000 - Rp 100.000",
        foto: "tanamanhias.jpg",
      },
      {
        id: 2,
        nama: "Bunga Potong",
        deskripsi: "Bunga potong segar yang bisa dijadikan hiasan.",
        harga: "Rp 5.000 - Rp 50.000/ikat",
        foto: "bungapotong.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Bercocok Tanam",
        tanggal: "22 Februari 2023",
        deskripsi:
          "Pelatihan bercocok tanam untuk pemula dan pecinta tanaman hias.",
      },
      {
        id: 2,
        nama: "Pameran Tanaman Hias",
        tanggal: "15 Maret 2023",
        deskripsi: "Pameran tanaman hias lokal di Taman Bunga Indah.",
      },
    ],
    kontak: {
      alamat: "Jl. Bunga No. 67, Desa Indah",
      telepon: "+62 1234 5678",
      email: "tamanbungaindah@email.com",
      website: "www.tamanbungaindah.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tamanbungaindah",
      instagram: "instagram.com/tamanbungaindah",
      twitter: "twitter.com/tamanbungaindah",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 700.000.000",
      labaBersih: "Rp 140.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan varietas tanaman hias yang lebih banyak.",
      "Mengadakan pameran taman bunga dan kebun buah lebih sering.",
      "Menggandeng pihak-pihak lokal untuk mengadakan acara-acara taman.",
      "Membuka kafe di Taman Bunga Indah untuk wisatawan.",
      "Menyediakan layanan jasa perawatan taman bagi pelanggan.",
    ],
  },
  {
    id: 14,
    nama: "Warung Petani",
    profil:
      "Warung Petani adalah tempat makanan yang menyajikan hidangan tradisional dari hasil pertanian lokal.",
    foto: "warungpetani.jpg",
    ulasan:
      "Makanan di Warung Petani selalu enak dan sehat. Saya suka sekali rasanya.",
    program:
      "Kami bekerja sama dengan petani lokal untuk memasok bahan makanan segar.",
    dukungan:
      "Kami mendukung pertanian lokal dan berpartisipasi dalam pasar petani desa.",
    produk: [
      {
        id: 1,
        nama: "Nasi Liwet",
        deskripsi: "Nasi liwet dengan bumbu tradisional dan lauk-pauk segar.",
        harga: "Rp 20.000/piring",
        foto: "nasiliwet.jpg",
      },
      {
        id: 2,
        nama: "Sayur Asem",
        deskripsi: "Sayur asem segar dengan bumbu khas.",
        harga: "Rp 15.000/mangkuk",
        foto: "sayurasem.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Makan Bersama Petani",
        tanggal: "20 Februari 2023",
        deskripsi:
          "Makan bersama petani lokal untuk mempromosikan pertanian dan makanan lokal.",
      },
      {
        id: 2,
        nama: "Partisipasi Pasar Petani",
        tanggal: "10 Maret 2023",
        deskripsi: "Warung Petani akan berpartisipasi dalam pasar petani desa.",
      },
    ],
    kontak: {
      alamat: "Jl. Pertanian No. 45, Desa Petani",
      telepon: "+62 1234 5678",
      email: "warungpetani@email.com",
      website: "www.warungpetani.com",
    },
    sosialMedia: {
      facebook: "facebook.com/warungpetani",
      instagram: "instagram.com/warungpetani",
      twitter: "twitter.com/warungpetani",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.500.000.000",
      labaBersih: "Rp 300.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan menu makanan dengan hidangan tradisional yang lebih beragam.",
      "Membuka layanan pesan antar untuk makanan.",
      "Mengadakan acara makan bersama petani secara berkala.",
      "Mengembangkan kemitraan dengan restoran-restoran lokal.",
      "Menggandeng petani lokal untuk meningkatkan pasokan bahan makanan.",
    ],
  },
  {
    id: 15,
    nama: "Toko Alat Rumah Tangga",
    profil:
      "Toko Alat Rumah Tangga adalah toko yang menyediakan berbagai alat rumah tangga dan peralatan dapur.",
    foto: "tokoalatrumahtangga.jpg",
    ulasan:
      "Saya sering berbelanja di Toko Alat Rumah Tangga. Mereka memiliki banyak pilihan alat rumah tangga yang berguna.",
    program:
      "Kami memberikan pelatihan penggunaan alat rumah tangga kepada pelanggan kami.",
    dukungan:
      "Kami mendukung kegiatan gotong royong dalam perbaikan rumah di desa.",
    produk: [
      {
        id: 1,
        nama: "Panci Set",
        deskripsi: "Set panci dengan berbagai ukuran dan model.",
        harga: "Rp 100.000 - Rp 500.000",
        foto: "panciset.jpg",
      },
      {
        id: 2,
        nama: "Alat Masak",
        deskripsi: "Berbagai alat masak dari spatula hingga pisau dapur.",
        harga: "Rp 20.000 - Rp 100.000",
        foto: "alatmasak.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Penggunaan Alat Dapur",
        tanggal: "25 Februari 2023",
        deskripsi:
          "Pelatihan penggunaan alat dapur bagi pelanggan yang ingin memasak lebih baik.",
      },
      {
        id: 2,
        nama: "Gotong Royong Perbaikan Rumah",
        tanggal: "15 Maret 2023",
        deskripsi:
          "Partisipasi dalam gotong royong perbaikan rumah di desa kami.",
      },
    ],
    kontak: {
      alamat: "Jl. Alat No. 56, Desa Tangga",
      telepon: "+62 1234 5678",
      email: "tokoalatrumahtangga@email.com",
      website: "www.tokoalatrumahtangga.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokoalatrumahtangga",
      instagram: "instagram.com/tokoalatrumahtangga",
      twitter: "twitter.com/tokoalatrumahtangga",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 800.000.000",
      labaBersih: "Rp 160.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan produk alat rumah tangga yang lebih inovatif.",
      "Mengadakan program pelatihan lebih sering untuk pelanggan.",
      "Menggandeng pengrajin lokal untuk memasok produk kami.",
      "Mengadakan program sosial yang lebih aktif dalam mendukung masyarakat desa.",
      "Membuka layanan pesan antar produk alat rumah tangga.",
    ],
  },
  {
    id: 16,
    nama: "Toko Fashion Desa",
    profil:
      "Toko Fashion Desa adalah toko pakaian dan aksesoris yang menawarkan produk fashion lokal.",
    foto: "tokofashiondesa.jpg",
    ulasan:
      "Saya suka berbelanja di Toko Fashion Desa. Mereka memiliki pilihan pakaian yang bagus dan unik.",
    program:
      "Kami memberikan pelatihan desain pakaian kepada pemuda dan pemudi desa.",
    dukungan:
      "Kami mendukung kegiatan fashion show lokal dan mendukung desainer lokal.",
    produk: [
      {
        id: 1,
        nama: "Baju Wanita",
        deskripsi: "Berbagai model baju wanita dengan desain unik.",
        harga: "Rp 50.000 - Rp 300.000",
        foto: "bajuwanita.jpg",
      },
      {
        id: 2,
        nama: "Aksesoris",
        deskripsi:
          "Aksesoris fashion seperti kalung, gelang, dan anting-anting.",
        harga: "Rp 10.000 - Rp 50.000",
        foto: "aksesoris.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Desain Pakaian",
        tanggal: "22 Februari 2023",
        deskripsi: "Pelatihan desain pakaian untuk pemuda dan pemudi desa.",
      },
      {
        id: 2,
        nama: "Fashion Show Lokal",
        tanggal: "18 Maret 2023",
        deskripsi:
          "Partisipasi dalam fashion show lokal untuk mempromosikan desain lokal.",
      },
    ],
    kontak: {
      alamat: "Jl. Fashion No. 78, Desa Fashion",
      telepon: "+62 1234 5678",
      email: "tokofashiondesa@email.com",
      website: "www.tokofashiondesa.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokofashiondesa",
      instagram: "instagram.com/tokofashiondesa",
      twitter: "twitter.com/tokofashiondesa",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.200.000.000",
      labaBersih: "Rp 240.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan koleksi pakaian dengan desain yang lebih kreatif.",
      "Mengadakan fashion show regional untuk memperluas eksposur produk kami.",
      "Menggandeng desainer lokal untuk menciptakan kolaborasi produk.",
      "Mengadakan program pelatihan desain mode yang lebih intensif.",
      "Meningkatkan branding dan promosi online produk fashion kami.",
    ],
  },
  {
    id: 17,
    nama: "Tani Peternakan Sejahtera",
    profil:
      "Tani Peternakan Sejahtera adalah kelompok peternakan yang menghasilkan produk daging dan susu.",
    foto: "tanipeternakansejahtera.jpg",
    ulasan:
      "Produk dari Tani Peternakan Sejahtera selalu segar dan berkualitas tinggi. Saya senang berbelanja di sini.",
    program:
      "Kami memberikan pelatihan peternakan kepada petani lokal untuk meningkatkan kualitas produk.",
    dukungan:
      "Kami mendukung pameran peternakan lokal dan berpartisipasi dalam pasar peternakan desa.",
    produk: [
      {
        id: 1,
        nama: "Daging Sapi Segar",
        deskripsi: "Daging sapi segar dari peternakan kami.",
        harga: "Rp 80.000/kg",
        foto: "dagingsapi.jpg",
      },
      {
        id: 2,
        nama: "Susu Sapi Murni",
        deskripsi: "Susu sapi murni dengan kualitas terbaik.",
        harga: "Rp 15.000/liter",
        foto: "sususapi.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Peternakan",
        tanggal: "20 Februari 2023",
        deskripsi: "Pelatihan peternakan untuk petani lokal.",
      },
      {
        id: 2,
        nama: "Pameran Peternakan",
        tanggal: "8 Maret 2023",
        deskripsi: "Partisipasi dalam pameran peternakan lokal di pasar desa.",
      },
    ],
    kontak: {
      alamat: "Jl. Peternakan No. 45, Desa Peternakan",
      telepon: "+62 1234 5678",
      email: "tanipeternakansejahtera@email.com",
      website: "www.tanipeternakansejahtera.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tanipeternakansejahtera",
      instagram: "instagram.com/tanipeternakansejahtera",
      twitter: "twitter.com/tanipeternakansejahtera",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 2.000.000.000",
      labaBersih: "Rp 400.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan kemitraan dengan restoran lokal untuk pasokan daging.",
      "Mengoptimalkan proses penggemukan sapi untuk meningkatkan produksi daging.",
      "Mengadakan promosi khusus pada pameran peternakan lokal.",
      "Membangun pusat pelatihan peternakan.",
      "Memperluas distribusi produk susu sapi kami.",
    ],
  },
  {
    id: 18,
    nama: "Toko Buku Cerdas",
    profil:
      "Toko Buku Cerdas adalah toko buku dan alat tulis yang menyediakan bahan bacaan dan perlengkapan sekolah.",
    foto: "tokobukucerdas.jpg",
    ulasan:
      "Saya selalu belanja buku di Toko Buku Cerdas. Mereka memiliki koleksi buku yang bagus.",
    program:
      "Kami memiliki program donasi buku untuk sekolah-sekolah di desa yang membutuhkan.",
    dukungan:
      "Kami mendukung kegiatan literasi di desa dan bekerja sama dengan guru-guru lokal.",
    produk: [
      {
        id: 1,
        nama: "Buku Pelajaran",
        deskripsi: "Buku pelajaran untuk berbagai tingkatan sekolah.",
        harga: "Rp 20.000 - Rp 100.000",
        foto: "bukupelajaran.jpg",
      },
      {
        id: 2,
        nama: "Alat Tulis",
        deskripsi: "Alat tulis seperti pensil, penggaris, dan buku catatan.",
        harga: "Rp 5.000 - Rp 20.000",
        foto: "alattulis.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Donasi Buku ke Sekolah",
        tanggal: "25 Februari 2023",
        deskripsi: "Donasi buku pelajaran ke sekolah-sekolah di desa kami.",
      },
      {
        id: 2,
        nama: "Pelatihan Literasi Anak",
        tanggal: "10 Maret 2023",
        deskripsi: "Pelatihan literasi anak-anak di perpustakaan desa.",
      },
    ],
    kontak: {
      alamat: "Jl. Buku No. 34, Desa Buku",
      telepon: "+62 1234 5678",
      email: "tokobukucerdas@email.com",
      website: "www.tokobukucerdas.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokobukucerdas",
      instagram: "instagram.com/tokobukucerdas",
      twitter: "twitter.com/tokobukucerdas",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 700.000.000",
      labaBersih: "Rp 140.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Memperluas program donasi buku ke lebih banyak sekolah.",
      "Mengadakan program literasi yang lebih aktif dan melibatkan lebih banyak anak-anak.",
      "Mengembangkan layanan pengiriman buku ke rumah.",
      "Mengadakan acara baca buku dan diskusi di toko.",
      "Menggandeng penulis lokal untuk acara penandatanganan buku.",
    ],
  },
  {
    id: 19,
    nama: "Toko Batik Srikandi",
    profil:
      "Toko Batik Srikandi adalah tempat terbaik untuk mendapatkan batik asli Indonesia dengan desain eksklusif.",
    foto: "batiksrikandi.jpg",
    ulasan:
      "Saya suka koleksi batik di Toko Batik Srikandi. Mereka selalu memiliki desain yang unik.",
    program:
      "Kami memiliki program kursus batik bagi mereka yang ingin belajar seni membuat batik.",
    dukungan:
      "Kami mendukung petani kopi lokal dengan membeli biji kopi langsung dari mereka.",
    produk: [
      {
        id: 1,
        nama: "Batik Cap Prambanan",
        deskripsi: "Batik cap dengan motif candi Prambanan yang indah.",
        harga: "Rp 350.000",
        foto: "batikprambanan.jpg",
      },
      {
        id: 2,
        nama: "Batik Tulis Parang",
        deskripsi: "Batik tulis dengan motif parang yang elegan.",
        harga: "Rp 450.000",
        foto: "batikparang.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kursus Batik",
        tanggal: "8 April 2023",
        deskripsi:
          "Kursus batik untuk pemula dan tingkat lanjut di Toko Batik Srikandi.",
      },
      {
        id: 2,
        nama: "Pameran Batik",
        tanggal: "20 Mei 2023",
        deskripsi: "Pameran batik dengan berbagai koleksi batik eksklusif.",
      },
    ],
    kontak: {
      alamat: "Jl. Batik No. 45, Desa Batik",
      telepon: "+62 9876 5432",
      email: "tokobatiksrikandi@email.com",
      website: "www.batiksrikandi.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokobatiksrikandi",
      instagram: "instagram.com/tokobatiksrikandi",
      twitter: "twitter.com/tokobatiksrikandi",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.200.000.000",
      labaBersih: "Rp 300.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan desain batik yang lebih kreatif dan modern.",
      "Menggelar pameran batik internasional untuk meningkatkan eksposur.",
      "Mengadakan program pelatihan batik gratis untuk masyarakat setempat.",
      "Membuka cabang toko di pusat perbelanjaan terkemuka.",
    ],
  },
  {
    id: 20,
    nama: "Kedai Kopi Nusantara",
    profil:
      "Kedai Kopi Nusantara adalah tempat terbaik untuk menikmati kopi premium dari berbagai daerah di Indonesia.",
    foto: "kedai-kopi.jpg",
    ulasan:
      "Kopi di Kedai Kopi Nusantara selalu segar dan nikmat. Tempatnya juga nyaman untuk berkumpul.",
    program:
      "Kami memiliki program kopi tasting setiap bulan di mana pelanggan dapat mencoba berbagai jenis kopi.",
    dukungan:
      "Kami mendukung petani kopi lokal dengan membeli biji kopi langsung dari mereka.",
    produk: [
      {
        id: 1,
        nama: "Kopi Aceh Gayo",
        deskripsi:
          "Kopi Aceh Gayo dengan rasa yang khas dan aroma yang menggoda.",
        harga: "Rp 35.000",
        foto: "kopiaceh.jpg",
      },
      {
        id: 2,
        nama: "Kopi Toraja",
        deskripsi: "Kopi Toraja dengan cita rasa yang kuat dan berani.",
        harga: "Rp 40.000",
        foto: "kopitoraja.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kopi Tasting",
        tanggal: "15 Mei 2023",
        deskripsi: "Kopi Tasting untuk pecinta kopi di Kedai Kopi Nusantara.",
      },
      {
        id: 2,
        nama: "Promosi Menu Baru",
        tanggal: "8 Juni 2023",
        deskripsi: "Promosi menu kopi baru dengan diskon istimewa.",
      },
    ],
    kontak: {
      alamat: "Jl. Kopi No. 123, Desa Kopi",
      telepon: "+62 1234 5678",
      email: "kedaikopinusantara@email.com",
      website: "www.kedaikopinusantara.com",
    },
    sosialMedia: {
      facebook: "facebook.com/kedaikopinusantara",
      instagram: "instagram.com/kedaikopinusantara",
      twitter: "twitter.com/kedaikopinusantara",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 800.000.000",
      labaBersih: "Rp 200.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan variasi menu kopi dengan cita rasa baru.",
      "Mengadakan kursus memanggang kopi untuk mengedukasi masyarakat lokal.",
      "Membuka cabang kedai kopi di pusat perbelanjaan.",
      "Menggali lebih banyak sumber biji kopi lokal.",
    ],
  },
  {
    id: 21,
    nama: "Tahu Gejrot Ibu Yani",
    profil:
      "Tahu Gejrot Ibu Yani adalah jajanan khas Jawa Barat yang nikmat dan segar.",
    foto: "tahugejrot.jpg",
    ulasan:
      "Tahu Gejrot di sini benar-benar enak! Saya selalu kembali untuk menikmati rasanya.",
    program:
      "Kami memiliki program kursus membuat Tahu Gejrot bagi para pecinta masakan tradisional.",
    dukungan:
      "Kami membeli tahu dari petani lokal yang menanam kedelai berkualitas.",
    produk: [
      {
        id: 1,
        nama: "Tahu Gejrot Pedas",
        deskripsi: "Tahu Gejrot dengan sambal pedas yang menggugah selera.",
        harga: "Rp 15.000",
        foto: "tahugejrotpedas.jpg",
      },
      {
        id: 2,
        nama: "Tahu Gejrot Manis",
        deskripsi: "Tahu Gejrot dengan sambal manis yang lezat.",
        harga: "Rp 15.000",
        foto: "tahugejrotmanis.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kursus Membuat Tahu Gejrot",
        tanggal: "10 April 2023",
        deskripsi: "Kursus memasak tahu gejrot yang lezat dengan Ibu Yani.",
      },
      {
        id: 2,
        nama: "Promosi Tahu Gejrot",
        tanggal: "1 Mei 2023",
        deskripsi: "Promosi spesial tahu gejrot dengan diskon khusus.",
      },
    ],
    kontak: {
      alamat: "Jl. Tahu Gejrot No. 7, Desa Tahu",
      telepon: "+62 8765 4321",
      email: "tahugejrotibuyani@email.com",
      website: "www.tahugejrotibuyani.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tahugejrotibuyani",
      instagram: "instagram.com/tahugejrotibuyani",
      twitter: "twitter.com/tahugejrotibuyani",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 800.000.000",
      labaBersih: "Rp 200.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan variasi rasa tahu gejrot.",
      "Membuka cabang baru di pusat perbelanjaan.",
      "Melakukan pelatihan tahu gejrot untuk masyarakat lokal.",
      "Meningkatkan pemasaran online melalui media sosial.",
    ],
  },
  {
    id: 22,
    nama: "Toko Kerajinan Ibu Ratna",
    profil:
      "Toko Kerajinan Ibu Ratna adalah tempat untuk membeli kerajinan tangan unik dan indah.",
    foto: "kerajinanratna.jpg",
    ulasan:
      "Saya selalu menemukan hadiah yang sempurna di Toko Kerajinan Ibu Ratna.",
    program:
      "Kami memiliki program kursus membuat kerajinan bagi para pecinta seni dan kerajinan.",
    dukungan:
      "Kami mendukung para pengrajin lokal dengan memasarkan produk kerajinan mereka.",
    produk: [
      {
        id: 1,
        nama: "Kerajinan Perak",
        deskripsi: "Kerajinan perak handmade dengan desain eksklusif.",
        harga: "Rp 500.000",
        foto: "kerajinanperak.jpg",
      },
      {
        id: 2,
        nama: "Kerajinan Anyaman",
        deskripsi: "Kerajinan anyaman dari bahan alami.",
        harga: "Rp 350.000",
        foto: "kerajinananyaman.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kursus Kerajinan",
        tanggal: "5 April 2023",
        deskripsi:
          "Kursus membuat kerajinan tangan yang indah di Toko Kerajinan Ibu Ratna.",
      },
      {
        id: 2,
        nama: "Pameran Kerajinan",
        tanggal: "18 Mei 2023",
        deskripsi: "Pameran kerajinan tangan dengan berbagai produk unik.",
      },
    ],
    kontak: {
      alamat: "Jl. Kerajinan No. 123, Desa Kerajinan",
      telepon: "+62 9876 5432",
      email: "tokokerajinaniburatna@email.com",
      website: "www.tokokerajinaniburatna.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokokerajinaniburatna",
      instagram: "instagram.com/tokokerajinaniburatna",
      twitter: "twitter.com/tokokerajinaniburatna",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.000.000.000",
      labaBersih: "Rp 250.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan produk kerajinan dengan desain yang lebih kreatif.",
      "Mengadakan pameran seni untuk mengekspos produk lokal.",
      "Mendukung pelatihan kerajinan untuk anak-anak muda.",
      "Mengembangkan pasar luar daerah melalui platform online.",
    ],
  },
  {
    id: 23,
    nama: "Toko Oleh-oleh Bunda",
    profil:
      "Toko Oleh-oleh Bunda adalah tempat terbaik untuk membeli oleh-oleh khas daerah.",
    foto: "oleholehbunda.jpg",
    ulasan:
      "Saya selalu membawa oleh-oleh dari Toko Oleh-oleh Bunda setiap kali saya bepergian.",
    program:
      "Kami memiliki program diskon khusus untuk pembelian oleh-oleh dalam jumlah besar.",
    dukungan:
      "Kami mendukung para produsen oleh-oleh lokal dengan memasarkan produk mereka.",
    produk: [
      {
        id: 1,
        nama: "Kue Pepe",
        deskripsi: "Kue tradisional dengan rasa manis dan lembut.",
        harga: "Rp 15.000",
        foto: "kuepepe.jpg",
      },
      {
        id: 2,
        nama: "Keripik Singkong",
        deskripsi: "Keripik singkong dengan rasa gurih yang lezat.",
        harga: "Rp 10.000",
        foto: "keripiksingkong.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Promosi Oleh-oleh",
        tanggal: "7 April 2023",
        deskripsi: "Promosi oleh-oleh khas daerah dengan harga istimewa.",
      },
      {
        id: 2,
        nama: "Pameran Oleh-oleh",
        tanggal: "15 Mei 2023",
        deskripsi: "Pameran oleh-oleh khas daerah dengan berbagai produk unik.",
      },
    ],
    kontak: {
      alamat: "Jl. Oleh-oleh No. 45, Desa Oleh-oleh",
      telepon: "+62 8765 4321",
      email: "tokooleholehbunda@email.com",
      website: "www.tokooleholehbunda.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokooleholehbunda",
      instagram: "instagram.com/tokooleholehbunda",
      twitter: "twitter.com/tokooleholehbunda",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 900.000.000",
      labaBersih: "Rp 150.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan variasi oleh-oleh dengan rasa yang beragam.",
      "Mengadakan promosi khusus untuk pelanggan setia.",
      "Mengembangkan pasar online untuk meningkatkan penjualan oleh-oleh.",
    ],
  },
  {
    id: 24,
    nama: "Toko Alat Pertanian Mas Joko",
    profil:
      "Toko Alat Pertanian Mas Joko adalah tempat terbaik untuk membeli alat pertanian berkualitas.",
    foto: "alatpertanianmasjoko.jpg",
    ulasan:
      "Saya selalu membeli alat pertanian dari Toko Mas Joko. Kualitasnya tidak pernah mengecewakan.",
    program:
      "Kami memiliki program pelatihan penggunaan alat pertanian bagi petani lokal.",
    dukungan:
      "Kami mendukung petani lokal dengan menyediakan alat pertanian berkualitas tinggi.",
    produk: [
      {
        id: 1,
        nama: "Traktor Mini",
        deskripsi: "Traktor mini dengan mesin yang kuat.",
        harga: "Rp 5.000.000",
        foto: "traktormini.jpg",
      },
      {
        id: 2,
        nama: "Mesin Padi",
        deskripsi: "Mesin padi otomatis untuk panen yang efisien.",
        harga: "Rp 8.000.000",
        foto: "mesinpadi.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Pelatihan Penggunaan Alat Pertanian",
        tanggal: "12 April 2023",
        deskripsi:
          "Pelatihan penggunaan alat pertanian modern untuk petani lokal.",
      },
      {
        id: 2,
        nama: "Promosi Alat Pertanian",
        tanggal: "10 Mei 2023",
        deskripsi:
          "Promosi alat pertanian berkualitas dengan penawaran spesial.",
      },
    ],
    kontak: {
      alamat: "Jl. Pertanian No. 789, Desa Pertanian",
      telepon: "+62 9876 5432",
      email: "tokopertanianmasjoko@email.com",
      website: "www.tokopertanianmasjoko.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokopertanianmasjoko",
      instagram: "instagram.com/tokopertanianmasjoko",
      twitter: "twitter.com/tokopertanianmasjoko",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.500.000.000",
      labaBersih: "Rp 350.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengadakan pelatihan alat pertanian secara rutin.",
      "Memperluas stok alat pertanian yang tersedia.",
      "Mengadakan program pemeliharaan alat pertanian bagi petani lokal.",
      "Mengembangkan layanan pengiriman alat pertanian ke daerah sekitar.",
    ],
  },
  {
    id: 25,
    nama: "Warung Makan Bu Tini",
    profil:
      "Warung Makan Bu Tini adalah tempat terbaik untuk menikmati masakan tradisional Indonesia dengan cita rasa autentik.",
    foto: "warungbutiono.jpg",
    ulasan:
      "Makanan di Warung Makan Bu Tini selalu lezat. Saya suka datang ke sini bersama keluarga.",
    program:
      "Kami memiliki program masak bersama di mana kami mengajak pelanggan untuk memasak bersama koki kami.",
    dukungan:
      "Kami mendukung pelatihan koki lokal untuk memastikan kualitas masakan kami tetap tinggi.",
    produk: [
      {
        id: 1,
        nama: "Nasi Goreng Special",
        deskripsi:
          "Nasi goreng dengan campuran bumbu rahasia dan irisan telur dadar.",
        harga: "Rp 25.000",
        foto: "nasigoreng.jpg",
      },
      {
        id: 2,
        nama: "Sate Ayam Madura",
        deskripsi: "Sate ayam dengan bumbu kacang khas Madura.",
        harga: "Rp 30.000",
        foto: "sateayam.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kelas Masak Bersama",
        tanggal: "12 Februari 2023",
        deskripsi:
          "Kelas memasak bersama koki kami untuk pelanggan yang ingin belajar masakan tradisional.",
      },
      {
        id: 2,
        nama: "Promosi Menu Baru",
        tanggal: "5 Maret 2023",
        deskripsi:
          "Promosi menu baru kami dengan diskon khusus untuk pelanggan setia.",
      },
    ],
    kontak: {
      alamat: "Jl. Kuliner No. 123, Desa Kuliner",
      telepon: "+62 1234 5678",
      email: "warungibukoki@email.com",
      website: "www.warungibukoki.com",
    },
    sosialMedia: {
      facebook: "facebook.com/warungibukoki",
      instagram: "instagram.com/warungibukoki",
      twitter: "twitter.com/warungibukoki",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.500.000.000",
      labaBersih: "Rp 350.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan menu dengan lebih banyak variasi untuk memenuhi selera pelanggan yang beragam.",
      "Mengadakan promosi khusus dan acara untuk meningkatkan kunjungan pelanggan.",
      "Menggali peluang kemitraan dengan penyedia bahan baku lokal.",
      "Melakukan ekspansi ke area sekitar untuk menjangkau lebih banyak pelanggan.",
      "Terus mengadakan kelas memasak bersama untuk melibatkan pelanggan lebih aktif.",
    ],
  },
  {
    id: 26,
    nama: "Toko Sandal Jepit Pak Slamet",
    profil:
      "Toko Sandal Jepit Pak Slamet adalah tempat terbaik untuk mendapatkan sandal jepit berkualitas dengan desain kreatif.",
    foto: "sandaljepit.jpg",
    ulasan:
      "Sandal jepit di sini nyaman digunakan dan tahan lama. Saya sudah menjadi pelanggan setia.",
    program:
      "Kami memiliki program diskon khusus untuk pembelian sandal jepit dalam jumlah besar.",
    dukungan:
      "Kami mendukung para pengrajin sandal jepit lokal dengan memasarkan produk mereka.",
    produk: [
      {
        id: 1,
        nama: "Sandal Jepit Santai",
        deskripsi:
          "Sandal jepit dengan desain yang nyaman untuk dipakai sehari-hari.",
        harga: "Rp 50.000",
        foto: "sandaljepitsantai.jpg",
      },
      {
        id: 2,
        nama: "Sandal Jepit Pantai",
        deskripsi: "Sandal jepit dengan desain yang cocok untuk pantai.",
        harga: "Rp 60.000",
        foto: "sandaljepitpantai.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Promosi Sandal Jepit",
        tanggal: "10 April 2023",
        deskripsi: "Promosi sandal jepit berkualitas dengan harga spesial.",
      },
      {
        id: 2,
        nama: "Pameran Sandal Jepit",
        tanggal: "22 Mei 2023",
        deskripsi: "Pameran sandal jepit dengan berbagai desain kreatif.",
      },
    ],
    kontak: {
      alamat: "Jl. Sandal No. 789, Desa Sandal",
      telepon: "+62 9876 5432",
      email: "tokosandaljepitpakslamet@email.com",
      website: "www.tokosandaljepitpakslamet.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokosandaljepitpakslamet",
      instagram: "instagram.com/tokosandaljepitpakslamet",
      twitter: "twitter.com/tokosandaljepitpakslamet",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 700.000.000",
      labaBersih: "Rp 150.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan desain sandal jepit yang lebih kreatif.",
      "Mengadakan pameran seni untuk mengekspos produk lokal.",
      "Mendukung pelatihan pembuatan sandal jepit untuk anak-anak muda.",
      "Mengembangkan pasar luar daerah melalui platform online.",
    ],
  },
  {
    id: 27,
    nama: "Toko Herbal Mbak Fitri",
    profil:
      "Toko Herbal Mbak Fitri adalah tempat terbaik untuk mendapatkan herbal alami dan produk kesehatan berkualitas.",
    foto: "tokoherbal.jpg",
    ulasan:
      "Saya selalu membeli herbal di Toko Herbal Mbak Fitri. Kualitasnya sangat baik.",
    program:
      "Kami memiliki program konsultasi kesehatan dengan ahli herbal setiap hari Sabtu.",
    dukungan:
      "Kami mendukung petani herbal lokal dengan membeli bahan baku langsung dari mereka.",
    produk: [
      {
        id: 1,
        nama: "Jahe Merah",
        deskripsi: "Jahe merah alami dengan manfaat kesehatan yang luar biasa.",
        harga: "Rp 20.000",
        foto: "jahe.jpg",
      },
      {
        id: 2,
        nama: "Madu Murni",
        deskripsi: "Madu murni tanpa tambahan gula.",
        harga: "Rp 30.000",
        foto: "madu.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Konsultasi Kesehatan Herbal",
        tanggal: "15 April 2023",
        deskripsi:
          "Konsultasi kesehatan dengan ahli herbal di Toko Herbal Mbak Fitri.",
      },
      {
        id: 2,
        nama: "Promosi Produk Herbal",
        tanggal: "6 Mei 2023",
        deskripsi:
          "Promosi produk herbal berkualitas dengan penawaran spesial.",
      },
    ],
    kontak: {
      alamat: "Jl. Herbal No. 45, Desa Herbal",
      telepon: "+62 8765 4321",
      email: "tokoherbalmbakfitri@email.com",
      website: "www.tokoherbalmbakfitri.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokoherbalmbakfitri",
      instagram: "instagram.com/tokoherbalmbakfitri",
      twitter: "twitter.com/tokoherbalmbakfitri",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 600.000.000",
      labaBersih: "Rp 100.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan produk herbal baru dengan manfaat yang beragam.",
      "Mengadakan program penyuluhan kesehatan untuk masyarakat setempat.",
      "Membuka cabang toko herbal di pusat perbelanjaan terkemuka.",
      "Menggali lebih banyak sumber herbal lokal.",
    ],
  },
  {
    id: 28,
    nama: "Warung Batik Mbak Dewi",
    profil:
      "Warung Batik Mbak Dewi adalah tempat terbaik untuk membeli batik berkualitas dengan desain modern.",
    foto: "warungbatik.jpg",
    ulasan:
      "Saya suka koleksi batik di Warung Batik Mbak Dewi. Mereka selalu memiliki desain yang unik.",
    program:
      "Kami memiliki program kursus batik bagi mereka yang ingin belajar seni membuat batik.",
    dukungan:
      "Kami mendukung petani kopi lokal dengan membeli biji kopi langsung dari mereka.",
    produk: [
      {
        id: 1,
        nama: "Batik Cap Prambanan",
        deskripsi: "Batik cap dengan motif candi Prambanan yang indah.",
        harga: "Rp 350.000",
        foto: "batikprambanan.jpg",
      },
      {
        id: 2,
        nama: "Batik Tulis Parang",
        deskripsi: "Batik tulis dengan motif parang yang elegan.",
        harga: "Rp 450.000",
        foto: "batikparang.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kursus Batik",
        tanggal: "8 April 2023",
        deskripsi:
          "Kursus batik untuk pemula dan tingkat lanjut di Warung Batik Mbak Dewi.",
      },
      {
        id: 2,
        nama: "Pameran Batik",
        tanggal: "20 Mei 2023",
        deskripsi: "Pameran batik dengan berbagai koleksi batik eksklusif.",
      },
    ],
    kontak: {
      alamat: "Jl. Batik No. 45, Desa Batik",
      telepon: "+62 9876 5432",
      email: "warungbatikmbakdewi@email.com",
      website: "www.warungbatikmbakdewi.com",
    },
    sosialMedia: {
      facebook: "facebook.com/warungbatikmbakdewi",
      instagram: "instagram.com/warungbatikmbakdewi",
      twitter: "twitter.com/warungbatikmbakdewi",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 1.200.000.000",
      labaBersih: "Rp 300.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan desain batik yang lebih kreatif dan modern.",
      "Menggelar pameran batik internasional untuk meningkatkan eksposur.",
      "Mengadakan program pelatihan batik gratis untuk masyarakat setempat.",
      "Membuka cabang toko batik di pusat perbelanjaan terkemuka.",
    ],
  },
  {
    id: 29,
    nama: "Tahu Gejrot Pak Slamet",
    profil:
      "Tahu Gejrot Pak Slamet adalah jajanan khas Jawa Barat yang nikmat dan segar.",
    foto: "tahugejrotpakslamet.jpg",
    ulasan:
      "Tahu Gejrot di sini benar-benar enak! Saya selalu kembali untuk menikmati rasanya.",
    program:
      "Kami memiliki program kursus membuat Tahu Gejrot bagi para pecinta masakan tradisional.",
    dukungan:
      "Kami membeli tahu dari petani lokal yang menanam kedelai berkualitas.",
    produk: [
      {
        id: 1,
        nama: "Tahu Gejrot Pedas",
        deskripsi: "Tahu Gejrot dengan sambal pedas yang menggugah selera.",
        harga: "Rp 15.000",
        foto: "tahugejrotpedas.jpg",
      },
      {
        id: 2,
        nama: "Tahu Gejrot Manis",
        deskripsi: "Tahu Gejrot dengan sambal manis yang lezat.",
        harga: "Rp 15.000",
        foto: "tahugejrotmanis.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Kursus Membuat Tahu Gejrot",
        tanggal: "10 April 2023",
        deskripsi: "Kursus memasak tahu gejrot yang lezat dengan Ibu Yani.",
      },
      {
        id: 2,
        nama: "Promosi Tahu Gejrot",
        tanggal: "1 Mei 2023",
        deskripsi: "Promosi spesial tahu gejrot dengan diskon khusus.",
      },
    ],
    kontak: {
      alamat: "Jl. Tahu Gejrot No. 7, Desa Tahu",
      telepon: "+62 8765 4321",
      email: "tahugejrotpakslamet@email.com",
      website: "www.tahugejrotpakslamet.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tahugejrotpakslamet",
      instagram: "instagram.com/tahugejrotpakslamet",
      twitter: "twitter.com/tahugejrotpakslamet",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 800.000.000",
      labaBersih: "Rp 200.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan variasi rasa tahu gejrot.",
      "Membuka cabang baru di pusat perbelanjaan.",
      "Melakukan pelatihan tahu gejrot untuk masyarakat lokal.",
      "Meningkatkan pemasaran online melalui media sosial.",
    ],
  },
  {
    id: 30,
    nama: "Toko Souvenir Bu Lina",
    profil:
      "Toko Souvenir Bu Lina adalah tempat terbaik untuk membeli souvenir khas daerah dengan desain unik.",
    foto: "souvenirbunalina.jpg",
    ulasan:
      "Saya suka koleksi souvenir di Toko Souvenir Bu Lina. Mereka selalu memiliki desain yang lucu.",
    program:
      "Kami memiliki program diskon khusus untuk pembelian souvenir dalam jumlah besar.",
    dukungan:
      "Kami mendukung para pengrajin lokal dengan memasarkan produk souvenir mereka.",
    produk: [
      {
        id: 1,
        nama: "Gantungan Kunci Wayang",
        deskripsi: "Gantungan kunci dengan desain wayang.",
        Harga: "Rp 10.000",
        foto: "gantungankunci.jpg",
      },
      {
        id: 2,
        nama: "Cinderamata Miniatur Candi Borobudur",
        deskripsi: "Miniatur candi Borobudur yang indah.",
        Harga: "Rp 25.000",
        foto: "miniaturcandi.jpg",
      },
    ],
    acara: [
      {
        id: 1,
        nama: "Promosi Souvenir",
        tanggal: "5 April 2023",
        deskripsi: "Promosi souvenir khas daerah dengan harga istimewa.",
      },
      {
        id: 2,
        nama: "Pameran Souvenir",
        tanggal: "15 Mei 2023",
        deskripsi: "Pameran souvenir khas daerah dengan berbagai produk unik.",
      },
    ],
    kontak: {
      alamat: "Jl. Souvenir No. 45, Desa Souvenir",
      telepon: "+62 8765 4321",
      email: "tokosouvenirbunalina@email.com",
      website: "www.tokosouvenirbunalina.com",
    },
    sosialMedia: {
      facebook: "facebook.com/tokosouvenirbunalina",
      instagram: "instagram.com/tokosouvenirbunalina",
      twitter: "twitter.com/tokosouvenirbunalina",
    },
    laporanKeuangan: {
      tahun: "2022",
      omzet: "Rp 700.000.000",
      labaBersih: "Rp 150.000.000",
    },
    keinginanPemajuan:
      "Dalam rangka percepatan memajukan UMKM desa pada sprint #2, kami berencana untuk:",
    status: "approved",
    rencanaPemajuan: [
      "Mengembangkan produk souvenir dengan desain yang lebih kreatif.",
      "Mengadakan pameran seni untuk mengekspos produk lokal.",
      "Mendukung pelatihan pembuatan souvenir untuk anak-anak muda.",
      "Mengembangkan pasar luar daerah melalui platform online.",
    ],
  },
];

export default DataUmkm;
