import React, { useState } from "react";
import Swal from "sweetalert2";
import { animateScroll as scroll } from "react-scroll";

import "./UMKMApproval.css";
import DataUmkm from "./DataUmkm";
import { IzinUmkm } from "../../Assets/Image";

const UMKMApproval = () => {
  const [umkmData, setUmkmData] = useState(DataUmkm);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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
        // Tambahkan logika untuk menyetujui data berdasarkan ID di sini
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
        // Tambahkan logika untuk menolak data berdasarkan ID di sini
      }
    });
  };

  // Fungsi untuk mengelompokkan UMKM menjadi baris-baris dengan 3 card setiap baris
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const umkmChunks = chunkArray(umkmData, itemsPerPage);

  // Mengambil data hanya untuk halaman saat ini
  const currentUmkmPage = umkmChunks[currentPage - 1];

  const nextPage = () => {
    scroll.scrollToTop({
      duration: 100, // Durasi animasi dalam milidetik
      smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
    });

    if (currentPage < umkmChunks.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    scroll.scrollToTop({
      duration: 100, // Durasi animasi dalam milidetik
      smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
    });

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="approve-umkm-card-container">
      <h1 style={{ textAlign: "center" }}>Daftar Persetujuan Usaha Desa</h1>
      <div className="approve-umkm-card-row">
        {currentUmkmPage.map((umkm) => (
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
    </div>
  );
};

export default UMKMApproval;
