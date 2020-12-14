import { RESTDataSource } from 'apollo-datasource-rest';

export interface APICurrency {
  name: string;
  symbol: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
  countries: string[];
}

export class CurrenciesAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async getCurrencies(): Promise<APICurrency[]> {
    return this.get('currencies', undefined, {
      cacheOptions: { ttl: 3600 },
    });
  }
}
