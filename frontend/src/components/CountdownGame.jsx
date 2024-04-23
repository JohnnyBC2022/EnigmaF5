import Countdown from "react-countdown";
import "./CountdownGame.css";

export const CountdownGame = () => {
  // Random component
  const Completionist = () => (
    <div className="countdownComplete">
      <h1>¡Vuestro tiempo se ha terminado!</h1>
      <p>
        No pasa nada si no habéis terminado el juego. Es el momento de preparar la
        presentación con vuestros logros.
      </p>
      <a href="/finalQuestion">VER GUÍA</a>
    </div>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="countdownContainer">        
        <Countdown date={Date.now() +360000} renderer={renderer} />
    </div>
  );
};
