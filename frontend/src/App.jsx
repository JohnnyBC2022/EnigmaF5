import { Intro } from "./Pages/Intro";
import { AudioPlayer } from "./components/AudioPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Instrucciones} from "./Pages/Instrucciones"

function App() {
  return (
    <Router>
      <div>
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
