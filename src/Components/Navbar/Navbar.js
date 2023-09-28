import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { connect, useDispatch } from "react-redux";
import Cookies from "universal-cookie";


import { clearUser } from "../../redux/reducers/userActions";
import { IconDesa } from "../../Assets/Image/index";

import "./Navbar.css";

const Navbar = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const cookies = new Cookies();

    dispatch(clearUser());
    cookies.remove("authData");
    navigate("/login"); 
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <img src={IconDesa} alt="IconDesa" className="icon-image" />
      <div className="menu-icon" onClick={toggleMenu}></div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Beranda
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            Program Desa
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            About Us!
          </Link>
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
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Navbar);
