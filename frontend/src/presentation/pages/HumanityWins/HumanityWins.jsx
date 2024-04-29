import "./HumanityWins.css";
import { useNavigate } from "react-router-dom";

export const HumanityWins = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/finalquestions");
  };
  return (
    <div className="humanityWins__container">
      <div className="humanityWins__container--card">
        <section className="humanityWins__container--cardCentral">
          <h2>Humanity Wins</h2>
          <p>
            Desconectando a Eliza habéis conseguido evitar que se haga con el
            control de toda la tecnología del planeta.¡Bien hecho!
          </p>
          <button onClick={handleButtonClick} className="humanityWins__button">
            Continuar
          </button>
        </section>
      </div>
    </div>
  );
};
