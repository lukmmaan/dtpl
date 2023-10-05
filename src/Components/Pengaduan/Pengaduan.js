import React, { useState } from "react";
import "./Pengaduan.css"; // Sesuaikan dengan nama file CSS yang Anda gunakan

const Pengaduan = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pengaduan, setPengaduan] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [tanggalKejadian, setTanggalKejadian] = useState("");
  const [lokasiKejadian, setLokasiKejadian] = useState("");
  const [prioritas, setPrioritas] = useState("Sedang");
  const [kategori, setKategori] = useState("Infrastruktur");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama && alamat && pengaduan) {
      // Lakukan sesuatu dengan data pengaduan seperti pengiriman ke server atau penyimpanan lokal
      // Anda dapat menambahkan logika sesuai kebutuhan Anda di sini
      console.log("Data Pengaduan:", {
        nama,
        alamat,
        pengaduan,
        nomorTelepon,
        tanggalKejadian,
        lokasiKejadian,
        prioritas,
        kategori,
      });
      setNama("");
      setAlamat("");
      setPengaduan("");
      setNomorTelepon("");
      setTanggalKejadian("");
      setLokasiKejadian("");
      setPrioritas("Sedang");
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
        </select>
        <button type="submit">Kirim Pengaduan</button>
      </form>
    </div>
  );
};

export default Pengaduan;
