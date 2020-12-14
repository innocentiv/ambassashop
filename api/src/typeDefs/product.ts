import { gql } from 'apollo-server-fastify';

export interface Price {
  value: number;
  formattedPrice: string;
}

export interface Product<P = Price> {
  id: string;
  name: string;
  price: P;
  photos: string[];
}

export const product = gql`
  type Price {
    value: Float!
    formattedPrice: String!
  }

  type Product @cacheControl(maxAge: 60) {
    id: String!
    name: String!
    price(currencyCode: String = USD): Price!
    photos: [String!]!
  }
`;
