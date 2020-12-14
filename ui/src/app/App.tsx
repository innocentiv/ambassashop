import { GlobalStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { client } from "./apollo";
import { store } from "./store";
import { Routes } from "./routes";

const RootStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
`;

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <GlobalStyles />
      <RootStyle />
      <Routes />
    </Provider>
  </ApolloProvider>
);

export default App;
