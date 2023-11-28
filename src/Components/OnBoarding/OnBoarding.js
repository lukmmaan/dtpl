import React, { useState, useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "./OnBoarding.css";
import {
  login,
  writing,
  shopping,
  travel,
  budget,
  programing,
  complaint,
  enjoy,
} from "../../Assets/Image";

const OnBoarding = () => {
  const cardItems = [
    {
      id: 1,
      title: "Register dan Login",
      image: login,
      copy: "Daftarkan akun dan login terhadap akun sesuai role anda untuk meraih akses ke dunia layanan digital desa Manud Jaya dengan mudah dan aman.",
    },
    {
      id: 2,
      title: "Pengajuan Surat",
      image: writing,
      copy: "Ajukan surat dengan cepat dan praktis, dan saksikan proses persetujuan yang efisien oleh ketua RT dan ketua RW untuk memastikan kebutuhan administratif Anda terpenuhi.",
    },
    {
      id: 3,
      title: "Daftar dan Lihat UMKM Desa",
      image: shopping,
      copy: "Jelajahi ragam Usaha Mikro, Kecil, dan Menengah (UMKM) di Desa Manud Jaya. Daftarkan UMKM Anda untuk mendapatkan eksposur lebih luas dan temukan keragaman produk lokal yang menarik.",
    },
    {
      id: 4,
      title: "Daftar dan Lihat Destinasi Desa",
      image: travel,
      copy: "Temukan keindahan alam dan budaya Desa Manud Jaya dengan mendaftar dan menjelajahi destinasi wisata lokal. Lihat daftar tempat yang menarik dan rencanakan petualangan Anda berikutnya.",
    },
    {
      id: 5,
      title: "Keuangan Desa",
      image: budget,
      copy: "Pantau dan analisis keuangan Desa Manud Jaya secara transparan. Dapatkan wawasan mendalam mengenai alokasi dana dan kontribusi Anda dalam membangun kemakmuran bersama.",
    },
    {
      id: 6,
      title: "Program Desa",
      image: programing,
      copy: "Bergabunglah dalam mengembangkan Desa Manud Jaya melalui program-program inovatif. Sumbangkan ide dan keterampilan Anda untuk memajukan komunitas, karena setiap kontribusi memiliki dampak besar!",
    },
    {
      id: 7,
      title: "Pengaduan Desa",
      image: complaint,
      copy: "Beri suara terhadap perubahan! Ajukan pengaduan kamu terhadap berbagai isu dan permasalahan di Desa Manud Jaya. Bersama-sama kita bisa membuat perubahan positif dan meningkatkan kualitas hidup komunitas kita.",
    },
    {
      id: 8,
      title: "Siap Menjelajahi Website Ini?",
      image: enjoy,
      copy: "Selamat! Kamu sekarang siap menjelajahi segala fitur menarik yang ada di dalam website ini. Temukan beragam layanan dan informasi yang bermanfaat untuk memudahkan interaksi dan keterlibatanmu dalam Desa Manud Jaya.",
    },
  ];

  return (
    <div className="container-rumah">
      <section className="section-rumah">
        <div
          className="container"
          style={{
            height: "500px",
            marginTop: "120px",
            marginBottom: "140px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              flexDirection: "column",
              fontWeight: "bold",
            }}
          >
            <h1
              style={{
                color: "#4d3319",
                textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              Ekplorasi Kemampuan Luar Biasa Website Kami
            </h1>
          </div>
          <div
            style={{
              marginBottom: "30px",
            }}
          ></div>
          <>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{}}
            >
              {cardItems &&
                cardItems.map((card, index) => (
                  <>
                    <SwiperSlide>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            flex: 2,
                          }}
                        >
                          <img
                            src={card.image}
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "140px",
                              marginLeft: "100px",
                              height: "50%",
                              width: "50%",
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
                              marginRight: "20px",
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
                              {card.title}
                            </h1>
                            <p
                              style={{
                                color: "grey",
                                textAlign: "justify",
                                fontSize: "17px",
                              }}
                            >
                              {card.copy}
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
                            <p
                              style={{
                                color: "grey",
                                textAlign: "right",
                                marginRight: "20px",
                                fontSize: "11px",
                                marginLeft: "370px",
                              }}
                            >
                              Desa Manud Jaya, 5 November 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
            </Swiper>
          </>
        </div>
      </section>
    </div>
  );
};

export default OnBoarding;
