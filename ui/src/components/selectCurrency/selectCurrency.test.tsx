import { SelectCurrency } from "./selectCurrency";
import { render } from "@testing-library/react";
import { currenciesMock } from "../../mocks/currencies";

describe("SelectCurrency", () => {
  test("renders SelectCurrency component", () => {
    render(
      <SelectCurrency
        currencies={currenciesMock}
        currency="USD"
        setCurrency={() => {}}
      />
    );
  });
});
