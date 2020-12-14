import { Context } from '../dataSources';
import { convertPrice, formatPrice } from '../libs/prices';
import { Price, Product } from '../typeDefs/product';

export const productsQuery = {
  products: async (
    _source: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): Promise<Product<number>[]> => {
    const productsList = await dataSources.productsAPI.getProducts();
    return productsList.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.priceUSD,
      photos: p.photos,
    }));
  },
};

interface PriceArgs {
  currencyCode: string;
}

export const products = {
  Product: {
    price: async (
      product: Product<number>,
      { currencyCode }: PriceArgs,
      { dataSources }: Context,
    ): Promise<Price> => {
      const rates = await dataSources.ratesAPI.getRates();
      const value = convertPrice(rates, product.price, 'USD', currencyCode);

      return {
        value,
        formattedPrice: formatPrice(value, currencyCode),
      };
    },
  },
};
