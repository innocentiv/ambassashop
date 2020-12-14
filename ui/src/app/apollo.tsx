import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { getConfig } from "../libs/config";
import { Currency, Product } from "../types/data";

const { graphqlUrl } = getConfig();

export const client = new ApolloClient({
  uri: graphqlUrl,
  cache: new InMemoryCache(),
});

export const PRODUCTS = gql`
  query getProducts($currencyCode: String!) {
    products {
      name
      price(currencyCode: $currencyCode) {
        formattedPrice
      }
      photos
      id
    }
  }
`;

export const useProducts = (currencyCode: string = "USD") =>
  useQuery<{ products: Product[] }>(PRODUCTS, { variables: { currencyCode } });

export const CURRENCIES = gql`
  query getCurrencies {
    currencies {
      code
      name
    }
  }
`;

export const useCurrencies = () =>
  useQuery<{ currencies: Currency[] }>(CURRENCIES);
