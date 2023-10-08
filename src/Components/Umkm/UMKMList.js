import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";

import DataUmkm from "./DataUmkm";
import { Umkm } from "../../Assets/Image/index";
import "./UMKMList.css";

const UMKMList = ({ user }) => {
  const navigate = useNavigate();
  const handleDaftarUmkmClick = () => {
    if (user && user.role === "") {
      swal.fire({
        title: "Harap Login Dulu",
        text: "Anda harus login terlebih dahulu untuk mendaftar UMKM.",
        icon: "warning",
      });
    } else {
      navigate("/input-umkm");
    }
  };

  return (
    <div className="umkm-list-container">
      <div className="umkm-header">
        <h1>Usaha Desa Manud Jaya</h1>
        {user && (user.role === "" || user.role === "user") && (
          <button
            onClick={handleDaftarUmkmClick}
            className="umkm-registration-link"
          >
            Daftar UMKM
          </button>
        )}
      </div>
      <div className="umkm-cards">
        {DataUmkm.map((umkm) => (
          <div className="umkm-card" key={umkm.id}>
            <Link to={`/umkm/${umkm.id}`} className="umkm-link">
              <img src={Umkm} alt={umkm.nama} className="umkm-image" />
              <h3>{umkm.nama}</h3>
            </Link>
          </div>
        ))}
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
