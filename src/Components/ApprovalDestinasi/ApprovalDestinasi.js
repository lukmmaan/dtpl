import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

import { Wisata1 } from "../../Assets/Image";
import { API_URL } from "../../Constants/Api";

export default function ApprovalDestinasi() {
  const [isLoading, setIsLoading] = useState(false);
  const [dataApprove, setDataApprove] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Axios.get(`${API_URL}/listSurat`)
      .then((response) => {
        const listData = response.data;

        setIsLoading(false);
        setDataApprove(listData);
      })
      .catch((error) => {
        console.error("error", error);
        setIsLoading(false);
        // setDataApprove(["gagal"]);
      });
  }, []);

  return (
    <div className="container-admin" style={{ marginBottom: "350px" }}>
      <h1 style={{ textAlign: "center" }}>Approval Destinasi Wisata</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Lokasi</th>
            <th scope="col">Gambar</th>

            <th scope="col">Atraksi Utama</th>
            <th scope="col">Aktivitas</th>
            {/* <th scope="col">Akomodasi</th> */}
            <th scope="col">Makanan Kuliner</th>
            {/* <th scope="col">Transportasi</th>
            <th scope="col">Waktu Terbaik</th>
            <th scope="col">Fasilitas Umum</th> */}
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        {dataApprove ? (
          <tbody>
            {dataApprove.map((value, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{value.nama}</td>
                <td>{value.deskripsi}</td>
                <td>{value.lokasi}</td>
                <td>
                  <img
                    src={Wisata1}
                    alt={`${value.nama} ${value.gambar}`}
                    className="img-thumbnail"
                    style={{
                      maxWidth: 400,
                      maxHeight: 400,
                    }}
                  />
                </td>
                <td>{value.atraksiUtama}</td>
                <td>
                  {value.aktivitas.map((item) => (
                    <button
                      disabled
                      class="btn btn-secondary mx-1 my-1"
                      type="submit"
                    >
                      {item}
                    </button>
                  ))}
                </td>
                {/* <td>
                {value.akomodasi.map((value, index) => (
                  <CardAkomodasi
                    nama={value.nama}
                    fasilitas={value.fasilitas}
                    tipe={value.tipe}
                    key={index.toString()}
                  />
                ))}
              </td> */}
                <td>
                  {value.makananKuliner.map((item) => (
                    <button
                      disabled
                      class="btn btn-warning-emphasis mx-1 my-1"
                      type="submit"
                    >
                      {item}
                    </button>
                  ))}
                </td>
                {/* <td>
                <ul>
                  <li>Cara: {value.transportasi.cara}</li>
                  <li>Waktu Tempuh: {value.transportasi.waktuTempuh}</li>
                </ul>
              </td>
              <td>{value.waktuTerbaik}</td>
              <td>@mdo</td> */}
                <td>
                  <button
                    class="btn btn-success btn-sm"
                    onClick={() => {
                      Swal.fire({
                        title: "Yakin ingin menerima wisata ini?",
                        text: `Anda akan menerima wisata ${value.nama}`,
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
                            title: "Wisata telah diterima",
                            text: "Terima kasih atas kontribusi Anda!",
                          });
                        }
                      });
                    }}
                  >
                    Terima
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    onClick={() => {
                      Swal.fire({
                        title: "Yakin ingin menolak wisata ini?",
                        text: `Anda akan menolak wisata ${value.nama}`,
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
                            title: "Wisata telah ditolak",
                            text: "Terima kasih atas kontribusi Anda!",
                          });
                        }
                      });
                    }}
                  >
                    Tolak
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </table>
    </div>
  );
}
