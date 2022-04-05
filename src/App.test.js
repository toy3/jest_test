import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import Checkbox from "./components/Checkbox";

test("Selecting the checkbox should toggle its value", () => {
  const { getByTestId } = render(<Checkbox />);
  const checkbox = getByTestId("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});
