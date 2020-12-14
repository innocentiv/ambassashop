import { Context } from '../dataSources';
import { Currency } from '../typeDefs/currency';

export const currenciesQuery = {
  currencies: async (
    _source: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): Promise<Currency[]> => {
    const currencyList = await dataSources.currencyAPI.getCurrencies();
    return currencyList.map((c) => ({
      name: c.name,
      symbol: c.symbol,
      code: c.code,
    }));
  },
};
