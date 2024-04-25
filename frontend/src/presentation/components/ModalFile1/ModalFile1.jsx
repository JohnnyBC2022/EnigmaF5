import "./ModalFile1.css";
import file1Img from "../../assets/images/file1Img.jpg";
import { ImageMagnifier } from "../ImageMagnifier/ImageMagnifier";

export const ModalFile1 = ({ onClose }) => {
  return (
    <div className="modalOverlay1" onClick={onClose}>
      <div className="modalContent1" onClick={(e) => e.stopPropagation()}>
        <button className="closeModalButton1" onClick={onClose}>
          <p>X</p>
        </button>
        <div>
          <ImageMagnifier imageUrl={file1Img} />
        </div>
      </div>
    </div>
  );
};
