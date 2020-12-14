import { Button } from "./button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("renders Button component", () => {
    const label = "Text";
    render(<Button>{label}</Button>);
    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();
  });
});
