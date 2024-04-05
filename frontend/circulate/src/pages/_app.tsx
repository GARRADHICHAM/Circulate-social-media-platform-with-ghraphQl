import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
