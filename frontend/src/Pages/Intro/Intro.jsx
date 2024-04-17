import "./Intro.css";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate("/instrucciones");
  };
/* To do: change sound */
  return (
    <div className="mainIntro">
      <div className="mainPaper">
        <div className="paperContain">
          <img src="./logoEnigma.svg" alt="" />
          <button onClick={handleStartButtonClick} className="startBtn">
            empezar
          </button>
        </div>
      </div>
    </div>
  );
};
