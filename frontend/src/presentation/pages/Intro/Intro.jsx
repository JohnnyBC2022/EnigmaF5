import "./Intro.css";
import { useNavigate } from "react-router-dom";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
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
      <div className="paper">
        <img src="./logoEnigma.svg" alt="Enigma Logo" className="logo" />
        <button onClick={handleStartButtonClick} className="startBtn">
          empezar
        </button>
      </div>
      {soundPlayed && <AudioPlayer />}
    </div>
  );
};
