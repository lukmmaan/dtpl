const DestinasiData = [
  {
    id: 1,
    nama: "Wisata Alam Manud Jaya",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Nikmati keindahan alam yang belum tersentuh dengan trekking melalui hutan lebat yang dipenuhi flora dan fauna yang unik.",
    gambar: "wisata-alam.jpg",
    atraksiUtama:
      "Trekking alam liar, menikmati keindahan alam yang asri, dan berinteraksi dengan flora dan fauna unik.",
    aktivitas: ["Trekking", "Birdwatching", "Fotografi alam"],
    akomodasi: [
      {
        nama: "Hutan Lodge",
        tipe: "Penginapan",
        fasilitas: [
          "Kamar dengan pemandangan hutan",
          "Restoran makanan lokal",
          "Penyewaan peralatan hiking",
        ],
      },
      {
        nama: "Camping Area",
        tipe: "Kemping",
        fasilitas: [
          "Area berkemah dengan fasilitas toilet",
          "Sumber air bersih",
        ],
      },
    ],
    makananKuliner: ["Rendang Manud", "Gulai Ikan Lokal", "Kopi Dusun"],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Desa Manud Jaya. Kemudian, tersedia layanan antar-jemput ke lokasi wisata.",
      waktuTempuh: "2-3 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik: "Musim semi dan musim gugur untuk cuaca yang nyaman.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di area parkir.",
      pusatInformasi:
        "Pusat Informasi Wisata Alam Manud Jaya tersedia di pintu masuk.",
    },
    ulasan: [
      {
        nama: "Amanda",
        ulasan:
          "Pengalaman trekking yang luar biasa! Alamnya sangat indah dan petualangan ini benar-benar mendalam.",
      },
      {
        nama: "Budi",
        ulasan:
          "Sangat menyukai kuliner lokal di sini. Rendang Manud adalah makanan favorit saya!",
      },
    ],
  },
  {
    id: 2,
    nama: "Pantai Pasir Putih",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Nikmati pesona pantai pasir putih dengan air laut yang jernih dan pemandangan alam yang menakjubkan.",
    gambar: "pantai-pasir-putih.jpg",
    atraksiUtama:
      "Berjemur di pantai, berenang, dan menjelajahi kehidupan laut dengan snorkeling.",
    aktivitas: ["Berjemur", "Berenang", "Snorkeling"],
    akomodasi: [
      {
        nama: "Villa Pantai",
        tipe: "Penginapan",
        fasilitas: [
          "Villa dengan akses pantai pribadi",
          "Restoran dengan menu seafood",
          "Kolam renang",
        ],
      },
      {
        nama: "Kemping Pantai",
        tipe: "Kemping",
        fasilitas: [
          "Area berkemah dengan akses pantai",
          "Toilet dan kamar mandi umum",
        ],
      },
    ],
    makananKuliner: ["Seafood segar", "Es kelapa muda", "Sate ikan"],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Pantai Pasir Putih.",
      waktuTempuh: "1-2 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik: "Musim panas untuk cuaca yang cerah.",
    fasilitasUmum: {
      toilet: "Tersedia toilet dan kamar mandi umum di sepanjang pantai.",
      pusatInformasi:
        "Pusat Informasi Pantai Pasir Putih tersedia di area parkir.",
    },
    ulasan: [
      {
        nama: "Siti",
        ulasan:
          "Pantai yang indah dengan pasir putih yang lembut. Suasana di sini sangat tenang dan menyenangkan.",
      },
      {
        nama: "Rudi",
        ulasan:
          "Snorkeling di sini sangat mengagumkan! Saya melihat berbagai jenis ikan dan terumbu karang yang indah.",
      },
    ],
  },
  {
    id: 3,
    nama: "Museum Budaya Desa",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Jelajahi kekayaan budaya desa kami dengan mengunjungi museum ini yang memamerkan warisan budaya kami.",
    gambar: "museum-budaya.jpg",
    atraksiUtama:
      "Koleksi artefak budaya, pertunjukan seni tradisional, dan lokakarya kerajinan tangan.",
    aktivitas: [
      "Jelajahi koleksi",
      "Tonton pertunjukan seni",
      "Ikuti lokakarya kerajinan",
    ],
    akomodasi: [
      {
        nama: "Penginapan Desa",
        tipe: "Penginapan",
        fasilitas: [
          "Kamar-kamar dengan dekorasi tradisional",
          "Restoran dengan hidangan lokal",
          "Toko suvenir",
        ],
      },
      {
        nama: "Rumah Wisatawan",
        tipe: "Penginapan",
        fasilitas: [
          "Rumah-rumah tradisional untuk menginap",
          "Makanan sarapan tradisional",
        ],
      },
    ],
    makananKuliner: ["Sate Desa", "Es Teh Tarik", "Kue tradisional"],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Desa Manud Jaya. Museum Budaya Desa berada di pusat desa dan mudah diakses.",
      waktuTempuh: "1 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik:
      "Sepanjang tahun, tetapi saat pertunjukan seni dan festival budaya adalah waktu yang istimewa untuk berkunjung.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di dalam museum.",
      pusatInformasi:
        "Pusat Informasi Museum Budaya Desa tersedia di pintu masuk.",
    },
    ulasan: [
      {
        nama: "Linda",
        ulasan:
          "Saya terpesona dengan keberagaman budaya desa ini. Museum ini adalah tempat yang bagus untuk memahami warisan budaya mereka.",
      },
      {
        nama: "Faisal",
        ulasan:
          "Pertunjukan seni di sini sangat mengesankan. Saya suka melihat tarian tradisional dan pertunjukan musik.",
      },
    ],
  },
  {
    id: 4,
    nama: "Taman Bunga Indah",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Nikmati keindahan bunga-bunga yang bermekaran sepanjang tahun di taman bunga indah kami.",
    gambar: "taman-bunga.jpg",
    atraksiUtama:
      "Ribuan jenis bunga, kolam air mancur, dan jalan-jalan berliku di taman yang indah.",
    aktivitas: ["Berjalan-jalan di taman", "Piknik", "Fotografi bunga"],
    akomodasi: [
      {
        nama: "Villa Taman Bunga",
        tipe: "Penginapan",
        fasilitas: [
          "Villa dengan taman pribadi",
          "Restoran dengan hidangan bunga",
          "Kolam renang",
        ],
      },
      {
        nama: "Kemping Taman",
        tipe: "Kemping",
        fasilitas: [
          "Area berkemah di sekitar taman",
          "Toilet dan kamar mandi umum",
        ],
      },
    ],
    makananKuliner: [
      "Makanan bunga eksklusif",
      "Teh bunga segar",
      "Salad bunga",
    ],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Taman Bunga Indah.",
      waktuTempuh: "1-2 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik: "Musim semi ketika bunga sedang mekar penuh.",
    fasilitasUmum: {
      toilet: "Tersedia toilet dan kamar mandi umum di sekitar taman.",
      pusatInformasi:
        "Pusat Informasi Taman Bunga Indah tersedia di pintu masuk.",
    },
    ulasan: [
      {
        nama: "Rina",
        ulasan:
          "Taman ini sangat romantis! Saya dan pasangan saya menghabiskan waktu yang indah di sini bersama-sama.",
      },
      {
        nama: "Dewi",
        ulasan:
          "Saya suka berfoto di sini. Bunga-bunga di taman ini sangat cantik!",
      },
    ],
  },
  {
    id: 5,
    nama: "Wisata Kuliner Lokal",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Cicipi hidangan kuliner lokal yang lezat dan unik yang hanya dapat Anda temui di desa kami.",
    gambar: "kuliner-lokal.jpg",
    atraksiUtama:
      "Menikmati hidangan autentik dari berbagai masakan tradisional.",
    aktivitas: [
      "Mencicipi hidangan lokal",
      "Belajar memasak tradisional",
      "Wisata kuliner",
    ],
    akomodasi: [],
    makananKuliner: ["Rendang Manud", "Gulai Ikan Lokal", "Kopi Dusun"],
    transportasi: {
      cara: "Anda bisa mencapai area kuliner lokal dengan berjalan kaki atau menggunakan sepeda dari berbagai titik di Desa Manud Jaya.",
      waktuTempuh: "Tergantung pada lokasi Anda menginap di desa.",
    },
    waktuTerbaik:
      "Setiap saat adalah waktu yang baik untuk menikmati kuliner lokal.",
    fasilitasUmum: {},
    ulasan: [
      {
        nama: "Adi",
        ulasan:
          "Saya sangat merekomendasikan mencicipi Rendang Manud di sini. Rasanya sangat autentik!",
      },
      {
        nama: "Sinta",
        ulasan:
          "Kopi Dusun adalah kopi terbaik yang pernah saya minum. Sangat segar dan nikmat!",
      },
    ],
  },
  {
    id: 6,
    nama: "Pendakian Gunung Manud",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Rasakan petualangan mendaki gunung-gunung setinggi langit dan nikmati pemandangan spektakuler dari puncak-puncaknya.",
    gambar: "gunung-manud.jpg",
    atraksiUtama:
      "Pendakian gunung, pemandangan alam yang menakjubkan, dan eksplorasi alam liar.",
    aktivitas: [
      "Pendakian gunung",
      "Eksplorasi alam liar",
      "Fotografi pemandangan",
    ],
    akomodasi: [
      {
        nama: "Base Camp Gunung Manud",
        tipe: "Penginapan",
        fasilitas: [
          "Kamar tidur bersama para pendaki",
          "Restoran dengan menu pendaki",
          "Persewaan peralatan pendakian",
        ],
      },
      {
        nama: "Kemping Gunung",
        tipe: "Kemping",
        fasilitas: [
          "Area berkemah di sekitar base camp",
          "Toilet dan kamar mandi umum",
        ],
      },
    ],
    makananKuliner: [
      "Makanan bergizi untuk pendaki",
      "Teh herbal",
      "Sup panas",
    ],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Desa Manud Jaya. Kemudian, tersedia layanan antar-jemput ke base camp.",
      waktuTempuh: "2-3 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik:
      "Musim semi dan musim panas untuk pendakian yang lebih nyaman.",
    fasilitasUmum: {
      toilet: "Tersedia toilet dan kamar mandi umum di base camp.",
      pusatInformasi:
        "Pusat Informasi Pendakian Gunung Manud tersedia di base camp.",
    },
    ulasan: [
      {
        nama: "Rudi",
        ulasan:
          "Pemandangan dari puncak gunung adalah hal yang tak terlupakan. Saya suka mendaki di sini!",
      },
      {
        nama: "Siti",
        ulasan:
          "Base camp ini sangat membantu. Mereka menyediakan peralatan pendakian yang berkualitas tinggi.",
      },
    ],
  },
  {
    id: 7,
    nama: "Taman Rekreasi Keluarga",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Habiskan waktu berkualitas bersama keluarga di taman rekreasi kami dengan berbagai wahana seru.",
    gambar: "taman-rekreasi.jpg",
    atraksiUtama: "Wahana rekreasi, area bermain anak-anak, dan taman piknik.",
    aktivitas: ["Bermain di wahana", "Piknik keluarga", "Bermain voli pantai"],
    akomodasi: [],
    makananKuliner: ["Makanan ringan", "Minuman segar", "Es krim"],
    transportasi: {
      cara: "Taman Rekreasi Keluarga dapat dicapai dengan berjalan kaki atau menggunakan sepeda dari berbagai titik di Desa Manud Jaya.",
      waktuTempuh: "Tergantung pada lokasi Anda menginap di desa.",
    },
    waktuTerbaik: "Musim semi dan musim panas untuk cuaca yang cerah.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di sekitar taman.",
      pusatInformasi:
        "Tidak tersedia pusat informasi khusus, tetapi staf di taman siap membantu pengunjung.",
    },
    ulasan: [
      {
        nama: "Anita",
        ulasan:
          "Anak-anak saya sangat senang bermain di taman ini. Kami sering melakukan piknik keluarga di sini.",
      },
      {
        nama: "Dedi",
        ulasan:
          "Bermain voli pantai dengan teman-teman di sini adalah salah satu kegiatan favorit saya!",
      },
    ],
  },
  {
    id: 8,
    nama: "Desa Adat Manud",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Kunjungi desa adat kami dan pelajari tradisi dan budaya unik yang masih dijaga dengan baik.",
    gambar: "desa-adat.jpg",
    atraksiUtama:
      "Rumah adat, pertunjukan budaya, dan lokakarya kerajinan tangan.",
    aktivitas: [
      "Mengunjungi rumah adat",
      "Menyaksikan pertunjukan budaya",
      "Belajar membuat kerajinan tangan",
    ],
    akomodasi: [],
    makananKuliner: [
      "Makanan tradisional",
      "Minuman lokal",
      "Jajanan khas desa",
    ],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Desa Manud Jaya. Desa Adat Manud berada di pusat desa dan mudah diakses.",
      waktuTempuh: "1 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik:
      "Sepanjang tahun, tetapi saat pertunjukan budaya adalah waktu yang istimewa untuk berkunjung.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di dalam desa adat.",
      pusatInformasi:
        "Pusat Informasi Desa Adat Manud tersedia di pintu masuk.",
    },
    ulasan: [
      {
        nama: "Nina",
        ulasan:
          "Saya sangat terkesan dengan tradisi yang dijaga di desa ini. Pertunjukan budaya mereka sangat mengesankan.",
      },
      {
        nama: "Firman",
        ulasan:
          "Saya belajar banyak tentang kerajinan tangan dari penduduk lokal. Mereka sangat ramah!",
      },
    ],
  },
  {
    id: 9,
    nama: "Trekking Hutan Manud",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Jelajahi hutan Manud yang lebat dengan beragam flora dan fauna melalui trekking yang mengasyikkan.",
    gambar: "trekking-hutan.jpg",
    atraksiUtama:
      "Trekking alam liar, eksplorasi hutan belantara, dan pengamatan burung.",
    aktivitas: ["Trekking", "Eksplorasi hutan", "Pengamatan burung"],
    akomodasi: [],
    makananKuliner: ["Makanan ringan sehat", "Air minum", "Buah-buahan segar"],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Hutan Manud. Trekking Hutan Manud berada di sekitar Desa Manud Jaya.",
      waktuTempuh: "30 menit perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik: "Musim semi dan musim gugur untuk cuaca yang nyaman.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di area parkir.",
      pusatInformasi:
        "Tidak tersedia pusat informasi khusus, tetapi staf di trekking hutan siap membantu pengunjung.",
    },
    ulasan: [
      {
        nama: "Rina",
        ulasan:
          "Saya suka trekking di hutan ini. Saya melihat banyak jenis burung yang indah!",
      },
      {
        nama: "Dedi",
        ulasan:
          "Hutan ini memiliki atmosfer yang tenang dan nyaman untuk trekking. Sangat direkomendasikan!",
      },
    ],
  },
  {
    id: 10,
    nama: "Seni dan Kreativitas Desa",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Nikmati pertunjukan seni dan kerajinan tangan khas desa kami yang mengagumkan.",
    gambar: "seni-desa.jpg",
    atraksiUtama: "Pertunjukan seni, lokakarya seni, dan galeri seni lokal.",
    aktivitas: [
      "Menyaksikan pertunjukan seni",
      "Mengikuti lokakarya seni",
      "Berbelanja seni lokal",
    ],
    akomodasi: [],
    makananKuliner: ["Makanan ringan", "Minuman segar", "Kue khas seni"],
    transportasi: {
      cara: "Anda bisa mencapai area seni dan kreativitas desa dengan berjalan kaki atau menggunakan sepeda dari berbagai titik di Desa Manud Jaya.",
      waktuTempuh: "Tergantung pada lokasi Anda menginap di desa.",
    },
    waktuTerbaik:
      "Setiap saat adalah waktu yang baik untuk menikmati seni dan kreativitas desa.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di sekitar area seni dan kreativitas desa.",
      pusatInformasi:
        "Tidak tersedia pusat informasi khusus, tetapi staf di area seni dan kreativitas desa siap membantu pengunjung.",
    },
    ulasan: [
      {
        nama: "Siti",
        ulasan:
          "Pertunjukan seni di sini sangat menghibur! Saya suka melihat tarian dan musik tradisional.",
      },
      {
        nama: "Faisal",
        ulasan:
          "Saya membeli beberapa lukisan seni lokal sebagai kenang-kenangan. Mereka sangat indah!",
      },
    ],
  },
  {
    id: 11,
    nama: "Pantai Pasir Hitam",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Jelajahi pantai pasir hitam yang indah dan nikmati aktivitas pantai yang menyenangkan.",
    gambar: "pantai-pasir-hitam.jpg",
    atraksiUtama:
      "Berjemur di pantai, berenang, dan bermain voli pantai di pasir hitam.",
    aktivitas: ["Berjemur", "Berenang", "Bermain voli pantai"],
    akomodasi: [],
    makananKuliner: ["Seafood segar", "Es kelapa muda", "Sate ikan"],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Pantai Pasir Hitam.",
      waktuTempuh: "1-2 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik: "Musim panas untuk cuaca yang cerah.",
    fasilitasUmum: {
      toilet: "Tersedia toilet dan kamar mandi umum di sepanjang pantai.",
      pusatInformasi:
        "Pusat Informasi Pantai Pasir Hitam tersedia di area parkir.",
    },
    ulasan: [
      {
        nama: "Siti",
        ulasan:
          "Pantai ini adalah surga bagi pecinta pantai. Pasir hitamnya unik dan cantik!",
      },
      {
        nama: "Rudi",
        ulasan:
          "Bermain voli pantai dengan teman-teman di sini adalah salah satu kegiatan favorit saya!",
      },
    ],
  },
  {
    id: 12,
    nama: "Gua Batu Karst",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Telusuri gua batu karst yang menakjubkan dengan formasi batu yang unik dan menakjubkan.",
    gambar: "gua-batu-karst.jpg",
    atraksiUtama:
      "Eksplorasi gua, pengamatan stalaktit dan stalagmit, dan petualangan bawah tanah.",
    aktivitas: [
      "Eksplorasi gua",
      "Fotografi gua",
      "Penjelajahan stalaktit dan stalagmit",
    ],
    akomodasi: [],
    makananKuliner: ["Makanan ringan", "Minuman segar", "Kue khas desa"],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Gua Batu Karst.",
      waktuTempuh: "1-2 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik:
      "Setiap saat adalah waktu yang baik untuk mengeksplorasi gua batu karst.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di area parkir.",
      pusatInformasi:
        "Tidak tersedia pusat informasi khusus, tetapi staf di gua batu karst siap membantu pengunjung.",
    },
    ulasan: [
      {
        nama: "Rina",
        ulasan:
          "Gua ini sangat menakjubkan! Saya suka melihat formasi batu yang unik.",
      },
      {
        nama: "Dedi",
        ulasan:
          "Petualangan bawah tanah di gua ini sangat seru. Saya merasa seperti seorang penjelajah!",
      },
    ],
  },
  {
    id: 13,
    nama: "Ekowisata Desa",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Dukung keberlanjutan lingkungan dengan mengikuti program ekowisata kami yang menarik.",
    gambar: "ekowisata.jpg",
    atraksiUtama:
      "Program keberlanjutan lingkungan, kunjungan ke proyek pelestarian alam, dan partisipasi dalam penanaman pohon.",
    aktivitas: [
      "Kunjungi proyek pelestarian alam",
      "Ikuti program keberlanjutan",
      "Penanaman pohon",
    ],
    akomodasi: [],
    makananKuliner: ["Makanan ringan sehat", "Air minum", "Buah-buahan segar"],
    transportasi: {
      cara: "Anda bisa mencapai area ekowisata desa dengan berjalan kaki atau menggunakan sepeda dari berbagai titik di Desa Manud Jaya.",
      waktuTempuh: "Tergantung pada lokasi Anda menginap di desa.",
    },
    waktuTerbaik:
      "Setiap saat adalah waktu yang baik untuk berpartisipasi dalam ekowisata.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di sekitar area ekowisata desa.",
      pusatInformasi:
        "Tidak tersedia pusat informasi khusus, tetapi staf di area ekowisata desa siap membantu pengunjung.",
    },
    ulasan: [
      {
        nama: "Nina",
        ulasan:
          "Program ekowisata di desa ini sangat bermanfaat bagi lingkungan. Saya senang bisa berkontribusi!",
      },
      {
        nama: "Firman",
        ulasan:
          "Saya merasa lebih dekat dengan alam setelah mengikuti program ekowisata ini. Sangat berkesan!",
      },
    ],
  },
  {
    id: 14,
    nama: "Pemandian Air Panas",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Relaksasi di pemandian air panas alami yang menenangkan di tengah alam yang asri.",
    gambar: "pemandian-air-panas.jpg",
    atraksiUtama:
      "Pemandian air panas, pijat tradisional, dan terapi relaksasi.",
    aktivitas: [
      "Berendam di air panas",
      "Pijat tradisional",
      "Relaksasi di sekitar pemandian",
    ],
    akomodasi: [
      {
        nama: "Resor Pemandian",
        tipe: "Penginapan",
        fasilitas: [
          "Kamar dengan pemandangan pemandian",
          "Restoran dengan hidangan sehat",
          "Pijat dan spa",
        ],
      },
      {
        nama: "Kemping Pemandian",
        tipe: "Kemping",
        fasilitas: [
          "Area berkemah di sekitar pemandian",
          "Toilet dan kamar mandi umum",
        ],
      },
    ],
    makananKuliner: [
      "Makanan sehat",
      "Minuman herbal",
      "Makanan penutup khas pemandian",
    ],
    transportasi: {
      cara: "Dari Bandara Kota Terdekat, Anda bisa menggunakan taksi atau transportasi umum ke Pemandian Air Panas.",
      waktuTempuh: "1-2 jam perjalanan dari Bandara Kota Terdekat.",
    },
    waktuTerbaik:
      "Setiap saat adalah waktu yang baik untuk bersantai di pemandian air panas.",
    fasilitasUmum: {
      toilet: "Tersedia toilet dan kamar mandi umum di sekitar pemandian.",
      pusatInformasi:
        "Pusat Informasi Pemandian Air Panas tersedia di area pemandian.",
    },
    ulasan: [
      {
        nama: "Linda",
        ulasan:
          "Saya merasa begitu rileks setelah berendam di sini. Pemandian air panasnya sangat menyegarkan.",
      },
      {
        nama: "Dewi",
        ulasan:
          "Pijat tradisional di resor ini adalah pengalaman yang luar biasa. Saya merasa segar bugar!",
      },
    ],
  },
  {
    id: 15,
    nama: "Kegiatan Gotong Royong",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Bergabunglah dalam semangat gotong royong kami untuk membangun bersama masyarakat desa.",
    gambar: "gotong-royong.jpg",
    atraksiUtama:
      "Kegiatan gotong royong, partisipasi dalam proyek-proyek komunitas, dan belajar dari masyarakat lokal.",
    aktivitas: [
      "Bergabung dalam kegiatan gotong royong",
      "Berpartisipasi dalam proyek komunitas",
      "Belajar dari masyarakat lokal",
    ],
    akomodasi: [],
    makananKuliner: [
      "Makanan ringan tradisional",
      "Minuman lokal",
      "Jajanan khas gotong royong",
    ],
    transportasi: {
      cara: "Anda bisa mencapai area kegiatan gotong royong dengan berjalan kaki atau menggunakan sepeda dari berbagai titik di Desa Manud Jaya.",
      waktuTempuh: "Tergantung pada lokasi Anda menginap di desa.",
    },
    waktuTerbaik:
      "Setiap saat adalah waktu yang baik untuk bergabung dalam kegiatan gotong royong.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di sekitar area kegiatan gotong royong.",
      pusatInformasi:
        "Tidak tersedia pusat informasi khusus, tetapi masyarakat lokal siap membantu pengunjung yang ingin bergabung dalam kegiatan gotong royong.",
    },
    ulasan: [
      {
        nama: "Adi",
        ulasan:
          "Bergabung dalam kegiatan gotong royong adalah pengalaman yang memuaskan. Saya merasa lebih terhubung dengan masyarakat desa.",
      },
      {
        nama: "Sinta",
        ulasan:
          "Saya belajar banyak tentang budaya gotong royong di sini. Semua orang sangat ramah dan sambutan!",
      },
    ],
  },
  {
    id: 16,
    nama: "Pendampingan Wirausaha",
    lokasi: "Desa Manud Jaya",
    deskripsi:
      "Program pendampingan wirausaha untuk membantu masyarakat desa memulai bisnis mereka sendiri.",
    gambar: "pendampingan-wirausaha.jpg",
    atraksiUtama:
      "Program pendampingan wirausaha, lokakarya bisnis, dan peluang kemitraan usaha.",
    aktivitas: [
      "Mengikuti program pendampingan wirausaha",
      "Berpartisipasi dalam lokakarya bisnis",
      "Mengidentifikasi peluang kemitraan usaha",
    ],
    akomodasi: [],
    makananKuliner: [
      "Makanan ringan",
      "Minuman lokal",
      "Makanan khas bisnis lokal",
    ],
    transportasi: {
      cara: "Anda bisa mencapai area pendampingan wirausaha dengan berjalan kaki atau menggunakan sepeda dari berbagai titik di Desa Manud Jaya.",
      waktuTempuh: "Tergantung pada lokasi Anda menginap di desa.",
    },
    waktuTerbaik:
      "Setiap saat adalah waktu yang baik untuk memulai perjalanan wirausaha Anda di desa ini.",
    fasilitasUmum: {
      toilet: "Tersedia toilet umum di sekitar area pendampingan wirausaha.",
      pusatInformasi:
        "Tidak tersedia pusat informasi khusus, tetapi mentor bisnis lokal siap membantu pengunjung yang ingin memulai bisnis di desa.",
    },
    ulasan: [
      {
        nama: "Nina",
        ulasan:
          "Saya sangat terinspirasi oleh program pendampingan wirausaha di desa ini. Mereka membantu wirausaha lokal tumbuh dan berkembang.",
      },
      {
        nama: "Firman",
        ulasan:
          "Saya mendapatkan banyak wawasan berharga dari lokakarya bisnis di sini. Terima kasih kepada para mentor yang berpengalaman!",
      },
    ],
  },
];

export default DestinasiData;
