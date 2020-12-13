import S from 'fluent-schema';

export interface Currency {
  name: string;
  symbol: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
  countries: string[];
}

export type Currencies = Currency[];

export const currencySchema = S.object()
  .prop('name', S.string().required())
  .prop('symbol', S.string().required())
  .prop('symbolNative', S.string().required())
  .prop('decimalDigits', S.number().required())
  .prop('rounding', S.number().required())
  .prop('code', S.string().required())
  .prop('namePlural', S.string().required())
  .prop('countries', S.array().required().items(S.string()));

export const currenciesSchema = S.array().items(currencySchema);

export const getCurrenciesSchema = {
  response: {
    200: currenciesSchema.valueOf(),
  },
};
