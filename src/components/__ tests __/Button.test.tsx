import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("Renders the Button component", () => {
    render(<Button className={""}>Click me</Button>);
    const buttonComponent = screen.getByTestId("buttonComponent");
    expect(buttonComponent).toBeInTheDocument();
  });
});
