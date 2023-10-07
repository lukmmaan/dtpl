import React from "react";
import { Link } from "react-router-dom";

import { News } from "../../../Assets/Image/index";
import "./BeritaCard.css";

const beritaData = [
  {
    id: 1,
    judul: "Pengembangan Ekowisata Desa",
    isi: "Desa kita terus mengembangkan ekowisata upaya meningkatkan perekonomian masyarakat.",
    gambar: "ekowisata.jpg",
  },
  {
    id: 2,
    judul: "Pembangunan Infrastruktur Desa",
    isi: "Proyek pembangunan infrastruktur desa telah dimulai untuk memudahkan akses masyarakat.",
    gambar: "infrastruktur.jpg",
  },
  {
    id: 3,
    judul: "Pelatihan Pertanian Organik",
    isi: "Masyarakat desa mengikuti pelatihan pertanian organik untuk meningkatkan hasil panen.",
    gambar: "pertanian.jpg",
  },
  {
    id: 4,
    judul: "Program Pendidikan Desa",
    isi: "Program pendidikan desa telah memberikan beasiswa kepada siswa berprestasi.",
    gambar: "pendidikan.jpg",
  },
  {
    id: 5,
    judul: "Kegiatan Seni dan Budaya",
    isi: "Kegiatan seni dan budaya di desa telah menarik perhatian wisatawan dari berbagai daerah.",
    gambar: "seni.jpg",
  },
  {
    id: 6,
    judul: "Program Lingkungan Bersih",
    isi: "Desa kita bersama-sama menjaga kebersihan lingkungan demi masa depan yang lebih baik.",
    gambar: "lingkungan.jpg",
  },
  {
    id: 7,
    judul: "Perkembangan Ekonomi Desa",
    isi: "Ekonomi desa terus berkembang dengan adanya program pelatihan wirausaha.",
    gambar: "ekonomi.jpg",
  },
  {
    id: 8,
    judul: "Kebersamaan Warga Desa",
    isi: "Semangat gotong royong menjadi kekuatan warga desa dalam membangun bersama.",
    gambar: "gotong-royong.jpg",
  },
  {
    id: 9,
    judul: "Kesehatan Masyarakat Desa",
    isi: "Program kesehatan masyarakat desa telah meningkatkan kualitas hidup penduduk.",
    gambar: "kesehatan.jpg",
  },
  {
    id: 10,
    judul: "Keindahan Alam Desa",
    isi: "Desa kita dikelilingi oleh keindahan alam yang masih asri dan alami.",
    gambar: "alam.jpg",
  },
  {
    id: 11,
    judul: "Perkembangan Industri Kecil",
    isi: "Industri kecil di desa terus berkembang dan memberikan lapangan pekerjaan.",
    gambar: "industri.jpg",
  },
  {
    id: 12,
    judul: "Pemberdayaan Perempuan Desa",
    isi: "Perempuan desa aktif dalam program pemberdayaan ekonomi dan sosial.",
    gambar: "perempuan.jpg",
  },
  {
    id: 13,
    judul: "Peningkatan Sarana Transportasi",
    isi: "Pembangunan jalan dan transportasi desa telah meningkatkan konektivitas.",
    gambar: "transportasi.jpg",
  },
  {
    id: 14,
    judul: "Keberlanjutan Lingkungan",
    isi: "Komitmen desa untuk menjaga keberlanjutan lingkungan terus ditegakkan.",
    gambar: "keberlanjutan.jpg",
  },
  {
    id: 15,
    judul: "Perkembangan Pariwisata",
    isi: "Pariwisata desa terus tumbuh dengan adanya berbagai atraksi menarik.",
    gambar: "pariwisata.jpg",
  },
  {
    id: 16,
    judul: "Pendidikan Anak Desa",
    isi: "Anak-anak desa mendapatkan akses pendidikan yang berkualitas.",
    gambar: "pendidikan-anak.jpg",
  },
];
const BeritaScreen = () => {
  const splitBeritaData = (data, chunkSize) => {
    const result = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      result.push(data.slice(i, i + chunkSize));
    }
    return result;
  };
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke paling atas halaman
  };

  const beritaChunks = splitBeritaData(beritaData, 4);

  return (
    <div className="berita-container">
      <h1>Berita Terbaru</h1>
      <div className="berita-card-container">
        {beritaChunks.map((beritaRow, rowIndex) => (
          <div className="berita-row" key={rowIndex}>
            {beritaRow.map((berita) => (
              <Link
                to={`/berita`}
                key={berita.id}
                className="berita-link"
                onClick={handleScrollToTop}
              >
                <div className="berita-card" key={berita.id}>
                  <img src={News} alt={berita.judul} />
                  <h2>{berita.judul}</h2>
                  <p>{berita.isi}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaScreen;
