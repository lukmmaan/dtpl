import React, { Component } from "react";
import "./DesaPengaduanList.css"; // Impor file CSS

class DesaPengaduanList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pengaduanList: [
        {
          nama: "Nama Pengaduan 1",
          alamat: "Alamat 1",
          pengaduan: "Deskripsi pengaduan 1",
          nomorTelepon: "081234567890",
          tanggalKejadian: "01-10-2023",
          lokasiKejadian: "Lokasi 1",
          prioritas: "Tinggi",
          kategori: "Kategori 1",
        },
        {
          nama: "Nama Pengaduan 2",
          alamat: "Alamat 2",
          pengaduan: "Deskripsi pengaduan 2",
          nomorTelepon: "081234567891",
          tanggalKejadian: "02-10-2023",
          lokasiKejadian: "Lokasi 2",
          prioritas: "Rendah",
          kategori: "Kategori 2",
        },
        // Tambahkan data pengaduan lainnya di sini
      ],
    };
  }

  render() {
    return (
      <div className="desa-pengaduan-list">
        <h1>List Pengaduan</h1>
        <table className="pengaduan-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Pengaduan</th>
              <th>Nomor Telepon</th>
              <th>Tanggal Kejadian</th>
              <th>Lokasi Kejadian</th>
              <th>Prioritas</th>
              <th>Kategori</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pengaduanList.map((pengaduan, index) => (
              <tr key={index}>
                <td>{pengaduan.nama}</td>
                <td>{pengaduan.alamat}</td>
                <td>{pengaduan.pengaduan}</td>
                <td>{pengaduan.nomorTelepon}</td>
                <td>{pengaduan.tanggalKejadian}</td>
                <td>{pengaduan.lokasiKejadian}</td>
                <td>{pengaduan.prioritas}</td>
                <td>{pengaduan.kategori}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DesaPengaduanList;
