"use client";
import {ApolloClient, ApolloLink, HttpLink, SuspenseCache, from } from "@apollo/client";
import {ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink} from "@apollo/experimental-nextjs-app-support/ssr";
import { getToken } from "next-auth/jwt";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { useSession } from "next-auth/react";

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL 
// const accessToken = getToken({ req, secret: process.env.JWT_SECRET });


function makeSuspenseCache() {
  return new SuspenseCache
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  
  function makeClient() {
    const httpLink = new HttpLink({
      uri: GRAPHQL_ENDPOINT,
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}`,
        ),
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const authLink = setContext((_, context) => {
    console.log("Access Token", context)
    const { accessToken } = context;

    // const lstoken = typeof window !== 'undefined'? localStorage.getItem('token') : "";
    
    return {
      headers: {
        ...context.headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });
  

  // console.log(session)
  return new NextSSRApolloClient({
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
            errorLink, authLink.concat(httpLink) ])
        : from([errorLink, authLink.concat(httpLink) ]),
  });
}

  
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
