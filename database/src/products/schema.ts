import S from 'fluent-schema';

export interface Product {
  id: string;
  name: string;
  priceUSD: number;
  photos: string[];
}

export type Products = Product[];

export const productSchema = S.object()
  .prop('id', S.string().required())
  .prop('name', S.string().required())
  .prop('priceUSD', S.number().required())
  .prop('photos', S.array().required().items(S.string()));

export const productsSchema = S.array().items(productSchema);

export const getProductsSchema = {
  response: {
    200: productsSchema.valueOf(),
  },
};
