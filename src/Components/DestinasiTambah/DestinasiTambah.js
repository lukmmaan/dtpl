import React, { useState } from "react";
import "./DestinasiTambah.css";
import { Wisata2, defaultCoverUpload } from "../../Assets/Image";

export default function DestinasiTambah() {
  const initialFormState = {
    nama: "",
    lokasi: "",
    deskripsi: "",
    gambar: null,
    atraksiUtama: "",
    aktivitas: [],
    akomodasi: [],
    makananKuliner: "",
    transportasi: { cara: "", waktuTempuh: "" },
    waktuTerbaik: "",
    fasilitasUmum: { toilet: "", pusatInformasi: "" },
  };

  const [formData, setFormData] = useState(initialFormState);
  const [fileUrl, setFileUrl] = useState();
  const [aktivitas, setAktivitas] = useState([""]);

  const handleChange = (e, i) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setFileUrl(URL.createObjectURL(files[0]));
      setFormData({ ...formData, gambar: files[0] });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleChangeAktivitas = (event, i) => {
    const values = [...aktivitas];
    values[i] = event.target.value;
    // const updateAktivitas = aktivitas.map((value) =>
    //   value == event.target.value ? { ...aktivitas, value } : value
    // );
    setAktivitas(values);
  };

  function handleAdd() {
    const values = [...aktivitas];
    values.push("");
    setAktivitas(values);
  }

  function handleRemove(i) {
    const values = [...aktivitas];
    values.splice(i, 1);
    setAktivitas(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, aktivitas: aktivitas });
    console.log("Form submitted:", formData);
    setFormData({
      nama: "",
      lokasi: "",
      deskripsi: "",
      gambar: null,
      atraksiUtama: "",
      aktivitas: "",
      akomodasi: [],
      makananKuliner: "",
      transportasi: { cara: "", waktuTempuh: "" },
      waktuTerbaik: "",
      fasilitasUmum: { toilet: "", pusatInformasi: "" },
    });
  };

  return (
    <div className="container destinasi-container">
      <h1>Tambah data destinasi wisata</h1>
      <form onSubmit={handleSubmit} className="form bg-white p-4 rounded">
        <div className="row mb-3">
          <div className="col mb-3">
            <label className="form-label">Nama</label>
            <input
              type="text"
              className="form-control"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col mb-3">
            <label className="form-label">Lokasi</label>
            <input
              type="text"
              className="form-control"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label className="form-label">Deskripsi</label>
            <textarea
              className="form-control"
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label className="form-label">Gambar</label>
            <input
              type="file"
              className="form-control"
              name="gambar"
              value={formData.gambar}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col mb-3 ">
            {fileUrl ? (
              <img
                src={fileUrl}
                className="img-thumbnail"
                style={{
                  maxWidth: 400,
                  maxHeight: 400,
                }}
              />
            ) : (
              <img src={defaultCoverUpload} className="img-thumbnail " />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label className="form-label">Atraksi Utama</label>
            <input
              type="text"
              className="form-control"
              name="atraksiUtama"
              value={formData.lokasi}
              onChange={handleChange}
              placeholder="Pisahkan dengan koma jika lebih dari 1"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Aktivitas </label>

            {aktivitas.map((field, idx) => {
              return (
                <div className="d-flex " key={`${idx}`}>
                  <input
                    type="text"
                    placeholder="Masukan Aktivitas"
                    name="aktivitas"
                    value={field || ""}
                    onChange={(e) => handleChangeAktivitas(e, idx)}
                  />
                  {aktivitas.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleRemove(idx)}
                    >
                      X
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              className="btn sm btn-primary"
              onClick={() => handleAdd()}
            >
              Tambah aktivitas
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
