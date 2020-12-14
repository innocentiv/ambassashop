import { ProductList } from "./productList";
import { render } from "@testing-library/react";
import { productsMocks } from "../../mocks/products";

describe("Layout", () => {
  test("renders Layout component", () => {
    render(<ProductList products={productsMocks} />);
  });
});
