import React from "react";
import "./ModalBeforeAfter.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import antes from "../../assets/images/ELIZA_password-confidential.jpg";
import despues from "../../assets/images/ELIZA_password.jpg";

export default function ModalBeforeAfter({ onClose }) {
  const FIRST_IMAGE = {
    imageUrl: despues,
  };
  const SECOND_IMAGE = {
    imageUrl: antes,
  };

  return (
    <section className="modalOverlay1" onClick={onClose}>
      <div className="modalContent1" onClick={(e) => e.stopPropagation()}>
        <button className="closeModalButton1" onClick={onClose}>
          <p>X</p>
        </button>
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />
      </div>
    </section>
  );
}
