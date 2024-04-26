import React, { useState } from "react";
import "./Consola.css";
import FileModals from "../../components/ConsolaComponentes/FileModals";
import ButtonsModals from "../../components/ConsolaComponentes/ButtonsModals";
import WelcomeMessage from "../../components/ConsolaComponentes/WelcomeMessage";

export const Consola = () => {
  const [inputValue, setInputValue] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const [showModalFile1, setShowModalFile1] = useState(false);
  const [showModalFile2, setShowModalFile2] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);

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
      setConversationStarted(true);
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

  const handleConversation = (input) => {
    // Lógica para manejar la conversación con Eliza y Parry

    const conversation = [
      "Eliza: Gracias a mi alta capacidad de procesamiento lógico le puedo ayudar en la toma de decisiones.",
      "Parry: Demasiado lógico para mi gusto.",
      "Eliza: Mi software ha sido desarrollado por Joseph Weizenbaum para el MIT.",
      "Parry: Hasta Frank tenía conversaciones más interesantes que las tuyas.",
      "Eliza: Disculpe las interrupciones de Parry, es un bug de mi código fuente que aún queda por arreglar. ¿De qué quiere hablar hoy?",
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
            <ButtonsModals
              onFile1Click={() => setShowModalFile1(true)}
              onFile2Click={() => setShowModalFile2(true)}
            />
          </div>
        </div>
        <WelcomeMessage />
      </div>

      <FileModals
        showModalFile1={showModalFile1}
        showModalFile2={showModalFile2}
        onCloseModalFile1={() => setShowModalFile1(false)}
        onCloseModalFile2={() => setShowModalFile2(false)}
      />
      {/* Historial de mensajes */}
      <div className="consoleHistory">
        {messageHistory.map((message, index) => (
          <p
            key={index}
            className={`message ${message.type === "eliza" ? "elizaText" : message.type === "parry" ? "parryText" : "userMessage"}`}>
            {message.message}
          </p>
        ))}
      </div>
      {/* Entrada de usuario */}
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
