// Destinasi.js
import React from "react";
import { Wisata4, Wisata5 } from "../../Assets/Image/index";
import "./Destinasi.css";

const Destinasi = () => {
  return (
    <div className="destinasi">
      <h1 className="destinasi-title">Destinasi Desa Manud Jaya</h1>
      <div className="destinasi-content">
        <div className="destinasi-left">
          <img src={Wisata4} alt="Gambar Kiri" />
        </div>
        <div className="destinasi-right">
          <h1>Destinasi Wisata Desa Manud Jaya</h1>
          <p>Lokasi: Desa Manud Jaya</p>
          <p>
            Desa Manud Jaya adalah tempat yang harus Anda kunjungi jika Anda
            mencari pengalaman alam yang penuh petualangan. Terletak di
            pedalaman, destinasi ini menawarkan keindahan alam yang belum
            tersentuh. Anda dapat memulai petualangan Anda dengan trekking
            melalui hutan lebat yang dipenuhi flora dan fauna yang unik. Rasakan
            kegembiraan mendaki gunung-gunung setinggi langit dan nikmati
            pemandangan spektakuler dari puncak-puncaknya.
          </p>
        </div>
      </div>
      <div className="destinasi-content-reverse">
        <div className="destinasi-left">
          <h1>Destinasi Wisata Desa Manud Jaya</h1>
          <p>Lokasi: Desa Manud Jaya</p>
          <p>
            Desa Manud Jaya adalah tempat yang harus Anda kunjungi jika Anda
            mencari pengalaman alam yang penuh petualangan. Terletak di
            pedalaman, destinasi ini menawarkan keindahan alam yang belum
            tersentuh. Anda dapat memulai petualangan Anda dengan trekking
            melalui hutan lebat yang dipenuhi flora dan fauna yang unik. Rasakan
            kegembiraan mendaki gunung-gunung setinggi langit dan nikmati
            pemandangan spektakuler dari puncak-puncaknya.
          </p>
        </div>
        <div className="destinasi-right">
          <img src={Wisata5} alt="Gambar Kanan" />
        </div>
      </div>
    </div>
  );
};

export default Destinasi;
