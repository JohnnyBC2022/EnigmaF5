// WelcomeMessage.js
import React from "react";
import "../../pages/Consola/Consola.css"

const WelcomeMessage = () => {
  return (
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
  );
};

export default WelcomeMessage;
