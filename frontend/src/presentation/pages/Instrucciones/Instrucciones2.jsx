import "../Intro/Intro.css";
import { useNavigate } from "react-router-dom";

export const Instrucciones2 = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate("/prueba01");
  };

  return (
    <div className="mainInstrucciones2">
      <div className="paper">
        <div className="paperContain">
          <p>
            Sois un grupo de expertos en computación a los que os han convocado
            para participar en un programa secreto.
          </p>
          <p>
            <span>
              Es el momento de que os presentéis antes de empezar a trabajar
              juntos.
            </span>
          </p>
          <p>
            Una vez hechas las presentaciones estaréis preparados para empezar.
          </p>
        </div>
        <button onClick={handleStartButtonClick} className="startBtn">
          ¿Preparados?
        </button>
      </div>
    </div>
  );
};
