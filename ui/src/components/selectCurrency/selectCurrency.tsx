import { VFC } from "react";
import tw from "twin.macro";
import { Currency } from "../../types/data";

export const Select = tw.select`block  mt-0 px-0.5 border-0 focus:outline-none`;

export interface SelectCurrencyProps {
  currencies: Currency[];
  currency: string | undefined;
  setCurrency: (currency: string) => void;
}

export const SelectCurrency: VFC<SelectCurrencyProps> = ({
  currencies,
  currency,
  setCurrency,
}) => {
  return (
    <Select
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {currencies.map((currency) => (
        <option value={currency.code} title={currency.name} key={currency.code}>
          {currency.code}
        </option>
      ))}
    </Select>
  );
};
