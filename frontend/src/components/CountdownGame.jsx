import Countdown from "react-countdown";
import "./CountdownGame.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const CountdownGame = () => {
  const [remainingTime, setRemainingTime] = useState(3600000);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) =>
        Math.max(0, prevRemainingTime - 1000)
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const location = useLocation();
if (location.pathname.toString() === "/finalquestions") return null;

  const Completionist = () => (
    <div className="countdownComplete">
      <h1>¡Vuestro tiempo se ha terminado!</h1>
      <p>
        No pasa nada si no habéis terminado el juego. Es el momento de preparar
        la presentación con vuestros logros.
      </p>
      <a href="/finalquestions">VER GUÍA</a>
    </div>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    const remainingHours = Math.floor(remainingTime / 3600000);
    const remainingMinutes = Math.floor((remainingTime % 3600000) / 60000);
    const remainingSeconds = Math.floor((remainingTime % 60000) / 1000);
    
    const isCompleted = remainingTime === 0;

    if (isCompleted) {
      return <Completionist />;
    } else {
      return (
        <span>
        {remainingHours}:{remainingMinutes}:{remainingSeconds}
        </span>
      );
    }
  };

  return (
    <div className="countdownContainer">
      <Countdown date={Date.now() + 3600000} renderer={renderer} />
    </div>
  );
};
