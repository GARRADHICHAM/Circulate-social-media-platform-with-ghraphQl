import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache()
});


export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}> <Component {...pageProps} />;</ApolloProvider>
}
