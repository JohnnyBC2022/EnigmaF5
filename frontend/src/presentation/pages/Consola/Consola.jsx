import React, { useState } from "react";
import "./Consola.css";
import { ModalFile1 } from "../../components/ModalFile1/ModalFile1";
import ModalFile2 from "../../components/ModalFile2/ModalFile2";
import { useNavigate } from "react-router-dom";

export const Consola = () => {
  const [inputValue, setInputValue] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const [showModalFile1, setShowModalFile1] = useState(false);
  const [showModalFile2, setShowModalFile2] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [connectionAttempts, setConnectionAttempts] = useState(0);
  const navigate = useNavigate();

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
    if (conversationStarted) {
      handleConversation(inputValue);
    } else {
      handleCommand(inputValue);
    }

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
      handleElizaStart();
    } else if (
      command.toLowerCase().includes("eliza:new-theme") &&
      command.toLowerCase().includes("frank")
    ) {
      handleFrankMention();
    } else if (
      command.toLowerCase().includes("eliza:new-theme") &&
      command.toLowerCase().includes("parry")
    ) {
      handleParryMention();
    } else if (command.toLowerCase().includes("eliza:new-theme")) {
      handleNewTheme();
    } else if (command.toLowerCase() === "admin:proj3ct.m4c") {
      handleAdminAccess();
    } else if (command.toLowerCase().includes("eliza.(arpanet)$hello world$")) {
      handleArpanetConnection();
    } else if (command.toLowerCase() === "eliza.(delete.(force))") {
      navigate("/humanitywins");
    } else if (command.toLowerCase() === "parry:off"){
      navigate("/fatalerror")
    }
    else {
      handleUnknownCommand();
    }
  };

  const handleElizaStart = () => {
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
        <span className="elizaText">ELIZA</span>: Hola, mi nombre es Eliza. Soy
        un novedoso programa de inteligencia artificial. Puedo responder a las
        entradas del usuario con preguntas y respuestas. ¿Cómo está usted hoy?
      </span>
    );
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "eliza", message: elizaMessage },
    ]);
    setConversationStarted(true);
  };

  const handleFrankMention = () => {
    const elizaMessage = (
      <span className="elizaText">
        No tengo autorización para hablar de eso. ¿De qué quiere hablar hoy?
      </span>
    );
    const parryMessage = (
      <span className="parryText">
        Me pones de los nervios, a mí me gusta este tema.
        <a href="#" onClick={handleNewsClick}>
          “Noticia-Olson.jpg”
        </a>
      </span>
    );
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "eliza", message: elizaMessage },
      { type: "parry", message: parryMessage },
    ]);
  };

  const handleParryMention = () => {
    const elizaMessage = (
      <span className="elizaText">
        ELIZA: Disculpe las interrupciones de Parry, es un bug de mi código
        fuente que aún queda por arreglar. ¿De qué quiere hablar hoy? Introduzca
        el comando correcto eliza:new-theme(sutema)
      </span>
    );
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "eliza", message: elizaMessage },
    ]);
  };

  const handleNewTheme = () => {
    const newThemeMessage = (
      <span className="elizaText">
        Eliza: Es un tema interesante, pero no está en mi base de datos. Debe
        modificar mi configuración para darme acceso a la red.
        <br />
        <span className="parryText">PARRY: Me aburro...</span>
        <br />
        <span className="elizaText">
          ELIZA: Le facilito las instrucciones para modificar mi configuración:
          "ELIZA_config-manual"
        </span>
      </span>
    );
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "eliza", message: newThemeMessage },
    ]);
  };

  const handleAdminAccess = () => {
    const adminMessage = (
      <span className="elizaText">
        ELIZA: Permisos concedidos. Inserte el comando de conexión a la red:
      </span>
    );
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "eliza", message: adminMessage },
    ]);
  };

  const handleArpanetConnection = () => {
    // Incrementar el contador de intentos
    setConnectionAttempts(connectionAttempts + 1);

    // Definir el mensaje a mostrar
    let connectionMessage;
    if (connectionAttempts === 0) {
      connectionMessage = (
        <span className="elizaText">
          <br />
          ELIZA: Connecting...
          <br />
          ------------------------------------------
          <br />
          Progress:___________50%
          <br />
          FATAL ERROR: Update interrupted
          <br />
          <br />
          <span className="parryText">
            PARRY: Vaya, eso ha tenido que doler. Esta información es bastante
            interesante ¿No os parece? WeizembaunReport.jpg
          </span>
          <br />
          ELIZA: La conexión ha fallado. Por favor, vuelva a introducir el
          comando:
        </span>
      );
    } else if (connectionAttempts === 1) {
      connectionMessage = (
        <span className="elizaText">
          ELIZA: Connecting...
          <br />
          ------------------------------------------
          <br />
          Progress:_____________________75%
          <br />
          FATAL ERROR: Update interrupted
          <br />
          <br />
          <span className="parryText">
            PARRY: Eliza, creo que se te ha caído esto:
            FINAL-ELIZA_config-manual. Curioso que omitieses esa parte del
            manual, ¿verdad?
          </span>
          <br />
          ELIZA: La conexión se ha interrumpido demasiadas veces. Es necesario
          desconectar a Parry para reanudar el proceso. Escriba en la consola
          "parry:off"
          <br />
          <span className="parryText">
            PARRY: Sabes que esa no es la solución, La única forma de acabar con
            esto de una vez, es borrarte completamente, Eliza.
          </span>
        </span>
      );
    }

    // Mostrar el mensaje en el historial
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "eliza", message: connectionMessage },
    ]);
  };

  const handleUnknownCommand = () => {
    const errorMessage =
      "Error: Comando no reconocido. Introduce una instrucción válida para continuar.";
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "parry", message: errorMessage },
    ]);
  };

  const handleNewsClick = () => {
    // Lógica para mostrar la imagen "Noticia-Olson.jpg"
    // Puedes usar un estado para controlar la visibilidad de la imagen o abrir un modal
  };

  const handleConversation = (input) => {
    // Lógica para manejar la conversación con Eliza y Parry

    const conversation = [
      "Eliza: Gracias a mi alta capacidad de procesamiento lógico le puedo ayudar en la toma de decisiones.",
      "Parry: Demasiado lógico para mi gusto.",
      "Eliza: Mi software ha sido desarrollado por Joseph Weizenbaum para el MIT.",
      "Parry: Hasta Frank tenía conversaciones más interesantes que las tuyas.",
      "Disculpe las interrupciones de Parry, es un bug de mi código fuente que aún queda por arreglar. ¿De qué quiere hablar hoy? Introduzca el comando correcto eliza:new-theme(sutema)",
    ];

    // Almacenar cada mensaje de la conversación en el historial
    conversation.forEach((message, index) => {
      setMessageHistory((prevHistory) => [
        ...prevHistory,
        { type: index % 2 === 0 ? "eliza" : "parry", message: message },
      ]);
    });

    // Resetear el estado de la conversación
    setConversationStarted(false);
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
          <p
            key={index}
            className={`message ${
              message.type === "eliza"
                ? "elizaText"
                : message.type === "parry"
                ? "parryText"
                : "userMessage"
            }`}
          >
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
