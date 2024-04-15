import "./Prueba02.css";
import Bombe from "../../assets/images/Bombe.png";

export default function Prueba02() {
  return (
    <main className="prueba-container">
      <section className="instructions-02">
        <div className="info-container">
          <span className="text-container">
            <p>
              El MI6, Servicio de Inteligencia Británico, creó una base secreta
              en Bletchley Park, para encontrar la forma de descodificar los
              mensajes alemanes. Entre el grupo de expertos se encontraba Alan
              Turing, el creador de la máquina Bombe, que pudo descodificar los
              mensajes.
            </p>
            <p className="underscore">
              ¿Ayudas a Turing a conectarla? Selecciona la combinación de
              colores correcta.
            </p>
          </span>
          <form action=""></form>
          <div className="hint-container">
            <div className="square">i</div>
            <span className="hint-text">
              <p>
                Para recibir las instrucciones de la máquina escribid un correo
                electrónico con el asunto "Manual Bombe" a enigma@somosf5.org,
                indicando en el cuerpo del correo el nombre de las personas
                participantes de vuestro grupo.
              </p>
            </span>
          </div>
        </div>
      </section>
      <aside className="image-container">
        <img className="background-image" src={Bombe} alt="La máquina Bombe" />
      </aside>
    </main>
  );
}
