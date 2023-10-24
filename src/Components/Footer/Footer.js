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
          <p>DTPL SCRUM - 2022 FC</p> <hr /> <br />
          <p>PO : Achmad Firmansyah Sulaeman ( 2206137391)</p>
          <p>SM : Jihan Nur Ramdhani (2206137776)</p>
          <p>FE : Lukman Yudokusumo (2206137813)</p>
          <p>BE : Bayu Sektiaji (2206137492)</p>
          <p>UI/UX : Belia Ridasyifa Fauzia (2206137504)</p>
          <p>QA : Krisna Maria Rosita Dewi (2206019865)</p>
          {/* </p> */}
        </div>
        {/* <div className="footer-social">
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
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Desa Manud Jaya. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
