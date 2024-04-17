import "./ModalFile1.css";
import ReactImageMagnify from "react-image-magnify";
import file1Img from "../../assets/images/file1Img.jpg";
import { ImageMagnifier } from "../../components/ImageMagnifier";

export const ModalFile1 = ({ closeModal }) => {
  return (
    <div className="modalOverlay1" onClick={closeModal}>
      <div className="modalContent1" onClick={(e) => e.stopPropagation()}>
        <button className="closeModalButton1" onClick={closeModal}>
          <p>X</p>
        </button>
        <div>
          <ImageMagnifier imageUrl={file1Img} />
        </div>
      </div>
    </div>
  );
};
