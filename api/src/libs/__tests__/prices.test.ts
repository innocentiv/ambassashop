import { convertPrice, currencyFromCode, formatPrice } from '../prices';

const rates = {
  EUR: 1,
  USD: 2,
  UYU: 50,
};

const usDollar = {
  name: 'US Dollar',
  symbol: '$',
  symbolNative: '$',
  decimalDigits: 2,
  rounding: 0,
  code: 'USD',
  namePlural: 'US dollars',
  countries: [
    'AS',
    'BQ',
    'EC',
    'FM',
    'GU',
    'IO',
    'MH',
    'MP',
    'PR',
    'PW',
    'SV',
    'TC',
    'TL',
    'UM',
    'US',
    'VG',
    'VI',
  ],
};
const canadianDollar = {
  name: 'Canadian Dollar',
  symbol: 'CA$',
  symbolNative: '$',
  decimalDigits: 2,
  rounding: 0,
  code: 'CAD',
  namePlural: 'Canadian dollars',
  countries: ['CA'],
};
const euro = {
  name: 'Euro',
  symbol: '€',
  symbolNative: '€',
  decimalDigits: 2,
  rounding: 0,
  code: 'EUR',
  namePlural: 'euros',
  countries: [
    'AD',
    'AT',
    'AX',
    'BE',
    'BL',
    'CY',
    'DE',
    'EE',
    'ES',
    'FI',
    'FR',
    'GF',
    'GP',
    'GR',
    'IE',
    'IT',
    'LT',
    'LU',
    'LV',
    'MC',
    'ME',
    'MF',
    'MQ',
    'MT',
    'NL',
    'PM',
    'PT',
    'RE',
    'SI',
    'SK',
    'SM',
    'TF',
    'VA',
    'XK',
    'YT',
  ],
};

const currencies = [usDollar, canadianDollar, euro];

describe('prices utility functions test', () => {
  test('convert prices', () => {
    expect(convertPrice(rates, 100, 'USD', 'UYU')).toBe((100 / 2) * 50);
  });

  test('use 1 as rate if missing prices', () => {
    expect(convertPrice(rates, 100, 'TEST', 'TEST2')).toBe(100);
  });

  test('return correct currency from code', () => {
    expect(currencyFromCode(currencies, 'EUR')).toBe(euro);
    expect(currencyFromCode(currencies, 'CAD')).toBe(canadianDollar);
  });

  test('format the price correctly', () => {
    expect(formatPrice(11, 'EUR')).toBe('€11.00');
    expect(formatPrice(12.256, 'CAD')).toBe('CA$12.26');
  });
});
