import "./App.css";
import { Intro } from "./Pages/Intro";
import { AudioPlayer } from "./components/AudioPlayer";

function App() {
  return (
    <div>
      <Intro />
      <AudioPlayer />
    </div>
    /* <Router>
      <div>
        <AudioPlayer /> tendremos que hacer algo similar a esto con el audioplayer fuera del routes para que no se pare la reproducción
        <Routes>
          <Route path="/yoquese" element={<yoquese />} />
          <Route path="/losabráParry" element={<Parry />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router> */
  );
}

export default App;
