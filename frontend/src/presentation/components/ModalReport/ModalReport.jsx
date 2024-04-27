import React from "react";
import "./ModalReport.css";
import Report from "../../assets/images/weizembaumLetter.jpg";

export default function ModalReport({ onClose }) {
  const handleCloseModal = () => {
    onClose(); // Llamada a la función de cierre del modal
  };

  return (
    <div className="modalOverlay1" onClick={onClose}>
      <div className="modalContent1" onClick={(e) => e.stopPropagation()}>
        <button className="closeModalButton1" onClick={handleCloseModal}>
          <p>X</p>
        </button>
        <div className="report-image-container">
          <img src={Report} alt="artículo olson" />
        </div>
      </div>
    </div>
  );
}
