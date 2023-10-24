import React, { Component } from "react";
import "./DesaPengaduanList.css"; // Impor file CSS
import Swal from "sweetalert2";

class DesaPengaduanList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pengaduanList: [
        {
          nama: "Nama Pengaduan 1",
          email: "pengadu1@mail.com",
          alamat: "Alamat 1",
          pengaduan: "Deskripsi pengaduan 1",
          nomorTelepon: "081234567890",
          tanggalKejadian: "01-10-2023",
          lokasiKejadian: "Lokasi 1",
          prioritas: "Tinggi",
          kategori: "Kategori 1",
          status: "pengaduan",
        },
        {
          nama: "Nama Pengaduan 2",
          email: "pengadu2@mail.com",
          alamat: "Alamat 2",
          pengaduan: "Deskripsi pengaduan 2",
          nomorTelepon: "081234567891",
          tanggalKejadian: "02-10-2023",
          lokasiKejadian: "Lokasi 2",
          prioritas: "Rendah",
          kategori: "Kategori 2",
          status: "done",
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
              <th>Email</th>
              <th>Alamat</th>
              <th>Pengaduan</th>
              <th>Nomor Telepon</th>
              <th>Tanggal Kejadian</th>
              <th>Lokasi Kejadian</th>
              <th>Prioritas</th>
              <th>Kategori</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pengaduanList.map((pengaduan, index) => (
              <tr key={index}>
                <td>{pengaduan.nama}</td>
                <td>{pengaduan.email}</td>
                <td>{pengaduan.alamat}</td>
                <td>{pengaduan.pengaduan}</td>
                <td>{pengaduan.nomorTelepon}</td>
                <td>{pengaduan.tanggalKejadian}</td>
                <td>{pengaduan.lokasiKejadian}</td>
                <td>{pengaduan.prioritas}</td>
                <td>{pengaduan.kategori}</td>
                <td>
                  {pengaduan.status !== "done" ? (
                    <>
                      <input
                        type="checkbox"
                        placeholder="Respon terhadap pengaduan"
                      ></input>
                      <button
                        style={{
                          marginLeft: "30px",
                          backgroundColor: "chocolate",
                          width: "80px",
                          height: "30px",
                          color: "white",
                          borderRadius: "8px",
                        }}
                        onClick={() => {
                          Swal.fire({
                            title: "Yakin ingin selesaikan pengaduan ini?",
                            text: "Anda akan menyelesaikan pengaduan ini.",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "green",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Ya, Selesai",
                            cancelButtonText: "Batal",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire({
                                icon: "success",
                                title: "Pengaduan berhasil diselesaikan",
                                text: "Terima kasih atas kontribusi Anda!",
                              });
                            }
                          });
                        }}
                      >
                        Selesaikan
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <h5>Selesai</h5>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DesaPengaduanList;
