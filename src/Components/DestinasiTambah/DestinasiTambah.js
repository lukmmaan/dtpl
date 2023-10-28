import React, { useState } from "react";
import "./DestinasiTambah.css";
import { Wisata2, defaultCoverUpload } from "../../Assets/Image";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function DestinasiTambah() {
  const initialFormState = {
    nama: "",
    lokasi: "",
    deskripsi: "",
    gambar: null,
    atraksiUtama: "",
    aktivitas: [],
    akomodasi: [],
    makananKuliner: [],
    transportasi: { cara: "", waktuTempuh: "" },
    waktuTerbaik: "",
    fasilitasUmum: { toilet: "", pusatInformasi: "" },
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [fileUrl, setFileUrl] = useState();

  const handleChange = (e, i) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      setFileUrl(URL.createObjectURL(files[0]));
      setFormData({ ...formData, gambar: files[0] });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleChangeAktivitas = (event, i) => {
    const values = [...formData.aktivitas];
    values[i] = event.target.value;
    // const updateAktivitas = aktivitas.map((value) =>
    //   value == event.target.value ? { ...aktivitas, value } : value
    // );
    setFormData({
      ...formData,
      aktivitas: values,
    });
  };

  function handleAdd() {
    const values = [...formData.aktivitas];
    values.push("");
    setFormData({
      ...formData,
      aktivitas: values,
    });
  }

  function handleRemove(i) {
    const values = [...formData.aktivitas];
    values.splice(i, 1);
    setFormData({
      ...formData,
      aktivitas: values,
    });
  }
  const handleChangeKuliner = (event, i) => {
    const values = [...formData.makananKuliner];
    values[i] = event.target.value;
    setFormData({
      ...formData,
      makananKuliner: values,
    });
  };

  function handleAddKuliner() {
    const values = [...formData.makananKuliner];
    values.push("");
    setFormData({
      ...formData,
      makananKuliner: values,
    });
  }

  function handleRemoveKuliner(i) {
    const values = [...formData.makananKuliner];
    values.splice(i, 1);
    setFormData({
      ...formData,
      makananKuliner: values,
    });
  }

  const handleRemoveAkomodasi = (id) => {
    const updatedAkomodasi = formData.akomodasi.filter(
      (akomodasi) => akomodasi.id !== id
    );
    setFormData({
      ...formData,
      akomodasi: updatedAkomodasi,
    });
  };

  const handleAkomodasiChange = (id, e) => {
    const { name, value } = e.target;
    const updatedAkomodasi = formData.akomodasi.map((akomodasi) =>
      akomodasi.id === id ? { ...akomodasi, [name]: value } : akomodasi
    );
    setFormData({
      ...formData,
      akomodasi: updatedAkomodasi,
    });
  };

  const handleAddAkomodasi = () => {
    const newRencana = "";
    setFormData({
      ...formData,
      akomodasi: [...formData.akomodasi, newRencana],
    });
  };

  const handleTranportasiChange = (e) => {
    const { name, value, files } = e.target;
    const tranportasi = formData.transportasi;

    setFormData({
      ...formData,
      transportasi: {
        ...tranportasi,
        [name]: value,
      },
    });
  };

  const handleFasilitasUmumChange = (e) => {
    const { name, value } = e.target;
    const fasilitasUmum = formData.fasilitasUmum;

    setFormData({
      ...formData,
      fasilitasUmum: {
        ...fasilitasUmum,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    Swal.fire({
      title: "Yakin ingin data sudah benar?",
      text: `Anda akan menambahkan destinasi wisata`,
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
          title: "Wisata telah ditambahkan",
          text: "Terima kasih atas kontribusi Anda!",
        });
        localStorage.setItem('newWisata',JSON.stringify(formData))
        navigate("/adminDestinasi", { replace: true });
      }
    });
   
    setFileUrl();
    setFormData({
      nama: "",
      lokasi: "",
      deskripsi: "",
      gambar: null,
      atraksiUtama: "",
      aktivitas: [],
      akomodasi: [],
      makananKuliner: [],
      transportasi: { cara: "", waktuTempuh: "" },
      waktuTerbaik: "",
      fasilitasUmum: { toilet: "", pusatInformasi: "" },
    });
  };

  return (
    <div className="container destinasi-container">
      <h1>Tambah data destinasi wisata</h1>
      <form
        onSubmit={handleSubmit}
        className="form bg-white p-4 rounded umkm-form"
      >
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
              value={formData.atraksiUtama}
              onChange={handleChange}
              placeholder="Pisahkan dengan koma jika lebih dari 1"
              required
            />
          </div>
        </div>
        {/* Aktivitas */}
        <div className="row umkm-form">
          <div className="col card py-3 my-2">
            <label className="form-label">Aktivitas </label>

            {formData.aktivitas.map((field, idx) => {
              return (
                <div className="d-flex " key={`${idx}`}>
                  <input
                    type="text"
                    placeholder="Masukan Aktivitas"
                    name="aktivitas"
                    value={field || ""}
                    onChange={(e) => handleChangeAktivitas(e, idx)}
                  />
                  {formData.aktivitas.length > 1 && (
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
        {/* end aktivitas */}

        {/* akomodasi */}

        <div className="umkm-form">
          <label>Akomodasi:</label> <br />
          {formData.akomodasi.map((produk, index) => (
            <div key={produk.id} className="produk-form">
              <input
                type="text"
                name="nama"
                placeholder="Nama Aktivitas"
                value={produk.nama}
                onChange={(e) => handleAkomodasiChange(produk.id, e)}
                required
              />
              <input
                type="text"
                name="tipe"
                placeholder="Tipe"
                value={produk.deskripsi}
                onChange={(e) => handleAkomodasiChange(produk.id, e)}
                required
              />
              <input
                type="text"
                name="fasilitas"
                placeholder="Fasilitas"
                value={produk.harga}
                onChange={(e) => handleAkomodasiChange(produk.id, e)}
                required
              />

              {formData.akomodasi.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveAkomodasi(produk.id)}
                >
                  Hapus
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddAkomodasi}>
            Add Akomodasi
          </button>
        </div>
        {/* end akomodasi */}

        {/* Kuliner */}
        <div className="row umkm-form">
          <div className="col card py-3 my-2">
            <label className="form-label">Makanan Kuliner </label>

            {formData.makananKuliner.map((field, idx) => {
              return (
                <div className="d-flex " key={`${idx}`}>
                  <input
                    type="text"
                    placeholder="Masukan Aktivitas"
                    name="aktivitas"
                    value={field || ""}
                    onChange={(e) => handleChangeKuliner(e, idx)}
                  />
                  {formData.makananKuliner.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleRemoveKuliner(idx)}
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
              onClick={() => handleAddKuliner()}
            >
              Tambah Makanan Kuliner
            </button>
          </div>
        </div>
        {/* end Kuliner */}

        {/* tranportasi */}

        <div className="umkm-form">
          <label>tranportasi:</label> <br />
          <div className="produk-form">
            <input
              type="text"
              name="cara"
              placeholder="Cara Transportasi"
              value={formData.transportasi.cara}
              onChange={(e) => handleTranportasiChange(e)}
              required
            />
            <input
              type="text"
              name="waktuTempuh"
              placeholder="waktu Tempuh"
              value={formData.transportasi.waktuTempuh}
              onChange={(e) => handleTranportasiChange(e)}
              required
            />
          </div>
        </div>
        {/* end transportasi */}

        <div className="col mb-3">
          <label className="form-label">Waktu Terbaik</label>
          <input
            type="text"
            className="form-control"
            name="waktuTerbaik"
            value={formData.waktuTerbaik}
            onChange={handleChange}
            required
          />
        </div>

        {/* fasilitas umum */}

        <div className="umkm-form">
          <label>Fasilitas Umum:</label> <br />
          <div className="produk-form">
            <input
              type="text"
              name="toilet"
              placeholder="Toilet"
              value={formData.fasilitasUmum.toilet}
              onChange={(e) => handleFasilitasUmumChange(e)}
              required
            />
            <input
              type="text"
              name="pusatInformasi"
              placeholder="Pusat Informasi"
              value={formData.fasilitasUmum.pusatInformasi}
              onChange={(e) => handleFasilitasUmumChange(e)}
              required
            />
          </div>
        </div>
        {/* end fasilitas umum */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
