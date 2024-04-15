import "./Prueba02.css";
import Bombe from "../../assets/images/Bombe.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Prueba02() {
  const [keysPressed, setKeysPressed] = useState([]);

  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    alert("Respuesta incorrecta.\n\nREVISA EL MANUAL");
  };

  const handleKeyDown = (e) => {
    setKeysPressed((prevKeys) => [...prevKeys, e.key]);
    console.log(keysPressed)

    if (
      keysPressed.includes("Shift") &&
      keysPressed.includes("F") &&
      keysPressed.includes("%")
    ) {
      navigate("/consola");
    
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keysPressed]);

  return (
    <main className="prueba-container">
      <section className="instructions-02">
        <div className="info-container">
          <span className="text-container">
            <p>
              El MI6, Servicio de Inteligencia Británico, creó una base secreta
              en Bletchley Park, para encontrar la forma de descodificar los
              mensajes alemanes. Entre el grupo de expertos se encontraba Alan
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
                electrónico con el asunto "Manual Bombe" a enigma@somosf5.org,
                indicando en el cuerpo del correo el nombre de las personas
                participantes de vuestro grupo.
              </p>
            </span>
          </div>
        </div>
      </section>
      <aside className="image-container">
        <img className="background-image" src={Bombe} alt="La máquina Bombe" />
      </aside>
    </main>
  );
}
