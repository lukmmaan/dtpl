import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./Carousel.css";
import { Kampung1, Kampung2, Kampung3 } from "../../../Assets/Image/index";
import DestinasiData from "../../DestinasiList/DestinasiData";

const images = [Kampung1, Kampung2, Kampung3];
const imageCount = 3; // Jumlah gambar yang akan diulang

const DestinasiSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === DestinasiData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? DestinasiData.length - 1 : prevIndex - 1
    );
  };

  // Membuat slider berjalan otomatis setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen dilepas
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider">
        {DestinasiData.map((destinasi, index) => (
          <img
            key={index}
            src={images[index % imageCount]} // Gunakan gambar dari array images dengan indeks yang diulang
            alt={`Image ${index + 1}`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}
        <div className="info-box">
          <strong>
            <h1 style={{ marginBottom: "20px" }}>Wisata Manud Jaya</h1>
          </strong>
          <h2>{DestinasiData[currentIndex].nama}</h2>
          <p>{DestinasiData[currentIndex].deskripsi}</p>
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100,
                smooth: "easeInOutQuart",
              });
            }}
            to={{
              pathname: `/destinasi-detail/${DestinasiData[currentIndex].id}`,
            }}
          >
            <button className="detail-button">Lihat Detail</button>
          </Link>
        </div>
        <button className="prev-button" onClick={handlePrev}></button>
        <button className="next-button" onClick={handleNext}></button>
      </div>
    </div>
  );
};

export default DestinasiSlider;
