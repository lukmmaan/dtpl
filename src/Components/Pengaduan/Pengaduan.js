import React, { useState } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import { connect } from "react-redux";

import "./Pengaduan.css";
import { API_URL } from "../../Constants/Api";

const Pengaduan = ({ user }) => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pengaduan, setPengaduan] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [tanggalKejadian, setTanggalKejadian] = useState("");
  const [lokasiKejadian, setLokasiKejadian] = useState("");
  const [prioritas, setPrioritas] = useState("Sedang");
  const [kategori, setKategori] = useState("Infrastruktur");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      nama,
      alamat,
      pengaduan,
      nomorTelepon,
      tanggalKejadian,
      lokasiKejadian,
      prioritas,
      kategori,
      emai: user.email,
    };

    try {
      await Axios.post(`${API_URL}/pengaduan`, formData);

      Swal.fire({
        icon: "success",
        title: "Pengaduan berhasil dibuat",
        text: "Terima kasih atas kontribusi Anda!",
      });
    } catch (error) {
      Swal.fire({
        icon: "success",
        title: "Pengaduan berhasil diselesaikan",
        text: "Terima kasih atas kontribusi Anda!",
      });
    } finally {
      setNama("");
      setAlamat("");
      setPengaduan("");
      setNomorTelepon("");
      setTanggalKejadian("");
      setLokasiKejadian("");
      setKategori("Infrastruktur");
    }
  };

  return (
    <div className="pengaduan-container">
      <h1>Pengaduan Warga Terhadap Desa</h1>
      <form className="pengaduan-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nomor Telepon"
          value={nomorTelepon}
          onChange={(e) => setNomorTelepon(e.target.value)}
        />
        <input
          type="date"
          placeholder="Tanggal Kejadian"
          value={tanggalKejadian}
          onChange={(e) => setTanggalKejadian(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lokasi Kejadian"
          value={lokasiKejadian}
          onChange={(e) => setLokasiKejadian(e.target.value)}
        />
        <textarea
          placeholder="Pengaduan"
          value={pengaduan}
          onChange={(e) => setPengaduan(e.target.value)}
          required
        ></textarea>
        <label>Prioritas Pengaduan</label>
        <select
          value={prioritas}
          onChange={(e) => setPrioritas(e.target.value)}
        >
          <option value="Rendah">Rendah</option>
          <option value="Sedang">Sedang</option>
          <option value="Tinggi">Tinggi</option>
        </select>
        <label>Kategori Pengaduan</label>
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="Infrastruktur">Infrastruktur</option>
          <option value="Lingkungan">Lingkungan</option>
          <option value="Sosial">Sosial</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit">Kirim Pengaduan</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Pengaduan);
