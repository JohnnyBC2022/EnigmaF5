import React from "react";
import "./ModalLastPage.css";
import LastPage from "../../assets/images/Eliza-Delete.jpg";

export default function ModalLastPage({ onClose }) {
  return (
    <section className="modalOverlay1" onClick={onClose}>
      <div className="modalContent1" onClick={(e) => e.stopPropagation()}>
        <button className="closeModalButton1" onClick={onClose}>
          <p>X</p>
        </button>
        <div className="last-page-image-container">
          <img src={LastPage} alt="artículo olson" />
        </div>
      </div>
    </section>
  );
}
