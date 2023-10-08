// UMKMList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import swal from "sweetalert2";

import DataUmkm from "./DataUmkm";
import { Umkm } from "../../Assets/Image/index";
import "./UMKMList.css";

const UMKMList = ({ user }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk penyimpanan kata kunci pencarian
  const itemsPerPage = 5;
  const maxPagesToShow = 10;
  const [searchResults, setSearchResults] = useState([]); // State untuk penyimpanan hasil pencarian
  const [isSearching, setIsSearching] = useState(false); // State untuk mengindikasikan apakah sedang dalam proses pencarian

  const handleDaftarUmkmClick = () => {
    if (user && user.role === "") {
      swal.fire({
        title: "Harap Login Dulu",
        text: "Anda harus login terlebih dahulu untuk mendaftar UMKM.",
        icon: "warning",
      });
    } else {
      navigate("/input-umkm");
      scroll.scrollToTop({
        duration: 100,
        smooth: "easeInOutQuart",
      });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(
    (isSearching ? searchResults.length : DataUmkm.length) / itemsPerPage
  );

  // Fungsi untuk melakukan pencarian saat perubahan input
  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Melakukan pencarian dengan memfilter data sesuai dengan kata kunci
    const results = DataUmkm.filter((umkm) =>
      umkm.nama.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSearchResults(results); // Menyimpan hasil pencarian
    setCurrentPage(1); // Mengembalikan halaman ke halaman pertama saat mencari
    setIsSearching(true); // Mengubah status pencarian menjadi true
    if (e.target.value === "") {
      setIsSearching(false);
    }
  };

  // Render tampilan sesuai dengan apakah sedang dalam proses pencarian atau tidak
  const renderContent = () => {
    if (isSearching) {
      // Jika sedang dalam proses pencarian, tampilkan hasil pencarian
      return (
        <div className="umkm-cards">
          {searchResults
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((umkm) => (
              <div className="umkm-card" key={umkm.id}>
                <Link
                  onClick={() => {
                    scroll.scrollToTop({
                      duration: 100,
                      smooth: "easeInOutQuart",
                    });
                  }}
                  to={`/umkm/${umkm.id}`}
                  className="umkm-link"
                >
                  <img src={Umkm} alt={umkm.nama} className="umkm-image" />
                  <h3>{umkm.nama}</h3>
                </Link>
              </div>
            ))}
        </div>
      );
    } else {
      // Jika tidak dalam proses pencarian, tampilkan semua data
      return (
        <div className="umkm-cards">
          {DataUmkm.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          ).map((umkm) =>
            umkm.status === "approved" ? (
              <div className="umkm-card" key={umkm.id}>
                <Link
                  onClick={() => {
                    scroll.scrollToTop({
                      duration: 100,
                      smooth: "easeInOutQuart",
                    });
                  }}
                  to={`/umkm/${umkm.id}`}
                  className="umkm-link"
                >
                  <img src={Umkm} alt={umkm.nama} className="umkm-image" />
                  <h3>{umkm.nama}</h3>
                </Link>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      );
    }
  };

  return (
    <div className="umkm-list-container">
      <div className="umkm-header">
        <h1>Usaha Desa</h1>
        {user && (user.role === "" || user.role === "user") && (
          <button
            onClick={handleDaftarUmkmClick}
            className="umkm-registration-link"
          >
            Daftar UMKM
          </button>
        )}
        {user && user.role === "kepalaDesa" && (
          <button
            onClick={() => {
              navigate("/umkm-approval");
              scroll.scrollToTop({
                duration: 100,
                smooth: "easeInOutQuart",
              });
            }}
            className="umkm-registration-link"
          >
            Approval UMKM
          </button>
        )}
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari UMKM apaan bang?"
          value={searchTerm}
          onChange={handleSearch}
          className="custom-search-bar"
        />
      </div>
      {renderContent()}
      {!isSearching && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-button"
          >
            Previous
          </button>
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="page-button"
            >
              {currentPage - 1}
            </button>
          )}
          <button className="page-button active">{currentPage}</button>
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="page-button"
            >
              {currentPage + 1}
            </button>
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="page-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(UMKMList);
