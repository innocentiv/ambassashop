import { ProductCard } from "./productCard";
import { productsMocks } from "../../mocks/products";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("renders Button component", () => {
    render(<ProductCard product={productsMocks[0]} />);
    const name = screen.getByText(productsMocks[0].name);
    const price = screen.getByText(productsMocks[0].price.formattedPrice);

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
