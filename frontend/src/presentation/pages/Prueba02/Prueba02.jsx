import "./Prueba02.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Prueba02() {
  const [controlPressed, setControlPressed] = useState(false);
  const [fivePressed, setFivePressed] = useState(false);

  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    alert("Respuesta incorrecta.\n\nREVISA EL MANUAL");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Control") {
        setControlPressed(true);
        event.preventDefault();
      }
      if (event.key === "5") {
        setFivePressed(true);
        event.preventDefault();
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Control") {
        setControlPressed(false);
      }
      if (event.key === "5") {
        setFivePressed(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (controlPressed && fivePressed) {
      navigate("/consola");
    }
  }, [controlPressed, fivePressed, navigate]);

  return (
    <main className="prueba-container">
      <section className="instructions-02">
        <div className="info-container">
          <span className="text-container">
            <p>
              El MI6, Servicio de Inteligencia Británico, creó una base secreta
              en Bletchley Park, para encontrar la forma de descodificar los
              mensajes enviados a través de enigma. Entre el grupo de expertos se encontraba Alan
              Turing, el creador de la máquina Bombe, que pudo descodificar los
              mensajes.
            </p>
            <p className="underscore">
              ¿Ayudas a Turing a conectarla? Selecciona la combinación de
              colores correcta.
            </p>
          </span>
          <form className="bombe-form">
            <section>
              <div className="background-yellow">
                <input type="radio" name="color" id="yellow" />
              </div>
              <div className="background-blue">
                <input type="radio" name="color" id="blue" />
              </div>
              <div className="background-green">
                <input type="radio" name="color" id="green" />
              </div>
              <div className="background-red">
                <input type="radio" name="color" id="red" />
              </div>
            </section>
            <button className="send-button" onClick={handleSend}>
              ENVIAR
            </button>
          </form>
          <div className="hint-container">
            <div className="square">i</div>
            <span className="hint-text">
              <p>
                Para recibir las instrucciones de la máquina escribid un correo
                electrónico con el asunto "Manual Bombe" a <a href="mailto:enigmaf5.aspirantes@gmail.com" style={{"color":"#993f2a", "textDecoration":"underline"}}>enigmaf5.aspirantes@gmail.com</a>,
                indicando en el cuerpo del correo el nombre de las personas
                participantes de vuestro grupo. Revisad la carpeta de spam si pasados unos minutos no recibís el acceso al manual.
              </p>
            </span>
          </div>
        </div>
      </section>
      <aside className="image-container-bombe"></aside>
    </main>
  );
}
