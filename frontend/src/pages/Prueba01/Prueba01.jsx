import "./Prueba01.css";
import Nazis1 from "../../assets/images/nazis1.png";

export default function Prueba01() {
  return (
    <main className="prueba01-container">
      <section className="instructions-01">
        <span className="text-container">
          <p>ANTES DE EMPEZAR VAMOS A VALORAR VUESTRAS CAPACIDADES</p>
          <p>
            En 1941, durante la II Guerra Mundial, el ejercito nazi inventó una
            máquina codificadora para poder mandar mensajes entre las tropas y
            que nadie pudiera descifrarlos. En su momento se creyó que esa
            máquina era indescifrable.
          </p>
          <p>
            A través de 5 rotores, 10 cables en un clavijero y la combinación
            del alfabeto, cada 24h se creaban 159 trillones de posibilidades de
            codificación.
          </p>
          <p>¿Cómo se llamaba la máquina que realizaba estas operaciones?</p>
        </span>
        <form className="answer-form">
          <div className="input-container">
            <label htmlFor="answer">Introducid vuestra respuesta:</label>
            <input type="text" name="answer" id="answer" />
          </div>
          <button className="send-button">ENVIAR</button>
        </form>
      </section>
      <aside className="image-container">
        <img
          className="background-image"
          src={Nazis1}
          alt="Nazis haciendo cosas nazis"
        />
      </aside>
    </main>
  );
}
