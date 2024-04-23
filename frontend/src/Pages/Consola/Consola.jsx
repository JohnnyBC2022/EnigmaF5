import { useState } from "react";
import "./Consola.css";
import { ModalFile1 } from "../ModalFile1/ModalFile1";

export const Consola = () => {
  const [showModalFile1, setShowModalFile1] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleModalFile1Click = () => {
    setShowModalFile1(true);
  };

  const closeModalFile1 = () => {
    setShowModalFile1(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setInputValue("");
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="consoleMain">
      <p className="textPath">Path: C:\</p>
      <div className="fileInfo">
        <div className="fileInfoLeft">
          <p className="textC">C:\</p>
          <div className="files">
            <div className="filesLeft">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
            <div className="filesRight">
              <button onClick={handleModalFile1Click}>File 1</button>
              <button>File 2</button>
            </div>
          </div>
        </div>
        <div className="fileInfoRight">
          <p>
            Welcome to QDOS version alpha.
            <p>Copyright 1968.</p>
            <p>Malibu Artifactual Intelligence, Inc.</p>
          </p>
          <p className="flicker1">Select a file to continue...</p>
        </div>
      </div>
      <div className="consoleInputContainer">
        <label className="consoleLabel">c:\&gt;</label>
        <input
          className={`consoleInput ${isInputFocused ? "" : "flicker2"}`}
          placeholder="Type the command here..."
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      {showModalFile1 && <ModalFile1 closeModal={closeModalFile1} />}
    </div>
  );
};
