import React, { Component, useEffect } from "react";
import Axios from "axios";

import "./DesaPengaduanList.css"; // Impor file CSS
import Swal from "sweetalert2";
import { API_URL, Headers } from "../../Constants/Api";
import { connect } from "react-redux";

class DesaPengaduanList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pengaduanList: [
        // {
        //   nama: "Bapak Yanto",
        //   email: "yanto@mail.com",
        //   alamat: "Jl. Raya Desa 1",
        //   pengaduan: "Pohon tumbang di jalan desa",
        //   nomorTelepon: "081234567890",
        //   tanggalKejadian: "01-10-2023",
        //   lokasiKejadian: "Jalan Desa 1",
        //   prioritas: "Tinggi",
        //   kategori: "Kecelakaan Lalu Lintas",
        //   status: "pengaduan",
        // },
        // {
        //   nama: "Ibu Siti",
        //   email: "siti@mail.com",
        //   alamat: "Jl. Harapan 3",
        //   pengaduan: "Banjir di rumah warga",
        //   nomorTelepon: "081234567891",
        //   tanggalKejadian: "02-10-2023",
        //   lokasiKejadian: "Rumah Warga 2",
        //   prioritas: "Rendah",
        //   kategori: "Bencana Alam",
        //   status: "selesai",
        // },
        // {
        //   nama: "Bapak Joko",
        //   email: "joko@mail.com",
        //   alamat: "Jl. Maju Sejahtera 7",
        //   pengaduan: "Sarana olahraga rusak di lapangan desa",
        //   nomorTelepon: "081234567892",
        //   tanggalKejadian: "03-10-2023",
        //   lokasiKejadian: "Lapangan Desa 3",
        //   prioritas: "Sedang",
        //   kategori: "Infrastruktur",
        //   status: "pengaduan",
        // },
        // {
        //   nama: "Ibu Rini",
        //   email: "rini@mail.com",
        //   alamat: "Jl. Cemerlang 2",
        //   pengaduan: "Pelayanan kesehatan kurang memadai",
        //   nomorTelepon: "081234567893",
        //   tanggalKejadian: "04-10-2023",
        //   lokasiKejadian: "Puskesmas 4",
        //   prioritas: "Tinggi",
        //   kategori: "Kesehatan",
        //   status: "pengaduan",
        // },
        // {
        //   nama: "Bapak Slamet",
        //   email: "slamet@mail.com",
        //   alamat: "Jl. Damai Sentosa 5",
        //   pengaduan: "Rumah warga terbakar",
        //   nomorTelepon: "081234567894",
        //   tanggalKejadian: "05-10-2023",
        //   lokasiKejadian: "Rumah Warga 5",
        //   prioritas: "Rendah",
        //   kategori: "Bencana Alam",
        //   status: "selesai",
        // },
        // {
        //   nama: "Ibu Ria",
        //   email: "ria@mail.com",
        //   alamat: "Jl. Bahagia 12",
        //   pengaduan: "Sungai desa meluap",
        //   nomorTelepon: "081234567895",
        //   tanggalKejadian: "06-10-2023",
        //   lokasiKejadian: "Sungai Desa 6",
        //   prioritas: "Tinggi",
        //   kategori: "Bencana Alam",
        //   status: "pengaduan",
        // },
        // {
        //   nama: "Bapak Supri",
        //   email: "supri@mail.com",
        //   alamat: "Jl. Maju Jaya 8",
        //   pengaduan: "Lampu jalan mati",
        //   nomorTelepon: "081234567896",
        //   tanggalKejadian: "07-10-2023",
        //   lokasiKejadian: "Jalan Desa 7",
        //   prioritas: "Sedang",
        //   kategori: "Infrastruktur",
        //   status: "pengaduan",
        // },
        // {
        //   nama: "Ibu Dini",
        //   email: "dini@mail.com",
        //   alamat: "Jl. Damai Indah 15",
        //   pengaduan: "Kerusakan jembatan",
        //   nomorTelepon: "081234567897",
        //   tanggalKejadian: "08-10-2023",
        //   lokasiKejadian: "Jembatan 8",
        //   prioritas: "Tinggi",
        //   kategori: "Infrastruktur",
        //   status: "selesai",
        // },
        // {
        //   nama: "Bapak Ali",
        //   email: "ali@mail.com",
        //   alamat: "Jl. Harapan Baru 21",
        //   pengaduan: "Kebocoran pipa air",
        //   nomorTelepon: "081234567898",
        //   tanggalKejadian: "09-10-2023",
        //   lokasiKejadian: "Pipa Air 9",
        //   prioritas: "Sedang",
        //   kategori: "Infrastruktur",
        //   status: "pengaduan",
        // },
        // {
        //   nama: "Ibu Jumiati",
        //   email: "jumiati@mail.com",
        //   alamat: "Jl. Sejahtera Makmur 30",
        //   pengaduan: "Rumah tidak layak huni",
        //   nomorTelepon: "081234567899",
        //   tanggalKejadian: "10-10-2023",
        //   lokasiKejadian: "Rumah 10",
        //   prioritas: "Tinggi",
        //   kategori: "Perumahan",
        //   status: "selesai",
        // },
        // Tambahkan data pengaduan lainnya di sini
      ],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    Axios.get(`${API_URL}/pengaduan`)
      .then((response) => {
        const pengaduanData = response.data;

        this.setState((prevState) => ({
          pengaduanList: [...pengaduanData],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  d;
  finishPengajuan = (id) => {
    const apiUrl = `${API_URL}/pengaduan/${id}?status=selesai`;

    Axios.put(apiUrl)
      .then((response) => {
        this.fetchData();
        Swal.fire({
          icon: "success",
          title: "Pengaduan berhasil diselesaikan",
          text: "Terima kasih atas kontribusi Anda!",
        });
      })
      .catch((error) => {
        console.log(this.props.user.token);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "gagal Menyelesaikan pengaduan",
          text: "Silahkan coba lagi!",
        });
      });
  };

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
                  {pengaduan.status !== "selesai" ? (
                    <>
                      <button
                        style={{
                          alignContent: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          backgroundColor: "chocolate",
                          width: "100px", // Lebar tombol diperbesar
                          height: "40px", // Tinggi tombol diperbesar
                          color: "white",
                          borderRadius: "8px",
                          border: "none", // Hapus border
                          cursor: "pointer", // Ganti kursor ketika diarahkan ke tombol
                          fontSize: "16px", // Ukuran font diperbesar
                          fontWeight: "bold", // Teks tebal
                          transition: "background-color 0.3s", // Animasi perubahan latar belakang
                        }}
                        onClick={() => {
                          Swal.fire({
                            title: "Yakin ingin selesaikan pengaduan ini?",
                            text: "Anda akan mengirimkan email kepada pembuat pengaduan ini, dan akan memproses pengaduan ini.",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "green",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Ya, Selesai",
                            cancelButtonText: "Batal",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              // const updatedPengaduanList =
                              //   this.state.pengaduanList.map((pengaduan, i) => {
                              //     if (i === index) {
                              //       return {
                              //         ...pengaduan,
                              //         status: "selesai",
                              //       };
                              //     }
                              //     return pengaduan;
                              //   });

                              // this.setState({
                              //   pengaduanList: updatedPengaduanList,
                              // });

                              this.finishPengajuan(pengaduan._id);
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
                      <p
                        style={{
                          fontSize: "20",
                          color: "grey",
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        Selesai
                      </p>
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(DesaPengaduanList);
