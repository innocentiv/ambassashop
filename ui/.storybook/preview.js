import { GlobalStyles } from "twin.macro";
import { MemoryRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import { client } from "../src/app/apollo";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <ApolloProvider client={client}>
          <GlobalStyles />
          <Provider store={store}>
            <MemoryRouter>
              <Story />
            </MemoryRouter>
          </Provider>
        </ApolloProvider>
      </>
    );
  },
];
