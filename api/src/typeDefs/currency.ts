import { gql } from 'apollo-server-fastify';

export interface Currency {
  name: string;
  symbol: string;
  code: string;
}

export const currency = gql`
  type Currency @cacheControl(maxAge: 3600) {
    name: String!
    symbol: String!
    code: String!
  }
`;
