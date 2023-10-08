import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { animateScroll as scroll } from "react-scroll";

import "./UMKMApproval.css";
import DataUmkm from "./DataUmkm";
import { IzinUmkm } from "../../Assets/Image";

const UMKMApproval = () => {
  const [umkmData, setUmkmData] = useState(DataUmkm);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searching, setSearching] = useState(false); // State untuk pencarian
  const itemsPerPage = 3;

  useEffect(() => {
    // Set currentPage ke 1 ketika terjadi perubahan pada searchKeyword
    setCurrentPage(1);
  }, [searchKeyword]);

  const handleApprove = (id, nama) => {
    Swal.fire({
      title: "Konfirmasi",
      text: `Apakah Anda yakin ingin menyetujui UMKM ${nama}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Disetujui!", `UMKM ${nama} telah disetujui.`, "success");
      }
    });
  };

  const handleDecline = (id, nama) => {
    Swal.fire({
      title: "Konfirmasi",
      text: `Apakah Anda yakin ingin menolak UMKM ${nama}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Ditolak!", `UMKM ${nama} telah ditolak.`, "error");
      }
    });
  };

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const umkmChunks = chunkArray(umkmData, itemsPerPage);

  const currentUmkmPage = umkmChunks[currentPage - 1];

  const nextPage = () => {
    scroll.scrollToTop({
      duration: 100,
      smooth: "easeInOutQuart",
    });

    if (currentPage < umkmChunks.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    scroll.scrollToTop({
      duration: 100,
      smooth: "easeInOutQuart",
    });

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setSearchKeywordActive = (value) => {
    if (value.trim() === "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
    // Set kata kunci pencarian
    setSearchKeyword(value);
  };

  const filteredUmkm = umkmData.filter((umkm) =>
    umkm.nama.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // Menggunakan data yang sesuai dengan currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUmkmPageLimited = filteredUmkm.slice(startIndex, endIndex);

  return (
    <div className="approve-umkm-card-container">
      <h1 style={{ textAlign: "center" }}>Daftar Persetujuan Usaha Desa</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari UMKM apaan bang ?"
          value={searchKeyword}
          onChange={(e) => setSearchKeywordActive(e.target.value)}
        />
      </div>
      <div className="approve-umkm-card-row">
        {currentUmkmPageLimited.map((umkm) => (
          <div className="approve-umkm-card" key={umkm.id}>
            <img
              src={IzinUmkm}
              alt={umkm.nama}
              className="approve-umkm-image"
            />
            <h2>{umkm.nama}</h2>
            <div className="approve-umkm-card-content">
              <div className="approve-umkm-card-content">
                <p data-label="Profil">: {umkm.profil}</p>
                <p data-label="Ulasan">: {umkm.ulasan}</p>
                <p data-label="Program">: {umkm.program}</p>
                <p data-label="Dukungan">: {umkm.dukungan}</p>
              </div>
            </div>
            <div className="approve-umkm-card-actions">
              <button
                className="approve-umkm-approve-button"
                onClick={() => handleApprove(umkm.id, umkm.nama)}
              >
                Approve
              </button>
              <button
                className="approve-umkm-decline-button"
                onClick={() => handleDecline(umkm.id, umkm.nama)}
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
      {!searching && (
        <div className="pagination">
          <button
            className="prev-button"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="next-button"
            onClick={nextPage}
            disabled={currentPage === umkmChunks.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UMKMApproval;
