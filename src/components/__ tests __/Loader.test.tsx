import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loader from "../Loader";

describe("Loader component", () => {
  test("Renders the Loader component", () => {
    render(<Loader />);
    const loaderComponent = screen.getByTestId("loaderComponent");
    expect(loaderComponent).toBeInTheDocument();
  });
});
