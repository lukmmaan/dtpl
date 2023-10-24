import React, { useState } from "react";
import "./ProgramDesa.css";
import { ProgramDesaData } from "./ProgramDesaData";

const ProgramDesa = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [enlargedCardIndex, setEnlargedCardIndex] = useState(null);
  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  const handleCardClick = (index) => {
    if (enlargedCardIndex === index) {
      setEnlargedCardIndex(null);
    } else {
      setEnlargedCardIndex(index);
    }
  };

  const handleNextClick = () => {
    if (startIndex + itemsPerPage < ProgramDesaData.length) {
      setEnlargedCardIndex(null);
      setStartIndex(startIndex + itemsPerPage); // Perbarui startIndex untuk halaman berikutnya
    }
  };

  const handlePreviousClick = () => {
    if (startIndex - itemsPerPage >= 0) {
      setEnlargedCardIndex(null);
      setStartIndex(startIndex - itemsPerPage); // Perbarui startIndex untuk halaman sebelumnya
    }
  };

  return (
    <div>
      <div
        className="card-carousel-container"
        style={{
          borderTop: "4px solid grey",
          borderBottom: "4px solid grey",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        <div>
          <h2 style={{ color: "grey" }}>Program Desa</h2>
        </div>
        {ProgramDesaData.slice(startIndex, startIndex + itemsPerPage).map(
          (item, index) => (
            <div
              key={item.id}
              className={`carousel-card ${
                enlargedCardIndex === index ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="carousel-content">
                <h3 className="card-title">{item.nama_program}</h3>
                <p className="card-text">{item.deskripsi}</p>
                <p className="card-text">Lokasi: {item.lokasi}</p>
                <p className="card-text">
                  Tanggal Pelaksanaan: {item.tanggal_pelaksanaan}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="pagination" style={{ marginBottom: "30px" }}>
        <button
          onClick={handlePreviousClick}
          disabled={startIndex === 0}
          style={{ width: "60px", height: "5px" }}
        ></button>
        <button
          onClick={handleNextClick}
          style={{ width: "60px", height: "5px" }}
          disabled={startIndex + itemsPerPage >= ProgramDesaData.length}
        ></button>
      </div>
    </div>
  );
};

export default ProgramDesa;
