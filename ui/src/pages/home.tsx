import { FC } from "react";
import { useCurrencies } from "../app/apollo";
import { Header } from "../components/header/header";
import { ConnectedProductList } from "../components/productList/productList";
import { useCurrency } from "../components/selectCurrency/useCurrency";

interface Props {}

export const Home: FC<Props> = () => {
  const { data } = useCurrencies();
  const { currency, setCurrency } = useCurrency();
  return (
    <>
      <Header
        currencies={data?.currencies || []}
        currency={currency}
        setCurrency={setCurrency}
      />
      {currency && <ConnectedProductList currency={currency} />}
    </>
  );
};
