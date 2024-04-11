import './Intro.css';
import { useNavigate } from 'react-router-dom';

export const Intro = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate('/instrucciones');
  };

  return (
    <div className='mainIntro'>
      <button onClick={handleStartButtonClick} className='startBtn'>Empezar</button>
    </div>
  );
}
