// DestinasiList.js
import React, { useState } from "react";
import "./Destinasilist.css";
import DestinasiData from "./DestinasiData";
import { Wisata4, Wisata5 } from "../../Assets/Image/index";

const DestinasiList = () => {
  const itemsPerPage = 2; // Menampilkan 2 kartu per halaman
  const totalItems = DestinasiData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    document
      .querySelector(".destinasiList")
      .scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    document
      .querySelector(".destinasiList")
      .scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="top">
      <div className="destinasiList">
        <header className="destinasiList-header">
          <h2>Destinasi Wisata di Desa Manud Jaya</h2>
        </header>
        <div className="destinasiList-container">
          {DestinasiData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          ).map((destinasi, index) => (
            <div className="destinasi-item" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="destinasi-left">
                    <img src={Wisata4} alt="Gambar Kiri" />
                  </div>
                  <div className="destinasi-right">
                    <h1>{destinasi.nama}</h1>
                    <p>Lokasi: {destinasi.lokasi}</p>
                    <p>{destinasi.deskripsi}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="destinasi-right">
                    <h1>{destinasi.nama}</h1>
                    <p>Lokasi: {destinasi.lokasi}</p>
                    <p>{destinasi.deskripsi}</p>
                  </div>
                  <div className="destinasi-left">
                    <img src={Wisata5} alt="Gambar Kanan" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} >
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

export default DestinasiList;
