import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./Home.css";
import DestinasiCarousel from "./Carousel/Carousel";
import BeritaScreen from "./Berita/BeritaScreen";

const Home = () => {
  return (
    <div className="container-rumah">
      <section className="section-rumah">
        <div className="home-container">
          <div className="hero-section">
            <h1 className="hero-title">Selamat datang di Desa Manud Jaya</h1>
            <p className="hero-subtitle">
              Temukan keindahan alam dan budaya kami yang luar biasa.
            </p>
            <Link
              onClick={() => {
                scroll.scrollToTop({
                  duration: 100, // Durasi animasi dalam milidetik
                  smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                });
              }}
              to="/contact"
              className="hero-button"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
      <section className="section-rumah">
        <DestinasiCarousel />
      </section>
      <section className="section-rumah">
        <BeritaScreen />
      </section>
    </div>
  );
};

export default Home;
