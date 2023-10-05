import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import DestinasiCarousel from "./Carousel/Carousel";
import BeritaScreen from "./Berita/BeritaScreen";

const Home = () => {
  return (
    <>
      <DestinasiCarousel />
      <div className="divider"></div> {/* Pembatas */}
      <BeritaScreen />
      <div className="divider"></div> {/* Pembatas */}
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Selamat datang di Desa Manud Jaya</h1>
          <p className="hero-subtitle">
            Temukan keindahan alam dan budaya kami yang luar biasa.
          </p>
          <Link to="/services" className="home-button">
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
