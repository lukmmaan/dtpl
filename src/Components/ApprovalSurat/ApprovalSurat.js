import React, { useState, useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";

import "./ApprovalSurat.css";
import { API_URL } from "../../Constants/Api";
import { Surat } from "../../Assets/Surat";

const ApprovalSurat = ({ user }) => {
  const [suratList, setSuratList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSuratList = () => {
    Axios.get(`${API_URL}/suratByStatus/${user.role}`)
      .then((response) => {
        setSuratList(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchSuratList();
  }, [user.role]);

  const approveSurat = async (id) => {
    const approvalName = user.fullName;

    setIsLoading(true);

    try {
      await Axios.put(`${API_URL}/approveSurat/${user.role}`, {
        suratId: id,
        approvalName: approvalName,
      });

      swal({
        title: "Surat telah disetujui.",
        icon: "success",
        button: "OK !",
      });

      if (suratList.length === 1) setSuratList([]);
      else fetchSuratList();
    } catch (error) {
      swal({
        title: "Ooopps !",
        text: "Gagal !",
        icon: "error",
        button: "OK !",
      });

      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const declineSurat = async (id) => {
    const approvalName = user.fullName;
    const role = user.role;

    setIsLoading(true);

    try {
      await Axios.put(`${API_URL}/declineSurat`, {
        id: id,
        role,
        approvalName,
      });

      swal({
        title: "Surat telah ditolak.",
        icon: "success",
        button: "OK !",
      });

      if (suratList.length === 1) setSuratList([]);
      else fetchSuratList();
    } catch (error) {
      swal({
        title: "Ooopps !",
        text: "Gagal !",
        icon: "error",
        button: "OK !",
      });

      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="approval-surat-section">
      <h2>Approval Surat</h2>
      <table className="surat-table">
        <thead>
          <tr>
            <th>Nomor Surat</th>
            <th>Pengirim</th>
            <th>Jenis Surat</th>
            <th>Alamat</th>
            <th>Keperluan</th>
            <th>Download Dokumen</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {suratList.map((surat, idx) => (
            <tr key={surat._id}>
              <td>{idx + 1}.</td>
              <td>{surat.fullName}</td>
              <td>{surat.jenisSurat}</td>
              <td>{surat.alamat}</td>
              <td>{surat.keperluan}</td>
              <td>
                <p>
                  <a
                    href={Surat} // Ganti dengan URL atau path yang sesuai dengan dokumen yang ingin Anda unduh
                    download="Surat.pdf" // Nama file yang akan diunduh
                    target="_blank"
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "#8B4513",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    // Menambahkan gaya hover
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "chocolate")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#8B4513")
                    }
                  >
                    disini
                  </a>
                </p>
              </td>

              <td>
                <button
                  className="approve-button"
                  onClick={() => approveSurat(surat._id)}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Approve"}
                </button>
                <button
                  className="decline-button"
                  onClick={() => declineSurat(surat._id)}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Decline"}
                </button>
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

export default connect(mapStateToProps)(ApprovalSurat);
