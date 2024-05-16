import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Error from "../Error";

describe("Error component", () => {
  test("Renders the error component", () => {
    render(<Error />);
    const errorComponent = screen.getByTestId("errorComponent");
    expect(errorComponent).toBeInTheDocument();
  });
});
