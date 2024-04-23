import "./Consola.css";
import { ModalFile1 } from "../ModalFile1/ModalFile1";
import  ModalFile2  from "../ModalFile2/ModalFile2";
import { useState } from "react";


export const Consola = () => {
  const [showModalFile1, setShowModalFile1] = useState(false);
  const [showModalFile2, setShowModalFile2] = useState(false);

  const handleModalFile1Click = () => {
    setShowModalFile1(true);
  };
  

  const closeModalFile1 = () => {
    setShowModalFile1(false);
  };
  const handleModalFile2Click = () => {
    setShowModalFile2(true);
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
              <button onClick={handleModalFile2Click}>File 2</button>
              {showModalFile2 && <ModalFile2 onClose={() => setShowModalFile2(false)} />}
            </div>
          </div>
        </div>
        <div className="fileInfoRight">
          <p>
            Welcome to MS-DOS version 9 beta. Copyright 2024.
            <p>Malibu Artifactual Intelligence, Inc.</p>
          </p>
          <p className="flicker1">Select a file to continue...</p>
        </div>
      </div>
      <p className="consoleC">
        c:\&gt;...<span className="flicker2">|</span>
      </p>
      {showModalFile1 && (
        <ModalFile1 closeModal={closeModalFile1}/>
      )}
    </div>
  );
};
