import { Html, Head, Main, NextScript } from "next/document";
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache()
});

export default function Document() {
  return (
    <ApolloProvider client={client}>
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </ApolloProvider >
  );
}
