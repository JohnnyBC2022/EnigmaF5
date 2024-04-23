import Countdown from "react-countdown";
import "./CountdownGame.css";

export const CountdownGame = () => {
  // Random component
  const Completionist = () => (
    <div className="countdown_complete">
      <h1>¡Vuestro tiempo se ha terminado!</h1>
      <p>
        No importa hasta donde hayáis llegado. Es el momento de preparar la
        presentación con vuestros logros.
      </p>
      <a href="/faltaError">VER GUÍA</a>
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
    <>
      <div className="countdown">
        <Countdown date={Date.now() + 3600000} renderer={renderer} />
      </div>
    </>
  );
};
