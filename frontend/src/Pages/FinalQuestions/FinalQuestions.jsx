import "../Instrucciones/Instrucciones.css";

export const FinalQuestions = () => {
  return (
    <div className="mainInstructions">
      <div className="paper">
        <h1>Ha llegado el momento de que preparéis vuestra presentación</h1>
        <p>
          Utilizad las siguientes preguntas como guía. Recordad que tenéis 10
          minutos para exponer la información y todas las personas del equipo
          deben participar. ¡Ánimo!
        </p>
        <ol style={{ listStyleType: 'decimal' }}>
          <li>
            
            Las aportaciones de Alan Turing a la computación van más allá de la máquina Bombe. De hecho, diseñó un experimento que lleva su nombre: el “Test de Turing”. ¿Sabéis en qué consiste y para qué se utiliza?
           
          </li>
          <li>
            <p>
            ¿Quién era Joseph Weizenbaum? ¿Qué creéis que ha aportado a la computación?
            </p>
          </li>
          <li>
            <p>
            En una de las pruebas habéis tenido que traducir un texto conformado por unos y ceros ¿Cómo se llama este tipo de codificación? ¿En qué consiste?
            </p>
          </li>
          <li>
            <p>
            Durante el juego habéis visto una conversación ficcionada entre Eliza y Parry. Buscad información sobre ellos y explicad qué eran en realidad.
            </p>
          </li>
          <li>
            <p>
            En la prueba final habéis tenido que tomar una decisión: desconectar a Eliza o a Parry. Poned en común por qué y cómo habéis tomado esa decisión.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};
