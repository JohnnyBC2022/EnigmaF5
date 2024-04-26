import "./ModalLastPage.css";
import LastPage from "../../assets/images/Eliza-Delete.jpg"

export default function ModalLastPage() {

  return (
    <section className="modalOverlay1">
    <div className="modalContent1">
      <button className="closeModalButton1">
        <p>X</p>
      </button>
      <div className="last-page-image-container">
        <img src={LastPage} alt="artículo olson" />
      </div>
    </div>
  </section>
  )
}