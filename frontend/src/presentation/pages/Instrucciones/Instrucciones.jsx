import "../Intro/Intro.css";
import { useNavigate } from "react-router-dom";

export const Instrucciones = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate("/instrucciones2");
  };
  return (
    <div className="mainInstructions">
      <div className="paper">
        <h1>Instrucciones de Juego</h1>
        <p>
          ¡Bienvenidos! Habéis sido seleccionados para una misión de vital
          importancia que definirá el futuro de la humanidad. Vuestro objetivo
          consistirá en superar una serie de retos donde la colaboración y el
          trabajo en equipo serán esenciales para el éxito:
        </p>
        <ul>
          <li>
            <span className="icon-section">§</span>
            <p>
              Sólo una persona del grupo compartirá pantalla durante la misión.
            </p>
          </li>
          <li>
            <span className="icon-section">§</span>
            <p>
              Aseguraos de tomar decisiones grupales y trabajar juntos para
              resolver cada desafío.
            </p>
          </li>
          <li>
            <span className="icon-section">§</span>
            <p>
              La misión tiene una duración de una hora. La organización del
              equipo es fundamental para alcanzar el objetivo.
            </p>
          </li>
          <li>
            <span className="icon-section">§</span>
            <p>
              Tras completar cada nivel, debéis anotar los datos relevantes que
              serán útiles para la presentación final.
            </p>
          </li>
        </ul>
        <div className="buttonContainer">
          <button onClick={handleStartButtonClick} className="nextButton">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
