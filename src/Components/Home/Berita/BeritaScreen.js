import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import {
  News1,
  News2,
  News3,
  News4,
  News5,
  News6,
  News7,
  News8,
} from "../../../Assets/Image/index";
import "./BeritaCard.css";

const Images = [News1, News2, News3, News4, News5, News6, News7, News8];
const imageCount = 8;
const beritaData = [
  {
    id: 1,
    judul: "Pengembangan Ekowisata Desa",
    isi: "Desa kita terus mengembangkan ekowisata upaya meningkatkan perekonomian masyarakat.",
    gambar: "ekowisata.jpg",
    detailBerita:
      "Pengembangan ekowisata di desa kami telah menjadi fokus utama dalam upaya meningkatkan kesejahteraan masyarakat. Dengan keindahan alam yang alami, kami telah berhasil menarik perhatian wisatawan dari berbagai daerah. Dari hutan yang rimbun hingga sungai yang jernih, ekowisata kami menawarkan pengalaman luar biasa kepada pengunjung. Program-program ekowisata melibatkan warga setempat dalam menjaga kelestarian lingkungan dan mempromosikan budaya lokal. Semua ini telah menciptakan peluang ekonomi baru bagi masyarakat desa kami. Inisiatif ini telah membantu dalam meningkatkan pendapatan dan menciptakan lapangan kerja di desa kami. Kami sangat bangga dengan perjalanan ini dan berharap akan ada lebih banyak lagi pencapaian positif di masa depan.",
  },
  {
    id: 2,
    judul: "Pembangunan Infrastruktur Desa",
    isi: "Proyek pembangunan infrastruktur desa telah dimulai untuk memudahkan akses masyarakat.",
    gambar: "infrastruktur.jpg",
    detailBerita:
      "Pembangunan infrastruktur adalah salah satu langkah besar yang telah kami ambil untuk meningkatkan kualitas hidup penduduk desa kami. Proyek ini melibatkan pembangunan jalan, jembatan, dan fasilitas lainnya yang akan membantu memudahkan akses masyarakat. Ini akan mengurangi waktu perjalanan antar desa dan memungkinkan akses lebih mudah ke berbagai layanan penting seperti pusat kesehatan dan pendidikan. Kami juga memberikan perhatian khusus pada kelestarian lingkungan selama proses pembangunan ini. Proyek infrastruktur ini adalah bagian dari komitmen kami untuk menciptakan desa yang lebih baik dan lebih terhubung.",
  },
  {
    id: 3,
    judul: "Pelatihan Pertanian Organik",
    isi: "Masyarakat desa mengikuti pelatihan pertanian organik untuk meningkatkan hasil panen.",
    gambar: "pertanian.jpg",
    detailBerita:
      "Pertanian organik adalah salah satu inisiatif yang telah membawa perubahan signifikan dalam kehidupan masyarakat desa kami. Melalui pelatihan pertanian organik, kami telah memberdayakan petani setempat untuk mengadopsi praktik pertanian yang lebih berkelanjutan dan ramah lingkungan. Hasilnya adalah peningkatan signifikan dalam hasil panen dan kualitas produk pertanian kami. Selain itu, ini juga memberikan manfaat positif bagi lingkungan dengan mengurangi penggunaan pestisida dan bahan kimia berbahaya. Dengan semangat kolaborasi dan komitmen untuk berinvestasi dalam pertanian organik, kami yakin akan ada pertumbuhan yang berkelanjutan di masa depan.",
  },
  {
    id: 4,
    judul: "Program Pendidikan Desa",
    isi: "Program pendidikan desa telah memberikan beasiswa kepada siswa berprestasi.",
    gambar: "pendidikan.jpg",
    detailBerita:
      "Pendidikan adalah salah satu prioritas utama di desa kami. Melalui program pendidikan desa, kami telah memberikan beasiswa kepada siswa berprestasi untuk membantu mereka mencapai impian mereka dalam pendidikan. Dukungan ini telah membuka pintu bagi siswa-siswa kami untuk mendapatkan akses ke pendidikan yang berkualitas. Selain itu, kami juga telah meningkatkan fasilitas pendidikan di desa kami dengan memperbaiki sekolah dan memperluas akses ke bahan-bahan pendidikan yang lebih baik. Ini adalah langkah penting dalam membantu generasi muda kami meraih masa depan yang cerah.",
  },
  {
    id: 5,
    judul: "Kegiatan Seni dan Budaya",
    isi: "Kegiatan seni dan budaya di desa telah menarik perhatian wisatawan dari berbagai daerah.",
    gambar: "seni.jpg",
    detailBerita:
      "Kami sangat bangga dengan kekayaan budaya dan seni yang dimiliki oleh desa kami. Kegiatan seni dan budaya kami telah menjadi daya tarik utama bagi wisatawan dari berbagai daerah. Masyarakat kami secara aktif terlibat dalam mempromosikan seni tradisional, musik, tarian, dan kerajinan tangan. Ini tidak hanya memperkenalkan budaya kami kepada dunia, tetapi juga memberikan pendapatan tambahan bagi seniman dan pengrajin lokal kami. Kami berusaha untuk menjaga dan merawat warisan budaya kami, dan kami percaya bahwa seni dan budaya adalah salah satu kekuatan yang mengikat kami sebagai komunitas.",
  },
  {
    id: 6,
    judul: "Program Lingkungan Bersih",
    isi: "Desa kita bersama-sama menjaga kebersihan lingkungan demi masa depan yang lebih baik.",
    gambar: "lingkungan.jpg",
    detailBerita:
      "Komitmen kami terhadap kebersihan lingkungan adalah hal yang sangat penting. Melalui program lingkungan bersih, kami telah berhasil menggerakkan masyarakat untuk bersama-sama menjaga kebersihan lingkungan demi masa depan yang lebih baik. Program ini mencakup pengumpulan sampah, pengelolaan limbah, dan penanaman pohon. Upaya ini telah membawa dampak positif dalam menjaga keseimbangan ekosistem kami dan menjaga kualitas hidup yang lebih baik bagi semua penduduk desa kami.",
  },
  {
    id: 7,
    judul: "Perkembangan Ekonomi Desa",
    isi: "Ekonomi desa terus berkembang dengan adanya program pelatihan wirausaha.",
    gambar: "ekonomi.jpg",
    detailBerita:
      "Ekonomi desa kami terus berkembang pesat berkat berbagai program pelatihan wirausaha. Kami memberikan pelatihan dan dukungan kepada warga desa untuk memulai bisnis mereka sendiri. Ini mencakup berbagai sektor seperti pertanian, kerajinan, dan perdagangan. Hasilnya adalah peningkatan pendapatan dan terciptanya lapangan pekerjaan lokal. Kami berkomitmen untuk mendukung wirausaha lokal dan mendorong pertumbuhan ekonomi yang berkelanjutan di desa kami.",
  },
  {
    id: 8,
    judul: "Kebersamaan Warga Desa",
    isi: "Semangat gotong royong menjadi kekuatan warga desa dalam membangun bersama.",
    gambar: "gotong-royong.jpg",
    detailBerita:
      "Semangat gotong royong adalah inti dari kehidupan masyarakat desa kami. Kami percaya bahwa dengan bersatu, kami dapat mencapai banyak hal. Gotong royong kami terlihat dalam berbagai proyek, mulai dari pembangunan infrastruktur hingga kegiatan sosial. Kebersamaan ini adalah kekuatan kami dalam membangun bersama dan menciptakan lingkungan yang lebih baik untuk semua.",
  },
  {
    id: 9,
    judul: "Kesehatan Masyarakat Desa",
    isi: "Program kesehatan masyarakat desa telah meningkatkan kualitas hidup penduduk.",
    gambar: "kesehatan.jpg",
    detailBerita:
      "Kesehatan masyarakat desa adalah prioritas utama kami. Kami telah meluncurkan program-program kesehatan yang mencakup penyuluhan kesehatan, pemeriksaan medis rutin, dan fasilitas kesehatan yang lebih baik. Ini telah membantu meningkatkan kualitas hidup penduduk desa kami. Kami juga fokus pada pencegahan penyakit dan promosi gaya hidup sehat. Dengan adanya program ini, kami berharap akan melihat masyarakat yang lebih sehat dan lebih bahagia di desa kami.",
  },
  {
    id: 10,
    judul: "Keindahan Alam Desa",
    isi: "Desa kita dikelilingi oleh keindahan alam yang masih asri dan alami.",
    gambar: "alam.jpg",
    detailBerita:
      "Keindahan alam desa kami adalah salah satu aset paling berharga. Kami dikelilingi oleh hutan yang masih asri, sungai yang jernih, dan pemandangan alam yang menakjubkan. Kami berkomitmen untuk menjaga kelestarian alam ini dengan melakukan pelestarian dan penanaman pohon. Ini adalah tempat yang indah untuk berjalan-jalan, berpetualang, dan menikmati keindahan alam yang alami.",
  },
  {
    id: 11,
    judul: "Perkembangan Industri Kecil",
    isi: "Industri kecil di desa terus berkembang dan memberikan lapangan pekerjaan.",
    gambar: "industri.jpg",
    detailBerita:
      "Industri kecil di desa kami telah menjadi sumber lapangan pekerjaan yang penting bagi masyarakat lokal. Dari kerajinan tangan hingga produksi makanan lokal, kami telah melihat pertumbuhan signifikan dalam sektor ini. Program pelatihan wirausaha telah membantu individu-individu memulai bisnis mereka sendiri dan menciptakan lapangan pekerjaan. Kami sangat optimis bahwa perkembangan industri kecil akan terus berlanjut dan memberikan manfaat ekonomi yang lebih besar bagi desa kami.",
  },
  {
    id: 12,
    judul: "Pemberdayaan Perempuan Desa",
    isi: "Perempuan desa aktif dalam program pemberdayaan ekonomi dan sosial.",
    gambar: "perempuan.jpg",
    detailBerita:
      "Pemberdayaan perempuan adalah bagian penting dari upaya kami untuk memajukan desa kami. Perempuan desa kami telah aktif terlibat dalam berbagai program pemberdayaan ekonomi dan sosial. Mereka telah menjadi penggerak utama di sektor-sektor seperti pertanian, kerajinan tangan, dan wirausaha. Ini adalah langkah penting dalam menciptakan kesetaraan gender dan memberikan perempuan kesempatan untuk berkontribusi secara signifikan dalam pembangunan desa kami.",
  },
  {
    id: 13,
    judul: "Peningkatan Sarana Transportasi",
    isi: "Pembangunan jalan dan transportasi desa telah meningkatkan konektivitas.",
    gambar: "transportasi.jpg",
    detailBerita:
      "Pembangunan jalan dan transportasi di desa kami adalah langkah penting dalam meningkatkan konektivitas. Dengan jalan yang lebih baik dan akses yang lebih mudah, kami telah mengurangi waktu perjalanan antar desa dan memfasilitasi mobilitas penduduk. Ini juga memungkinkan akses lebih mudah ke layanan penting seperti pusat kesehatan dan pendidikan. Kami telah bekerja sama dengan pemerintah dan pihak swasta untuk memastikan bahwa infrastruktur transportasi kami terus ditingkatkan demi kesejahteraan penduduk desa kami.",
  },
  {
    id: 14,
    judul: "Keberlanjutan Lingkungan",
    isi: "Komitmen desa untuk menjaga keberlanjutan lingkungan terus ditegakkan.",
    gambar: "keberlanjutan.jpg",
    detailBerita:
      "Kami memiliki tekad kuat untuk menjaga keberlanjutan lingkungan di desa kami. Sebagai bagian dari komitmen kami terhadap lingkungan, kami telah mengadopsi berbagai praktik yang bertujuan untuk mengurangi jejak lingkungan dan mempertahankan keindahan alam desa kami. Ini termasuk program penanaman pohon, pengelolaan limbah yang lebih baik, dan promosi penggunaan energi terbarukan. Kami juga aktif dalam melibatkan masyarakat dalam upaya pelestarian lingkungan ini. Kami percaya bahwa menjaga keberlanjutan lingkungan adalah tanggung jawab bersama kita untuk masa depan yang lebih baik.",
  },
  {
    id: 15,
    judul: "Perkembangan Pariwisata",
    isi: "Pariwisata desa terus tumbuh dengan adanya berbagai atraksi menarik.",
    gambar: "pariwisata.jpg",
    detailBerita:
      "Pariwisata desa kami terus berkembang pesat. Dengan berbagai atraksi menarik seperti ekowisata, kegiatan seni dan budaya, serta keindahan alam yang masih asri, kami telah berhasil menarik perhatian wisatawan dari berbagai daerah. Ini tidak hanya membawa pendapatan tambahan bagi masyarakat kami, tetapi juga memperkenalkan mereka pada budaya dan keindahan alam yang unik. Kami berusaha untuk menjaga kualitas pengalaman wisatawan dengan memberikan layanan yang ramah dan fasilitas yang nyaman. Kami sangat bersemangat tentang masa depan pariwisata desa kami dan berkomitmen untuk terus meningkatkan dan memperluas berbagai penawaran wisata yang kami miliki.",
  },
  {
    id: 16,
    judul: "Pendidikan Anak Desa",
    isi: "Anak-anak desa mendapatkan akses pendidikan yang berkualitas.",
    gambar: "pendidikan-anak.jpg",
    detailBerita:
      "Pendidikan adalah salah satu prioritas utama di desa kami. Kami berusaha untuk memberikan akses pendidikan yang berkualitas kepada anak-anak kami. Melalui program pendidikan desa, kami telah memberikan beasiswa kepada siswa berprestasi dan melibatkan komunitas dalam mendukung pendidikan. Sekolah-sekolah kami dilengkapi dengan fasilitas yang memadai dan guru-guru yang berpengalaman. Kami berharap bahwa dengan pendidikan yang berkualitas, anak-anak kami akan memiliki peluang yang lebih baik untuk masa depan yang sukses dan akan menjadi pemimpin yang berkontribusi bagi masyarakat kami.",
  },
];

const BeritaScreen = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(beritaData.length / itemsPerPage);

  const [currentImages, setCurrentImages] = useState([]);
  const [selectedBerita, setSelectedBerita] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const beritaChunks = beritaData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const openModal = (berita) => {
    setSelectedBerita(berita);
    setModalIsOpen(true);
    // document.body.style.overflow = "hidden"; // Menambahkan overflow: hidden pada body
  };

  const closeModal = () => {
    setSelectedBerita(null);
    setModalIsOpen(false);
    // document.body.style.overflow = "auto"; // Menghapus overflow: hidden pada body
  };
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageBerita = beritaData.slice(startIndex, endIndex);
    const pageImages = pageBerita.map(
      (berita) => Images[(berita.id - 1) % imageCount]
    );

    setCurrentImages(pageImages);
  }, [currentPage]);

  return (
    <div className="berita-container-full">
      <h1 style={{ marginTop: "100px" }}>Berita Terbaru</h1>
      <div className="berita-card-container">
        {beritaChunks.map((berita, idx) => (
          <div
            className="berita-card"
            key={berita.id}
            onClick={() => openModal(berita)}
          >
            <img
              style={{ width: "350px", height: "300px" }}
              src={currentImages[idx % imageCount]}
              alt={berita.judul}
            />
            <h2>{berita.judul}</h2>
            <p>{berita.isi}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className={`berita-pagination-button`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`berita-pagination-button`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {selectedBerita && (
        <Modal
          show={modalIsOpen}
          onHide={closeModal}
          dialogClassName="modal-container"
          >
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: "center", fontWeight: "bold" }}>
              {selectedBerita.judul}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={Images[(selectedBerita.id - 1) % imageCount]}
              alt={selectedBerita.judul}
              style={{ width: "100%", maxHeight: "300px", borderRadius: "8px" }}
            />
            <p>{selectedBerita.isi}</p>
            {selectedBerita.detailBerita && (
              <div className="detail-box">
                <h3>Detail Berita</h3>
                <p>{selectedBerita.detailBerita}</p>
              </div>
            )}
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default BeritaScreen;
