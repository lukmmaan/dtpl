const Data = {
  laporanNeraca: {
    Januari: {
      aktiva: [
        { nama: "Tanah", nilai: 1000000 },
        { nama: "Bangunan", nilai: 2000000 },
        { nama: "Kendaraan", nilai: 500000 },
        { nama: "Investasi", nilai: 300000 },
      ],
      kewajiban: [
        { nama: "Hutang", nilai: 500000 },
        { nama: "Liabilitas Lain", nilai: 300000 },
      ],
      ekuitas: 1200000,
    },
    Februari: {
      aktiva: [
        { nama: "Tanah", nilai: 1100000 },
        { nama: "Bangunan", nilai: 2100000 },
        { nama: "Kendaraan", nilai: 550000 },
        { nama: "Investasi", nilai: 320000 },
      ],
      kewajiban: [
        { nama: "Hutang", nilai: 520000 },
        { nama: "Liabilitas Lain", nilai: 330000 },
      ],
      ekuitas: 1300000,
    },
    Maret: {
      aktiva: [
        { nama: "Tanah", nilai: 1200000 },
        { nama: "Bangunan", nilai: 2200000 },
        { nama: "Kendaraan", nilai: 580000 },
        { nama: "Investasi", nilai: 340000 },
      ],
      kewajiban: [
        { nama: "Hutang", nilai: 530000 },
        { nama: "Liabilitas Lain", nilai: 340000 },
      ],
      ekuitas: 1400000,
    },
    April: {
      aktiva: [
        { nama: "Tanah", nilai: 1250000 },
        { nama: "Bangunan", nilai: 2300000 },
        { nama: "Kendaraan", nilai: 600000 },
        { nama: "Investasi", nilai: 360000 },
      ],
      kewajiban: [
        { nama: "Hutang", nilai: 540000 },
        { nama: "Liabilitas Lain", nilai: 350000 },
      ],
      ekuitas: 1450000,
    },
    Mei: {
      aktiva: [
        { nama: "Tanah", nilai: 1300000 },
        { nama: "Bangunan", nilai: 2400000 },
        { nama: "Kendaraan", nilai: 620000 },
        { nama: "Investasi", nilai: 380000 },
      ],
      kewajiban: [
        { nama: "Hutang", nilai: 550000 },
        { nama: "Liabilitas Lain", nilai: 360000 },
      ],
      ekuitas: 1500000,
    },
    Juni: {
      aktiva: [
        { nama: "Tanah", nilai: 1350000 },
        { nama: "Bangunan", nilai: 2500000 },
        { nama: "Kendaraan", nilai: 640000 },
        { nama: "Investasi", nilai: 400000 },
      ],
      kewajiban: [
        { nama: "Hutang", nilai: 560000 },
        { nama: "Liabilitas Lain", nilai: 370000 },
      ],
      ekuitas: 1550000,
    },
  },
  laporanArusKas: {
    Januari: {
      arusMasuk: [
        { kategori: "Pendapatan Pajak", nilai: 300000 },
        { kategori: "Dana Transfer", nilai: 200000 },
        { kategori: "Pendapatan Lain", nilai: 50000 },
      ],
      arusKeluar: [
        { kategori: "Pengeluaran Administrasi", nilai: 100000 },
        { kategori: "Pembangunan Infrastruktur", nilai: 150000 },
        { kategori: "Pengeluaran Lain", nilai: 30000 },
      ],
    },
    Februari: {
      arusMasuk: [
        { kategori: "Pendapatan Pajak", nilai: 310000 },
        { kategori: "Dana Transfer", nilai: 210000 },
        { kategori: "Pendapatan Lain", nilai: 55000 },
      ],
      arusKeluar: [
        { kategori: "Pengeluaran Administrasi", nilai: 110000 },
        { kategori: "Pembangunan Infrastruktur", nilai: 160000 },
        { kategori: "Pengeluaran Lain", nilai: 32000 },
      ],
    },
    Maret: {
      arusMasuk: [
        { kategori: "Pendapatan Pajak", nilai: 320000 },
        { kategori: "Dana Transfer", nilai: 220000 },
        { kategori: "Pendapatan Lain", nilai: 60000 },
      ],
      arusKeluar: [
        { kategori: "Pengeluaran Administrasi", nilai: 120000 },
        { kategori: "Pembangunan Infrastruktur", nilai: 170000 },
        { kategori: "Pengeluaran Lain", nilai: 34000 },
      ],
    },
    April: {
      arusMasuk: [
        { kategori: "Pendapatan Pajak", nilai: 330000 },
        { kategori: "Dana Transfer", nilai: 230000 },
        { kategori: "Pendapatan Lain", nilai: 65000 },
      ],
      arusKeluar: [
        { kategori: "Pengeluaran Administrasi", nilai: 130000 },
        { kategori: "Pembangunan Infrastruktur", nilai: 180000 },
        { kategori: "Pengeluaran Lain", nilai: 36000 },
      ],
    },
    Mei: {
      arusMasuk: [
        { kategori: "Pendapatan Pajak", nilai: 340000 },
        { kategori: "Dana Transfer", nilai: 240000 },
        { kategori: "Pendapatan Lain", nilai: 70000 },
      ],
      arusKeluar: [
        { kategori: "Pengeluaran Administrasi", nilai: 140000 },
        { kategori: "Pembangunan Infrastruktur", nilai: 190000 },
        { kategori: "Pengeluaran Lain", nilai: 38000 },
      ],
    },
    Juni: {
      arusMasuk: [
        { kategori: "Pendapatan Pajak", nilai: 350000 },
        { kategori: "Dana Transfer", nilai: 250000 },
        { kategori: "Pendapatan Lain", nilai: 75000 },
      ],
      arusKeluar: [
        { kategori: "Pengeluaran Administrasi", nilai: 150000 },
        { kategori: "Pembangunan Infrastruktur", nilai: 200000 },
        { kategori: "Pengeluaran Lain", nilai: 40000 },
      ],
    },
  },
  laporanLabaRugi: {
    Januari: {
      pendapatan: [
        { sumber: "Pendapatan Pajak", nilai: 300000 },
        { sumber: "Dana Transfer", nilai: 200000 },
        { sumber: "Pendapatan Lain", nilai: 50000 },
      ],
      pengeluaran: [
        { tujuan: "Pengeluaran Administrasi", nilai: 100000 },
        { tujuan: "Pembangunan Infrastruktur", nilai: 150000 },
        { tujuan: "Pengeluaran Lain", nilai: 30000 },
      ],
      surplus: 200000,
    },
    Februari: {
      pendapatan: [
        { sumber: "Pendapatan Pajak", nilai: 310000 },
        { sumber: "Dana Transfer", nilai: 210000 },
        { sumber: "Pendapatan Lain", nilai: 55000 },
      ],
      pengeluaran: [
        { tujuan: "Pengeluaran Administrasi", nilai: 110000 },
        { tujuan: "Pembangunan Infrastruktur", nilai: 160000 },
        { tujuan: "Pengeluaran Lain", nilai: 32000 },
      ],
      surplus: 220000,
    },
    Maret: {
      pendapatan: [
        { sumber: "Pendapatan Pajak", nilai: 320000 },
        { sumber: "Dana Transfer", nilai: 220000 },
        { sumber: "Pendapatan Lain", nilai: 60000 },
      ],
      pengeluaran: [
        { tujuan: "Pengeluaran Administrasi", nilai: 120000 },
        { tujuan: "Pembangunan Infrastruktur", nilai: 170000 },
        { tujuan: "Pengeluaran Lain", nilai: 34000 },
      ],
      surplus: 240000,
    },
    April: {
      pendapatan: [
        { sumber: "Pendapatan Pajak", nilai: 330000 },
        { sumber: "Dana Transfer", nilai: 230000 },
        { sumber: "Pendapatan Lain", nilai: 65000 },
      ],
      pengeluaran: [
        { tujuan: "Pengeluaran Administrasi", nilai: 130000 },
        { tujuan: "Pembangunan Infrastruktur", nilai: 180000 },
        { tujuan: "Pengeluaran Lain", nilai: 36000 },
      ],
      surplus: 250000,
    },
    Mei: {
      pendapatan: [
        { sumber: "Pendapatan Pajak", nilai: 340000 },
        { sumber: "Dana Transfer", nilai: 240000 },
        { sumber: "Pendapatan Lain", nilai: 70000 },
      ],
      pengeluaran: [
        { tujuan: "Pengeluaran Administrasi", nilai: 140000 },
        { tujuan: "Pembangunan Infrastruktur", nilai: 190000 },
        { tujuan: "Pengeluaran Lain", nilai: 38000 },
      ],
      surplus: 260000,
    },
    Juni: {
      pendapatan: [
        { sumber: "Pendapatan Pajak", nilai: 350000 },
        { sumber: "Dana Transfer", nilai: 250000 },
        { sumber: "Pendapatan Lain", nilai: 75000 },
      ],
      pengeluaran: [
        { tujuan: "Pengeluaran Administrasi", nilai: 150000 },
        { tujuan: "Pembangunan Infrastruktur", nilai: 200000 },
        { tujuan: "Pengeluaran Lain", nilai: 40000 },
      ],
      surplus: 270000,
    },
  },
  catatanLaporan:
    "Catatan: Laporan keuangan ini adalah informasi keuangan Desa Manud Jaya " +
    "untuk periode tertentu. Informasi ini disajikan untuk tujuan informasi " +
    "dan pengambilan keputusan. Silakan merujuk pada catatan laporan yang " +
    "terlampir untuk informasi lebih lanjut dan rincian lebih lanjut.",
  laporanAnggaran: {
    Januari: {
      anggaranDirencanakan: 50000,
      anggaranTerealisasi: 48000,
      detailKategori: [
        {
          kategori: "Pembangunan Infrastruktur",
          anggaranDirencanakan: 20000,
          anggaranTerealisasi: 19000,
        },
        {
          kategori: "Pendidikan",
          anggaranDirencanakan: 15000,
          anggaranTerealisasi: 14500,
        },
        {
          kategori: "Kesehatan",
          anggaranDirencanakan: 10000,
          anggaranTerealisasi: 9500,
        },
        {
          kategori: "Lainnya",
          anggaranDirencanakan: 5000,
          anggaranTerealisasi: 5000,
        },
      ],
    },
    Februari: {
      anggaranDirencanakan: 52000,
      anggaranTerealisasi: 51000,
      detailKategori: [
        {
          kategori: "Pembangunan Infrastruktur",
          anggaranDirencanakan: 21000,
          anggaranTerealisasi: 20500,
        },
        {
          kategori: "Pendidikan",
          anggaranDirencanakan: 16000,
          anggaranTerealisasi: 15700,
        },
        {
          kategori: "Kesehatan",
          anggaranDirencanakan: 11000,
          anggaranTerealisasi: 10800,
        },
        {
          kategori: "Lainnya",
          anggaranDirencanakan: 6000,
          anggaranTerealisasi: 5900,
        },
      ],
    },
    Maret: {
      anggaranDirencanakan: 48000,
      anggaranTerealisasi: 47000,
      detailKategori: [
        {
          kategori: "Pembangunan Infrastruktur",
          anggaranDirencanakan: 19000,
          anggaranTerealisasi: 18500,
        },
        {
          kategori: "Pendidikan",
          anggaranDirencanakan: 14000,
          anggaranTerealisasi: 13800,
        },
        {
          kategori: "Kesehatan",
          anggaranDirencanakan: 9000,
          anggaranTerealisasi: 8800,
        },
        {
          kategori: "Lainnya",
          anggaranDirencanakan: 5000,
          anggaranTerealisasi: 4900,
        },
      ],
    },
    April: {
      anggaranDirencanakan: 51000,
      anggaranTerealisasi: 50500,
      detailKategori: [
        {
          kategori: "Pembangunan Infrastruktur",
          anggaranDirencanakan: 20000,
          anggaranTerealisasi: 19700,
        },
        {
          kategori: "Pendidikan",
          anggaranDirencanakan: 15000,
          anggaranTerealisasi: 14800,
        },
        {
          kategori: "Kesehatan",
          anggaranDirencanakan: 10000,
          anggaranTerealisasi: 9900,
        },
        {
          kategori: "Lainnya",
          anggaranDirencanakan: 6000,
          anggaranTerealisasi: 6000,
        },
      ],
    },
    Mei: {
      anggaranDirencanakan: 49000,
      anggaranTerealisasi: 48000,
      detailKategori: [
        {
          kategori: "Pembangunan Infrastruktur",
          anggaranDirencanakan: 18000,
          anggaranTerealisasi: 17500,
        },
        {
          kategori: "Pendidikan",
          anggaranDirencanakan: 13000,
          anggaranTerealisasi: 12700,
        },
        {
          kategori: "Kesehatan",
          anggaranDirencanakan: 9000,
          anggaranTerealisasi: 8800,
        },
        {
          kategori: "Lainnya",
          anggaranDirencanakan: 5000,
          anggaranTerealisasi: 4900,
        },
      ],
    },
    Juni: {
      anggaranDirencanakan: 53000,
      anggaranTerealisasi: 52500,
      detailKategori: [
        {
          kategori: "Pembangunan Infrastruktur",
          anggaranDirencanakan: 21000,
          anggaranTerealisasi: 20800,
        },
        {
          kategori: "Pendidikan",
          anggaranDirencanakan: 16000,
          anggaranTerealisasi: 15800,
        },
        {
          kategori: "Kesehatan",
          anggaranDirencanakan: 11000,
          anggaranTerealisasi: 10800,
        },
        {
          kategori: "Lainnya",
          anggaranDirencanakan: 6000,
          anggaranTerealisasi: 5900,
        },
      ],
    },
  },
  laporanAudit: {
    Januari: {
      deskripsi: "Hasil audit bulan Januari adalah sebagai berikut:",
      temuan: [
        "Pengelolaan anggaran desa pada bulan Januari sangat baik dan efisien.",
        "Tidak ada masalah signifikan dalam pencatatan keuangan bulan Januari.",
        "Semua dokumen dan transaksi keuangan bulan Januari telah diverifikasi dengan benar.",
      ],
      rekomendasi: [
        "Meningkatkan transparansi dalam penggunaan dana desa.",
        "Memperbaiki pelaporan keuangan untuk memudahkan pemahaman masyarakat.",
      ],
    },
    Februari: {
      deskripsi: "Hasil audit bulan Februari adalah sebagai berikut:",
      temuan: [
        "Pengelolaan anggaran desa pada bulan Februari sangat baik dan efisien.",
        "Terdapat beberapa ketidaksesuaian dalam pencatatan keuangan bulan Februari.",
        "Semua dokumen dan transaksi keuangan bulan Februari telah diverifikasi dengan benar.",
      ],
      rekomendasi: [
        "Memperbaiki pencatatan keuangan agar sesuai dengan standar.",
        "Meningkatkan transparansi dalam penggunaan dana desa.",
      ],
    },
    Maret: {
      deskripsi: "Hasil audit bulan Maret adalah sebagai berikut:",
      temuan: [
        "Pengelolaan anggaran desa pada bulan Maret sangat baik dan efisien.",
        "Tidak ada masalah signifikan dalam pencatatan keuangan bulan Maret.",
        "Semua dokumen dan transaksi keuangan bulan Maret telah diverifikasi dengan benar.",
      ],
      rekomendasi: [
        "Meningkatkan transparansi dalam penggunaan dana desa.",
        "Memperbaiki pelaporan keuangan untuk memudahkan pemahaman masyarakat.",
        "Melakukan pelatihan kepada staf keuangan desa tentang pencatatan keuangan yang benar.",
      ],
    },
    April: {
      deskripsi: "Hasil audit bulan April adalah sebagai berikut:",
      temuan: [
        "Pengelolaan anggaran desa pada bulan April sangat baik dan efisien.",
        "Tidak ada masalah signifikan dalam pencatatan keuangan bulan April.",
        "Semua dokumen dan transaksi keuangan bulan April telah diverifikasi dengan benar.",
      ],
      rekomendasi: [
        "Meningkatkan transparansi dalam penggunaan dana desa.",
        "Memperbaiki pelaporan keuangan untuk memudahkan pemahaman masyarakat.",
        "Melakukan audit internal secara berkala untuk memastikan kepatuhan.",
      ],
    },
    Mei: {
      deskripsi: "Hasil audit bulan Mei adalah sebagai berikut:",
      temuan: [
        "Pengelolaan anggaran desa pada bulan Mei sangat baik dan efisien.",
        "Terdapat beberapa ketidaksesuaian dalam pencatatan keuangan bulan Mei.",
        "Semua dokumen dan transaksi keuangan bulan Mei telah diverifikasi dengan benar.",
      ],
      rekomendasi: [
        "Memperbaiki pencatatan keuangan agar sesuai dengan standar.",
        "Meningkatkan transparansi dalam penggunaan dana desa.",
        "Melakukan audit internal secara berkala untuk memastikan kepatuhan.",
      ],
    },
    Juni: {
      deskripsi: "Hasil audit bulan Juni adalah sebagai berikut:",
      temuan: [
        "Pengelolaan anggaran desa pada bulan Juni sangat baik dan efisien.",
        "Tidak ada masalah signifikan dalam pencatatan keuangan bulan Juni.",
        "Semua dokumen dan transaksi keuangan bulan Juni telah diverifikasi dengan benar.",
      ],
      rekomendasi: [
        "Meningkatkan transparansi dalam penggunaan dana desa.",
        "Memperbaiki pelaporan keuangan untuk memudahkan pemahaman masyarakat.",
        "Melakukan pelatihan kepada staf keuangan desa tentang pencatatan keuangan yang benar.",
      ],
    },
  },
};

export default Data;
