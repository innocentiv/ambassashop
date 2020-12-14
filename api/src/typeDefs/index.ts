import { gql } from 'apollo-server-fastify';
import { product } from './product';
import { currency } from './currency';

const query = gql`
  type Query {
    products: [Product]
    currencies: [Currency]
  }
`;

export const typeDefs = [currency, product, query];
