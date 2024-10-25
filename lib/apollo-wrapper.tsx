"use client";
import {ApolloClient, ApolloLink, HttpLink, SuspenseCache, from, split } from "@apollo/client";
import {ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink} from "@apollo/experimental-nextjs-app-support/ssr";
import { getToken } from "next-auth/jwt";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { useSession } from "next-auth/react";
import { request } from "http";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from "@apollo/client/utilities";
import { getCookie } from "cookies-next";


const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL 
const GRAPHQL_WS_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_WS_URL

function makeSuspenseCache() {
  return new SuspenseCache
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const {data:session} = useSession();
  function makeClient() {
    const httpLink = new HttpLink({
      uri: GRAPHQL_ENDPOINT,
      credentials: 'include'
    });
  
    const wsLink = new GraphQLWsLink(createClient({
      url:  GRAPHQL_WS_ENDPOINT || "",
      on: {
        connected: (socket) => (console.log("Connected to ws")),
      },
      connectionParams: () => {
        // ${getCookie('authorization')
        console.log("passing headers",`Bearer ${session?.user?.token}`)
        return {
          headers: {
            // authorization: `Bearer ${cookies().get('authorization')?.value}`,
            Authorization: `Bearer ${session?.user?.token}`,
            // cookies: typeof window !== 'undefined'? document.cookie : "",
          },
        };
      },
      
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

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}`,
          ),
        );
    
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });


    const authLink = setContext((_, context, ) => {
      console.log("Access Token", context)
      // const { accessToken } = context;
      console.log("authoriztion", getCookie('authorization'))
      // const lstoken = typeof window !== 'undefined'? localStorage.getItem('token') : "";
      // console.log("context headers", context.headers.cookie)
      return {
        headers: {
          ...context.headers,
          // authorization: `Bearer ${cookies().get('authorization')?.value}`,
          Authorization: `Bearer ${session?.user?.token}`,
          // cookies: typeof window !== 'undefined'? document.cookie : "",
        },
      };
    });


    // console.log(session)
    return new NextSSRApolloClient({
      credentials: 'include',
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? from([
              // in a SSR environment, if you use multipart features like
              // @defer, you need to decide how to handle these.
              // This strips all interfaces with a `@defer` directive from your queries.
              new SSRMultipartLink({
                // stripDefer: true,
              }),
              errorLink, authLink.concat(splitLink) ])
          : from([errorLink, authLink.concat(splitLink) ]),
    });
}

  
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
