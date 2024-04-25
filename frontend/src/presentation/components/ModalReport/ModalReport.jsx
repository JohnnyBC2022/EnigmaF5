import "./ModalReport.css";
import Report from "../../assets/images/weizembaumLetter.jpg"

export default function ModalReport() {

  return (
    <section className="modalOverlay1">
    <div className="modalContent1">
      <button className="closeModalButton1">
        <p>X</p>
      </button>
      <div className="report-image-container">
        <img src={Report} alt="artículo olson" />
      </div>
    </div>
  </section>
  )
}