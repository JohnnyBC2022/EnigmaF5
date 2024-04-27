import "./ModalNewspaper.css";
import Newspaper from "../../assets/images/olsonNewspaper.png";

export default function ModalNewspaper({ onClose }) {
  return (
    <section className="modalOverlay1" onClick={onClose}>
      <div className="modalContent1" onClick={(e) => e.stopPropagation()}>
        <button className="closeModalButton1" onClick={onClose}>
          <p>X</p>
        </button>
        <div className="newspaper-image-container">
          <img src={Newspaper} alt="artículo olson" />
        </div>
      </div>
    </section>
  );
}
