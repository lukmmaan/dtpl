import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import swal from "sweetalert";

import "./Service.css";

const Services = ({ user }) => {
  const navigate = useNavigate();

  const handleAjukanSuratClick = () => {
    if (user && user.role) {
      navigate("/pengajuan-surat");
      scroll.scrollToTop({
        duration: 100, // Durasi animasi dalam milidetik
        smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
      });
    } else {
      swal({
        title: "Ooopps!",
        text: "Login dulu eaak!",
        icon: "error",
        button: "OK!",
      });
    }
  };

  return (
    <section className="services-section">
      <div className="service-card">
        <h3>Kenapa Menggunakan Sistem Ini?</h3>
        <p>
          Sistem informasi desa kami memudahkan warga desa dalam mengajukan
          surat-surat penting seperti surat keluarga, KTP, dan lainnya. Dengan
          kemudahan akses online, Anda tidak perlu datang ke kantor desa.
        </p>
      </div>
      <div className="services-grid">
        {user.role !== "user" && user.role !== "" && user.role !== "admin" && (
          <div className="service-card">
            <h3>Approval Surat</h3>
            <p>
              Kami memberikan layanan persetujuan (approval) surat yang telah
              diajukan oleh warga desa.
            </p>
            <Link
              onClick={() => {
                scroll.scrollToTop({
                  duration: 100, // Durasi animasi dalam milidetik
                  smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                });
              }}
              to="/approval-surat"
              className="service-link"
            >
              Lihat Approval
            </Link>
          </div>
        )}
        {user.role === "user" || user.role === "" ? (
          <>
            <div className="service-card">
              <h3>Pengajuan Surat</h3>
              <p>
                Anda dapat mengajukan berbagai jenis surat seperti surat
                keluarga, KTP, dan lainnya melalui sistem informasi desa kami.
              </p>
              <button onClick={handleAjukanSuratClick} className="service-link">
                Ajukan Surat
              </button>
            </div>
            {user.role !== "" && (
              <div className="service-card">
                <h3>Status Pengajuan Surat</h3>
                <p>
                  Cek status pengajuan surat Anda dan pantau perkembangannya
                  melalui sistem informasi desa. Biar update beritanya !
                </p>
                <Link
                  onClick={() => {
                    scroll.scrollToTop({
                      duration: 100, // Durasi animasi dalam milidetik
                      smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                    });
                  }}
                  to="/status-surat"
                  className="service-link"
                >
                  Cek Status
                </Link>
              </div>
            )}
          </>
        ) : null}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Services);
