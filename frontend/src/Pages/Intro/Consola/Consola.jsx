import "./Consola.css";

export const Consola = () => {
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
              <a href="">
                <p>File 1</p>
              </a>{" "}
              {/* cambiar a link */}
              <a href="">
                <p>File 2</p>
              </a>
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
      <p className="consoleC">c:\&gt;...<span className="flicker2">|</span></p>
    </div>
  );
};
