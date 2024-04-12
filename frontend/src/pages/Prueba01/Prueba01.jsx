import "./Prueba01.css";
import Nazis1 from "../../assets/images/nazis1.png";
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
    <main className="prueba01-container">
      <section className="instructions-01">
        <span className="text-container">
          <p>ANTES DE EMPEZAR VAMOS A VALORAR VUESTRAS CAPACIDADES</p>
          <p>
            En 1941, durante la II Guerra Mundial, el ejercito nazi inventó una
            máquina codificadora para poder mandar mensajes entre las tropas y
            que nadie pudiera descifrarlos. En su momento se creyó que esa
            máquina era indescifrable.
          </p>
          <p>
            A través de 5 rotores, 10 cables en un clavijero y la combinación
            del alfabeto, cada 24h se creaban 159 trillones de posibilidades de
            codificación.
          </p>
          <p>¿Cómo se llamaba la máquina que realizaba estas operaciones?</p>
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
      <aside className="image-container">
        <img
          className="background-image"
          src={Nazis1}
          alt="Nazis haciendo cosas nazis"
        />
      </aside>
    </main>
  );
}
