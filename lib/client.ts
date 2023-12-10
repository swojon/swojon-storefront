// lib/client.js
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
console.log(process.env.NEXT_PUBLIC_GRAPHQL_URL)

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
})

const wsLink = new GraphQLWsLink(createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_WS_URL || "",
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

//register apollo client
export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    ssrMode: typeof window === undefined,
    cache: new InMemoryCache(),
    link: splitLink ,
    credentials: 'include'
  });
});