import React from "react";
import { Link } from "react-router-dom";

import DataUmkm from "./DataUmkm";
import { Umkm } from "../../Assets/Image/index";
import "./UMKMList.css";

const UMKMList = () => {
  return (
    <div className="umkm-list-container">
      <div className="umkm-header">
        <h1>Usaha Desa Manud Jaya</h1>
        <Link to="/input-umkm" className="umkm-registration-link">
          Daftar UMKM
        </Link>
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

export default UMKMList;
