import { FC } from "react";
import tw from "twin.macro";
import { useCurrencies } from "../app/apollo";
import { Header } from "../components/header/header";
import { ConnectedProductList } from "../components/productList/productList";
import { useCurrency } from "../components/selectCurrency/useCurrency";

interface HomeProps {}

const Layout = tw.div`w-full h-full bg-gray-500 overflow-y-auto`;

export const Home: FC<HomeProps> = () => {
  const { data } = useCurrencies();
  const { currency, setCurrency } = useCurrency();
  return (
    <Layout>
      <Header
        currencies={data?.currencies || []}
        currency={currency}
        setCurrency={setCurrency}
      />
      {currency && <ConnectedProductList currency={currency} />}
    </Layout>
  );
};
