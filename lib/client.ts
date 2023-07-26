// lib/client.js
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import {
//   NextSSRInMemoryCache,
//   NextSSRApolloClient,
// } from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
console.log(process.env.NEXT_PUBLIC_GRAPHQL_URL)

// export const { getClient } = registerApolloClient(() => {
//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link: new HttpLink({
//       uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
//     }),
//   });
// });

//register apollo client
export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    }),
  });
});