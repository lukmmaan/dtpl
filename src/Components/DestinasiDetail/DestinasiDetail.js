// DestinasiDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { Kampung7 } from "../../Assets/Image/index";
import DestinasiData from "../DestinasiList/DestinasiData";
import "./DestinasiDetail.css";

const DestinasiDetail = () => {
  const { id } = useParams();
  const data = DestinasiData.find((val) => val.id === parseInt(id, 10));

  return (
    <div className="destinasi-detail">
      <div className="destinasi-header">
        <img src={Kampung7} alt={data.nama} style={{ width: "60%" }} />
        <h1>{data.nama}</h1>
        <p>{data.lokasi}</p>
      </div>
      <div className="destinasi-content">
        <div className="destinasi-section">
          <h2>Deskripsi</h2>
          <p>{data.deskripsi}</p>
        </div>
        <div className="destinasi-section">
          <h2>Atraksi Utama</h2>
          <p>{data.atraksiUtama}</p>
        </div>
        <div className="destinasi-section">
          <h2>Aktivitas</h2>
          <ul>
            {data.aktivitas.map((aktivitas, index) => (
              <li key={index}>{aktivitas}</li>
            ))}
          </ul>
        </div>
        <div className="destinasi-section">
          <h2>Akomodasi</h2>
          {data.akomodasi.map((akomodasi, index) => (
            <div key={index} className="accommodation-item">
              <h3>{akomodasi.nama}</h3>
              <p>Tipe: {akomodasi.tipe}</p>
              <ul>
                {akomodasi.fasilitas.map((fasilitas, index) => (
                  <li key={index}>{fasilitas}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="destinasi-section">
          <h2>Makanan & Kuliner</h2>
          <ul>
            {data.makananKuliner.map((kuliner, index) => (
              <li key={index}>{kuliner}</li>
            ))}
          </ul>
        </div>
        <div className="destinasi-section">
          <h2>Transportasi</h2>
          <p>{data.transportasi.cara}</p>
          <p>Waktu Tempuh: {data.transportasi.waktuTempuh}</p>
        </div>
        <div className="destinasi-section">
          <h2>Waktu Terbaik</h2>
          <p>{data.waktuTerbaik}</p>
        </div>
        <div className="destinasi-section">
          <h2>Fasilitas Umum</h2>
          <p>Toilet: {data.fasilitasUmum.toilet}</p>
          <p>Pusat Informasi: {data.fasilitasUmum.pusatInformasi}</p>
        </div>
        <div className="destinasi-section">
          <h2>Ulasan</h2>
          {data.ulasan.map((ulasan, index) => (
            <div key={index} className="review-item">
              <h3>{ulasan.nama}</h3>
              <p>{ulasan.ulasan}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinasiDetail;
