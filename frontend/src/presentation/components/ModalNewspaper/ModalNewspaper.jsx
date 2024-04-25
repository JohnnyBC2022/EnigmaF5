import "./ModalNewspaper.css";
import Newspaper from "../../assets/images/olsonNewspaper.png";

export default function ModalNewspaper() {
  return (
    <section className="modalOverlay1">
      <div className="modalContent1">
        <button className="closeModalButton1">
          <p>X</p>
        </button>
        <div className="newspaper-image-container">
          <img src={Newspaper} alt="artículo olson" />
        </div>
      </div>
    </section>
  );
}
