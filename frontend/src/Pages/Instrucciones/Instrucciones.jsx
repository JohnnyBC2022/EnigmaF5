import "./Instrucciones.css";
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
          ¡Bienvenidos! Han sido seleccionados para una misión crucial que
          determinará el destino del mundo. La tarea consiste en superar una
          serie de desafíos que pondrán a prueba vuestras habilidades. La
          cooperación y el trabajo en equipo son la clave para el éxito. Para
          superar esta misión, debéis tener en cuenta las siguientes
          instrucciones:
        </p>
        <ul>
          <li>
            <span className="icon-section">§</span>
            <p>
              Solo una persona del grupo compartirá pantalla durante la misión.
            </p>
          </li>
          <li>
            <span className="icon-section">§</span>
            <p>
              Aseguraos de tomar decisiones grupales y trabajar juntos para
              resolver cada desafío ya que cada decisión que toméis afectará al
              resultado de cada prueba.
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
              se deben incluir en la presentación final.
            </p>
          </li>
        </ul>
        <div className="buttonContainer">
          <button onClick={handleStartButtonClick} className="nextButton">Siguiente</button>
        </div>
      </div>
    </div>
  );
};
