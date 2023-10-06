import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Cookies from "universal-cookie";

import { clearUser } from "../../redux/reducers/userActions";
import { IconDesa } from "../../Assets/Image/index";

import "./Navbar.css";

const Navbar = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Tambahkan state untuk dropdown
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    const cookies = new Cookies();

    dispatch(clearUser());
    cookies.remove("authData");
    navigate("/login");
  };

  // Fungsi untuk menutup dropdown saat area di luar dropdown diklik
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <img src={IconDesa} alt="IconDesa" className="icon-image" />
      <div className="menu-icon" onClick={toggleMenu}></div>
      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Beranda
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            Administrasi
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/umkm-list" className="nav-link">
            Usaha Desa
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            About Us!
          </Link>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link" onClick={toggleDropdown}>
            Others
          </div>
          <div
            className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dropdown-item">
              <Link to="/keuangan" className="dropdown-link">
                Lap. Keuangan
              </Link>
            </div>
            <div className="dropdown-item">
              <Link to="/pengaduan" className="dropdown-link">
                Pengaduan
              </Link>
            </div>
          </div>
        </li>
      </ul>
      <div className="login-section">
        {user && user.fullName ? (
          <>
            <Link to="/editProfile" className="login-link">
              {user.fullName}
            </Link>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}
      </div>
      {/* Area ini digunakan untuk menutup dropdown saat diklik di luar dropdown */}
      {dropdownOpen && (
        <div className="dropdown-overlay" onClick={closeDropdown}></div>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Navbar);
