import { RESTDataSource } from 'apollo-datasource-rest';

export interface APIRates {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}

export type Rates = Record<string, number>;

export class RatesAPI extends RESTDataSource {
  apiKey: string;

  constructor(baseURL: string, apiKey: string) {
    super();
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  async getRates(): Promise<Rates> {
    const result = await this.get<APIRates>(
      `latest?access_key=${this.apiKey}`,
      undefined,
      {
        cacheOptions: { ttl: 3600 },
      },
    );
    return {
      ...result.rates,
      [result.base]: 1,
    };
  }
}
