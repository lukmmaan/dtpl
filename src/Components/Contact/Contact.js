// Contact.js

import React from "react";
import { GoogleMap } from "../../Assets/Image/index";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Kantor Desa Manud Jaya</h2>
          <p>
            Desa Manud Jaya adalah sebuah permukiman yang terletak di tengah
            hutan yang mempesona. Kami memiliki budaya yang kaya, keindahan alam
            yang menakjubkan, dan berbagai program unggulan yang bertujuan untuk
            meningkatkan kualitas hidup warga desa kami.
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
            Jaya. Jadilah bagian dari perjalanan kami dalam melestarikan alam
            dan budaya kami.
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
  );
};

export default Contact;
