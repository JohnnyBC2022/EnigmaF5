
import { Intro } from "./pages/Intro/Intro";
import { AudioPlayer } from "./components/AudioPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Instrucciones } from "./pages/Instrucciones/Instrucciones";
import Prueba01 from "./pages/Prueba01/Prueba01";
import ElizaError from "./pages/ElizaError/ElizaError";
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
          <Route path="/prueba01" element={<Prueba01 />} />
          <Route path="/eliza-error" element={<ElizaError />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
