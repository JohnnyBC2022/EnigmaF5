import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ModalFile2 from "../pages/ModalFile2/ModalFile2";

test("If password is not correct you recieve an error message ", () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <ModalFile2 />
    </Router>
  );

  const input = getByLabelText("Password:");

  fireEvent.change(input, { target: { value: "weizenbaum" } });

  fireEvent.click(getByText("[Enviar]", {selector: "button"}));

  expect(getByText("* Contraseña incorrecta")).toBeInTheDocument();
});



