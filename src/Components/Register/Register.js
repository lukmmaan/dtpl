import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import swal from "sweetalert";

import { API_URL } from "../../Constants/Api";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await Axios.post(`${API_URL}/register`, formData);

      setLoading(false);

      swal({
        title: "Registration Success",
        text: response.data.message,
        icon: "success",
        button: "OK",
      });

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Navigasi ke halaman login setelah pendaftaran berhasil
      navigate("/login");
    } catch (error) {
      setLoading(false);

      swal({
        title: "Ooopps !",
        text: "Gagal",
        icon: "error",
        button: "OK !",
      });
    }
  };

  return (
    <div className="register-container">
      <h2>Daftar Akun</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="fullName">Nama Lengkap</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Konfirmasi Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {loading ? (
          <></>
        ) : (
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Loading..." : "Daftar"}
          </button>
        )}
      </form>
      {loading ? (
        "Loading..."
      ) : (
        <p>
          Sudah punya akun? <Link to="/login">Masuk disini</Link>
        </p>
      )}
    </div>
  );
};

export default Register;
