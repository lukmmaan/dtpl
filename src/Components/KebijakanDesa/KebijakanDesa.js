import React, { useState } from "react";
import "./KebijakanDesa.css";
import { KebijakanDesaData } from "./KebijakanDesaData";
import { Orang2 } from "../../Assets/Image";

const KebijakanDesa = () => {
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
    if (startIndex + itemsPerPage < KebijakanDesaData.length) {
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
        className="card-carousel-container-card"
        style={{
          borderTop: "4px solid grey",
          //   borderBottom: "4px solid grey",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        {KebijakanDesaData.slice(startIndex, startIndex + itemsPerPage).map(
          (item, index) => (
            <div
              key={item.id}
              className={`carousel-card-item ${
                enlargedCardIndex === index ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="carousel-content">
                <h3 className="card-title">{item.nama_kebijakan}</h3>
                <img
                  src={Orang2}
                  alt={item.nama_program}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <p className="card-text">{item.deskripsi}</p>
              </div>
            </div>
          )
        )}
        <div>
          <h2 style={{ color: "grey" }}>Kebijakan Desa</h2>
        </div>
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
          disabled={startIndex + itemsPerPage >= KebijakanDesaData.length}
        ></button>
      </div>
    </div>
  );
};

export default KebijakanDesa;
