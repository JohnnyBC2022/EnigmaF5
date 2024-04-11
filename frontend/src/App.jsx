import { Intro } from "./pages/Intro/Intro";
import { AudioPlayer } from "./components/AudioPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Instrucciones} from "./Pages/Instrucciones"
import Prueba01 from "./pages/Prueba01/Prueba01";

function App() {
  return (
    <Router>
      <div>
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
          <Route path="/prueba01" element={<Prueba01 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
