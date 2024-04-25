import "./Prueba01.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Prueba01() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const runElizaError = () => {
    navigate("/eliza-error");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const password = inputValue.toLowerCase();

    if (password === "enigma") {
      runElizaError();
    } else {
      setError(true);
    }
  };

  return (
    <main className="prueba-container">
      <section className="instructions-01">
        <span className="text-container">
          <p>ANTES DE EMPEZAR VAMOS A VALORAR VUESTRAS CAPACIDADES</p>
          <p>
            En 1918 un ingeniero alemán patentó una máquina electromecánica
            capaz de cifrar mensajes mediante un algoritmo de sustitución y así
            establecer una comunicación segura entre personas que podían estar a
            miles de kilómetros de distancia.
          </p>
          <p>
            Poco más grande que una caja de zapatos, en su momento se creyó que
            esta máquina era indescifrable.
          </p>
          <p>
            A través de 5 rotores, 10 cables en un clavijero y la combinación
            del alfabeto, cada 24h se creaban 159 trillones de posibilidades de
            codificación.
          </p>
          <p className="underscore">
            ¿Cómo se llamaba la máquina que realizaba estas operaciones?
          </p>
        </span>
        <form className="answer-form">
          <div className="input-container">
            <label htmlFor="answer">Introducid vuestra respuesta:</label>
            <input
              type="text"
              name="answer"
              id="answer"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <button className="send-button" onClick={handleSend}>
            ENVIAR
          </button>
          {error && <h6 className="error-message">* Respuesta incorrecta</h6>}
        </form>
      </section>
      <aside className="image-container"></aside>
    </main>
  );
}
