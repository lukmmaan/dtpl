import React, { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../Constants/Api";
import "./RequestSurat.css";

const RequestSurat = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nik: "",
    alamat: "",
    jenisSurat: "Surat Keterangan Domisili",
    keperluan: "",
    statusSurat: "kepalaRT",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Axios.post(`${API_URL}/requestSurat`, formData);

      setFormData({
        fullName: "",
        email: "",
        nik: "",
        alamat: "",
        jenisSurat: "Surat Keterangan Domisili",
        keperluan: "",
        statusSurat: "kepalaRT",
      });

      swal({
        title: "Berhasil Pembuatan Surat",
        title: res.data.message,
        icon: "success",
        button: "OK !",
      });
      navigate("/status-surat");
    } catch (err) {
      console.log(err);
      swal({
        title: "Ooopps !",
        text: "Gagal",
        icon: "error",
        button: "OK !",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="request-surat-section">
      <h2>Pengajuan Surat Desa</h2>
      <form onSubmit={handleSubmit} className="request-surat-form">
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
          <label htmlFor="nik">NIK (Nomor Induk Kependudukan)</label>
          <input
            type="text"
            id="nik"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="alamat">Alamat</label>
          <textarea
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jenisSurat">Jenis Surat</label>
          <select
            id="jenisSurat"
            name="jenisSurat"
            value={formData.jenisSurat}
            onChange={handleChange}
            required
          >
            <option value="Surat Keterangan Domisili">
              Surat Keterangan Domisili
            </option>
            <option value="Surat Keterangan Kelahiran">
              Surat Keterangan Kelahiran
            </option>
            <option value="Surat Keterangan Usaha">
              Surat Keterangan Usaha
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="keperluan">Keperluan</label>
          <textarea
            id="keperluan"
            name="keperluan"
            value={formData.keperluan}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Loading..." : "Ajukan Surat"}{" "}
        </button>
      </form>
    </section>
  );
};

export default RequestSurat;
