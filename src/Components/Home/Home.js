import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./Home.css";
import DestinasiCarousel from "./Carousel/Carousel";
import BeritaScreen from "./Berita/BeritaScreen";
import {
  bos1,
  bos2,
  bos3,
  bos4,
  bos5,
  bos6,
  desaaja,
  like,
  unlike,
} from "../../Assets/Image";

const Home = () => {
  const cardItems = [
    {
      id: 1,
      title: "Stacked Card Carousel",
      image: bos1,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.",
    },
    {
      id: 2,
      title: "Second Item",
      image: bos2,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "A Third Card",
      image: bos3,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla.",
    },
    {
      id: 4,
      title: "Fourth",
      image: bos4,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Fourth",
      image: bos5,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Fourth",
      image: bos6,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const acaraDesa = [
    {
      judul:
        "Pengembangan desa wisata oleh Kepala Desa melalui pemanfaatan sumber daya alam dan budaya lokal",
      detail:
        "Rencana pengembangan desa wisata akan dipimpin oleh Kepala Desa dan memanfaatkan potensi alam dan budaya lokal untuk meningkatkan pariwisata di desa. Acara ini akan membahas langkah-langkah konkret yang akan diambil untuk mencapai tujuan ini.",
    },
    {
      judul: "Program penghijauan dan reboisasi oleh Kepala Desa",
      detail:
        "Program penghijauan dan reboisasi adalah inisiatif penting yang akan dijalankan oleh Kepala Desa untuk menjaga lingkungan desa. Kami akan mempresentasikan rencana penanaman pohon dan langkah-langkah reboisasi yang akan dijalankan oleh kepala desa.",
    },
    {
      judul:
        "Pembentukan posyandu oleh Kepala Desa atau pos pelayanan terpadu untuk ibu dan anak",
      detail:
        "Pembentukan posyandu adalah upaya penting yang diprakarsai oleh Kepala Desa untuk meningkatkan kesehatan ibu dan anak di desa. Kami akan membahas rencana pembentukan posyandu dan layanan yang akan disediakan.",
    },
    {
      judul:
        "Pelatihan dan pendampingan untuk usaha pertanian, perikanan, atau kerajinan tangan oleh Kepala Desa",
      detail:
        "Pelatihan dan pendampingan akan diberikan kepada warga desa yang berminat mengembangkan usaha pertanian, perikanan, atau kerajinan tangan, dengan dukungan dari Kepala Desa. Ini adalah kesempatan untuk meningkatkan keterampilan dan potensi ekonomi desa.",
    },
    {
      judul: "Pelatihan keterampilan kerja untuk pemuda desa oleh Kepala Desa",
      detail:
        "Pemuda desa merupakan aset berharga. Kami akan menyelenggarakan pelatihan keterampilan kerja yang akan dipandu oleh Kepala Desa dan membantu pemuda desa dalam mencari pekerjaan atau mengembangkan bisnis mereka sendiri.",
    },
    {
      judul: "Pemberdayaan silitas air bersih dan sanitasi oleh Kepala Desa",
      detail:
        "Ketersediaan air bersih dan sanitasi adalah hak dasar setiap warga desa. Kepala Desa akan memaparkan upaya-upaya untuk meningkatkan akses sumber air bersih dan sanitasi di desa.",
    },
  ];

  const determineClasses = (indexes, cardIndex) => {
    if (indexes.currentIndex === cardIndex) {
      return "active";
    } else if (indexes.nextIndex === cardIndex) {
      return "next";
    } else if (indexes.previousIndex === cardIndex) {
      return "prev";
    }
    return "inactive";
  };

  const CardCarousel = () => {
    const [indexes, setIndexes] = useState({
      previousIndex: 0,
      currentIndex: 0,
      nextIndex: 1,
    });
    const [hovered, setHovered] = useState(false);

    const handleCardTransition = useCallback(() => {
      if (indexes.currentIndex >= cardItems.length - 1) {
        setIndexes({
          previousIndex: cardItems.length - 1,
          currentIndex: 0,
          nextIndex: 1,
        });
      } else {
        setIndexes((prevState) => ({
          previousIndex: prevState.currentIndex,
          currentIndex: prevState.currentIndex + 1,
          nextIndex:
            prevState.currentIndex + 2 === cardItems.length
              ? 0
              : prevState.currentIndex + 2,
        }));
      }
    }, [indexes.currentIndex]);

    useEffect(() => {
      const transitionInterval = setInterval(() => {
        if (!hovered) {
          handleCardTransition();
        }
      }, 2000);

      return () => clearInterval(transitionInterval);
    }, [handleCardTransition, hovered]);

    return (
      <div className="container">
        <ul
          style={{
            listStylee: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            height: "200px",
            // width: "1500px",
            margin: "100px auto",
            alignItems: "center",
            position: "relative",
          }}
        >
          {cardItems.map((card, index) => (
            <li
              key={card.id}
              style={{ listStyleType: "none", borderRadius: "40" }}
              className={`cardIni ${determineClasses(indexes, index)}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "100%",
                  borderRadius: "40",
                  // alignItems: "center",
                }}
              >
                <div
                  style={{
                    flex: 2,
                    borderRadius: "40",
                    // alignItems: "center"
                  }}
                >
                  <img
                    src={card.image}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "40",
                      // padding: "20px",
                    }}
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "90%",
                    }}
                  >
                    <h1
                      style={{
                        color: "black",
                        textAlign: "justify",
                        marginBottom: "50px",
                        fontSize: "40px",
                      }}
                    >
                      {acaraDesa[index].judul}
                    </h1>
                    <p
                      style={{
                        color: "grey",
                        textAlign: "justify",
                        fontSize: "17px",
                        // marginBottom: "90px",
                      }}
                    >
                      {acaraDesa[index].detail}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <img
                        src={like}
                        style={{
                          height: "20px",
                          width: "20px",
                          borderRadius: "40",
                          marginLeft: "20px",
                          marginRight: "10px",
                          // padding: "20px",
                        }}
                      />
                      <p>0</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <img
                        src={unlike}
                        style={{
                          height: "20px",
                          width: "20px",
                          borderRadius: "40",
                          marginLeft: "20px",
                          // padding: "20px",
                          marginTop: "6px",
                          marginRight: "10px",
                        }}
                      />
                      <p>0</p>
                    </div>
                    <p
                      style={{
                        color: "grey",
                        textAlign: "right",
                        marginRight: "20px",
                        fontSize: "11px",
                        marginLeft: "400px",
                      }}
                    >
                      Desa Manud Jaya, 5 November 2023
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container-rumah">
      {/* <section className="section-rumah">
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
      </section> */}
      <section className="section-rumah">
        <CardCarousel />
      </section>
      <section className="section-rumah">
        <DestinasiCarousel />
      </section>

      {/* <section className="section-rumah">
        <BeritaScreen />
      </section> */}
    </div>
  );
};

export default Home;
