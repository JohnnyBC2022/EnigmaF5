import "./ModalBeforeAfter.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import antes from "../../assets/images/ELIZA_password-confidential.jpg";
import despues from "../../assets/images/ELIZA_password.jpg";

export default function ModalBeforeAfter() {
  const FIRST_IMAGE = {
    imageUrl: despues,
  };
  const SECOND_IMAGE = {
    imageUrl: antes,
  };
  
  return (
    <section className="modalOverlay1">
      <div className="modalContent1">
        <button className="closeModalButton1">
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
