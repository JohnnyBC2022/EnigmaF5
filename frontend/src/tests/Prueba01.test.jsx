import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Prueba01 from "../pages/Prueba01/Prueba01";

test("If password is not correct you recieve an error message ", () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <Prueba01 />
    </Router>
  );

  const input = getByLabelText("Introducid vuestra respuesta:");

  fireEvent.change(input, { target: { value: "mentira" } });

  fireEvent.click(getByText("ENVIAR"));

  expect(getByText("* Respuesta incorrecta")).toBeInTheDocument();
});

test("If password is correct you get send to next page ", () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <Prueba01 />
    </Router>
  );

  const input = getByLabelText("Introducid vuestra respuesta:");

  fireEvent.change(input, { target: { value: "enigma" } });

  fireEvent.click(getByText("ENVIAR"));

  expect(window.location.pathname).toBe("/eliza-error");
});
