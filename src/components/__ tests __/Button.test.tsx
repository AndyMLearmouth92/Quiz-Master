import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("Renders the Button component", () => {
    render(<Button className={""}>Click me</Button>);
    const buttonComponent = screen.getByTestId("buttonComponent");
    expect(buttonComponent).toBeInTheDocument();
  });
  test("Tests click functionality", () => {
    const onClickMock = jest.fn();
    render(
      <Button className={""} onClick={onClickMock}>
        Click me
      </Button>
    );
    const buttonComponent = screen.getByTestId("buttonComponent");
    fireEvent.click(buttonComponent);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
