import { useState } from "react";
import "./ModalFile2.css";

const ModalFile2 = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    const password = inputValue.toLowerCase();

    if (password === "weizenbaum") { 
      setIsPasswordCorrect(true);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className="modalFile2">
      <div className="modalFile2__container">
        <button
          className="modalFile2__container--buttonClose"
          onClick={onClose}
        >
          <p>x</p>
        </button>
        {!isPasswordCorrect ? (
          <div className="modalFile2__container--form">
            <div className="modalFile2__container--formBorder">
              <p>Información clasificada</p>
              <p>Introduzca contraseña para continuar:</p>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  value={inputValue}
                  onChange={handlePasswordChange}
                  id="password"
                />
              </label>
              <button
                className="modalFile2__container--buttonInput"
                onClick={handleSubmitPassword}
              >
                [Enviar]
              </button>
              {passwordError && <h6>* Contraseña incorrecta</h6>}
            </div>
          </div>
        ) : (
          <div className="modalFile2__binary">
            <p className="modalFile2__binary--text">
              01000001 01110010 01100011 01101000 01101001 01110110 01101111
              00100000 00110100 00110011 00101111 00100000 01001001 01101110
              01100110 01101111 01110010 01101101 01100101 00100000 01001101
              01101011 00101101 01010101 01101100 01110100 01110010 01100001
              00100000 01010000 01110010 01101111 01101010 01100101 01100011
              01110100 01010100 01110010 01100001 01101110 01110011 01100011
              01110010 01101001 01110000 01100011 01101001 11000011 10110011
              01101110 00100000 01110100 01100101 01101100 01100101 01100111
              01110010 01100001 01101101 01100001 00100000 01101001 01101110
              01110100 01100101 01110010 01100011 01100101 01110000 01110100
              01100001 01100100 01101111 00100000 01100100 01100101 00100000
              01000001 01101100 01100001 01101110 00100000 01010100 01110101
              01110010 01101001 01101110 01100111 01000110 01100101 01100011
              01101000 01100001 00111010 00100000 00110010 00110101 00101111
              00110000 00110110 00101111 00110001 00111001 00110101 00110100
              00100010 01010100 01100101 01101101 01101111 00100000 01110000
              01101111 01110010 00100000 01101101 01101001 00100000 01110110
              01101001 01100100 01100001 00101110 00100000 01010110 01100001
              01101110 00100000 01100001 00100000 01101000 01100001 01100011
              01100101 01110010 01101101 01100101 00100000 01101100 01101111
              00100000 01101101 01101001 01110011 01101101 01101111 00100000
              01110001 01110101 01100101 00100000 01100001 00100000 01000110
              01110010 01100001 01101110 01101011 00100000 01001111 01101100
              01110011 01101111 01101110 00101110 00100000 01000101 01101100
              01101001 01111010 01100001 00100000 01100101 01110011 01110100
              01100001 00100000 01100101 01101110 00100000 01110000 01100101
              01101100 01101001 01100111 01110010 01101111 00101110 00100000
              01100011 01101111 01101110
              <span>
                <a
                  className="modalForm2__binary--link"
                  href="https://www.traductorbinario.com/"
                  target="blank"
                ></a>
              </span>
              01110011 01101111 01101100 01100101 00100000 01100011 01101111
              01100100 01100101 00101000 00110111 00111000 00111001 00101101
              00110001 01011000 01000001 00101001
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalFile2;
