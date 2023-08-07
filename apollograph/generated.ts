import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const ListChatsDocument = gql`
    query listChats($userId: Float!) {
  listChatRooms(userId: $userId) {
    count
    items {
      id
      chatName
      isDeleted
    }
  }
}
    `;

/**
 * __useListChatsQuery__
 *
 * To run a query within a React component, call `useListChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListChatsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useListChatsQuery(baseOptions: Apollo.QueryHookOptions<ListChatsQuery, ListChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListChatsQuery, ListChatsQueryVariables>(ListChatsDocument, options);
      }
export function useListChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListChatsQuery, ListChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListChatsQuery, ListChatsQueryVariables>(ListChatsDocument, options);
        }
export type ListChatsQueryHookResult = ReturnType<typeof useListChatsQuery>;
export type ListChatsLazyQueryHookResult = ReturnType<typeof useListChatsLazyQuery>;
export type ListChatsQueryResult = Apollo.QueryResult<ListChatsQuery, ListChatsQueryVariables>;