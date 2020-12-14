import { GlobalStyles } from "twin.macro";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { client } from "./apollo";
import { store } from "./store";
import { Routes } from "./routes";

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  </ApolloProvider>
);

export default App;
