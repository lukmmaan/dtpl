import React, { useState } from "react";
import "./Pengaduan.css";

const Pengaduan = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pengaduan, setPengaduan] = useState("");
  const [pengaduanList, setPengaduanList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama && alamat && pengaduan) {
      const newPengaduan = {
        nama,
        alamat,
        pengaduan,
      };
      setPengaduanList([...pengaduanList, newPengaduan]);
      setNama("");
      setAlamat("");
      setPengaduan("");
    }
  };

  const handleDelete = (index) => {
    const updatedPengaduanList = [...pengaduanList];
    updatedPengaduanList.splice(index, 1);
    setPengaduanList(updatedPengaduanList);
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
        <textarea
          placeholder="Pengaduan"
          value={pengaduan}
          onChange={(e) => setPengaduan(e.target.value)}
          required
        ></textarea>
        <button type="submit">Kirim Pengaduan</button>
      </form>
      <div className="pengaduan-list">
        <h2>Daftar Pengaduan</h2>
        <ul>
          {pengaduanList.map((item, index) => (
            <li key={index}>
              <div>
                <strong>Nama:</strong> {item.nama}
              </div>
              <div>
                <strong>Alamat:</strong> {item.alamat}
              </div>
              <div>
                <strong>Pengaduan:</strong> {item.pengaduan}
              </div>
              <button onClick={() => handleDelete(index)}>Hapus</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pengaduan;
