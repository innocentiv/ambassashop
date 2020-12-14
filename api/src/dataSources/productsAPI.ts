import { RESTDataSource } from 'apollo-datasource-rest';

export interface APIProduct {
  id: string;
  name: string;
  priceUSD: number;
  photos: string[];
}

export class ProductsAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async getProducts(): Promise<APIProduct[]> {
    return this.get('products', undefined, {
      cacheOptions: { ttl: 60 },
    });
  }
}
