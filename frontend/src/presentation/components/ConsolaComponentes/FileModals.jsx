// FileModals.js
import React from "react";
import { ModalFile1 } from "../../components/ModalFile1/ModalFile1";
import ModalFile2 from "../../components/ModalFile2/ModalFile2";
import "../../pages/Consola/Consola.css";

const FileModals = ({
  showModalFile1,
  showModalFile2,
  onCloseModalFile1,
  onCloseModalFile2,
}) => {
  return (
    <>
      {showModalFile1 && <ModalFile1 onClose={onCloseModalFile1} />}
      {showModalFile2 && <ModalFile2 onClose={onCloseModalFile2} />}
    </>
  );
};

export default FileModals;
