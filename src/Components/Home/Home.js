import React, { useState, useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Axios from "axios";

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
  peta,
  peta2,
  peta3,
  unlike,
} from "../../Assets/Image";
import { API_URL } from "../../Constants/Api";

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

  const CardSwiper = () => {
    const [acaraDesa, setAcaraDesa] = useState([]);
    const [likeDislike, setLikeDislike] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const getDataKampanye = () => {
      Axios.get(`${API_URL}/kampanye`)
        .then((response) => {
          const data = response.data;
          let liked = [];
          let disLiked = [];

          data.map((val, idx) => {
            liked.push(val.totalLike);
            disLiked.push(val.totalDislike);
            if (idx === data.length - 1) {
              setLikeDislike({ likedData: liked, disLikedData: disLiked });
            }
          });
          console.log(acaraDesa, data);
          setAcaraDesa(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const updateDataLike = (index) => {
      Axios.get(`${API_URL}/kampanye`)
        .then((response) => {
          const data = response.data;
          let liked = [];
          let disLiked = [];

          data.map((val, idx) => {
            liked.push(val.totalLike);
            disLiked.push(val.totalDislike);
            if (idx === data.length - 1) {
              setLikeDislike({ likedData: liked, disLikedData: disLiked });
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    useEffect(() => {
      if (!isDataFetched) {
        getDataKampanye();
        setIsDataFetched(true);
        console.log("masuk");
      }
    }, [isDataFetched]);

    const likeKampanye = (kampanyeId, index) => {
      Axios.patch(`${API_URL}/kampanye/${kampanyeId}/like`)
        .then((response) => {
          updateDataLike(index);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    const unLikeKampanye = (kampanyeId, index) => {
      Axios.patch(`${API_URL}/kampanye/${kampanyeId}/dislike`)
        .then((response) => {
          updateDataLike(index);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    return (
      <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {acaraDesa &&
            acaraDesa.map((card, index) => (
              <>
                <SwiperSlide>
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
                      }}
                    >
                      <img
                        src={cardItems[index].image}
                        style={{
                          height: "100%",
                          width: "100%",
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
                            onClick={() => {
                              likeKampanye(acaraDesa[index]._id, index);
                            }}
                            className="clickedImage"
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
                          <p>{likeDislike.likedData[index]}</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <img
                            className="clickedImage"
                            onClick={() => {
                              unLikeKampanye(acaraDesa[index]._id, index);
                            }}
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
                          <p>{likeDislike.disLikedData[index]}</p>
                        </div>
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
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </>
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
      <section className="section-rumah">{/* <CardCarousel /> */}</section>
      <section className="section-rumah">
        <div
          className="container"
          style={{
            height: "650px",
            marginTop: "120px",
            marginBottom: "140px",
          }}
        >
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div
              style={{
                flex: "1",
                borderTop: "4px solid grey",
                // marginLeft: "150px",
                // // marginRight: "1000px",
                width: "100%",
                height: "4px",
                marginTop: "20px",
                // paddingBottom: "80px",
              }}
            ></div>
            <h2
              style={{
                // marginTop: "200px",
                fontWeight: "bold",
                alignItems: "center",
                textAlign: "center",
                flex: "2",
              }}
            >
              Kesuksesan Desa Manud Jaya
            </h2>
            <div
              style={{
                flex: "1",
                borderTop: "4px solid grey",
                // marginLeft: "150px",
                // // marginRight: "1000px",
                width: "100%",
                height: "4px",
                marginTop: "20px",
                // paddingBottom: "80px",
              }}
            ></div>
          </div>
          <div style={{ marginBottom: "30px" }}>
            {/* <h4>Desa Bahagia</h4> */}
          </div>
          <CardSwiper />
        </div>
      </section>

      <div
        style={{
          borderTop: "4px solid grey",
          marginLeft: "150px",
          // marginRight: "1000px",
          width: "80%",
          height: "4px",
          marginTop: "20px",
          paddingBottom: "80px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "200px",
          paddingRight: "200px",
          marginBottom: "100px",
        }}
      >
        <div style={{ flex: 2 }}>
          <img
            src={peta2}
            style={{
              height: "600px",
              width: "600px",
              borderRadius: 40,
              boxShadow: "17px 14px 53px -10px rgba(0, 0, 0, 0.67)",
            }}
            className="fotoPeta"
          />
        </div>
        <div
          style={{
            flex: 3,
            paddingLeft: "60px",
            paddingRight: "30px",
            paddingTop: "10px",
            textAlign: "justify",
          }}
        >
          <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Sejarah Desa Manud Jaya
          </h2>
          <p>
            Desa Manud Jaya adalah sebuah pemukiman yang terletak di Papua,
            Indonesia, yang memiliki sejarah yang kaya dan beragam. Sejarah Desa
            Manud Jaya mencerminkan perjalanan panjang dan perubahan yang telah
            terjadi di wilayah ini. Pada awalnya, Desa Manud Jaya adalah bagian
            dari budaya suku asli Papua yang kaya akan tradisi, adat istiadat,
            dan kehidupan berkelompok yang sederhana. Namun, seiring berjalannya
            waktu, wilayah ini mengalami transformasi signifikan dengan masuknya
            pengaruh luar seperti perdagangan dan agama.
          </p>

          <p>
            Selama masa penjajahan kolonial, Desa Manud Jaya juga mengalami
            perubahan besar. Penduduk desa terlibat dalam perdagangan komoditas
            lokal seperti hasil pertanian, tanaman, dan hewan ternak dengan
            pedagang dari berbagai negara. Selain itu, agama Kristen yang
            diperkenalkan oleh misionaris juga menjadi faktor penting dalam
            mengubah kehidupan masyarakat setempat.
          </p>

          <p>
            Setelah kemerdekaan Indonesia pada tahun 1945, Desa Manud Jaya
            menjadi bagian dari negara yang baru terbentuk, dan perubahan sosial
            dan politik terus berlanjut. Sejak itu, desa ini telah berkembang
            secara ekonomi dan infrastruktur, dengan akses yang lebih baik ke
            pendidikan dan layanan kesehatan. Meskipun tantangan dan konflik
            masih ada, Desa Manud Jaya terus berusaha mempertahankan warisan
            budaya dan tradisi suku Papua sambil mengintegrasikan pengaruh
            global dalam kehidupan sehari-hari mereka.
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "4px solid grey",
          marginLeft: "150px",
          // marginRight: "1000px",
          width: "80%",
          height: "4px",
          marginTop: "20px",
          paddingBottom: "80px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "200px",
          paddingRight: "200px",
          marginBottom: "100px",
        }}
      >
        <div style={{ flex: 3, textAlign: "justify" }}>
          <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Kantor Desa Manud Jaya
          </h2>
          <p>
            Kantor Desa Manud Jaya adalah pusat administratif dan pelayanan
            masyarakat desa ini. Terletak di lokasi sentral, kantor ini
            bertanggung jawab untuk berbagai kegiatan dan layanan yang
            disediakan kepada penduduk setempat.
          </p>
          <p style={{ marginTop: "30px" }}>
            Alamat: Jalan Desa Manud Jaya No. 123, Distrik Manud, Indonesia.
          </p>
          <p>
            Jam Operasional: Senin-Jumat, 08:00 - 16:00 WIT (Waktu Indonesia
            Timur).
          </p>
          <p style={{ marginTop: "30px" }}>
            Di kantor Desa Manud Jaya, masyarakat dapat mengurus berbagai
            administrasi seperti pembuatan surat keterangan, pendaftaran
            penduduk, izin usaha, dan banyak lagi. Selain itu, kantor ini juga
            menjadi tempat pertemuan untuk musyawarah desa dan berbagai acara
            penting lainnya yang melibatkan komunitas setempat.
          </p>
        </div>
        <div
          style={{
            flex: 2,
            paddingLeft: "60px",
            // paddingRight: "30px",
            paddingTop: "10px",
          }}
        >
          <img
            src={peta}
            style={{
              height: "350px",
              width: "350px",
              borderRadius: 40,
              boxShadow: "17px 14px 53px -10px rgba(0, 0, 0, 0.67)",
            }}
            className="fotoPeta"
          />
        </div>
      </div>

      {/* <section className="section-rumah">
        <DestinasiCarousel />
      </section> */}

      {/* <section className="section-rumah">
        <BeritaScreen />
      </section> */}
    </div>
  );
};

export default Home;
