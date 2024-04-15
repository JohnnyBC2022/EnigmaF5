import "./ModalFile1.css";

export const ModalFile1 = ({ closeModal }) => {
    return (
      <div className="modalOverlay" onClick={closeModal}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <button className="closeModalButton" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    );
  };
  
