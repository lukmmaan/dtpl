import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Wisata1, Wisata2, Wisata3 } from "../../../Assets/Image/index";
import "./Carousel.css"; // Buat file CSS untuk styling tambahan
import { Link } from "react-router-dom";

const destinasiData = [
  {
    id: 1,
    image: Wisata1,
    nama: "Destinasi Wisata 1",
    deskripsi:
      "Deskripsi singkat mengenai destinasi wisata ini. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: Wisata2,
    nama: "Destinasi Wisata 2",
    deskripsi:
      "Deskripsi singkat mengenai destinasi wisata ini. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: Wisata3,
    nama: "Destinasi Wisata 3",
    deskripsi:
      "Deskripsi singkat mengenai destinasi wisata ini. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const DestinasiCarousel = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke paling atas halaman
  };

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true} // Mengaktifkan auto play
        interval={3000} // Interval auto play dalam milidetik
      >
        {destinasiData.map((destinasi) => (
          <div className="destinasi-card" key={destinasi.id}>
            <img src={destinasi.image} alt={destinasi.nama} />
            <div className="destinasi-card-content">
              <h2>{destinasi.nama}</h2>
              <p>{destinasi.deskripsi}</p>
              <Link
                to={"/destinasi-list"}
                onClick={handleScrollToTop}
              >
                <button className="destinasi-button">Lihat Selengkapnya</button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DestinasiCarousel;
