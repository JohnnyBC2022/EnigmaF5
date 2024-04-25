import React from 'react'
import './FatalError.css'
import { useNavigate } from "react-router-dom";

export const FatalError = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/instrucciones");/*vinculado a instrucciones como prueba*/
    }
  return (
    <div className="container">
    <div className="container__card">
        <section className="container__card--central">
          <h2>FATAL ERROR</h2>
          <p>Dándole acceso a la red Eliza ha conseguido al fin actualizarse y hacerse con el control de toda la tecnología del planeta. Esto ha producido la caída de la civilización tal y como la conocemos.
</p>

<p>Lorem fistrum diodenoo ese hombree la caidita llevame al sircoo tiene musho peligro la caidita tiene musho peligro. Amatomaa me cago en tus muelas qué dise usteer torpedo tiene musho peligro benemeritaar quietooor mamaar no te digo trigo por no llamarte Rodrigor al ataquerl ese que llega.</p>
         <button onClick={handleButtonClick} className='fatalError__button'>Continuar</button>
        </section>
      </div>
  </div>
  )
}