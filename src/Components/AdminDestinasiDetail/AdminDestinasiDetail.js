import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Wisata1 } from "../../Assets/Image";

export default function AdminDestinasiDetail() {
  const { state } = useLocation();

  const [rowData, setRowData] = useState([
    "nama",
    "lokasi",
    "deskripsi",
    "gambar",
    "atraksiUtama",
    "aktivitas",
    "akomodasi",
    "makananKuliner",
    "transportasi",
    "waktuTerbaik",
    "fasilitasUmum",
  ]);

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

  const renderPenjelasan = (item) => {
    if (item === "gambar") {
      return (
        <td>
          <img
            src={Wisata1}
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        </td>
      );
    } else if (item === "aktivitas") {
      return (
        <td>
          {state.aktivitas.map((item) => (
            <button disabled class="btn btn-secondary mx-1 my-1" type="submit">
              {item}
            </button>
          ))}
        </td>
      );
    } else if (item === "akomodasi") {
      return (
        <td>
          {state.akomodasi.map((value, index) => (
            <CardAkomodasi
              nama={value.nama}
              fasilitas={value.fasilitas}
              tipe={value.tipe}
              key={index.toString()}
            />
          ))}
        </td>
      );
    } else if (item === "makananKuliner") {
      return (
        <td>
          {state.makananKuliner.map((item) => (
            <button
              disabled
              class="btn btn-warning-emphasis mx-1 my-1"
              type="submit"
            >
              {item}
            </button>
          ))}
        </td>
      );
    } else if (item === "transportasi") {
      return (
        <td>
          <ul>
            <li>Cara: {state.transportasi.cara}</li>
            <li>Waktu Tempuh: {state.transportasi.waktuTempuh}</li>
          </ul>
        </td>
      );
    } else if (item === "fasilitasUmum") {
      return (
        <td>
          <ul>
            <li>Toilet: {state.fasilitasUmum.toilet}</li>
            <li>pusat Informasi: {state.fasilitasUmum.pusatInformasi}</li>
          </ul>
        </td>
      );
    } else {
      return <td>{state[item].toString()}</td>;
    }
  };
  return (
    <div className="mx-3 container-admin">
      <h1>{state.nama}</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Data</th>
            <th scope="col">Penjelasan</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td scope="row">{item}</td>
              {renderPenjelasan(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
