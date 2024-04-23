import { useState } from "react";
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Intro } from "./pages/Intro/Intro";
import { AudioPlayer } from "./components/AudioPlayer";
import Countdown from "react-countdown";
import { Instrucciones } from "./pages/Instrucciones/Instrucciones";
import { Instrucciones2 } from "./pages/Instrucciones/Instrucciones2";
import Prueba01 from "./pages/Prueba01/Prueba01";
import ElizaError from "./pages/ElizaError/ElizaError";
import "./App.css";
import { Consola } from "./pages/Consola/Consola";
import Prueba02 from "./pages/Prueba02/Prueba02";
import { HumanityWins } from "./pages/HumanityWins/HumanityWins";
import { FatalError } from "./pages/FatalError/FatalError";

function App() {
  return (
    <Router>
      <div>
        <AudioPlayer />
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  const handleCountdown = () => {
    navigate("/fatalError");
    setCountdownCompleted(true);
  }

  return (
    <>
      {!countdownCompleted &&
      <Countdown date={Date.now() + 10000} onComplete={handleCountdown} />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
        <Route path="/instrucciones2" element={<Instrucciones2 />} />
        <Route path="/prueba01" element={<Prueba01 />} />
        <Route path="/eliza-error" element={<ElizaError />} />
        <Route path="/consola" element={<Consola />} />
        <Route path="/prueba02" element={<Prueba02 />} />
        <Route path="/humanityWins" element={<HumanityWins />} />
        <Route path="/fatalError" element={<FatalError />} />
      </Routes>
    </>
  );
}

export default App;
