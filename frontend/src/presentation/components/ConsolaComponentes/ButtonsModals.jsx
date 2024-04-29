import React from "react";
import "../../pages/Consola/Consola.css";

const ButtonsModals = ({ onFile1Click, onFile2Click }) => {
  return (
    <div className="filesRight">
      <button onClick={onFile1Click}>File 1</button>
      <button onClick={onFile2Click}>File 2</button>
    </div>
  );
};

export default ButtonsModals;
