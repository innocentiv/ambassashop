import { currenciesQuery } from './currencies';
import { products, productsQuery } from './products';

export const resolvers = {
  Query: {
    ...currenciesQuery,
    ...productsQuery,
  },
  ...products,
};
