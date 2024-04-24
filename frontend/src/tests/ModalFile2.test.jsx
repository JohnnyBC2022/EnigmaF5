import { render, fireEvent } from "@testing-library/react";
import ModalFile2 from "../pages/ModalFile2/ModalFile2";

test("If password is not correct you recieve an error message ", () => {
  const { getByLabelText, getByText } = render(<ModalFile2 />);

  const input = getByLabelText("Password:");

  fireEvent.change(input, { target: { value: "estupida" } });

  fireEvent.click(getByText("[Enviar]", { selector: "button" }));

  expect(getByText("* Contraseña incorrecta")).toBeInTheDocument();
});

test("If password is correct you see binary message ", () => {
  const { getByLabelText, getByText } = render(<ModalFile2 />);

  const input = getByLabelText("Password:");

  fireEvent.change(input, { target: { value: "weizenbaum" } });

  fireEvent.click(getByText("[Enviar]", { selector: "button" }));

  expect(
    getByText(
      /01110011 01101111 01101100 01100101 00100000 01100011 01101111 01100100 01100101 00101000 00110111 00111000 00111001 00101101 00110001 01011000 01000001 00101001/
    )
  ).toBeInTheDocument();
});
