import React, { useState } from "react";
import Data from "./Data";
import "./Keuangan.css";

const Keuangan = () => {
  const [activeSection, setActiveSection] = useState(null);

  const laporanNeraca = Data.laporanNeraca;
  const laporanArusKas = Data.laporanArusKas;
  const laporanLabaRugi = Data.laporanLabaRugi;
  const catatanLaporan = Data.catatanLaporan;
  const bulanList = Object.keys(laporanNeraca);

  const openSection = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  function DetailKategori({ detailKategori }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Anggaran Direncanakan</th>
            <th>Anggaran Terealisasi</th>
          </tr>
        </thead>
        <tbody>
          {detailKategori.map((kategori, kategoriIndex) => (
            <tr key={kategoriIndex}>
              <td>{kategori.kategori}</td>
              <td>{kategori.anggaranDirencanakan}</td>
              <td>{kategori.anggaranTerealisasi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="container">
      <h1>Laporan Keuangan Desa Manud Jaya 2023</h1>

      <div className="section-menu">
        <div
          className={`menu-item ${activeSection === "neraca" ? "active" : ""}`}
          onClick={() => openSection("neraca")}
        >
          Neraca
        </div>
        <div
          className={`menu-item ${activeSection === "arusKas" ? "active" : ""}`}
          onClick={() => openSection("arusKas")}
        >
          Arus Kas
        </div>
        <div
          className={`menu-item ${
            activeSection === "labaRugi" ? "active" : ""
          }`}
          onClick={() => openSection("labaRugi")}
        >
          Laba Rugi
        </div>
        <div
          className={`menu-item ${
            activeSection === "catatanLaporan" ? "active" : ""
          }`}
          onClick={() => openSection("catatanLaporan")}
        >
          Catatan Laporan
        </div>
        <div
          className={`menu-item ${
            activeSection === "laporanAnggaran" ? "active" : ""
          }`}
          onClick={() => openSection("laporanAnggaran")}
        >
          Laporan Anggaran
        </div>
        <div
          className={`menu-item ${
            activeSection === "laporanAudit" ? "active" : ""
          }`}
          onClick={() => openSection("laporanAudit")}
        >
          Laporan Audit
        </div>
      </div>

      {activeSection && (
        <div className="section-data">
          {activeSection === "neraca" && (
            <div>
              {bulanList.map((bulan, index) => (
                <div key={index}>
                  <h2>Laporan Bulan {bulan}</h2>
                  <section className="laporan-neraca">
                    <table>
                      <thead>
                        <tr>
                          <th>Aktiva</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        {laporanNeraca[bulan].aktiva.map((aset, index) => (
                          <tr key={index}>
                            <td>{aset.nama}</td>
                            <td>{aset.nilai}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <th>Kewajiban</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        {laporanNeraca[bulan].kewajiban.map(
                          (kewajiban, index) => (
                            <tr key={index}>
                              <td>{kewajiban.nama}</td>
                              <td>{kewajiban.nilai}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                    <div className="ekuitas">
                      <p>Nilai Bersih Desa: {laporanNeraca[bulan].ekuitas}</p>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          )}

          {activeSection === "arusKas" && (
            <div>
              {bulanList.map((bulan, index) => (
                <div key={index}>
                  <h2>Laporan Bulan {bulan}</h2>
                  <section className="laporan-arus-kas">
                    <h3>Laporan Arus Kas (Cash Flow Statement)</h3>
                    <table>
                      <thead>
                        <tr>
                          <th>Arus Masuk</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        {laporanArusKas[bulan].arusMasuk.map((masuk, index) => (
                          <tr key={index}>
                            <td>{masuk.kategori}</td>
                            <td>{masuk.nilai}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <th>Arus Keluar</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        {laporanArusKas[bulan].arusKeluar.map(
                          (keluar, index) => (
                            <tr key={index}>
                              <td>{keluar.kategori}</td>
                              <td>{keluar.nilai}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </section>
                </div>
              ))}
            </div>
          )}

          {activeSection === "labaRugi" && (
            <div>
              {bulanList.map((bulan, index) => (
                <div key={index}>
                  <h2>Laporan Bulan {bulan}</h2>
                  <section className="laporan-laba-rugi">
                    <h3>Laporan Laba Rugi (Income Statement)</h3>
                    <table>
                      <thead>
                        <tr>
                          <th>Pendapatan</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        {laporanLabaRugi[bulan].pendapatan.map(
                          (pendapatan, index) => (
                            <tr key={index}>
                              <td>{pendapatan.sumber}</td>
                              <td>{pendapatan.nilai}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <th>Biaya</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        {laporanLabaRugi[bulan].pengeluaran.map(
                          (biaya, index) => (
                            <tr key={index}>
                              <td>{biaya.tujuan}</td>
                              <td>{biaya.nilai}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                    <div className="laba-rugi-total">
                      <h4>Total Laba Rugi</h4>
                      <p>Nilai Laba Rugi: {laporanLabaRugi[bulan].surplus}</p>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          )}

          {activeSection === "catatanLaporan" && (
            <div>
              {bulanList.map((bulan, index) => (
                <div key={index}>
                  <h2>Laporan Bulan {bulan}</h2>
                  <section className="catatan-laporan">
                    <p>{catatanLaporan}</p>
                  </section>
                </div>
              ))}
            </div>
          )}

          {activeSection === "laporanAnggaran" && (
            <div>
              <h2>Laporan Anggaran</h2>
              <button className="print-button" onClick={() => window.print()}>
                Cetak Laporan
              </button>
              <section className="laporan-anggaran">
                <table>
                  <thead>
                    <tr>
                      <th>Bulan</th>
                      <th>Anggaran Direncanakan</th>
                      <th>Anggaran Terealisasi</th>
                      <th>Detail Kategori</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(Data.laporanAnggaran).map((bulan, index) => (
                      <tr key={index}>
                        <td>{bulan}</td>
                        <td>
                          {Data.laporanAnggaran[bulan].anggaranDirencanakan}
                        </td>
                        <td>
                          {Data.laporanAnggaran[bulan].anggaranTerealisasi}
                        </td>
                        <td>
                          <DetailKategori
                            detailKategori={
                              Data.laporanAnggaran[bulan].detailKategori
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          )}

          {activeSection === "laporanAudit" && (
            <div className="audit-container">
              <h2 className="audit-title">Laporan Audit Bulanan</h2>
              {bulanList.map((bulan, index) => (
                <div key={index} className="audit-item">
                  <h3>Hasil Audit Bulan {bulan}</h3>
                  <ul className="audit-list">
                    <h4>Temuan:</h4>
                    {Data.laporanAudit[bulan].temuan.map((temuan, i) => (
                      <li key={i} className="audit-list-item">
                        {temuan}
                      </li>
                    ))}
                  </ul>
                  <ul className="audit-list">
                    <h4>Rekomendasi:</h4>
                    {Data.laporanAudit[bulan].rekomendasi.map(
                      (rekomendasi, i) => (
                        <li key={i} className="audit-list-item">
                          {rekomendasi}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Keuangan;
