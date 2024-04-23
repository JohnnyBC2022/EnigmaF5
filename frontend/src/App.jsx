import { Intro } from "./pages/Intro/Intro";
import { AudioPlayer } from "./components/AudioPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Instrucciones } from "./pages/Instrucciones/Instrucciones";
import { Instrucciones2 } from "./pages/Instrucciones/Instrucciones2";
import Prueba01 from "./pages/Prueba01/Prueba01";
import ElizaError from "./pages/ElizaError/ElizaError";
import "./App.css";
import { Consola } from "./pages/Consola/Consola";
import Prueba02 from "./pages/Prueba02/Prueba02";
import { HumanityWins } from "./pages/HumanityWins/HumanityWins";
import { FatalError } from "./pages/FatalError/FatalError";
import { FinalQuestions } from "./pages/FinalQuestions/FinalQuestions";



function App() {
  return (
    <Router>
      <div>
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
          <Route path="/instrucciones2" element={<Instrucciones2 />} />
          <Route path="/prueba01" element={<Prueba01 />} />
          <Route path="/eliza-error" element={<ElizaError />} />
          <Route path="/consola" element={<Consola />} />
          <Route path="/prueba02" element={ <Prueba02 />} />
          <Route path="/humanityWins" element={<HumanityWins/>} />
          <Route path="/fatalError" element={<FatalError/>} />
          <Route path="/finalquestions" element={<FinalQuestions/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
