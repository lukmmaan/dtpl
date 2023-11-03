// Contact.js

import React from "react";
import {
  GoogleMap,
  man,
  man2,
  man3,
  girl,
  woman,
  boy,
  ghost,
  desa,
} from "../../Assets/Image/index";
import "./Contact.css";
import ProgramDesa from "../ProgramDesa/ProgramDesa";
import KebijakanDesa from "../KebijakanDesa/KebijakanDesa";

const Contact = () => {
  return (
    <div>
      <div>
        <section className="contact-section">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Kantor Desa Manud Jaya</h2>
              <p>
                Desa Manud Jaya adalah sebuah permukiman yang terletak di tengah
                hutan yang mempesona. Kami memiliki budaya yang kaya, keindahan
                alam yang menakjubkan, dan berbagai program unggulan yang
                bertujuan untuk meningkatkan kualitas hidup warga desa kami.
              </p>
              <p>
                Di sini, kami bangga akan transparansi keuangan desa kami. Anda
                dapat menemukan informasi terkait keuangan desa kami,
                program-program yang sedang berjalan, tempat-tempat wisata yang
                menarik, serta layanan pengaduan dan administrasi yang kami
                sediakan.
              </p>
              <p>
                Selamat datang untuk menjelajahi lebih lanjut tentang Desa Manud
                Jaya. Jadilah bagian dari perjalanan kami dalam melestarikan
                alam dan budaya kami.
              </p>
            </div>
            <div className="contact-map">
              <img
                src={GoogleMap}
                alt="Lokasi Kantor Desa Manud Jaya"
                className="rotating-image"
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <div
          // className="card-carousel-container"
          style={{
            borderTop: "4px solid grey",
            marginLeft: "100px",
            marginRight: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
            // height: "650px",
            /* height: 100vh, */
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="contact-map">
              <img
                src={desa}
                alt="Lokasi Kantor Desa Manud Jaya"
                style={{ width: "80%", height: "100%", borderRadius: 40 }}
                // className="rotating-image"
              />
            </div>
            <div className="contact-info" style={{ textAlign: "justify" }}>
              <p>
                Struktur Organisasi Desa Manud Jaya memiliki sejumlah tokoh yang
                bertanggung jawab dalam menjalankan berbagai fungsi dan tugas
                penting dalam pengelolaan desa.
                <strong>
                  {" "}
                  Kepala Desa Hj. Dr. Achmad Firmansyah Sulaeman S.T.
                </strong>{" "}
                merupakan pemimpin utama dan penanggung jawab atas semua
                kebijakan dan program yang diterapkan di Desa Manud Jaya.
              </p>
              <p>
                Di bawah kepemimpinan Kepala Desa, terdapat sejumlah kepala
                lingkungan yang membantu dalam pengelolaan dan pengawasan desa.
                Kepala RW, Jihan Nur Ramdhani S.H., memiliki tanggung jawab
                untuk mengoordinasikan aktivitas di tingkat wilayah yang lebih
                luas. Sementara itu, Kepala RT, Belia R. S. F. S.Kom., Bayu
                Sektiaji S.Kom., Krisna Maria Rosita Dewi S.H., Lukman
                Yudokusumo S.T., dan Alm. Huhu Huhu Hehe S.T., bertanggung jawab
                atas pengelolaan dan pembinaan masyarakat di tingkat yang lebih
                lokal.
              </p>
              <p>
                Dengan struktur organisasi yang kuat dan beragam peran yang
                dipegang oleh para pemimpin desa, Desa Manud Jaya siap untuk
                mencapai tujuan-tujuan pembangunan dan kesejahteraan
                masyarakatnya.
              </p>
            </div>
          </div>
          <div
            style={{
              borderTop: "4px solid grey",
              marginLeft: "100px",
              marginRight: "100px",
              width: "100%",
              height: "4px",
              marginTop: "100px",
            }}
          ></div>
          <div class="container-org" style={{ marginTop: "60px" }}>
            <h2
              style={{
                color: "grey",
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              Struktur Organisasi
            </h2>
            <div className="level-1 rectangle body-org">
              <div>
                <div>
                  <img src={man} style={{ height: "80%", width: "80%" }} />
                </div>
                <div>
                  <h3>
                    <strong>Kepala Desa</strong>
                  </h3>
                  <h3>Hj. Dr. Achmad Firmansyah Sulaeman S.T.</h3>
                </div>
              </div>
            </div>
            <ol class="level-2-wrapper">
              <li>
                <div className="level-2 rectangle body-org">
                  <div>
                    <div>
                      <img src={girl} style={{ height: "80%", width: "80%" }} />
                    </div>
                    <div>
                      <h4>
                        <strong>Kepala RW</strong>
                      </h4>
                      <h5>Jihan Nur Ramdhani S.H.</h5>
                    </div>
                  </div>
                </div>
                <ol class="level-3-wrapper">
                  <li>
                    <div className="level-3 rectangle body-org">
                      <div>
                        <div>
                          <img
                            src={woman}
                            style={{ height: "80%", width: "80%" }}
                          />
                        </div>
                        <div>
                          <h5>
                            <strong>Kepala RT</strong>
                          </h5>
                          <h6>Belia R. S. F. S.Kom.</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="level-3 rectangle body-org">
                      <div>
                        <div>
                          <img
                            src={boy}
                            style={{ height: "80%", width: "80%" }}
                          />
                        </div>
                        <div>
                          <h5>
                            <strong>Kepala RT</strong>
                          </h5>
                          <h6>Bayu Sektiaji S.Kom.</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
              <li>
                <div className="level-2 rectangle body-org">
                  <div>
                    <div>
                      <img src={girl} style={{ height: "80%", width: "80%" }} />
                    </div>
                    <div>
                      <h4>
                        <strong>Kepala RW</strong>
                      </h4>
                      <h5>Krisna Maria Rosita Dewi S.H.</h5>
                    </div>
                  </div>
                </div>
                <ol class="level-3-wrapper">
                  <li>
                    <div className="level-3 rectangle body-org">
                      <div>
                        <div>
                          <img
                            src={boy}
                            style={{ height: "80%", width: "80%" }}
                          />
                        </div>
                        <div>
                          <h5>
                            <strong>Kepala RT</strong>
                          </h5>
                          <h6>Lukman Yudokusumo S.T.</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="level-3 rectangle body-org">
                      <div>
                        <div>
                          <img
                            src={ghost}
                            style={{ height: "80%", width: "80%" }}
                          />
                        </div>
                        <div>
                          <h5>
                            <strong>Kepala RT</strong>
                          </h5>
                          <h6>Alm. Huhu Huhu Hehe S.T.</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            /* height: 100vh, */
            overflow: "hidden",
            borderTop: "4px solid grey",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <div
            style={{
              background: "#f2f2f2",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "80%",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              Visi dan Misi Desa Manud Jaya
            </h2>
            <p>
              <strong>Visi:</strong> Mewujudkan Desa Manud Jaya yang maju,
              sejahtera, dan berkelanjutan.
            </p>
            <p>
              <strong>Misi:</strong>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  1. Mengembangkan potensi sumber daya alam secara
                  berkelanjutan.
                </li>
                <li>
                  2. Meningkatkan kualitas pendidikan dan kesejahteraan
                  masyarakat.
                </li>
                <li>
                  3. Memajukan ekonomi lokal dan mendukung usaha kecil dan
                  menengah.
                </li>
                <li>
                  4. Meningkatkan pelayanan publik dan partisipasi masyarakat
                  dalam pengambilan keputusan.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <ProgramDesa />
        <KebijakanDesa />
      </div>
    </div>
  );
};

export default Contact;
