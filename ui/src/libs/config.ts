export const getSafeEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing ENV variable: ${key}`);
  }
  return value;
};

export const getConfig = () => {
  return {
    graphqlUrl: getSafeEnv("REACT_APP_GRAPHQL_URL"),
    currencyServiceUrl: getSafeEnv("REACT_APP_CURRENCY_SERVICE"),
  };
};
