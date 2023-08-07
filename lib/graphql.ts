
// import {createClient} from 'next-urql';
import { cacheExchange, createClient, fetchExchange, gql } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';


  
const url = process.env.NEXT_PUBLIC_GRAPHQL_URL || ""
export const client = createClient({
    url: url,
    exchanges: [
        cacheExchange, fetchExchange
    ],
    fetchOptions: {
        credentials: 'include'
    }
})

export const makeClient = () => {
    return client
};
