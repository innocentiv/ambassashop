import { FastifyInstance } from 'fastify';
import { CurrenciesAPI } from './currencyAPI';
import { ProductsAPI } from './productsAPI';
import { RatesAPI } from './ratesAPI';

export interface DataSources {
  currencyAPI: CurrenciesAPI;
  productsAPI: ProductsAPI;
  ratesAPI: RatesAPI;
}

export interface Context {
  dataSources: DataSources;
}

export const getDataSources = (
  config: FastifyInstance['config'],
) => (): DataSources => {
  const {
    RATES_API_URL,
    RATES_API_KEY,
    PRODUCTS_API_URL,
    CURRENCY_API_URL,
  } = config;

  return {
    currencyAPI: new CurrenciesAPI(CURRENCY_API_URL),
    productsAPI: new ProductsAPI(PRODUCTS_API_URL),
    ratesAPI: new RatesAPI(RATES_API_URL, RATES_API_KEY),
  };
};
