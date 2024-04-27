import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "../../presentation/pages/Intro/Intro";
import { AudioPlayer } from "../../presentation/components/AudioPlayer/AudioPlayer";
import { CountdownGame } from "../../presentation/components/CountdownGame/CountdownGame";
import { Instrucciones } from "../../presentation/pages/Instrucciones/Instrucciones";
import { Instrucciones2 } from "../../presentation/pages/Instrucciones/Instrucciones2";
import Prueba01 from "../../presentation/pages/Prueba01/Prueba01";
import ElizaError from "../../presentation/pages/ElizaError/ElizaError";
import "../../App.css";
import { Consola } from "../../presentation/pages/Consola/Consola";
import Prueba02 from "../../presentation/pages/Prueba02/Prueba02";
import { HumanityWins } from "../../presentation/pages/HumanityWins/HumanityWins";
import { FatalError } from "../../presentation/pages/FatalError/FatalError";
import { FinalQuestions } from "../../presentation/pages/FinalQuestions/FinalQuestions";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <AudioPlayer />
        {<CountdownGame />}
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
          <Route path="/finalquestions" element={<FinalQuestions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
