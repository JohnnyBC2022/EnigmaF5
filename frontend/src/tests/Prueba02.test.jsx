import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Prueba02 from "../pages/Prueba02/Prueba02";
import { test } from "vitest";

test("Pressing Control + 5 redirects to consola", () => {
  const { container } = render(
    <Router>
      <Prueba02 />
    </Router>
  );

  fireEvent.keyDown(container, { key: "Control" });
  fireEvent.keyDown(container, { key: "5" });

  expect(window.location.pathname).toBe("/consola");
});
