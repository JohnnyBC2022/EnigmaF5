
    import "./HumanityWins.css";
    import { useNavigate } from "react-router-dom";


export  const HumanityWins = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/instrucciones");/*vinculado a instrucciones como prueba*/
    }
  return (
    <div className="humanityWins__container">
      <div className="humanityWins__container--card">
          <section className="humanityWins__container--cardCentral">
            <h2>Humanity Wins</h2>
            <p>Desconectando a Eliza habéis conseguido evitar que se haga con el control de toda la tecnología del planeta.¡Bien hecho!</p>

<p>Lorem fistrum diodenoo ese hombree la caidita llevame al sircoo tiene musho peligro la caidita tiene musho peligro. Amatomaa me cago en tus muelas qué dise usteer torpedo tiene musho peligro benemeritaar quietooor mamaar no te digo trigo por no llamarte Rodrigor al ataquerl ese que llega.</p>
           <button onClick={handleButtonClick} className="humanityWins__button">Continuar</button>
          </section>
        </div>
    </div>
  )
}



