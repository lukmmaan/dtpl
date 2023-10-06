// Berita.js (Komponen Berita)
import React, { useState } from "react";
import "./Berita.css";
import BeritaData from "./BeritaData"; // Import data berita
import { News } from "../../Assets/Image/index";

const Berita = () => {
  const itemsPerPage = 2; // Menampilkan 2 berita per halaman
  const totalItems = BeritaData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    document.querySelector(".berita").scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    document.querySelector(".berita").scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="top">
      <div className="berita">
        <header className="berita-header">
          <h2>Berita Desa Manud Jaya</h2>
        </header>
        <div className="berita-container">
          {BeritaData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          ).map((berita, index) => (
            <div className="berita-item" key={berita.id}>
              {index % 2 === 0 ? (
                <>
                  <div className="berita-left">
                    <img src={News} alt="Gambar Kiri" />
                  </div>
                  <div className="berita-right">
                    <h1>{berita.judul}</h1>
                    <p>{berita.isi}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="berita-right">
                    <h1>{berita.judul}</h1>
                    <p>{berita.isi}</p>
                  </div>
                  <div className="berita-left">
                    <img src={News} alt="Gambar Kanan" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={handlePrevPage}
            // disabled={currentPage === 1}
          >
            Sebelumnya
          </button>
          <button
            onClick={handleNextPage}
            // disabled={currentPage === totalPages}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Berita;
