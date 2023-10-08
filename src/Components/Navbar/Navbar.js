import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { animateScroll as scroll } from "react-scroll";
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
    Swal.fire({
      title: "Yakin ingin logout?",
      text: "Anda akan keluar dari akun Anda.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const cookies = new Cookies();

        dispatch(clearUser());
        cookies.remove("authData");
        navigate("/login");
      }
    });
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
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            to="/"
            className="nav-link"
          >
            Beranda
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            to="/services"
            className="nav-link"
          >
            Administrasi
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            to="/umkm-list"
            className="nav-link"
          >
            Usaha Desa
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            to="/contact"
            className="nav-link"
          >
            About Us
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
              <Link
                onClick={() => {
                  scroll.scrollToTop({
                    duration: 100, // Durasi animasi dalam milidetik
                    smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                  });
                }}
                to="/keuangan"
                className="dropdown-link"
              >
                Lap. Keuangan
              </Link>
            </div>
            <div className="dropdown-item">
              <Link
                onClick={() => {
                  scroll.scrollToTop({
                    duration: 100, // Durasi animasi dalam milidetik
                    smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                  });
                }}
                to="/pengaduan"
                className="dropdown-link"
              >
                Pengaduan
              </Link>
            </div>
          </div>
        </li>
      </ul>
      <div className="login-section">
        {user && user.fullName ? (
          <>
            <Link
              onClick={() => {
                scroll.scrollToTop({
                  duration: 100, // Durasi animasi dalam milidetik
                  smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
                });
              }}
              to="/editProfile"
              className="login-link"
            >
              {user.fullName}
            </Link>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            to="/login"
            className="login-link"
          >
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
