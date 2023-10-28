import React, { useEffect, useState } from "react";
import "./AdminDestinasi.css";
import DestinasiData from "../DestinasiList/DestinasiData";
import { Wisata1 } from "../../Assets/Image";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function AdminDestinasi() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    // Filter out the item with the given id
    const updatedData = data.filter((item) => item.id !== id);
    // Update the state with the new data
    setData(updatedData);
  };

  const getData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(DestinasiData);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  const CardAkomodasi = ({ nama, tipe, fasilitas }) => (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{nama}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{tipe}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">Fasilitas:</h6>
        <ul>
          {fasilitas.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="px-4 container-admin">
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <div>
          <h1>List Data Destinasi</h1>
          <div className="row mb-3">
            <div className="col-md-8 text-right">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="col-md-2 text-right">
              <Link to="/destinasiTambah">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#addDestinationModal"
                >
                  Add New
                </button>
              </Link>
            </div>
          </div>
          <div className="table table-responsive">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Lokasi</th>
                  <th scope="col">Gambar</th>
                  {/* 
                  <th scope="col">Atraksi Utama</th>
                  <th scope="col">Aktivitas</th>
                  <th scope="col">Akomodasi</th>
                  <th scope="col">Makanan Kuliner</th>
                  <th scope="col">Transportasi</th>
                  <th scope="col">Waktu Terbaik</th>
                  <th scope="col">Fasilitas Umum</th> */}
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((value, index) => (
                  <tr>
                    <th scope="row">{value.id}</th>
                    <td>{value.nama}</td>
                    <td>{value.deskripsi}</td>
                    <td>{value.lokasi}</td>
                    <td>
                      <img
                        src={Wisata1}
                        alt={`${value.nama} ${value.gambar}`}
                        className="img-thumbnail"
                      />
                    </td>
                    {/* <td>{value.atraksiUtama}</td>
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
                    <td>
                      {value.akomodasi.map((value, index) => (
                        <CardAkomodasi
                          nama={value.nama}
                          fasilitas={value.fasilitas}
                          tipe={value.tipe}
                          key={index.toString()}
                        />
                      ))}
                    </td>
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
                    <td>
                      <ul>
                        <li>Cara: {value.transportasi.cara}</li>
                        <li>Waktu Tempuh: {value.transportasi.waktuTempuh}</li>
                      </ul>
                    </td>
                    <td>{value.waktuTerbaik}</td>
                    <td>@mdo</td> */}
                    <td>
                      <button
                        class="btn btn-warning btn-sm"
                        onClick={() =>
                          navigate("/adminDestinasiDetail", { state: value })
                        }
                      >
                        Detail
                      </button>
                      <button
                        class="btn btn-danger btn-sm"
                        onClick={() => {
                          Swal.fire({
                            title: "Yakin ingin menghapus wisata ini?",
                            text: `Anda akan menghapus wisata ${value.nama}`,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "green",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Ya, Selesai",
                            cancelButtonText: "Batal",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleDelete(value.id);
                              Swal.fire({
                                icon: "success",
                                title: "Wisata telah dihapus",
                                text: "Terima kasih atas kontribusi Anda!",
                              });
                            }
                          });
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
