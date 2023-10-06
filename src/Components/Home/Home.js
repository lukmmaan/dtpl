import React from "react";
import { Element, Link } from "react-scroll"; // Impor Element dan Link dari react-scroll
import "./Home.css";
import DestinasiCarousel from "./Carousel/Carousel";
import BeritaScreen from "./Berita/BeritaScreen";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Selamat datang di Desa Manud Jaya</h1>
          <p className="hero-subtitle">
            Temukan keindahan alam dan budaya kami yang luar biasa.
          </p>
          <Link to="destinasi-carousel" smooth={true} duration={100}>
            <button className="hero-button">Pelajari Lebih Lanjut</button>
          </Link>
        </div>
      </div>
      <Element name="destinasi-carousel" className="element">
        {/* Gunakan Element untuk menandai elemen yang akan di-scroll */}
        <DestinasiCarousel />
      </Element>
      <div className="divider"></div>
      <BeritaScreen />
    </>
  );
};

export default Home;
