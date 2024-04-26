import "../../pages/Consola/Consola.css";
import { ModalFile1 } from "../ModalFile1/ModalFile1";
import ModalFile2 from "../ModalFile2/ModalFile2";

export const ConsoleInfo = ({ setShowModalFile1, setShowModalFile2 }) => {
  const [showModalFile1, setShowModalFile1] = useState(false);
  const [showModalFile2, setShowModalFile2] = useState(false);
  return (
    <div>
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
              <button onClick={() => setShowModalFile1(true)}>File 1</button>
              {showModalFile1 && (
                <ModalFile1 onClose={() => setShowModalFile1(false)} />
              )}
              <button onClick={() => setShowModalFile2(true)}>File 2</button>
              {showModalFile2 && (
                <ModalFile2 onClose={() => setShowModalFile2(false)} />
              )}
            </div>
          </div>
        </div>
        <div className="fileInfoRight">
          <p>
            <span>Welcome to QDOS version alpha.</span>
            <br />
            <br />
            Copyright 1968.
            <br />
            Malibu Artifactual Intelligence, Inc.
            <br />
            <br />
            <span className="flicker1">Select a file to continue...</span>
          </p>
        </div>
      </div>
    </div>
  );
};
