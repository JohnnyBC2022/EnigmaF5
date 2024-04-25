import React, { useState } from "react";
import "./Consola.css";
import { ModalFile1 } from "../../components/ModalFile1/ModalFile1";
import ModalFile2 from "../../components/ModalFile2/ModalFile2";

export const Consola = () => {
  const [inputValue, setInputValue] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const [showModalFile1, setShowModalFile1] = useState(false);
  const [showModalFile2, setShowModalFile2] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();

    // Almacenar el mensaje del usuario en el historial
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "user", message: inputValue },
    ]);

    // Lógica para manejar el comando ingresado
    handleCommand(inputValue);

    // Limpiar el valor del input
    setInputValue("");
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setInputValue("");
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleCommand = (command) => {
    // Lógica para manejar los comandos ingresados
    if (command === "eliza mad-slip:run") {
      // Simulación de respuesta de Eliza
      const elizaMessage = (
        <span className="elizaText">
          BIENVENIDO A<br />
          <br />
          <div>
            EEEEEE
            LL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IIII&nbsp;ZZZZZZZ&nbsp;&nbsp;AAAAA
            <br />
            EE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ZZ&nbsp;&nbsp;AA&nbsp;&nbsp;&nbsp;AA
            <br />
            EEEEEE&nbsp;LL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II&nbsp;&nbsp;&nbsp;&nbsp;ZZZ&nbsp;&nbsp;&nbsp;AAAAAAA
            <br />
            EE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II&nbsp;&nbsp;&nbsp;ZZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AA&nbsp;&nbsp;&nbsp;AA
            <br />
            EEEEEE LLLLLL IIII ZZZZZZZ AA&nbsp;&nbsp;&nbsp;AA
            <br />
          </div>
          <br />
          Copyright (C) 1964, 1967, MIT.
          <br />
          All rights reserved.
          <br />
          <br />
          <span className="elizaText">ELIZA</span>: Hola, mi nombre es Eliza.
          Soy un novedoso programa de inteligencia artificial. Puedo responder a
          las entradas del usuario con preguntas y respuestas. ¿Cómo está usted
          hoy?
        </span>
      );
      // Almacenar el mensaje de Eliza en el historial
      setMessageHistory((prevHistory) => [
        ...prevHistory,
        { type: "eliza", message: elizaMessage },
      ]);
    } else {
      // Simulación de mensaje de error para comando incorrecto
      const errorMessage =
        "Comando incorrecto. Introduzca el comando correcto para ejecutar Eliza.";
      // Almacenar el mensaje de Parry en el historial
      setMessageHistory((prevHistory) => [
        ...prevHistory,
        { type: "parry", message: errorMessage },
      ]);
    }
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
      <div className="consoleHistory">
        {/* Historial de mensajes */}
        {messageHistory.map((message, index) => (
          <p key={index} className={message.type}>
            {message.message}
          </p>
        ))}
      </div>
      <form onSubmit={handleInputSubmit} className="consoleInputContainer">
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
      </form>
    </div>
  );
};
