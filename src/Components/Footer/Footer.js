// Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Desa Manud Jaya</h1>
          <p>Budaya & Keindahan Alam Kami</p>
        </div>
        <div className="footer-info">
          <p>
            Jalan Raya Desa Manud Jaya No. 123
            <br />
            Email:{" "}
            <a href="mailto:info@desamanudjaya.com">info@desamanudjaya.com</a>
          </p>
        </div>
        <div className="footer-social">
          <h3>Temui Kami di Sosial Media</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Desa Manud Jaya. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
