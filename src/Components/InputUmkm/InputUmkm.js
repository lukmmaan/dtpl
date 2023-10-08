import React, { useState } from "react";
import swal from "sweetalert2";
import "./InputUmkm.css";

const InputUmkm = () => {
  const [umkm, setUmkm] = useState({
    id: "",
    nama: "",
    profil: "",
    foto: "",
    ulasan: "",
    program: "",
    dukungan: "",
    produk: [],
    acara: [],
    kontak: {
      alamat: "",
      telepon: "",
      email: "",
      website: "",
    },
    sosialMedia: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
    laporanKeuangan: {
      tahun: "",
      omzet: "",
      labaBersih: "",
    },
    keinginanPemajuan: "",
    rencanaPemajuan: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the input field is in the nested structure
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setUmkm({
        ...umkm,
        [parent]: {
          ...umkm[parent],
          [child]: value,
        },
      });
    } else {
      setUmkm({
        ...umkm,
        [name]: value,
      });
    }
  };

  const handleAddProduk = () => {
    const newProduk = {
      id: umkm.produk.length + 1,
      nama: "",
      deskripsi: "",
      harga: "",
      foto: "",
    };
    setUmkm({
      ...umkm,
      produk: [...umkm.produk, newProduk],
    });
  };

  const handleRemoveProduk = (id) => {
    const updatedProduk = umkm.produk.filter((produk) => produk.id !== id);
    setUmkm({
      ...umkm,
      produk: updatedProduk,
    });
  };

  const handleProdukChange = (id, e) => {
    const { name, value } = e.target;
    const updatedProduk = umkm.produk.map((produk) =>
      produk.id === id ? { ...produk, [name]: value } : produk
    );
    setUmkm({
      ...umkm,
      produk: updatedProduk,
    });
  };

  const handleAddAcara = () => {
    const newAcara = {
      id: umkm.acara.length + 1,
      nama: "",
      tanggal: "",
      deskripsi: "",
    };
    setUmkm({
      ...umkm,
      acara: [...umkm.acara, newAcara],
    });
  };

  const handleRemoveAcara = (id) => {
    const updatedAcara = umkm.acara.filter((acara) => acara.id !== id);
    setUmkm({
      ...umkm,
      acara: updatedAcara,
    });
  };

  const handleAcaraChange = (id, e) => {
    const { name, value } = e.target;
    const updatedAcara = umkm.acara.map((acara) =>
      acara.id === id ? { ...acara, [name]: value } : acara
    );
    setUmkm({
      ...umkm,
      acara: updatedAcara,
    });
  };

  const handleAddRencana = () => {
    const newRencana = "";
    setUmkm({
      ...umkm,
      rencanaPemajuan: [...umkm.rencanaPemajuan, newRencana],
    });
  };

  const handleRemoveRencana = (index) => {
    const updatedRencana = [...umkm.rencanaPemajuan];
    updatedRencana.splice(index, 1);
    setUmkm({
      ...umkm,
      rencanaPemajuan: updatedRencana,
    });
  };

  const handleRencanaChange = (index, e) => {
    const updatedRencana = [...umkm.rencanaPemajuan];
    updatedRencana[index] = e.target.value;
    setUmkm({
      ...umkm,
      rencanaPemajuan: updatedRencana,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal.fire({
      title: "Sukses!",
      text: "Data UMKM berhasil disubmit.",
      icon: "success",
    });
    // onAddUmkm(umkm);
    // Reset the form after submission
    // setUmkm({
    //   id: "",
    //   nama: "",
    //   profil: "",
    //   foto: "",
    //   ulasan: "",
    //   program: "",
    //   dukungan: "",
    //   produk: [],
    //   acara: [],
    //   kontak: {
    //     alamat: "",
    //     telepon: "",
    //     email: "",
    //     website: "",
    //   },
    //   sosialMedia: {
    //     facebook: "",
    //     instagram: "",
    //     twitter: "",
    //   },
    //   laporanKeuangan: {
    //     tahun: "",
    //     omzet: "",
    //     labaBersih: "",
    //   },
    //   keinginanPemajuan: "",
    //   rencanaPemajuan: [],
    // });
  };

  return (
    <div className="input-umkm-container">
      <h2>Input Data UMKM</h2>
      <form onSubmit={handleSubmit}>
        {/* Nama */}
        <div className="umkm-form">
          <label htmlFor="nama">Nama UMKM:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={umkm.nama}
            onChange={handleChange}
            required
          />
        </div>

        {/* Profil */}
        <div className="umkm-form">
          <label htmlFor="profil">Profil:</label>
          <textarea
            id="profil"
            name="profil"
            value={umkm.profil}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Foto */}
        <div className="umkm-form">
          <label htmlFor="foto">Foto:</label>
          <input
            type="text"
            id="foto"
            name="foto"
            value={umkm.foto}
            onChange={handleChange}
          />
        </div>

        {/* Ulasan */}
        <div className="umkm-form">
          <label htmlFor="ulasan">Ulasan:</label>
          <textarea
            id="ulasan"
            name="ulasan"
            value={umkm.ulasan}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Program */}
        <div className="umkm-form">
          <label htmlFor="program">Program:</label>
          <textarea
            id="program"
            name="program"
            value={umkm.program}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Dukungan */}
        <div className="umkm-form">
          <label htmlFor="dukungan">Dukungan:</label>
          <textarea
            id="dukungan"
            name="dukungan"
            value={umkm.dukungan}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Produk */}
        <div className="umkm-form">
          <label>Produk:</label> <br />
          {umkm.produk.map((produk, index) => (
            <div key={produk.id} className="produk-form">
              <input
                type="text"
                name="nama"
                placeholder="Nama Produk"
                value={produk.nama}
                onChange={(e) => handleProdukChange(produk.id, e)}
                required
              />
              <input
                type="text"
                name="deskripsi"
                placeholder="Deskripsi Produk"
                value={produk.deskripsi}
                onChange={(e) => handleProdukChange(produk.id, e)}
                required
              />
              <input
                type="text"
                name="harga"
                placeholder="Harga"
                value={produk.harga}
                onChange={(e) => handleProdukChange(produk.id, e)}
                required
              />
              <input
                type="text"
                name="foto"
                placeholder="Link Foto Produk"
                value={produk.foto}
                onChange={(e) => handleProdukChange(produk.id, e)}
              />
              {umkm.produk.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveProduk(produk.id)}
                >
                  Hapus
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddProduk}>
            Add Produk
          </button>
        </div>

        {/* Acara */}
        <div className="umkm-form">
          <label>Acara:</label> <br />
          {umkm.acara.map((acara, index) => (
            <div key={acara.id} className="acara-form">
              <input
                type="text"
                name="nama"
                placeholder="Nama Acara"
                value={acara.nama}
                onChange={(e) => handleAcaraChange(acara.id, e)}
                required
              />
              <input
                type="text"
                name="tanggal"
                placeholder="Tanggal Acara"
                value={acara.tanggal}
                onChange={(e) => handleAcaraChange(acara.id, e)}
                required
              />
              <input
                type="text"
                name="deskripsi"
                placeholder="Deskripsi Acara"
                value={acara.deskripsi}
                onChange={(e) => handleAcaraChange(acara.id, e)}
              />
              {umkm.acara.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveAcara(acara.id)}
                >
                  Hapus
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddAcara}>
            Add Acara
          </button>
        </div>

        {/* Kontak */}
        <div className="umkm-form">
          <label>Informasi Kontak:</label>
          <input
            type="text"
            name="kontak.alamat"
            placeholder="Alamat"
            value={umkm.kontak.alamat}
            onChange={handleChange}
          />
          <input
            type="text"
            name="kontak.telepon"
            placeholder="Telepon"
            value={umkm.kontak.telepon}
            onChange={handleChange}
          />
          <input
            type="email"
            name="kontak.email"
            placeholder="Email"
            value={umkm.kontak.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="kontak.website"
            placeholder="Website"
            value={umkm.kontak.website}
            onChange={handleChange}
          />
        </div>

        {/* Sosial Media */}
        <div className="umkm-form">
          <label>Sosial Media:</label>
          <input
            type="text"
            name="sosialMedia.facebook"
            placeholder="Facebook"
            value={umkm.sosialMedia.facebook}
            onChange={handleChange}
          />
          <input
            type="text"
            name="sosialMedia.instagram"
            placeholder="Instagram"
            value={umkm.sosialMedia.instagram}
            onChange={handleChange}
          />
          <input
            type="text"
            name="sosialMedia.twitter"
            placeholder="Twitter"
            value={umkm.sosialMedia.twitter}
            onChange={handleChange}
          />
        </div>

        {/* Laporan Keuangan */}
        <div className="umkm-form">
          <label>Laporan Keuangan:</label>
          <input
            type="text"
            name="laporanKeuangan.tahun"
            placeholder="Tahun Laporan"
            value={umkm.laporanKeuangan.tahun}
            onChange={handleChange}
          />
          <input
            type="text"
            name="laporanKeuangan.omzet"
            placeholder="Omzet"
            value={umkm.laporanKeuangan.omzet}
            onChange={handleChange}
          />
          <input
            type="text"
            name="laporanKeuangan.labaBersih"
            placeholder="Laba Bersih"
            value={umkm.laporanKeuangan.labaBersih}
            onChange={handleChange}
          />
        </div>

        {/* Keinginan Pemajuan */}
        <div className="umkm-form">
          <label>Keinginan Pemajuan:</label>
          <textarea
            id="keinginanPemajuan"
            name="keinginanPemajuan"
            value={umkm.keinginanPemajuan}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Rencana Pemajuan */}
        <div className="umkm-form">
          <label>Rencana Pemajuan:</label> <br />
          {umkm.rencanaPemajuan.map((rencana, index) => (
            <div key={index} className="rencana-form">
              <textarea
                placeholder="Rencana Pemajuan"
                value={rencana}
                onChange={(e) => handleRencanaChange(index, e)}
              ></textarea>
              {umkm.rencanaPemajuan.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveRencana(index)}
                >
                  Hapus
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddRencana}>
            Add Rencana
          </button>
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputUmkm;
