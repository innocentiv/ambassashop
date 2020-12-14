import { APICurrency } from '../dataSources/currencyAPI';
import { Rates } from '../dataSources/ratesAPI';

export const convertPrice = (
  rates: Rates,
  value: number,
  currentCurrencyCode: string,
  targetCurrencyCode: string,
): number => {
  const currentRate = rates[currentCurrencyCode] || 1;
  const targetRate = rates[targetCurrencyCode] || 1;
  return (value / currentRate) * targetRate;
};

export const currencyFromCode = (
  currencies: APICurrency[],
  currencyCode: string,
): APICurrency | undefined => {
  return currencies.find((c) => c.code === currencyCode);
};

export const formatPrice = (value: number, currencyCode: string): string => {
  // ambassashop is multicurrency, but only in en-US
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(value);
};
