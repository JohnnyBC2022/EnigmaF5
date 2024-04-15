import "./ModalFile1.css";

export const ModalFile1 = ({ closeModalFile1 }) => {
    return (
      <div className="modalOverlay1" onClick={closeModalFile1}>
        <div className="modalContent1" onClick={(e) => e.stopPropagation()}>
          <button className="closeModalButton1" onClick={closeModalFile1}>
            <p>X</p>
          </button>
        </div>
      </div>
    );
  };
  
