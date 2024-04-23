import "./Intro.css";
import { useNavigate } from "react-router-dom";
import {AudioPlayer} from "../../components/AudioPlayer"
import { useState } from "react";

export const Intro = () => {
  const navigate = useNavigate();
  const [soundPlayed, setSoundPlayed] = useState(false);

  const handleStartButtonClick = () => {
    setSoundPlayed(true);
    navigate("/instrucciones");
  };
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
      {soundPlayed && <AudioPlayer />}
    </div>
  );
};
