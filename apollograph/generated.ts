import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const ListChatsDocument = gql`
    query listChats {
  listChatRooms {
    items {
      id
      chatName
      messages {
        id
        content
        dateSent
        sender {
          id
          email
        }
      }
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
 *   },
 * });
 */
export function useListChatsQuery(baseOptions?: Apollo.QueryHookOptions<ListChatsQuery, ListChatsQueryVariables>) {
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
export const GetChatMessageDocument = gql`
    query getChatMessage($chatRoomId: Float!) {
  listChatMessages(chatRoomId: $chatRoomId) {
    items {
      id
      content
      dateSent
      sender {
        id
        email
      }
    }
  }
}
    `;

/**
 * __useGetChatMessageQuery__
 *
 * To run a query within a React component, call `useGetChatMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatMessageQuery({
 *   variables: {
 *      chatRoomId: // value for 'chatRoomId'
 *   },
 * });
 */
export function useGetChatMessageQuery(baseOptions: Apollo.QueryHookOptions<GetChatMessageQuery, GetChatMessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatMessageQuery, GetChatMessageQueryVariables>(GetChatMessageDocument, options);
      }
export function useGetChatMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatMessageQuery, GetChatMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatMessageQuery, GetChatMessageQueryVariables>(GetChatMessageDocument, options);
        }
export type GetChatMessageQueryHookResult = ReturnType<typeof useGetChatMessageQuery>;
export type GetChatMessageLazyQueryHookResult = ReturnType<typeof useGetChatMessageLazyQuery>;
export type GetChatMessageQueryResult = Apollo.QueryResult<GetChatMessageQuery, GetChatMessageQueryVariables>;
export const SendChatMessageDocument = gql`
    mutation SendChatMessage($input: CreateMessageDTO!) {
  sendChatMessage(chatData: $input) {
    id
    content
    dateSent
    sender {
      id
      email
    }
  }
}
    `;
export type SendChatMessageMutationFn = Apollo.MutationFunction<SendChatMessageMutation, SendChatMessageMutationVariables>;

/**
 * __useSendChatMessageMutation__
 *
 * To run a mutation, you first call `useSendChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendChatMessageMutation, { data, loading, error }] = useSendChatMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendChatMessageMutation, SendChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendChatMessageMutation, SendChatMessageMutationVariables>(SendChatMessageDocument, options);
      }
export type SendChatMessageMutationHookResult = ReturnType<typeof useSendChatMessageMutation>;
export type SendChatMessageMutationResult = Apollo.MutationResult<SendChatMessageMutation>;
export type SendChatMessageMutationOptions = Apollo.BaseMutationOptions<SendChatMessageMutation, SendChatMessageMutationVariables>;
export const NewMessageAddedDocument = gql`
    subscription NewMessageAdded($chatRoomId: Float!) {
  newMessageAdded(chatRoomId: $chatRoomId) {
    content
    dateSent
    id
    sender {
      email
      id
    }
  }
}
    `;

/**
 * __useNewMessageAddedSubscription__
 *
 * To run a query within a React component, call `useNewMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageAddedSubscription({
 *   variables: {
 *      chatRoomId: // value for 'chatRoomId'
 *   },
 * });
 */
export function useNewMessageAddedSubscription(baseOptions: Apollo.SubscriptionHookOptions<NewMessageAddedSubscription, NewMessageAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessageAddedSubscription, NewMessageAddedSubscriptionVariables>(NewMessageAddedDocument, options);
      }
export type NewMessageAddedSubscriptionHookResult = ReturnType<typeof useNewMessageAddedSubscription>;
export type NewMessageAddedSubscriptionResult = Apollo.SubscriptionResult<NewMessageAddedSubscription>;