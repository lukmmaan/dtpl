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
  const itemsPerPage = 5;
  const maxPagesToShow = 10; 

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

  const totalPages = Math.ceil(DataUmkm.length / itemsPerPage);

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const filteredData = DataUmkm.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            className="umkm-registration-link"
          >
            Approval UMKM
          </button>
        )}
      </div>
      <div className="umkm-cards">
        {filteredData.map((umkm) =>
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
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-button"
        >
          Previous
        </button>
        {startPage > 1 && (
          <button onClick={() => handlePageChange(1)} className="page-button">
            1
          </button>
        )}
        {startPage > 2 && <button className="ellipsis">...</button>}
        {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(startPage + index)}
            className={`page-button ${
              currentPage === startPage + index ? "active" : ""
            }`}
          >
            {startPage + index}
          </button>
        ))}
        {endPage < totalPages - 1 && <button className="ellipsis">...</button>}
        {endPage < totalPages && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className="page-button"
          >
            {totalPages}
          </button>
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(UMKMList);
