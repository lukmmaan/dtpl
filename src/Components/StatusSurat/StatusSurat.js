import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";

import "./StatusSurat.css";
import { API_URL } from "../../Constants/Api";

const StatusSurat = ({ user }) => {
  const [statusSuratList, setStatusSuratList] = useState([]);

  const statusSuratFunc = (surat) => {
    const { statusSurat, approvalRt, approvalRw, approvalDesa } = surat;
    const declineBy = approvalRt || approvalRw || approvalDesa;

    if (statusSurat === "kepalaRT") return "Menunggu persetujuan ketua RT.";
    if (statusSurat === "kepalaRW") return "Menunggu persetujuan ketua RW.";
    if (statusSurat === "kepalaDesa") return "Menunggu persetujuan ketua Desa.";
    if (statusSurat === "Done") return "Persetujuan surat sudah selesai.";
    if (statusSurat === "Decline")
      return `Mohon maaf permintaan surat ditolak oleh ${declineBy}, 
      silahkan hubungi pihak terkait.`;
  };

  useEffect(() => {
    Axios.get(`${API_URL}/listSurat/${user.email}`)
      .then((response) => {
        // Mengambil data surat dari server
        const suratData = response.data;

        setStatusSuratList(suratData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="status-surat-section">
      <h2>Status Surat Anda</h2>
      <table className="status-surat-table">
        <thead>
          <tr>
            <th>Nomor Pengajuan</th>
            <th>Nama Pengaju</th>
            <th>Jenis Surat</th>
            <th>Tanggal Submit</th>
            <th>Status</th>
            <th>Persetujuan Oleh</th>
          </tr>
        </thead>
        <tbody>
          {statusSuratList.map((surat, idx) => (
            <tr key={surat.id}>
              <td>{idx + 1}.</td>
              <td>{surat.fullName}</td>
              <td>{surat.jenisSurat}</td>
              <td>{new Date(surat.createdAt).toLocaleDateString()}</td>
              <td
                style={{
                  color: surat.statusSurat === "Decline" && "red",
                  fontWeight: surat.statusSurat === "Decline" && "bold",
                }}
              >
                {statusSuratFunc(surat)}
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Ketua RT:</td>
                      <td>{surat.approvalRt}</td>
                    </tr>
                    <tr>
                      <td>Ketua RW:</td>
                      <td>{surat.approvalRw}</td>
                    </tr>
                    <tr>
                      <td>Ketua Desa:</td>
                      <td>{surat.approvalDesa}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(StatusSurat);
