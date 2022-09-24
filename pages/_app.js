import "../styles/globals.css";
import MainLayout from "../ui-features/main";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  // uri: "https://evening-cliffs-78604.herokuapp.com/graphql/",
  uri: "http://127.0.0.1:8000/graphql/",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `jwt ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    createUploadLink({ uri: "http://127.0.0.1:8000/graphql/" }),
  ]), //  authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

export default MyApp;
