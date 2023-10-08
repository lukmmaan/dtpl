import React from "react";
import { useParams } from "react-router-dom";

import { Umkm2 } from "../../Assets/Image/index";
import DataUmkm from "./DataUmkm";
import "./UMKMDetail.css";

const UMKMDetail = () => {
  const { id } = useParams();
  const umkm = DataUmkm.find((umkm) => umkm.id === parseInt(id, 10));

  if (!umkm) {
    return <div className="umkm-detail-container">UMKM tidak ditemukan</div>;
  }

  return (
    <div className="umkm-detail-container">
      <h1>{umkm.nama}</h1>
      <img src={Umkm2} alt={Umkm2} className="umkm-detail-image" />
      <table className="umkm-table">
        <tbody>
          <tr>
            <td>Profil</td>
            <td>{umkm.profil}</td>
          </tr>
          <tr>
            <td>Ulasan</td>
            <td>{umkm.ulasan}</td>
          </tr>
          <tr>
            <td>Program</td>
            <td>{umkm.program}</td>
          </tr>
          <tr>
            <td>Dukungan</td>
            <td>{umkm.dukungan}</td>
          </tr>
          <tr>
            <td>Produk</td>
            <td>
              <table className="sub-table">
                <thead>
                  <tr>
                    <th>Nama Produk</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {umkm.produk.map((produk) => (
                    <tr key={produk.id}>
                      <td>{produk.nama}</td>
                      <td>{produk.deskripsi}</td>
                      <td>{produk.harga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>Acara</td>
            <td>
              <table className="sub-table">
                <thead>
                  <tr>
                    <th>Nama Acara</th>
                    <th>Tanggal</th>
                    <th>Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  {umkm.acara.map((acara) => (
                    <tr key={acara.id}>
                      <td>{acara.nama}</td>
                      <td>{acara.tanggal}</td>
                      <td>{acara.deskripsi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>Kontak</td>
            <td>
              <ul>
                <li>Alamat: {umkm.kontak.alamat}</li>
                <li>Telepon: {umkm.kontak.telepon}</li>
                <li>Email: {umkm.kontak.email}</li>
                <li>Website: {umkm.kontak.website}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Sosial Media</td>
            <td>
              <ul>
                <li>Facebook: {umkm.sosialMedia.facebook}</li>
                <li>Instagram: {umkm.sosialMedia.instagram}</li>
                <li>Twitter: {umkm.sosialMedia.twitter}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Laporan Keuangan</td>
            <td>
              <ul>
                <li>Tahun: {umkm.laporanKeuangan.tahun}</li>
                <li>Omzet: {umkm.laporanKeuangan.omzet}</li>
                <li>Laba Bersih: {umkm.laporanKeuangan.labaBersih}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Keinginan Pemajuan</td>
            <td>{umkm.keinginanPemajuan}</td>
          </tr>
          <tr>
            <td>Rencana Pemajuan</td>
            <td>
              <ul>
                {umkm.rencanaPemajuan.map((rencana, index) => (
                  <li key={index}>{rencana}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UMKMDetail;
