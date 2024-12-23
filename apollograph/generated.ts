import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;

export const ListCategoriesDocument = gql`
    query ListCategories($filters: CategoryFilterInput, $limit: Float, $startingAfter: String) {
  listCategories(filters: $filters, limit: $limit, starting_after: $startingAfter) {
    hasMore
    count
    items {
      id
      name
      slug
      icon
      banner
      description
      status
      isSponsored
      isFeatured
      parentCategory {
        id
        name
        slug
      }
    }
  }
}
    `;

/**
 * __useListCategoriesQuery__
 *
 * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      limit: // value for 'limit'
 *      startingAfter: // value for 'startingAfter'
 *   },
 * });
 */
export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
      }
export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
        }
export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;
export const ListFeaturedCategoriesDocument = gql`
    query ListFeaturedCategories($filters: CategoryFilterInput, $limit: Float) {
  listCategories(filters: $filters, limit: $limit) {
    items {
      id
      name
      isFeatured
    }
    hasMore
    count
  }
}
    `;

/**
 * __useListFeaturedCategoriesQuery__
 *
 * To run a query within a React component, call `useListFeaturedCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFeaturedCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFeaturedCategoriesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListFeaturedCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListFeaturedCategoriesQuery, ListFeaturedCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFeaturedCategoriesQuery, ListFeaturedCategoriesQueryVariables>(ListFeaturedCategoriesDocument, options);
      }
export function useListFeaturedCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFeaturedCategoriesQuery, ListFeaturedCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFeaturedCategoriesQuery, ListFeaturedCategoriesQueryVariables>(ListFeaturedCategoriesDocument, options);
        }
export type ListFeaturedCategoriesQueryHookResult = ReturnType<typeof useListFeaturedCategoriesQuery>;
export type ListFeaturedCategoriesLazyQueryHookResult = ReturnType<typeof useListFeaturedCategoriesLazyQuery>;
export type ListFeaturedCategoriesQueryResult = Apollo.QueryResult<ListFeaturedCategoriesQuery, ListFeaturedCategoriesQueryVariables>;
export const CheckOrderRatioDocument = gql`
    query CheckOrderRatio($orderRatioQuery: OrderRatioCheckDTO!) {
  checkOrderRatio(orderRatioQuery: $orderRatioQuery) {
    total_parcel
    success_ratio
    success_parcel
    steadfast {
      cancelled_parcel
      success_parcel
      success_ratio
      total_parcel
    }
    redx {
      cancelled_parcel
      success_parcel
      success_ratio
      total_parcel
    }
    cancelled_parcel
    success
    pathao {
      cancelled_parcel
      success_parcel
      success_ratio
      total_parcel
    }
    paperfly {
      cancelled_parcel
      success_parcel
      success_ratio
      total_parcel
    }
  }
}
    `;

/**
 * __useCheckOrderRatioQuery__
 *
 * To run a query within a React component, call `useCheckOrderRatioQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckOrderRatioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckOrderRatioQuery({
 *   variables: {
 *      orderRatioQuery: // value for 'orderRatioQuery'
 *   },
 * });
 */
export function useCheckOrderRatioQuery(baseOptions: Apollo.QueryHookOptions<CheckOrderRatioQuery, CheckOrderRatioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckOrderRatioQuery, CheckOrderRatioQueryVariables>(CheckOrderRatioDocument, options);
      }
export function useCheckOrderRatioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckOrderRatioQuery, CheckOrderRatioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckOrderRatioQuery, CheckOrderRatioQueryVariables>(CheckOrderRatioDocument, options);
        }
export type CheckOrderRatioQueryHookResult = ReturnType<typeof useCheckOrderRatioQuery>;
export type CheckOrderRatioLazyQueryHookResult = ReturnType<typeof useCheckOrderRatioLazyQuery>;
export type CheckOrderRatioQueryResult = Apollo.QueryResult<CheckOrderRatioQuery, CheckOrderRatioQueryVariables>;
export const AddFavoriteDocument = gql`
    mutation AddFavorite($listingId: Float!, $userId: Float!) {
  addFavorite(listingId: $listingId, userId: $userId) {
    dateCreated
    id
    listing {
      id
      title
    }
    user {
      email
      id
      username
    }
  }
}
    `;
export type AddFavoriteMutationFn = Apollo.MutationFunction<AddFavoriteMutation, AddFavoriteMutationVariables>;

/**
 * __useAddFavoriteMutation__
 *
 * To run a mutation, you first call `useAddFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteMutation, { data, loading, error }] = useAddFavoriteMutation({
 *   variables: {
 *      listingId: // value for 'listingId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteMutation, AddFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFavoriteMutation, AddFavoriteMutationVariables>(AddFavoriteDocument, options);
      }
export type AddFavoriteMutationHookResult = ReturnType<typeof useAddFavoriteMutation>;
export type AddFavoriteMutationResult = Apollo.MutationResult<AddFavoriteMutation>;
export type AddFavoriteMutationOptions = Apollo.BaseMutationOptions<AddFavoriteMutation, AddFavoriteMutationVariables>;
export const ListChatsDocument = gql`
    query listChats($userId: Float) {
  listChatRooms(userId: $userId) {
    items {
      chatName
      id
      isDeleted
      relatedListing {
        id
        title
        price
        media {
          url
        }
      }
      members {
        user {
          createdAt
          id
          email
          username
          profile {
            name
            avatar
          }
        }
        userId
      }
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
 *      userId: // value for 'userId'
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
    query getChatMessage($chatRoomId: Float!, $endingBefore: String, $limit: Float, $startingAfter: String) {
  listChatMessages(
    chatRoomId: $chatRoomId
    ending_before: $endingBefore
    limit: $limit
    starting_after: $startingAfter
  ) {
    items {
      id
      content
      dateSent
      sender {
        id
        username
        profile {
          avatar
          name
        }
      }
    }
    count
    hasMore
    beforeCursor
    afterCursor
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
 *      endingBefore: // value for 'endingBefore'
 *      limit: // value for 'limit'
 *      startingAfter: // value for 'startingAfter'
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
export const GetChatRoomDocument = gql`
    query GetChatRoom($chatRoomId: Float) {
  getChatRoom(id: $chatRoomId) {
    chatName
    id
    isDeleted
    relatedListing {
      id
      title
      price
      media {
        url
      }
    }
    members {
      user {
        createdAt
        id
        email
        username
        profile {
          name
          avatar
        }
      }
      userId
    }
  }
}
    `;

/**
 * __useGetChatRoomQuery__
 *
 * To run a query within a React component, call `useGetChatRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatRoomQuery({
 *   variables: {
 *      chatRoomId: // value for 'chatRoomId'
 *   },
 * });
 */
export function useGetChatRoomQuery(baseOptions?: Apollo.QueryHookOptions<GetChatRoomQuery, GetChatRoomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(GetChatRoomDocument, options);
      }
export function useGetChatRoomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatRoomQuery, GetChatRoomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(GetChatRoomDocument, options);
        }
export type GetChatRoomQueryHookResult = ReturnType<typeof useGetChatRoomQuery>;
export type GetChatRoomLazyQueryHookResult = ReturnType<typeof useGetChatRoomLazyQuery>;
export type GetChatRoomQueryResult = Apollo.QueryResult<GetChatRoomQuery, GetChatRoomQueryVariables>;
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
export const ListBrandsDocument = gql`
    query ListBrands {
  listBrands {
    items {
      categories {
        id
        name
        slug
      }
      description
      name
      logo
      slug
      isFeatured
      id
    }
  }
}
    `;

/**
 * __useListBrandsQuery__
 *
 * To run a query within a React component, call `useListBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListBrandsQuery(baseOptions?: Apollo.QueryHookOptions<ListBrandsQuery, ListBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBrandsQuery, ListBrandsQueryVariables>(ListBrandsDocument, options);
      }
export function useListBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBrandsQuery, ListBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBrandsQuery, ListBrandsQueryVariables>(ListBrandsDocument, options);
        }
export type ListBrandsQueryHookResult = ReturnType<typeof useListBrandsQuery>;
export type ListBrandsLazyQueryHookResult = ReturnType<typeof useListBrandsLazyQuery>;
export type ListBrandsQueryResult = Apollo.QueryResult<ListBrandsQuery, ListBrandsQueryVariables>;
export const GetCommunityDocument = gql`
    query GetCommunity($id: Float, $name: String, $slug: String) {
  getCommunity(id: $id, name: $name, slug: $slug) {
    id
    slug
    banner
    isFeatured
    description
    memberCount
    members {
      id
      role
    }
    name
    slug
    location {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCommunityQuery__
 *
 * To run a query within a React component, call `useGetCommunityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCommunityQuery(baseOptions?: Apollo.QueryHookOptions<GetCommunityQuery, GetCommunityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommunityQuery, GetCommunityQueryVariables>(GetCommunityDocument, options);
      }
export function useGetCommunityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunityQuery, GetCommunityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommunityQuery, GetCommunityQueryVariables>(GetCommunityDocument, options);
        }
export type GetCommunityQueryHookResult = ReturnType<typeof useGetCommunityQuery>;
export type GetCommunityLazyQueryHookResult = ReturnType<typeof useGetCommunityLazyQuery>;
export type GetCommunityQueryResult = Apollo.QueryResult<GetCommunityQuery, GetCommunityQueryVariables>;
export const ListCommunitiesDocument = gql`
    query ListCommunities($filters: CommunityFilterInput) {
  listCommunities(filters: $filters) {
    items {
      slug
      banner
      isFeatured
      id
      description
      memberCount
      members {
        id
        role
      }
      name
      slug
      location {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useListCommunitiesQuery__
 *
 * To run a query within a React component, call `useListCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommunitiesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useListCommunitiesQuery(baseOptions?: Apollo.QueryHookOptions<ListCommunitiesQuery, ListCommunitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCommunitiesQuery, ListCommunitiesQueryVariables>(ListCommunitiesDocument, options);
      }
export function useListCommunitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommunitiesQuery, ListCommunitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCommunitiesQuery, ListCommunitiesQueryVariables>(ListCommunitiesDocument, options);
        }
export type ListCommunitiesQueryHookResult = ReturnType<typeof useListCommunitiesQuery>;
export type ListCommunitiesLazyQueryHookResult = ReturnType<typeof useListCommunitiesLazyQuery>;
export type ListCommunitiesQueryResult = Apollo.QueryResult<ListCommunitiesQuery, ListCommunitiesQueryVariables>;
export const ListLocationsDocument = gql`
    query ListLocations {
  listLocations {
    items {
      banner
      description
      id
      isDeleted
      isFeatured
      isLive
      name
      slug
    }
  }
}
    `;

/**
 * __useListLocationsQuery__
 *
 * To run a query within a React component, call `useListLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListLocationsQuery(baseOptions?: Apollo.QueryHookOptions<ListLocationsQuery, ListLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListLocationsQuery, ListLocationsQueryVariables>(ListLocationsDocument, options);
      }
export function useListLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListLocationsQuery, ListLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListLocationsQuery, ListLocationsQueryVariables>(ListLocationsDocument, options);
        }
export type ListLocationsQueryHookResult = ReturnType<typeof useListLocationsQuery>;
export type ListLocationsLazyQueryHookResult = ReturnType<typeof useListLocationsLazyQuery>;
export type ListLocationsQueryResult = Apollo.QueryResult<ListLocationsQuery, ListLocationsQueryVariables>;
export const GetUserByIdOrUsernameDocument = gql`
    query GetUserByIdOrUsername($usernameOrId: String!) {
  getUserByIdOrUsername(usernameOrId: $usernameOrId) {
    createdAt
    email
    facebookId
    followerCount
    followingCount
    followingStatus
    id
    isEmailVerified
    isStaff
    listingCount
    isApproved
    isVerified
    pointBalance
    profile {
      address
      avatar
      country
      city
      avatarThumbnail
      facebookHandle
      googleHandle
      id
      name
      instagramHandle
      isPhoneNumberVerified
      linkedinHandle
      phoneNumber
      twitterHandle
      zipCode
      state
    }
    roles {
      id
      name
      description
    }
    username
  }
}
    `;

/**
 * __useGetUserByIdOrUsernameQuery__
 *
 * To run a query within a React component, call `useGetUserByIdOrUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdOrUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdOrUsernameQuery({
 *   variables: {
 *      usernameOrId: // value for 'usernameOrId'
 *   },
 * });
 */
export function useGetUserByIdOrUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdOrUsernameQuery, GetUserByIdOrUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdOrUsernameQuery, GetUserByIdOrUsernameQueryVariables>(GetUserByIdOrUsernameDocument, options);
      }
export function useGetUserByIdOrUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdOrUsernameQuery, GetUserByIdOrUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdOrUsernameQuery, GetUserByIdOrUsernameQueryVariables>(GetUserByIdOrUsernameDocument, options);
        }
export type GetUserByIdOrUsernameQueryHookResult = ReturnType<typeof useGetUserByIdOrUsernameQuery>;
export type GetUserByIdOrUsernameLazyQueryHookResult = ReturnType<typeof useGetUserByIdOrUsernameLazyQuery>;
export type GetUserByIdOrUsernameQueryResult = Apollo.QueryResult<GetUserByIdOrUsernameQuery, GetUserByIdOrUsernameQueryVariables>;
export const AddFollowDocument = gql`
    mutation AddFollow($userId: Float!, $followedUserId: Float!) {
  addFollow(userId: $userId, followedUserId: $followedUserId) {
    id
    followedUser {
      id
    }
    user {
      id
    }
    dateFollowed
  }
}
    `;
export type AddFollowMutationFn = Apollo.MutationFunction<AddFollowMutation, AddFollowMutationVariables>;

/**
 * __useAddFollowMutation__
 *
 * To run a mutation, you first call `useAddFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFollowMutation, { data, loading, error }] = useAddFollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      followedUserId: // value for 'followedUserId'
 *   },
 * });
 */
export function useAddFollowMutation(baseOptions?: Apollo.MutationHookOptions<AddFollowMutation, AddFollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFollowMutation, AddFollowMutationVariables>(AddFollowDocument, options);
      }
export type AddFollowMutationHookResult = ReturnType<typeof useAddFollowMutation>;
export type AddFollowMutationResult = Apollo.MutationResult<AddFollowMutation>;
export type AddFollowMutationOptions = Apollo.BaseMutationOptions<AddFollowMutation, AddFollowMutationVariables>;
export const ListFollowersDocument = gql`
    query ListFollowers($usernameOrId: String!) {
  listFollowers(usernameOrId: $usernameOrId) {
    items {
      id
      user {
        id
        email
        facebookId
        isApproved
        username
        isStaff
        profile {
          name
          avatar
        }
      }
      followStatus
    }
  }
}
    `;

/**
 * __useListFollowersQuery__
 *
 * To run a query within a React component, call `useListFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFollowersQuery({
 *   variables: {
 *      usernameOrId: // value for 'usernameOrId'
 *   },
 * });
 */
export function useListFollowersQuery(baseOptions: Apollo.QueryHookOptions<ListFollowersQuery, ListFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFollowersQuery, ListFollowersQueryVariables>(ListFollowersDocument, options);
      }
export function useListFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFollowersQuery, ListFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFollowersQuery, ListFollowersQueryVariables>(ListFollowersDocument, options);
        }
export type ListFollowersQueryHookResult = ReturnType<typeof useListFollowersQuery>;
export type ListFollowersLazyQueryHookResult = ReturnType<typeof useListFollowersLazyQuery>;
export type ListFollowersQueryResult = Apollo.QueryResult<ListFollowersQuery, ListFollowersQueryVariables>;
export const ListFollowingDocument = gql`
    query ListFollowing($usernameOrId: String!) {
  listFollowing(usernameOrId: $usernameOrId) {
    items {
      id
      user {
        id
        email
        facebookId
        isApproved
        isStaff
        username
        profile {
          name
          avatar
        }
      }
      followStatus
    }
  }
}
    `;

/**
 * __useListFollowingQuery__
 *
 * To run a query within a React component, call `useListFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFollowingQuery({
 *   variables: {
 *      usernameOrId: // value for 'usernameOrId'
 *   },
 * });
 */
export function useListFollowingQuery(baseOptions: Apollo.QueryHookOptions<ListFollowingQuery, ListFollowingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFollowingQuery, ListFollowingQueryVariables>(ListFollowingDocument, options);
      }
export function useListFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFollowingQuery, ListFollowingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFollowingQuery, ListFollowingQueryVariables>(ListFollowingDocument, options);
        }
export type ListFollowingQueryHookResult = ReturnType<typeof useListFollowingQuery>;
export type ListFollowingLazyQueryHookResult = ReturnType<typeof useListFollowingLazyQuery>;
export type ListFollowingQueryResult = Apollo.QueryResult<ListFollowingQuery, ListFollowingQueryVariables>;
export const RemoveFollowDocument = gql`
    mutation RemoveFollow($userId: Float!, $followedUserId: Float!) {
  removeFollow(userId: $userId, followedUserId: $followedUserId) {
    id
    followedUser {
      id
    }
    user {
      id
    }
    dateFollowed
  }
}
    `;
export type RemoveFollowMutationFn = Apollo.MutationFunction<RemoveFollowMutation, RemoveFollowMutationVariables>;

/**
 * __useRemoveFollowMutation__
 *
 * To run a mutation, you first call `useRemoveFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFollowMutation, { data, loading, error }] = useRemoveFollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      followedUserId: // value for 'followedUserId'
 *   },
 * });
 */
export function useRemoveFollowMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFollowMutation, RemoveFollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFollowMutation, RemoveFollowMutationVariables>(RemoveFollowDocument, options);
      }
export type RemoveFollowMutationHookResult = ReturnType<typeof useRemoveFollowMutation>;
export type RemoveFollowMutationResult = Apollo.MutationResult<RemoveFollowMutation>;
export type RemoveFollowMutationOptions = Apollo.BaseMutationOptions<RemoveFollowMutation, RemoveFollowMutationVariables>;
export const GetCategoryDocument = gql`
    query GetCategory($getCategoryId: Float, $name: String, $slug: String) {
  getCategory(id: $getCategoryId, name: $name, slug: $slug) {
    id
    name
    slug
    icon
    banner
    description
    status
    isSponsored
    isFeatured
    parentCategory {
      id
      name
      slug
    }
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      getCategoryId: // value for 'getCategoryId'
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetSearchHistoryDocument = gql`
    query GetSearchHistory {
  getSearchHistory {
    items {
      searchQuery
    }
  }
}
    `;

/**
 * __useGetSearchHistoryQuery__
 *
 * To run a query within a React component, call `useGetSearchHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSearchHistoryQuery(baseOptions?: Apollo.QueryHookOptions<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>(GetSearchHistoryDocument, options);
      }
export function useGetSearchHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>(GetSearchHistoryDocument, options);
        }
export type GetSearchHistoryQueryHookResult = ReturnType<typeof useGetSearchHistoryQuery>;
export type GetSearchHistoryLazyQueryHookResult = ReturnType<typeof useGetSearchHistoryLazyQuery>;
export type GetSearchHistoryQueryResult = Apollo.QueryResult<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>;
export const GetTrendingSearchesDocument = gql`
    query GetTrendingSearches {
  getTrendingSearches {
    items {
      searchQuery
    }
  }
}
    `;

/**
 * __useGetTrendingSearchesQuery__
 *
 * To run a query within a React component, call `useGetTrendingSearchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingSearchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingSearchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrendingSearchesQuery(baseOptions?: Apollo.QueryHookOptions<GetTrendingSearchesQuery, GetTrendingSearchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendingSearchesQuery, GetTrendingSearchesQueryVariables>(GetTrendingSearchesDocument, options);
      }
export function useGetTrendingSearchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingSearchesQuery, GetTrendingSearchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendingSearchesQuery, GetTrendingSearchesQueryVariables>(GetTrendingSearchesDocument, options);
        }
export type GetTrendingSearchesQueryHookResult = ReturnType<typeof useGetTrendingSearchesQuery>;
export type GetTrendingSearchesLazyQueryHookResult = ReturnType<typeof useGetTrendingSearchesLazyQuery>;
export type GetTrendingSearchesQueryResult = Apollo.QueryResult<GetTrendingSearchesQuery, GetTrendingSearchesQueryVariables>;
export const CreateListingDocument = gql`
    mutation CreateListing($listingData: ListingCreateDTO!) {
  createListing(listingData: $listingData) {
    brand {
      id
      name
      logo
    }
    condition
    category {
      id
      name
      slug
      parentCategory {
        id
        name
        slug
      }
    }
    datePublished
    dateCreated
    description
    id
    isApproved
    isFeatured
    isLive
    isSold
    meetupLocations {
      city
      country
      displayName
      lat
      locality
      lon
      placeId
      postCode
      state
      stateDistrict
    }
    quantity
    slug
    dealingMethod
    courierDetails
    price
    title
    user {
      email
      id
      username
      isVerified
      profile {
        name
        avatar
      }
    }
    media {
      url
      isPrimary
    }
    favoriteCount
    favoriteStatus
  }
}
    `;
export type CreateListingMutationFn = Apollo.MutationFunction<CreateListingMutation, CreateListingMutationVariables>;

/**
 * __useCreateListingMutation__
 *
 * To run a mutation, you first call `useCreateListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListingMutation, { data, loading, error }] = useCreateListingMutation({
 *   variables: {
 *      listingData: // value for 'listingData'
 *   },
 * });
 */
export function useCreateListingMutation(baseOptions?: Apollo.MutationHookOptions<CreateListingMutation, CreateListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListingMutation, CreateListingMutationVariables>(CreateListingDocument, options);
      }
export type CreateListingMutationHookResult = ReturnType<typeof useCreateListingMutation>;
export type CreateListingMutationResult = Apollo.MutationResult<CreateListingMutation>;
export type CreateListingMutationOptions = Apollo.BaseMutationOptions<CreateListingMutation, CreateListingMutationVariables>;
export const ListFavoriteListingDocument = gql`
    query ListFavoriteListing($userId: Float!) {
  listFavoriteListing(userId: $userId) {
    items {
      brand {
        id
        name
        logo
      }
      condition
      category {
        id
        name
        slug
        parentCategory {
          id
          name
          slug
        }
      }
      dateCreated
      datePublished
      description
      id
      isApproved
      isFeatured
      isLive
      isSold
      meetupLocations {
        city
        country
        displayName
        lat
        locality
        lon
        placeId
        postCode
        state
        stateDistrict
      }
      quantity
      slug
      dealingMethod
      courierDetails
      price
      title
      user {
        email
        id
        username
        isVerified
        profile {
          name
          avatar
        }
      }
      media {
        url
        isPrimary
      }
      favoriteCount
      favoriteStatus
    }
  }
}
    `;

/**
 * __useListFavoriteListingQuery__
 *
 * To run a query within a React component, call `useListFavoriteListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFavoriteListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFavoriteListingQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useListFavoriteListingQuery(baseOptions: Apollo.QueryHookOptions<ListFavoriteListingQuery, ListFavoriteListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFavoriteListingQuery, ListFavoriteListingQueryVariables>(ListFavoriteListingDocument, options);
      }
export function useListFavoriteListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFavoriteListingQuery, ListFavoriteListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFavoriteListingQuery, ListFavoriteListingQueryVariables>(ListFavoriteListingDocument, options);
        }
export type ListFavoriteListingQueryHookResult = ReturnType<typeof useListFavoriteListingQuery>;
export type ListFavoriteListingLazyQueryHookResult = ReturnType<typeof useListFavoriteListingLazyQuery>;
export type ListFavoriteListingQueryResult = Apollo.QueryResult<ListFavoriteListingQuery, ListFavoriteListingQueryVariables>;
export const ListListingsDocument = gql`
    query ListListings($filters: ListingFilterInput, $limit: Float, $endingBefore: String, $startingAfter: String, $orderBy: String) {
  listListings(
    filters: $filters
    limit: $limit
    ending_before: $endingBefore
    starting_after: $startingAfter
    orderBy: $orderBy
  ) {
    items {
      brand {
        id
        name
        logo
      }
      condition
      category {
        id
        name
        slug
        parentCategory {
          id
          name
          slug
        }
      }
      datePublished
      dateCreated
      description
      id
      isApproved
      isFeatured
      isLive
      isSold
      meetupLocations {
        city
        country
        displayName
        lat
        locality
        lon
        placeId
        postCode
        state
        stateDistrict
      }
      quantity
      slug
      dealingMethod
      courierDetails
      price
      title
      user {
        email
        id
        isVerified
        username
        profile {
          name
          avatar
        }
      }
      media {
        url
        isPrimary
      }
      favoriteCount
      favoriteStatus
    }
    hasMore
    count
    beforeCursor
    afterCursor
  }
}
    `;

/**
 * __useListListingsQuery__
 *
 * To run a query within a React component, call `useListListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListListingsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      limit: // value for 'limit'
 *      endingBefore: // value for 'endingBefore'
 *      startingAfter: // value for 'startingAfter'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useListListingsQuery(baseOptions?: Apollo.QueryHookOptions<ListListingsQuery, ListListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListListingsQuery, ListListingsQueryVariables>(ListListingsDocument, options);
      }
export function useListListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListListingsQuery, ListListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListListingsQuery, ListListingsQueryVariables>(ListListingsDocument, options);
        }
export type ListListingsQueryHookResult = ReturnType<typeof useListListingsQuery>;
export type ListListingsLazyQueryHookResult = ReturnType<typeof useListListingsLazyQuery>;
export type ListListingsQueryResult = Apollo.QueryResult<ListListingsQuery, ListListingsQueryVariables>;
export const GetListingDocument = gql`
    query GetListing($id: Float, $name: String) {
  getListing(id: $id, name: $name) {
    brand {
      id
      name
      logo
    }
    condition
    category {
      id
      name
      slug
      parentCategory {
        id
        name
        slug
      }
    }
    datePublished
    dateCreated
    description
    id
    isApproved
    isFeatured
    isLive
    isSold
    meetupLocations {
      city
      country
      displayName
      lat
      locality
      lon
      placeId
      postCode
      state
      stateDistrict
    }
    quantity
    slug
    dealingMethod
    courierDetails
    price
    title
    user {
      email
      id
      username
      isVerified
      profile {
        name
        avatar
      }
    }
    media {
      url
      isPrimary
    }
    favoriteCount
    favoriteStatus
  }
}
    `;

/**
 * __useGetListingQuery__
 *
 * To run a query within a React component, call `useGetListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListingQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetListingQuery(baseOptions?: Apollo.QueryHookOptions<GetListingQuery, GetListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListingQuery, GetListingQueryVariables>(GetListingDocument, options);
      }
export function useGetListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListingQuery, GetListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListingQuery, GetListingQueryVariables>(GetListingDocument, options);
        }
export type GetListingQueryHookResult = ReturnType<typeof useGetListingQuery>;
export type GetListingLazyQueryHookResult = ReturnType<typeof useGetListingLazyQuery>;
export type GetListingQueryResult = Apollo.QueryResult<GetListingQuery, GetListingQueryVariables>;
export const RemoveListingDocument = gql`
    mutation RemoveListing($listingData: ListingUpdateDTO!, $listingId: Float!) {
  updateListing(listingData: $listingData, listingId: $listingId) {
    brand {
      id
      name
      logo
    }
    condition
    category {
      id
      name
      slug
      parentCategory {
        id
        name
        slug
      }
    }
    datePublished
    dateCreated
    description
    id
    isApproved
    isFeatured
    isLive
    isSold
    meetupLocations {
      city
      country
      displayName
      lat
      locality
      lon
      placeId
      postCode
      state
      stateDistrict
    }
    quantity
    slug
    dealingMethod
    courierDetails
    price
    title
    user {
      email
      id
      username
      isVerified
      profile {
        name
        avatar
      }
    }
    media {
      url
      isPrimary
    }
    favoriteCount
    favoriteStatus
  }
}
    `;
export type RemoveListingMutationFn = Apollo.MutationFunction<RemoveListingMutation, RemoveListingMutationVariables>;

/**
 * __useRemoveListingMutation__
 *
 * To run a mutation, you first call `useRemoveListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeListingMutation, { data, loading, error }] = useRemoveListingMutation({
 *   variables: {
 *      listingData: // value for 'listingData'
 *      listingId: // value for 'listingId'
 *   },
 * });
 */
export function useRemoveListingMutation(baseOptions?: Apollo.MutationHookOptions<RemoveListingMutation, RemoveListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveListingMutation, RemoveListingMutationVariables>(RemoveListingDocument, options);
      }
export type RemoveListingMutationHookResult = ReturnType<typeof useRemoveListingMutation>;
export type RemoveListingMutationResult = Apollo.MutationResult<RemoveListingMutation>;
export type RemoveListingMutationOptions = Apollo.BaseMutationOptions<RemoveListingMutation, RemoveListingMutationVariables>;
export const SearchListingsDocument = gql`
    query SearchListings($query: SerachInputDTO!, $filters: ListingFilterInput, $limit: Float, $startingAfter: String, $endingBefore: String, $orderBy: String) {
  searchListings(
    query: $query
    filters: $filters
    limit: $limit
    starting_after: $startingAfter
    ending_before: $endingBefore
    orderBy: $orderBy
  ) {
    hasMore
    count
    items {
      brand {
        id
        name
      }
      category {
        id
        name
        slug
        parentCategory {
          id
          name
          slug
        }
      }
      datePublished
      dateCreated
      description
      id
      isApproved
      isFeatured
      isLive
      isSold
      meetupLocations {
        city
        country
        displayName
        lat
        locality
        lon
        placeId
        postCode
        state
        stateDistrict
      }
      quantity
      slug
      dealingMethod
      courierDetails
      price
      title
      user {
        email
        id
        username
        isVerified
        profile {
          name
          avatar
        }
      }
      media {
        url
        isPrimary
      }
      favoriteCount
      favoriteStatus
    }
  }
}
    `;

/**
 * __useSearchListingsQuery__
 *
 * To run a query within a React component, call `useSearchListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchListingsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      filters: // value for 'filters'
 *      limit: // value for 'limit'
 *      startingAfter: // value for 'startingAfter'
 *      endingBefore: // value for 'endingBefore'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSearchListingsQuery(baseOptions: Apollo.QueryHookOptions<SearchListingsQuery, SearchListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchListingsQuery, SearchListingsQueryVariables>(SearchListingsDocument, options);
      }
export function useSearchListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchListingsQuery, SearchListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchListingsQuery, SearchListingsQueryVariables>(SearchListingsDocument, options);
        }
export type SearchListingsQueryHookResult = ReturnType<typeof useSearchListingsQuery>;
export type SearchListingsLazyQueryHookResult = ReturnType<typeof useSearchListingsLazyQuery>;
export type SearchListingsQueryResult = Apollo.QueryResult<SearchListingsQuery, SearchListingsQueryVariables>;
export const SetListingAvailabilityDocument = gql`
    mutation SetListingAvailability($listingData: MarkAsUnavailableDTO!, $setListingAvailabilityListingId2: Float!) {
  setListingAvailability(
    listingData: $listingData
    listingId: $setListingAvailabilityListingId2
  ) {
    brand {
      id
      name
      logo
    }
    condition
    category {
      id
      name
      slug
      parentCategory {
        id
        name
        slug
      }
    }
    datePublished
    dateCreated
    description
    id
    isApproved
    isFeatured
    isLive
    isSold
    meetupLocations {
      city
      country
      displayName
      lat
      locality
      lon
      placeId
      postCode
      state
      stateDistrict
    }
    quantity
    slug
    dealingMethod
    courierDetails
    price
    title
    user {
      email
      id
      username
      isVerified
      profile {
        name
        avatar
      }
    }
    media {
      url
      isPrimary
    }
    favoriteCount
    favoriteStatus
  }
}
    `;
export type SetListingAvailabilityMutationFn = Apollo.MutationFunction<SetListingAvailabilityMutation, SetListingAvailabilityMutationVariables>;

/**
 * __useSetListingAvailabilityMutation__
 *
 * To run a mutation, you first call `useSetListingAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetListingAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setListingAvailabilityMutation, { data, loading, error }] = useSetListingAvailabilityMutation({
 *   variables: {
 *      listingData: // value for 'listingData'
 *      setListingAvailabilityListingId2: // value for 'setListingAvailabilityListingId2'
 *   },
 * });
 */
export function useSetListingAvailabilityMutation(baseOptions?: Apollo.MutationHookOptions<SetListingAvailabilityMutation, SetListingAvailabilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetListingAvailabilityMutation, SetListingAvailabilityMutationVariables>(SetListingAvailabilityDocument, options);
      }
export type SetListingAvailabilityMutationHookResult = ReturnType<typeof useSetListingAvailabilityMutation>;
export type SetListingAvailabilityMutationResult = Apollo.MutationResult<SetListingAvailabilityMutation>;
export type SetListingAvailabilityMutationOptions = Apollo.BaseMutationOptions<SetListingAvailabilityMutation, SetListingAvailabilityMutationVariables>;
export const UpdateListingAdminDocument = gql`
    mutation UpdateListingAdmin($adminlistingData: AdminListingUpdateDTO!, $listingId: Float!) {
  updateListingAdmin(adminlistingData: $adminlistingData, listingId: $listingId) {
    brand {
      id
      name
    }
    category {
      id
      name
      slug
      parentCategory {
        id
        name
        slug
      }
    }
    datePublished
    dateCreated
    description
    id
    isApproved
    isFeatured
    isLive
    isSold
    meetupLocations {
      city
      country
      displayName
      lat
      locality
      lon
      placeId
      postCode
      state
      stateDistrict
    }
    quantity
    slug
    dealingMethod
    courierDetails
    price
    title
    user {
      email
      id
      username
      isVerified
      profile {
        name
        avatar
      }
    }
    media {
      url
      isPrimary
    }
    favoriteCount
    favoriteStatus
  }
}
    `;
export type UpdateListingAdminMutationFn = Apollo.MutationFunction<UpdateListingAdminMutation, UpdateListingAdminMutationVariables>;

/**
 * __useUpdateListingAdminMutation__
 *
 * To run a mutation, you first call `useUpdateListingAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListingAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListingAdminMutation, { data, loading, error }] = useUpdateListingAdminMutation({
 *   variables: {
 *      adminlistingData: // value for 'adminlistingData'
 *      listingId: // value for 'listingId'
 *   },
 * });
 */
export function useUpdateListingAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateListingAdminMutation, UpdateListingAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateListingAdminMutation, UpdateListingAdminMutationVariables>(UpdateListingAdminDocument, options);
      }
export type UpdateListingAdminMutationHookResult = ReturnType<typeof useUpdateListingAdminMutation>;
export type UpdateListingAdminMutationResult = Apollo.MutationResult<UpdateListingAdminMutation>;
export type UpdateListingAdminMutationOptions = Apollo.BaseMutationOptions<UpdateListingAdminMutation, UpdateListingAdminMutationVariables>;
export const UpdateListingDocument = gql`
    mutation UpdateListing($listingData: ListingUpdateDTO!, $listingId: Float!) {
  updateListing(listingData: $listingData, listingId: $listingId) {
    brand {
      id
      name
      logo
    }
    condition
    category {
      id
      name
      slug
      parentCategory {
        id
        name
        slug
      }
    }
    datePublished
    dateCreated
    description
    id
    isApproved
    isFeatured
    isLive
    isSold
    meetupLocations {
      city
      country
      displayName
      lat
      locality
      lon
      placeId
      postCode
      state
      stateDistrict
    }
    quantity
    slug
    dealingMethod
    courierDetails
    price
    title
    user {
      email
      id
      username
      isVerified
      profile {
        name
        avatar
      }
    }
    media {
      url
      isPrimary
    }
    favoriteCount
    favoriteStatus
  }
}
    `;
export type UpdateListingMutationFn = Apollo.MutationFunction<UpdateListingMutation, UpdateListingMutationVariables>;

/**
 * __useUpdateListingMutation__
 *
 * To run a mutation, you first call `useUpdateListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListingMutation, { data, loading, error }] = useUpdateListingMutation({
 *   variables: {
 *      listingData: // value for 'listingData'
 *      listingId: // value for 'listingId'
 *   },
 * });
 */
export function useUpdateListingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateListingMutation, UpdateListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateListingMutation, UpdateListingMutationVariables>(UpdateListingDocument, options);
      }
export type UpdateListingMutationHookResult = ReturnType<typeof useUpdateListingMutation>;
export type UpdateListingMutationResult = Apollo.MutationResult<UpdateListingMutation>;
export type UpdateListingMutationOptions = Apollo.BaseMutationOptions<UpdateListingMutation, UpdateListingMutationVariables>;
export const SearchLocationDocument = gql`
    query SearchLocation($nominatimQuery: NominatimSearchDTO!) {
  searchLocation(nominatimQuery: $nominatimQuery) {
    items {
      city
      country
      displayName
      lat
      locality
      lon
      placeId
      postCode
      state
      stateDistrict
    }
  }
}
    `;

/**
 * __useSearchLocationQuery__
 *
 * To run a query within a React component, call `useSearchLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchLocationQuery({
 *   variables: {
 *      nominatimQuery: // value for 'nominatimQuery'
 *   },
 * });
 */
export function useSearchLocationQuery(baseOptions: Apollo.QueryHookOptions<SearchLocationQuery, SearchLocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchLocationQuery, SearchLocationQueryVariables>(SearchLocationDocument, options);
      }
export function useSearchLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchLocationQuery, SearchLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchLocationQuery, SearchLocationQueryVariables>(SearchLocationDocument, options);
        }
export type SearchLocationQueryHookResult = ReturnType<typeof useSearchLocationQuery>;
export type SearchLocationLazyQueryHookResult = ReturnType<typeof useSearchLocationLazyQuery>;
export type SearchLocationQueryResult = Apollo.QueryResult<SearchLocationQuery, SearchLocationQueryVariables>;
export const ListNotificationsDocument = gql`
    query ListNotifications($filters: NotificationFilterInput, $endingBefore: String, $startingAfter: String, $limit: Float) {
  listNotifications(
    filters: $filters
    ending_before: $endingBefore
    starting_after: $startingAfter
    limit: $limit
  ) {
    count
    hasMore
    items {
      content
      chatRoomId
      listingId
      dateCreated
      relatedUserUsername
      read
      type
      id
    }
  }
}
    `;

/**
 * __useListNotificationsQuery__
 *
 * To run a query within a React component, call `useListNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListNotificationsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      endingBefore: // value for 'endingBefore'
 *      startingAfter: // value for 'startingAfter'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<ListNotificationsQuery, ListNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListNotificationsQuery, ListNotificationsQueryVariables>(ListNotificationsDocument, options);
      }
export function useListNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListNotificationsQuery, ListNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListNotificationsQuery, ListNotificationsQueryVariables>(ListNotificationsDocument, options);
        }
export type ListNotificationsQueryHookResult = ReturnType<typeof useListNotificationsQuery>;
export type ListNotificationsLazyQueryHookResult = ReturnType<typeof useListNotificationsLazyQuery>;
export type ListNotificationsQueryResult = Apollo.QueryResult<ListNotificationsQuery, ListNotificationsQueryVariables>;
export const MarkAllNotificationAsReadDocument = gql`
    mutation MarkAllNotificationAsRead {
  markAllNotificationAsRead {
    items {
      content
      listingId
      chatRoomId
      dateCreated
      read
      relatedUserUsername
      type
      id
    }
  }
}
    `;
export type MarkAllNotificationAsReadMutationFn = Apollo.MutationFunction<MarkAllNotificationAsReadMutation, MarkAllNotificationAsReadMutationVariables>;

/**
 * __useMarkAllNotificationAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAllNotificationAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllNotificationAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllNotificationAsReadMutation, { data, loading, error }] = useMarkAllNotificationAsReadMutation({
 *   variables: {
 *   },
 * });
 */
export function useMarkAllNotificationAsReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkAllNotificationAsReadMutation, MarkAllNotificationAsReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAllNotificationAsReadMutation, MarkAllNotificationAsReadMutationVariables>(MarkAllNotificationAsReadDocument, options);
      }
export type MarkAllNotificationAsReadMutationHookResult = ReturnType<typeof useMarkAllNotificationAsReadMutation>;
export type MarkAllNotificationAsReadMutationResult = Apollo.MutationResult<MarkAllNotificationAsReadMutation>;
export type MarkAllNotificationAsReadMutationOptions = Apollo.BaseMutationOptions<MarkAllNotificationAsReadMutation, MarkAllNotificationAsReadMutationVariables>;
export const MarkNotificationReadDocument = gql`
    mutation MarkNotificationRead($notificationId: Float!) {
  markNotificationRead(notificationId: $notificationId) {
    content
    listingId
    chatRoomId
    dateCreated
    read
    type
    relatedUserUsername
    id
  }
}
    `;
export type MarkNotificationReadMutationFn = Apollo.MutationFunction<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>;

/**
 * __useMarkNotificationReadMutation__
 *
 * To run a mutation, you first call `useMarkNotificationReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkNotificationReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markNotificationReadMutation, { data, loading, error }] = useMarkNotificationReadMutation({
 *   variables: {
 *      notificationId: // value for 'notificationId'
 *   },
 * });
 */
export function useMarkNotificationReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>(MarkNotificationReadDocument, options);
      }
export type MarkNotificationReadMutationHookResult = ReturnType<typeof useMarkNotificationReadMutation>;
export type MarkNotificationReadMutationResult = Apollo.MutationResult<MarkNotificationReadMutation>;
export type MarkNotificationReadMutationOptions = Apollo.BaseMutationOptions<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>;
export const NewNotificationDocument = gql`
    subscription NewNotification {
  newNotification {
    content
    listingId
    chatRoomId
    dateCreated
    read
    type
    id
    relatedUserUsername
  }
}
    `;

/**
 * __useNewNotificationSubscription__
 *
 * To run a query within a React component, call `useNewNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewNotificationSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewNotificationSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewNotificationSubscription, NewNotificationSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewNotificationSubscription, NewNotificationSubscriptionVariables>(NewNotificationDocument, options);
      }
export type NewNotificationSubscriptionHookResult = ReturnType<typeof useNewNotificationSubscription>;
export type NewNotificationSubscriptionResult = Apollo.SubscriptionResult<NewNotificationSubscription>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($profileData: UpdateProfileDto!, $profileId: Float!) {
  updateProfile(profileData: $profileData, profileId: $profileId) {
    address
    avatar
    country
    city
    avatarThumbnail
    facebookHandle
    googleHandle
    id
    name
    instagramHandle
    isPhoneNumberVerified
    linkedinHandle
    phoneNumber
    twitterHandle
    zipCode
    state
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      profileData: // value for 'profileData'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const CheckPasswordResetTokenDocument = gql`
    query CheckPasswordResetToken($token: String!) {
  checkPasswordResetToken(token: $token) {
    success
  }
}
    `;

/**
 * __useCheckPasswordResetTokenQuery__
 *
 * To run a query within a React component, call `useCheckPasswordResetTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckPasswordResetTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckPasswordResetTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCheckPasswordResetTokenQuery(baseOptions: Apollo.QueryHookOptions<CheckPasswordResetTokenQuery, CheckPasswordResetTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckPasswordResetTokenQuery, CheckPasswordResetTokenQueryVariables>(CheckPasswordResetTokenDocument, options);
      }
export function useCheckPasswordResetTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckPasswordResetTokenQuery, CheckPasswordResetTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckPasswordResetTokenQuery, CheckPasswordResetTokenQueryVariables>(CheckPasswordResetTokenDocument, options);
        }
export type CheckPasswordResetTokenQueryHookResult = ReturnType<typeof useCheckPasswordResetTokenQuery>;
export type CheckPasswordResetTokenLazyQueryHookResult = ReturnType<typeof useCheckPasswordResetTokenLazyQuery>;
export type CheckPasswordResetTokenQueryResult = Apollo.QueryResult<CheckPasswordResetTokenQuery, CheckPasswordResetTokenQueryVariables>;
export const ResetRequestDocument = gql`
    mutation ResetRequest($email: String!) {
  resetRequest(email: $email) {
    success
  }
}
    `;
export type ResetRequestMutationFn = Apollo.MutationFunction<ResetRequestMutation, ResetRequestMutationVariables>;

/**
 * __useResetRequestMutation__
 *
 * To run a mutation, you first call `useResetRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetRequestMutation, { data, loading, error }] = useResetRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetRequestMutation(baseOptions?: Apollo.MutationHookOptions<ResetRequestMutation, ResetRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetRequestMutation, ResetRequestMutationVariables>(ResetRequestDocument, options);
      }
export type ResetRequestMutationHookResult = ReturnType<typeof useResetRequestMutation>;
export type ResetRequestMutationResult = Apollo.MutationResult<ResetRequestMutation>;
export type ResetRequestMutationOptions = Apollo.BaseMutationOptions<ResetRequestMutation, ResetRequestMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($resetData: ResetPasswordDTO!) {
  resetPassword(resetData: $resetData) {
    success
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetData: // value for 'resetData'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userData: UpdateUserDto!, $userId: Float!) {
  updateUser(userData: $userData, userId: $userId) {
    email
    id
    isEmailVerified
    isStaff
    username
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const RemoveFavoriteDocument = gql`
    mutation RemoveFavorite($listingId: Float!, $userId: Float!) {
  removeFavorite(listingId: $listingId, userId: $userId) {
    dateCreated
    id
    listing {
      id
      title
    }
    user {
      email
      id
      username
    }
  }
}
    `;
export type RemoveFavoriteMutationFn = Apollo.MutationFunction<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;

/**
 * __useRemoveFavoriteMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteMutation, { data, loading, error }] = useRemoveFavoriteMutation({
 *   variables: {
 *      listingId: // value for 'listingId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>(RemoveFavoriteDocument, options);
      }
export type RemoveFavoriteMutationHookResult = ReturnType<typeof useRemoveFavoriteMutation>;
export type RemoveFavoriteMutationResult = Apollo.MutationResult<RemoveFavoriteMutation>;
export type RemoveFavoriteMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;
export const RemoveSearchHistoryDocument = gql`
    mutation RemoveSearchHistory {
  removeSearchHistory {
    items {
      searchQuery
    }
  }
}
    `;
export type RemoveSearchHistoryMutationFn = Apollo.MutationFunction<RemoveSearchHistoryMutation, RemoveSearchHistoryMutationVariables>;

/**
 * __useRemoveSearchHistoryMutation__
 *
 * To run a mutation, you first call `useRemoveSearchHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSearchHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSearchHistoryMutation, { data, loading, error }] = useRemoveSearchHistoryMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveSearchHistoryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSearchHistoryMutation, RemoveSearchHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSearchHistoryMutation, RemoveSearchHistoryMutationVariables>(RemoveSearchHistoryDocument, options);
      }
export type RemoveSearchHistoryMutationHookResult = ReturnType<typeof useRemoveSearchHistoryMutation>;
export type RemoveSearchHistoryMutationResult = Apollo.MutationResult<RemoveSearchHistoryMutation>;
export type RemoveSearchHistoryMutationOptions = Apollo.BaseMutationOptions<RemoveSearchHistoryMutation, RemoveSearchHistoryMutationVariables>;
export const CreateSellerReviewDocument = gql`
    mutation CreateSellerReview($reviewData: SellerReviewCreateDTO!) {
  createSellerReview(reviewData: $reviewData) {
    review
    rating
    reviewer {
      id
      email
      username
      profile {
        avatar
        name
      }
    }
    seller {
      id
      email
      username
      profile {
        avatar
        name
      }
    }
    dateCreated
    id
    listing {
      id
      title
    }
  }
}
    `;
export type CreateSellerReviewMutationFn = Apollo.MutationFunction<CreateSellerReviewMutation, CreateSellerReviewMutationVariables>;

/**
 * __useCreateSellerReviewMutation__
 *
 * To run a mutation, you first call `useCreateSellerReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellerReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellerReviewMutation, { data, loading, error }] = useCreateSellerReviewMutation({
 *   variables: {
 *      reviewData: // value for 'reviewData'
 *   },
 * });
 */
export function useCreateSellerReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateSellerReviewMutation, CreateSellerReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSellerReviewMutation, CreateSellerReviewMutationVariables>(CreateSellerReviewDocument, options);
      }
export type CreateSellerReviewMutationHookResult = ReturnType<typeof useCreateSellerReviewMutation>;
export type CreateSellerReviewMutationResult = Apollo.MutationResult<CreateSellerReviewMutation>;
export type CreateSellerReviewMutationOptions = Apollo.BaseMutationOptions<CreateSellerReviewMutation, CreateSellerReviewMutationVariables>;
export const SummaryUserReviewDocument = gql`
    query SummaryUserReview($usernameOrId: String!) {
  summaryUserReview(usernameOrId: $usernameOrId) {
    avgRating
    five_star_count
    four_star_count
    one_star_count
    three_star_count
    reviewCount
    two_star_count
  }
}
    `;

/**
 * __useSummaryUserReviewQuery__
 *
 * To run a query within a React component, call `useSummaryUserReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useSummaryUserReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSummaryUserReviewQuery({
 *   variables: {
 *      usernameOrId: // value for 'usernameOrId'
 *   },
 * });
 */
export function useSummaryUserReviewQuery(baseOptions: Apollo.QueryHookOptions<SummaryUserReviewQuery, SummaryUserReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SummaryUserReviewQuery, SummaryUserReviewQueryVariables>(SummaryUserReviewDocument, options);
      }
export function useSummaryUserReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SummaryUserReviewQuery, SummaryUserReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SummaryUserReviewQuery, SummaryUserReviewQueryVariables>(SummaryUserReviewDocument, options);
        }
export type SummaryUserReviewQueryHookResult = ReturnType<typeof useSummaryUserReviewQuery>;
export type SummaryUserReviewLazyQueryHookResult = ReturnType<typeof useSummaryUserReviewLazyQuery>;
export type SummaryUserReviewQueryResult = Apollo.QueryResult<SummaryUserReviewQuery, SummaryUserReviewQueryVariables>;
export const ListSellerReviewsDocument = gql`
    query ListSellerReviews($usernameOrId: String!, $orderBy: String, $limit: Float, $startingAfter: String, $endingBefore: String, $filters: ReviewFilterInput) {
  listSellerReviews(
    usernameOrId: $usernameOrId
    orderBy: $orderBy
    limit: $limit
    starting_after: $startingAfter
    ending_before: $endingBefore
    filters: $filters
  ) {
    count
    items {
      review
      rating
      reviewer {
        id
        email
        username
        profile {
          avatar
          name
        }
      }
      seller {
        id
        email
        username
        profile {
          avatar
          name
        }
      }
      dateCreated
      id
      listing {
        id
        title
      }
    }
  }
}
    `;

/**
 * __useListSellerReviewsQuery__
 *
 * To run a query within a React component, call `useListSellerReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSellerReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSellerReviewsQuery({
 *   variables: {
 *      usernameOrId: // value for 'usernameOrId'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      startingAfter: // value for 'startingAfter'
 *      endingBefore: // value for 'endingBefore'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useListSellerReviewsQuery(baseOptions: Apollo.QueryHookOptions<ListSellerReviewsQuery, ListSellerReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSellerReviewsQuery, ListSellerReviewsQueryVariables>(ListSellerReviewsDocument, options);
      }
export function useListSellerReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSellerReviewsQuery, ListSellerReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSellerReviewsQuery, ListSellerReviewsQueryVariables>(ListSellerReviewsDocument, options);
        }
export type ListSellerReviewsQueryHookResult = ReturnType<typeof useListSellerReviewsQuery>;
export type ListSellerReviewsLazyQueryHookResult = ReturnType<typeof useListSellerReviewsLazyQuery>;
export type ListSellerReviewsQueryResult = Apollo.QueryResult<ListSellerReviewsQuery, ListSellerReviewsQueryVariables>;
export const GenerateCategoriesSitemapDocument = gql`
    query GenerateCategoriesSitemap {
  generateCategoriesSitemap {
    items {
      changefreq
      lastmod
      priority
      url
    }
  }
}
    `;

/**
 * __useGenerateCategoriesSitemapQuery__
 *
 * To run a query within a React component, call `useGenerateCategoriesSitemapQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateCategoriesSitemapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateCategoriesSitemapQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateCategoriesSitemapQuery(baseOptions?: Apollo.QueryHookOptions<GenerateCategoriesSitemapQuery, GenerateCategoriesSitemapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateCategoriesSitemapQuery, GenerateCategoriesSitemapQueryVariables>(GenerateCategoriesSitemapDocument, options);
      }
export function useGenerateCategoriesSitemapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateCategoriesSitemapQuery, GenerateCategoriesSitemapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateCategoriesSitemapQuery, GenerateCategoriesSitemapQueryVariables>(GenerateCategoriesSitemapDocument, options);
        }
export type GenerateCategoriesSitemapQueryHookResult = ReturnType<typeof useGenerateCategoriesSitemapQuery>;
export type GenerateCategoriesSitemapLazyQueryHookResult = ReturnType<typeof useGenerateCategoriesSitemapLazyQuery>;
export type GenerateCategoriesSitemapQueryResult = Apollo.QueryResult<GenerateCategoriesSitemapQuery, GenerateCategoriesSitemapQueryVariables>;
export const GenerateListingsSitemapDocument = gql`
    query GenerateListingsSitemap {
  generateListingsSitemap {
    items {
      changefreq
      lastmod
      priority
      url
    }
  }
}
    `;

/**
 * __useGenerateListingsSitemapQuery__
 *
 * To run a query within a React component, call `useGenerateListingsSitemapQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateListingsSitemapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateListingsSitemapQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateListingsSitemapQuery(baseOptions?: Apollo.QueryHookOptions<GenerateListingsSitemapQuery, GenerateListingsSitemapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateListingsSitemapQuery, GenerateListingsSitemapQueryVariables>(GenerateListingsSitemapDocument, options);
      }
export function useGenerateListingsSitemapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateListingsSitemapQuery, GenerateListingsSitemapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateListingsSitemapQuery, GenerateListingsSitemapQueryVariables>(GenerateListingsSitemapDocument, options);
        }
export type GenerateListingsSitemapQueryHookResult = ReturnType<typeof useGenerateListingsSitemapQuery>;
export type GenerateListingsSitemapLazyQueryHookResult = ReturnType<typeof useGenerateListingsSitemapLazyQuery>;
export type GenerateListingsSitemapQueryResult = Apollo.QueryResult<GenerateListingsSitemapQuery, GenerateListingsSitemapQueryVariables>;
export const GenerateSellersSitemapDocument = gql`
    query GenerateSellersSitemap {
  generateSellersSitemap {
    items {
      changefreq
      lastmod
      priority
      url
    }
  }
}
    `;

/**
 * __useGenerateSellersSitemapQuery__
 *
 * To run a query within a React component, call `useGenerateSellersSitemapQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateSellersSitemapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateSellersSitemapQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateSellersSitemapQuery(baseOptions?: Apollo.QueryHookOptions<GenerateSellersSitemapQuery, GenerateSellersSitemapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateSellersSitemapQuery, GenerateSellersSitemapQueryVariables>(GenerateSellersSitemapDocument, options);
      }
export function useGenerateSellersSitemapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateSellersSitemapQuery, GenerateSellersSitemapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateSellersSitemapQuery, GenerateSellersSitemapQueryVariables>(GenerateSellersSitemapDocument, options);
        }
export type GenerateSellersSitemapQueryHookResult = ReturnType<typeof useGenerateSellersSitemapQuery>;
export type GenerateSellersSitemapLazyQueryHookResult = ReturnType<typeof useGenerateSellersSitemapLazyQuery>;
export type GenerateSellersSitemapQueryResult = Apollo.QueryResult<GenerateSellersSitemapQuery, GenerateSellersSitemapQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($userData: CreateUserDto!) {
  signup(userData: $userData) {
    email
    facebookId
    id
    isEmailVerified
    isStaff
    profile {
      name
    }
    username
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AdminListingUpdateDto = {
  deleteReason?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  rejectReason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AdminUpdateUserDto = {
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isBanned?: InputMaybe<Scalars['Boolean']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isSuspended?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type Brand = {
  __typename?: 'Brand';
  categories?: Maybe<Array<Category>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};

export type BrandCategoryInput = {
  brandId: Scalars['Float']['input'];
  categoryIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type BrandCreateDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type BrandRemoveDto = {
  brandIds: Array<Scalars['Float']['input']>;
};

export type BrandUpdateDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Brands = {
  __typename?: 'Brands';
  hasMore: Scalars['Boolean']['output'];
  items: Array<Brand>;
};

export type Categories = {
  __typename?: 'Categories';
  count?: Maybe<Scalars['Float']['output']>;
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  items: Array<Category>;
};

export type Category = {
  __typename?: 'Category';
  banner?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Category>>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isGlobal?: Maybe<Scalars['Boolean']['output']>;
  isSponsored?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  parentCategory?: Maybe<Category>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
};

export type CategoryCreateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentCategoryId?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
};

export type CategoryFilterInput = {
  isFeatured?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CategoryRemoveDto = {
  categoryIds: Array<Scalars['Float']['input']>;
};

export type CategoryUpdateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  isSponsored?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentCategoryId?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
};

export type Chat = {
  __typename?: 'Chat';
  chatRoom?: Maybe<ChatRoom>;
  content?: Maybe<Scalars['String']['output']>;
  dateSent?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  sender: User;
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  chatName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<ChatRoomMember>>;
  relatedListing?: Maybe<Listing>;
};

export type ChatRoomMember = {
  __typename?: 'ChatRoomMember';
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type ChatRoomWithMessage = {
  __typename?: 'ChatRoomWithMessage';
  chatName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<ChatRoomMember>>;
  messages?: Maybe<Array<Chat>>;
  relatedListing?: Maybe<Listing>;
};

export type ChatRoomsWithMessage = {
  __typename?: 'ChatRoomsWithMessage';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<ChatRoomWithMessage>;
};

export type Chats = {
  __typename?: 'Chats';
  afterCursor?: Maybe<Scalars['String']['output']>;
  beforeCursor?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  hasMore: Scalars['Boolean']['output'];
  items: Array<Chat>;
};

export type Communities = {
  __typename?: 'Communities';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<Community>;
};

export type Community = {
  __typename?: 'Community';
  banner?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isFeatured: Scalars['Boolean']['output'];
  latitude?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  longitude?: Maybe<Scalars['String']['output']>;
  memberCount?: Maybe<Scalars['Float']['output']>;
  memberStatus?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<CommunityMember>>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type CommunityCreateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CommunityFilterInput = {
  locationId?: InputMaybe<Scalars['Float']['input']>;
  userIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type CommunityMember = {
  __typename?: 'CommunityMember';
  community: Community;
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  role?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type CommunityMemberCreateDto = {
  communityId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};

export type CommunityMemberUpdateDto = {
  dateJoined?: InputMaybe<Scalars['DateTime']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isBanned?: InputMaybe<Scalars['Boolean']['input']>;
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isMuted?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CommunityUpdateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  isSponsored?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CourierData = {
  __typename?: 'CourierData';
  cancelled_parcel?: Maybe<Scalars['Float']['output']>;
  success_parcel?: Maybe<Scalars['Float']['output']>;
  success_ratio?: Maybe<Scalars['Float']['output']>;
  total_parcel?: Maybe<Scalars['Float']['output']>;
};

export type CreateMessageDto = {
  chatRoomId?: InputMaybe<Scalars['Float']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  receiverId?: InputMaybe<Scalars['Float']['input']>;
  relatedListingId?: InputMaybe<Scalars['Float']['input']>;
  senderId?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateRoleDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateUserDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Favorite = {
  __typename?: 'Favorite';
  dateCreated: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  listing?: Maybe<Listing>;
  user?: Maybe<User>;
};

export type FavoriteListings = {
  __typename?: 'FavoriteListings';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<Listing>;
};

export type FavoritedUsers = {
  __typename?: 'FavoritedUsers';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<User>;
};

export type Follow = {
  __typename?: 'Follow';
  dateFollowed: Scalars['DateTime']['output'];
  followedUser?: Maybe<User>;
  id: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Follower = {
  __typename?: 'Follower';
  followStatus: Scalars['Boolean']['output'];
  id: Scalars['Float']['output'];
  user: User;
};

export type Followers = {
  __typename?: 'Followers';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<Follower>;
};

export type Listing = {
  __typename?: 'Listing';
  brand?: Maybe<Brand>;
  category?: Maybe<Category>;
  communities: Array<Community>;
  condition?: Maybe<Scalars['String']['output']>;
  courierDetails?: Maybe<Scalars['String']['output']>;
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  dealingMethod?: Maybe<Scalars['String']['output']>;
  deleteReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  favoriteCount?: Maybe<Scalars['Float']['output']>;
  favoriteStatus?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Float']['output'];
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isSold?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<Array<ListingMedia>>;
  meetupLocations?: Maybe<Array<NominatimLocation>>;
  price: Scalars['Float']['output'];
  quantity?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  user: User;
};

export type ListingCreateDto = {
  brandId?: InputMaybe<Scalars['Float']['input']>;
  categoryId: Scalars['Float']['input'];
  condition?: InputMaybe<Scalars['String']['input']>;
  courierDetails?: InputMaybe<Scalars['String']['input']>;
  dealingMethod?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mediaUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  meetupLocations?: InputMaybe<Array<NominatimLocationInput>>;
  price: Scalars['Float']['input'];
  quantity?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type ListingFilterInput = {
  brandIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  brandSlug?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  categorySlug?: InputMaybe<Array<Scalars['String']['input']>>;
  communityIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  communitySlug?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
  locationIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type ListingMedia = {
  __typename?: 'ListingMedia';
  isPrimary: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type ListingUpdateDto = {
  brandId?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  courierDetails?: InputMaybe<Scalars['String']['input']>;
  deleteReason?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSold?: InputMaybe<Scalars['Boolean']['input']>;
  isSoldHere?: InputMaybe<Scalars['Boolean']['input']>;
  mediaUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  meetupLocations?: InputMaybe<Array<NominatimLocationInput>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Listings = {
  __typename?: 'Listings';
  afterCursor?: Maybe<Scalars['String']['output']>;
  beforeCursor?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  hasMore: Scalars['Boolean']['output'];
  items: Array<Listing>;
};

export type Location = {
  __typename?: 'Location';
  banner?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};

export type LocationCreateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentLocationId?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
};

export type LocationUpdateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentLocationId?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Locations = {
  __typename?: 'Locations';
  items: Array<Location>;
};

export type MarkAsUnavailableDto = {
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isRelist?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MemberCommunityList = {
  __typename?: 'MemberCommunityList';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<CommunityMember>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add category of brand */
  addBrandCategory: Brand;
  /** Add Favorite to Listing */
  addFavorite: Favorite;
  /** Follow user */
  addFollow: Follow;
  /** Add Point */
  addPoint: Point;
  /** User update role */
  addUserRole: User;
  /** Add user to community */
  addUserToCommunity: CommunityMember;
  /** Create Brand */
  createBrand: Brand;
  /** Create Category */
  createCategory: Category;
  /** Create Community */
  createCommunity: Community;
  /** Create Listing */
  createListing: Listing;
  /** Add Review to a listing */
  createListingReview: Review;
  /** Create Location */
  createLocation: Location;
  /** Profile create */
  createProfile: Profile;
  /** Role Create */
  createRole: Role;
  /** Add Review to a seller */
  createSellerReview: Review;
  /** User create */
  createUser: User;
  /** User delete */
  deleteUser: User;
  /** Mark Notification as Read to all notification */
  markAllNotificationAsRead: Notifications;
  /** Mark Notification as Read */
  markNotificationRead: Notification;
  /** Remove Brand */
  removeBrand: Brand;
  /** Remove category of brand */
  removeBrandCategory: Brand;
  /** Remove Categories */
  removeBrands: Brands;
  /** Remove Categories */
  removeCategories: Categories;
  /** Remove Category */
  removeCategory: Category;
  /** Remove Favorite From Listing */
  removeFavorite: Favorite;
  /** Unfollow user */
  removeFollow: Follow;
  /** Remove Listing */
  removeListing: Listing;
  /** Remove Listing/Seller Review */
  removeListingReview: Review;
  /** Remove Location */
  removeLocation: Location;
  /** Remove all search history of a user */
  removeSearchHistory: Searches;
  /** Remove user from community */
  removeUserFromCommunity: CommunityMember;
  /** User remove role */
  removeUserRole: User;
  /** Password Reset */
  resetPassword: ResetStatus;
  /** Password Reset Request */
  resetRequest: ResetStatus;
  /** Send Chat Message */
  sendChatMessage: Chat;
  /** Admin update listing */
  setListingAvailability: Listing;
  /** User signup */
  signup: User;
  /** Deduct Point */
  subtractPoint: Point;
  /** Update Brand */
  updateBrand: Brand;
  /** Update Category */
  updateCategory: Category;
  /** Update Community */
  updateCommunity: Community;
  /** Update Community Member */
  updateCommunityMember: CommunityMember;
  /** Update Listing */
  updateListing: Listing;
  /** Only Admin will be able to update those information */
  updateListingAdmin: Listing;
  /** Update Listing/Seller Review */
  updateListingReview: Review;
  /** Update Location */
  updateLocation: Location;
  /** Profiile update */
  updateProfile: Profile;
  /** User update */
  updateUser: User;
  /** Admin user update */
  updateUserAdmin: User;
};


export type MutationAddBrandCategoryArgs = {
  inputData: BrandCategoryInput;
};


export type MutationAddFavoriteArgs = {
  listingId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationAddFollowArgs = {
  followedUserId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationAddPointArgs = {
  pointData: PointCreateDto;
};


export type MutationAddUserRoleArgs = {
  roleId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationAddUserToCommunityArgs = {
  communityData: CommunityMemberCreateDto;
};


export type MutationCreateBrandArgs = {
  brandData: BrandCreateDto;
};


export type MutationCreateCategoryArgs = {
  categoryData: CategoryCreateDto;
};


export type MutationCreateCommunityArgs = {
  communityData: CommunityCreateDto;
};


export type MutationCreateListingArgs = {
  listingData: ListingCreateDto;
};


export type MutationCreateListingReviewArgs = {
  reviewData: ReviewCreateDto;
};


export type MutationCreateLocationArgs = {
  locationData: LocationCreateDto;
};


export type MutationCreateProfileArgs = {
  profileData: UpdateProfileDto;
  userId: Scalars['Float']['input'];
};


export type MutationCreateRoleArgs = {
  roleData: CreateRoleDto;
};


export type MutationCreateSellerReviewArgs = {
  reviewData: SellerReviewCreateDto;
};


export type MutationCreateUserArgs = {
  userData: CreateUserDto;
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Float']['input'];
};


export type MutationMarkNotificationReadArgs = {
  notificationId: Scalars['Float']['input'];
};


export type MutationRemoveBrandArgs = {
  brandId: Scalars['Float']['input'];
};


export type MutationRemoveBrandCategoryArgs = {
  inputData: BrandCategoryInput;
};


export type MutationRemoveBrandsArgs = {
  brandData: BrandRemoveDto;
};


export type MutationRemoveCategoriesArgs = {
  categoryData: CategoryRemoveDto;
};


export type MutationRemoveCategoryArgs = {
  categoryId: Scalars['Float']['input'];
};


export type MutationRemoveFavoriteArgs = {
  listingId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationRemoveFollowArgs = {
  followedUserId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationRemoveListingArgs = {
  listingId: Scalars['Float']['input'];
};


export type MutationRemoveListingReviewArgs = {
  reviewId: Scalars['Float']['input'];
};


export type MutationRemoveLocationArgs = {
  locationId: Scalars['Float']['input'];
};


export type MutationRemoveUserFromCommunityArgs = {
  communityData: CommunityMemberCreateDto;
};


export type MutationRemoveUserRoleArgs = {
  roleId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationResetPasswordArgs = {
  resetData: ResetPasswordDto;
};


export type MutationResetRequestArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendChatMessageArgs = {
  chatData: CreateMessageDto;
};


export type MutationSetListingAvailabilityArgs = {
  listingData: MarkAsUnavailableDto;
  listingId: Scalars['Float']['input'];
};


export type MutationSignupArgs = {
  userData: CreateUserDto;
};


export type MutationSubtractPointArgs = {
  pointData: PointDeductDto;
};


export type MutationUpdateBrandArgs = {
  brandData: BrandUpdateDto;
  brandId: Scalars['Float']['input'];
};


export type MutationUpdateCategoryArgs = {
  categoryData: CategoryUpdateDto;
  categoryId: Scalars['Float']['input'];
};


export type MutationUpdateCommunityArgs = {
  communityData: CommunityUpdateDto;
  communityId: Scalars['Float']['input'];
};


export type MutationUpdateCommunityMemberArgs = {
  communityData: CommunityMemberUpdateDto;
  communityMemberId: Scalars['Float']['input'];
};


export type MutationUpdateListingArgs = {
  listingData: ListingUpdateDto;
  listingId: Scalars['Float']['input'];
};


export type MutationUpdateListingAdminArgs = {
  adminlistingData: AdminListingUpdateDto;
  listingId: Scalars['Float']['input'];
};


export type MutationUpdateListingReviewArgs = {
  reviewData: ReviewUpdateDto;
  reviewId: Scalars['Float']['input'];
};


export type MutationUpdateLocationArgs = {
  locationData: LocationUpdateDto;
  locationId: Scalars['Float']['input'];
};


export type MutationUpdateProfileArgs = {
  profileData: UpdateProfileDto;
  profileId: Scalars['Float']['input'];
};


export type MutationUpdateUserArgs = {
  userData: UpdateUserDto;
  userId: Scalars['Float']['input'];
};


export type MutationUpdateUserAdminArgs = {
  userData: AdminUpdateUserDto;
  userId: Scalars['Float']['input'];
};

export type NominatimLocation = {
  __typename?: 'NominatimLocation';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['String']['output']>;
  locality?: Maybe<Scalars['String']['output']>;
  lon?: Maybe<Scalars['String']['output']>;
  placeId?: Maybe<Scalars['String']['output']>;
  postCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateDistrict?: Maybe<Scalars['String']['output']>;
};

export type NominatimLocationInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  locality?: InputMaybe<Scalars['String']['input']>;
  lon?: InputMaybe<Scalars['String']['input']>;
  placeId?: InputMaybe<Scalars['String']['input']>;
  postCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stateDistrict?: InputMaybe<Scalars['String']['input']>;
};

export type NominatimLocations = {
  __typename?: 'NominatimLocations';
  items: Array<NominatimLocation>;
};

export type NominatimSearchDto = {
  lat?: InputMaybe<Scalars['String']['input']>;
  lon?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  chatRoomId?: Maybe<Scalars['Float']['output']>;
  content: Scalars['String']['output'];
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  listingId?: Maybe<Scalars['Float']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  relatedUserUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user: User;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type NotificationFilterInput = {
  unreadOnly?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type Notifications = {
  __typename?: 'Notifications';
  count: Scalars['Float']['output'];
  hasMore: Scalars['Boolean']['output'];
  items: Array<Notification>;
};

export type OrderRatio = {
  __typename?: 'OrderRatio';
  cancelled_parcel?: Maybe<Scalars['Float']['output']>;
  paperfly?: Maybe<CourierData>;
  pathao?: Maybe<CourierData>;
  redx?: Maybe<CourierData>;
  steadfast?: Maybe<CourierData>;
  success: Scalars['Boolean']['output'];
  success_parcel?: Maybe<Scalars['Float']['output']>;
  success_ratio?: Maybe<Scalars['Float']['output']>;
  total_parcel?: Maybe<Scalars['Float']['output']>;
};

export type OrderRatioCheckDto = {
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Point = {
  __typename?: 'Point';
  amount: Scalars['Float']['output'];
  consumed: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  expireAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isPlus: Scalars['Boolean']['output'];
  type: Transaction_Type;
  user: User;
};

export type PointCreateDto = {
  amount: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Float']['input'];
};

export type PointDeductDto = {
  amount: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Float']['input'];
};

export type Points = {
  __typename?: 'Points';
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  items: Array<Point>;
};

export type Profile = {
  __typename?: 'Profile';
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  avatarThumbnail?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  facebookHandle?: Maybe<Scalars['String']['output']>;
  googleHandle?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  instagramHandle?: Maybe<Scalars['String']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  linkedinHandle?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  twitterHandle?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Check if an email is available or not */
  checkEmailAvailability: ResetStatus;
  /** Search for order Ratio */
  checkOrderRatio: OrderRatio;
  /** Check if token valid or not */
  checkPasswordResetToken: ResetStatus;
  /** Check if a username is available or not */
  checkUsernameAvailability: ResetStatus;
  /** Find Community by Id */
  findCommunityById: Community;
  /** Get all categories sitemap */
  generateCategoriesSitemap: SitemapLists;
  /** Get User by Id */
  generateListingsSitemap: SitemapLists;
  /** Get all sellers sitemap */
  generateSellersSitemap: SitemapLists;
  /** Get Category by Id, slug or name */
  getCategory: Category;
  /** Get ChatRoom by id */
  getChatRoom: ChatRoom;
  /** Get Community by Id, slug or name */
  getCommunity: Community;
  /** Get Category by Id, slug or name */
  getListing: Listing;
  /** Get Location by Id, slug or name */
  getLocation: Location;
  /** Profile find by id */
  getProfileById: Profile;
  /** List All Role */
  getRoles: Array<Role>;
  /** Get Search History */
  getSearchHistory: TrendingSearches;
  /** Get trending Searches */
  getTrendingSearches: TrendingSearches;
  /** User find by id */
  getUserByIdOrUsername: UserWithMeta;
  /** List All Brands */
  listBrandOptions: Brands;
  /** List All Brands */
  listBrands: Brands;
  /** List All Categories */
  listCategories: Categories;
  /** List All Chat Messages */
  listChatMessages: Chats;
  /** List All Chat Rooms of a User with message */
  listChatRooms: ChatRoomsWithMessage;
  /** List All Chat Rooms of a User with message */
  listChatRoomsAdmin: ChatRoomsWithMessage;
  /** List All Communities */
  listCommunities: Communities;
  /** List All Favorited Listing of User */
  listFavoriteListing: FavoriteListings;
  /** List All Favorited Listing of User */
  listFavoritedUser: FavoritedUsers;
  /** List All Followerer */
  listFollowers: Followers;
  /** List All Following */
  listFollowing: Followers;
  /** List All Reviews of a Listing */
  listListingReviews: Reviews;
  /** List All Listings */
  listListings: Listings;
  /** List All Locations */
  listLocations: Locations;
  /** List All Notifications */
  listNotifications: Notifications;
  /** List All Point History */
  listPointsHistory: Points;
  /** List All Reviews of a seller */
  listSellerReviews: Reviews;
  /** List all communities a user is member of */
  listUserCommunity: MemberCommunityList;
  /** List All Reviews of a user */
  listUserReviews: Reviews;
  /** List All Users */
  listUsers: Array<UserWithMeta>;
  /** User logout */
  logout: User;
  /** Search for listings */
  searchListings: Listings;
  /** Search for nominatim api */
  searchLocation: NominatimLocations;
  /** List All Reviews of a seller */
  summaryUserReview: SummaryReview;
};


export type QueryCheckEmailAvailabilityArgs = {
  email: Scalars['String']['input'];
};


export type QueryCheckOrderRatioArgs = {
  orderRatioQuery: OrderRatioCheckDto;
};


export type QueryCheckPasswordResetTokenArgs = {
  token: Scalars['String']['input'];
};


export type QueryCheckUsernameAvailabilityArgs = {
  username: Scalars['String']['input'];
};


export type QueryFindCommunityByIdArgs = {
  communityId: Scalars['Float']['input'];
};


export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetChatRoomArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetCommunityArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetListingArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetLocationArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProfileByIdArgs = {
  profileId: Scalars['Float']['input'];
};


export type QueryGetUserByIdOrUsernameArgs = {
  usernameOrId: Scalars['String']['input'];
};


export type QueryListBrandOptionsArgs = {
  categoryIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};


export type QueryListBrandsArgs = {
  ending_before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  starting_after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListCategoriesArgs = {
  ending_before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CategoryFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  starting_after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListChatMessagesArgs = {
  chatRoomId: Scalars['Float']['input'];
  ending_before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  starting_after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListChatRoomsArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryListCommunitiesArgs = {
  filters?: InputMaybe<CommunityFilterInput>;
};


export type QueryListFavoriteListingArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListFavoritedUserArgs = {
  listingId: Scalars['Float']['input'];
};


export type QueryListFollowersArgs = {
  usernameOrId: Scalars['String']['input'];
};


export type QueryListFollowingArgs = {
  usernameOrId: Scalars['String']['input'];
};


export type QueryListListingReviewsArgs = {
  listingId: Scalars['Float']['input'];
};


export type QueryListListingsArgs = {
  ending_before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ListingFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  starting_after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListNotificationsArgs = {
  ending_before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<NotificationFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  starting_after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPointsHistoryArgs = {
  ending_before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  starting_after?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListSellerReviewsArgs = {
  ending_before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ReviewFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  starting_after?: InputMaybe<Scalars['String']['input']>;
  usernameOrId: Scalars['String']['input'];
};


export type QueryListUserCommunityArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListUserReviewsArgs = {
  usernameOrId: Scalars['String']['input'];
};


export type QuerySearchListingsArgs = {
  ending_before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ListingFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  query: SerachInputDto;
  starting_after?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchLocationArgs = {
  nominatimQuery: NominatimSearchDto;
};


export type QuerySummaryUserReviewArgs = {
  usernameOrId: Scalars['String']['input'];
};

export type ResetPasswordDto = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResetStatus = {
  __typename?: 'ResetStatus';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Review = {
  __typename?: 'Review';
  dateCreated: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  listing?: Maybe<Listing>;
  rating: Scalars['Float']['output'];
  review?: Maybe<Scalars['String']['output']>;
  reviewer: User;
  seller: User;
};

export type ReviewCreateDto = {
  listingId: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
  reviewerId: Scalars['Float']['input'];
};

export type ReviewFilterInput = {
  stars?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type ReviewUpdateDto = {
  rating: Scalars['Float']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
};

export type Reviews = {
  __typename?: 'Reviews';
  count: Scalars['Float']['output'];
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  items: Array<Review>;
};

export type Role = {
  __typename?: 'Role';
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Search = {
  __typename?: 'Search';
  id: Scalars['Float']['output'];
  isSaved?: Maybe<Scalars['Boolean']['output']>;
  searchQuery: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type SearchQuery = {
  __typename?: 'SearchQuery';
  searchQuery: Scalars['String']['output'];
};

export type Searches = {
  __typename?: 'Searches';
  count?: Maybe<Scalars['Float']['output']>;
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  items: Array<Search>;
};

export type SellerReviewCreateDto = {
  listingId?: InputMaybe<Scalars['Float']['input']>;
  rating: Scalars['Float']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
  reviewerId: Scalars['Float']['input'];
  sellerIdOrUsername?: InputMaybe<Scalars['String']['input']>;
};

export type SerachInputDto = {
  search: Scalars['String']['input'];
};

export type Sitemap = {
  __typename?: 'Sitemap';
  changefreq?: Maybe<Scalars['String']['output']>;
  lastmod?: Maybe<Scalars['DateTime']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  url: Scalars['String']['output'];
};

export type SitemapLists = {
  __typename?: 'SitemapLists';
  items: Array<Sitemap>;
};

/** ENUM for Category Status */
export enum Status {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Subscription = {
  __typename?: 'Subscription';
  newMessageAdded: Chat;
  newNotification: Notification;
};


export type SubscriptionNewMessageAddedArgs = {
  chatRoomId: Scalars['Float']['input'];
};

export type SummaryReview = {
  __typename?: 'SummaryReview';
  avgRating?: Maybe<Scalars['Float']['output']>;
  five_star_count?: Maybe<Scalars['Float']['output']>;
  four_star_count?: Maybe<Scalars['Float']['output']>;
  one_star_count?: Maybe<Scalars['Float']['output']>;
  reviewCount?: Maybe<Scalars['Float']['output']>;
  three_star_count?: Maybe<Scalars['Float']['output']>;
  two_star_count?: Maybe<Scalars['Float']['output']>;
};

/** ENUM for point Transaction Type */
export enum Transaction_Type {
  Expense = 'EXPENSE',
  Expired = 'EXPIRED',
  Referral = 'REFERRAL',
  Refill = 'REFILL',
  Reward = 'REWARD'
}

export type TrendingSearches = {
  __typename?: 'TrendingSearches';
  items: Array<SearchQuery>;
};

export type UpdateProfileDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarThumbnail?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  facebookHandle?: InputMaybe<Scalars['String']['input']>;
  googleHandle?: InputMaybe<Scalars['String']['input']>;
  instagramHandle?: InputMaybe<Scalars['String']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinHandle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  facebookId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isBanned: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isLocked: Scalars['Boolean']['output'];
  isModerator: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuspended: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Role>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserWithMeta = {
  __typename?: 'UserWithMeta';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  facebookId?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Float']['output']>;
  followingCount?: Maybe<Scalars['Float']['output']>;
  followingStatus?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isBanned: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isLocked: Scalars['Boolean']['output'];
  isModerator: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuspended: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  listingCount?: Maybe<Scalars['Float']['output']>;
  pointBalance?: Maybe<Scalars['Float']['output']>;
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Role>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ListCategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  startingAfter?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListCategoriesQuery = { __typename?: 'Query', listCategories: { __typename?: 'Categories', hasMore?: boolean | null, count?: number | null, items: Array<{ __typename?: 'Category', id: number, name: string, slug?: string | null, icon?: string | null, banner?: string | null, description?: string | null, status?: Status | null, isSponsored?: boolean | null, isFeatured?: boolean | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null }> } };

export type ListFeaturedCategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ListFeaturedCategoriesQuery = { __typename?: 'Query', listCategories: { __typename?: 'Categories', hasMore?: boolean | null, count?: number | null, items: Array<{ __typename?: 'Category', id: number, name: string, isFeatured?: boolean | null }> } };

export type CheckOrderRatioQueryVariables = Exact<{
  orderRatioQuery: OrderRatioCheckDto;
}>;


export type CheckOrderRatioQuery = { __typename?: 'Query', checkOrderRatio: { __typename?: 'OrderRatio', total_parcel?: number | null, success_ratio?: number | null, success_parcel?: number | null, cancelled_parcel?: number | null, success: boolean, steadfast?: { __typename?: 'CourierData', cancelled_parcel?: number | null, success_parcel?: number | null, success_ratio?: number | null, total_parcel?: number | null } | null, redx?: { __typename?: 'CourierData', cancelled_parcel?: number | null, success_parcel?: number | null, success_ratio?: number | null, total_parcel?: number | null } | null, pathao?: { __typename?: 'CourierData', cancelled_parcel?: number | null, success_parcel?: number | null, success_ratio?: number | null, total_parcel?: number | null } | null, paperfly?: { __typename?: 'CourierData', cancelled_parcel?: number | null, success_parcel?: number | null, success_ratio?: number | null, total_parcel?: number | null } | null } };

export type AddFavoriteMutationVariables = Exact<{
  listingId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
}>;


export type AddFavoriteMutation = { __typename?: 'Mutation', addFavorite: { __typename?: 'Favorite', dateCreated: any, id: number, listing?: { __typename?: 'Listing', id: number, title: string } | null, user?: { __typename?: 'User', email: string, id: number, username?: string | null } | null } };

export type ListChatsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ListChatsQuery = { __typename?: 'Query', listChatRooms: { __typename?: 'ChatRoomsWithMessage', items: Array<{ __typename?: 'ChatRoomWithMessage', chatName?: string | null, id?: number | null, isDeleted?: boolean | null, relatedListing?: { __typename?: 'Listing', id: number, title: string, price: number, media?: Array<{ __typename?: 'ListingMedia', url: string }> | null } | null, members?: Array<{ __typename?: 'ChatRoomMember', userId?: number | null, user?: { __typename?: 'User', createdAt?: any | null, id: number, email: string, username?: string | null, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null } | null }> | null, messages?: Array<{ __typename?: 'Chat', id: number, content?: string | null, dateSent?: any | null, sender: { __typename?: 'User', id: number, email: string } }> | null }> } };

export type GetChatMessageQueryVariables = Exact<{
  chatRoomId: Scalars['Float']['input'];
  endingBefore?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  startingAfter?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetChatMessageQuery = { __typename?: 'Query', listChatMessages: { __typename?: 'Chats', count?: number | null, hasMore: boolean, beforeCursor?: string | null, afterCursor?: string | null, items: Array<{ __typename?: 'Chat', id: number, content?: string | null, dateSent?: any | null, sender: { __typename?: 'User', id: number, username?: string | null, profile?: { __typename?: 'Profile', avatar?: string | null, name?: string | null } | null } }> } };

export type GetChatRoomQueryVariables = Exact<{
  chatRoomId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetChatRoomQuery = { __typename?: 'Query', getChatRoom: { __typename?: 'ChatRoom', chatName?: string | null, id: number, isDeleted?: boolean | null, relatedListing?: { __typename?: 'Listing', id: number, title: string, price: number, media?: Array<{ __typename?: 'ListingMedia', url: string }> | null } | null, members?: Array<{ __typename?: 'ChatRoomMember', userId?: number | null, user?: { __typename?: 'User', createdAt?: any | null, id: number, email: string, username?: string | null, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null } | null }> | null } };

export type SendChatMessageMutationVariables = Exact<{
  input: CreateMessageDto;
}>;


export type SendChatMessageMutation = { __typename?: 'Mutation', sendChatMessage: { __typename?: 'Chat', id: number, content?: string | null, dateSent?: any | null, sender: { __typename?: 'User', id: number, email: string } } };

export type NewMessageAddedSubscriptionVariables = Exact<{
  chatRoomId: Scalars['Float']['input'];
}>;


export type NewMessageAddedSubscription = { __typename?: 'Subscription', newMessageAdded: { __typename?: 'Chat', content?: string | null, dateSent?: any | null, id: number, sender: { __typename?: 'User', email: string, id: number } } };

export type ListBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBrandsQuery = { __typename?: 'Query', listBrands: { __typename?: 'Brands', items: Array<{ __typename?: 'Brand', description?: string | null, name: string, logo?: string | null, slug?: string | null, isFeatured?: boolean | null, id: number, categories?: Array<{ __typename?: 'Category', id: number, name: string, slug?: string | null }> | null }> } };

export type GetCommunityQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCommunityQuery = { __typename?: 'Query', getCommunity: { __typename?: 'Community', id: number, slug?: string | null, banner?: string | null, isFeatured: boolean, description?: string | null, memberCount?: number | null, name?: string | null, members?: Array<{ __typename?: 'CommunityMember', id: number, role?: string | null }> | null, location?: { __typename?: 'Location', id: number, name: string } | null } };

export type ListCommunitiesQueryVariables = Exact<{
  filters?: InputMaybe<CommunityFilterInput>;
}>;


export type ListCommunitiesQuery = { __typename?: 'Query', listCommunities: { __typename?: 'Communities', items: Array<{ __typename?: 'Community', slug?: string | null, banner?: string | null, isFeatured: boolean, id: number, description?: string | null, memberCount?: number | null, name?: string | null, members?: Array<{ __typename?: 'CommunityMember', id: number, role?: string | null }> | null, location?: { __typename?: 'Location', id: number, name: string } | null }> } };

export type ListLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListLocationsQuery = { __typename?: 'Query', listLocations: { __typename?: 'Locations', items: Array<{ __typename?: 'Location', banner?: string | null, description?: string | null, id: number, isDeleted?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, name: string, slug?: string | null }> } };

export type GetUserByIdOrUsernameQueryVariables = Exact<{
  usernameOrId: Scalars['String']['input'];
}>;


export type GetUserByIdOrUsernameQuery = { __typename?: 'Query', getUserByIdOrUsername: { __typename?: 'UserWithMeta', createdAt?: any | null, email: string, facebookId?: string | null, followerCount?: number | null, followingCount?: number | null, followingStatus?: boolean | null, id: number, isEmailVerified: boolean, isStaff: boolean, listingCount?: number | null, isApproved: boolean, isVerified: boolean, pointBalance?: number | null, username?: string | null, profile?: { __typename?: 'Profile', address?: string | null, avatar?: string | null, country?: string | null, city?: string | null, avatarThumbnail?: string | null, facebookHandle?: string | null, googleHandle?: string | null, id: number, name?: string | null, instagramHandle?: string | null, isPhoneNumberVerified?: boolean | null, linkedinHandle?: string | null, phoneNumber?: string | null, twitterHandle?: string | null, zipCode?: string | null, state?: string | null } | null, roles?: Array<{ __typename?: 'Role', id: number, name: string, description: string }> | null } };

export type AddFollowMutationVariables = Exact<{
  userId: Scalars['Float']['input'];
  followedUserId: Scalars['Float']['input'];
}>;


export type AddFollowMutation = { __typename?: 'Mutation', addFollow: { __typename?: 'Follow', id: number, dateFollowed: any, followedUser?: { __typename?: 'User', id: number } | null, user?: { __typename?: 'User', id: number } | null } };

export type ListFollowersQueryVariables = Exact<{
  usernameOrId: Scalars['String']['input'];
}>;


export type ListFollowersQuery = { __typename?: 'Query', listFollowers: { __typename?: 'Followers', items: Array<{ __typename?: 'Follower', id: number, followStatus: boolean, user: { __typename?: 'User', id: number, email: string, facebookId?: string | null, isApproved: boolean, username?: string | null, isStaff: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null } }> } };

export type ListFollowingQueryVariables = Exact<{
  usernameOrId: Scalars['String']['input'];
}>;


export type ListFollowingQuery = { __typename?: 'Query', listFollowing: { __typename?: 'Followers', items: Array<{ __typename?: 'Follower', id: number, followStatus: boolean, user: { __typename?: 'User', id: number, email: string, facebookId?: string | null, isApproved: boolean, isStaff: boolean, username?: string | null, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null } }> } };

export type RemoveFollowMutationVariables = Exact<{
  userId: Scalars['Float']['input'];
  followedUserId: Scalars['Float']['input'];
}>;


export type RemoveFollowMutation = { __typename?: 'Mutation', removeFollow: { __typename?: 'Follow', id: number, dateFollowed: any, followedUser?: { __typename?: 'User', id: number } | null, user?: { __typename?: 'User', id: number } | null } };

export type GetCategoryQueryVariables = Exact<{
  getCategoryId?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCategoryQuery = { __typename?: 'Query', getCategory: { __typename?: 'Category', id: number, name: string, slug?: string | null, icon?: string | null, banner?: string | null, description?: string | null, status?: Status | null, isSponsored?: boolean | null, isFeatured?: boolean | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } };

export type GetSearchHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSearchHistoryQuery = { __typename?: 'Query', getSearchHistory: { __typename?: 'TrendingSearches', items: Array<{ __typename?: 'SearchQuery', searchQuery: string }> } };

export type GetTrendingSearchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrendingSearchesQuery = { __typename?: 'Query', getTrendingSearches: { __typename?: 'TrendingSearches', items: Array<{ __typename?: 'SearchQuery', searchQuery: string }> } };

export type CreateListingMutationVariables = Exact<{
  listingData: ListingCreateDto;
}>;


export type CreateListingMutation = { __typename?: 'Mutation', createListing: { __typename?: 'Listing', condition?: string | null, datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string, logo?: string | null } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null } };

export type ListFavoriteListingQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type ListFavoriteListingQuery = { __typename?: 'Query', listFavoriteListing: { __typename?: 'FavoriteListings', items: Array<{ __typename?: 'Listing', condition?: string | null, dateCreated?: any | null, datePublished?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string, logo?: string | null } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null }> } };

export type ListListingsQueryVariables = Exact<{
  filters?: InputMaybe<ListingFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  endingBefore?: InputMaybe<Scalars['String']['input']>;
  startingAfter?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListListingsQuery = { __typename?: 'Query', listListings: { __typename?: 'Listings', hasMore: boolean, count?: number | null, beforeCursor?: string | null, afterCursor?: string | null, items: Array<{ __typename?: 'Listing', condition?: string | null, datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string, logo?: string | null } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, isVerified: boolean, username?: string | null, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null }> } };

export type GetListingQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetListingQuery = { __typename?: 'Query', getListing: { __typename?: 'Listing', condition?: string | null, datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string, logo?: string | null } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null } };

export type RemoveListingMutationVariables = Exact<{
  listingData: ListingUpdateDto;
  listingId: Scalars['Float']['input'];
}>;


export type RemoveListingMutation = { __typename?: 'Mutation', updateListing: { __typename?: 'Listing', condition?: string | null, datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string, logo?: string | null } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null } };

export type SearchListingsQueryVariables = Exact<{
  query: SerachInputDto;
  filters?: InputMaybe<ListingFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  startingAfter?: InputMaybe<Scalars['String']['input']>;
  endingBefore?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchListingsQuery = { __typename?: 'Query', searchListings: { __typename?: 'Listings', hasMore: boolean, count?: number | null, items: Array<{ __typename?: 'Listing', datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null }> } };

export type SetListingAvailabilityMutationVariables = Exact<{
  listingData: MarkAsUnavailableDto;
  setListingAvailabilityListingId2: Scalars['Float']['input'];
}>;


export type SetListingAvailabilityMutation = { __typename?: 'Mutation', setListingAvailability: { __typename?: 'Listing', condition?: string | null, datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string, logo?: string | null } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null } };

export type UpdateListingAdminMutationVariables = Exact<{
  adminlistingData: AdminListingUpdateDto;
  listingId: Scalars['Float']['input'];
}>;


export type UpdateListingAdminMutation = { __typename?: 'Mutation', updateListingAdmin: { __typename?: 'Listing', datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null } };

export type UpdateListingMutationVariables = Exact<{
  listingData: ListingUpdateDto;
  listingId: Scalars['Float']['input'];
}>;


export type UpdateListingMutation = { __typename?: 'Mutation', updateListing: { __typename?: 'Listing', condition?: string | null, datePublished?: any | null, dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, quantity?: number | null, slug?: string | null, dealingMethod?: string | null, courierDetails?: string | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string, logo?: string | null } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null } | null, meetupLocations?: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> | null, user: { __typename?: 'User', email: string, id: number, username?: string | null, isVerified: boolean, profile?: { __typename?: 'Profile', name?: string | null, avatar?: string | null } | null }, media?: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> | null } };

export type SearchLocationQueryVariables = Exact<{
  nominatimQuery: NominatimSearchDto;
}>;


export type SearchLocationQuery = { __typename?: 'Query', searchLocation: { __typename?: 'NominatimLocations', items: Array<{ __typename?: 'NominatimLocation', city?: string | null, country?: string | null, displayName?: string | null, lat?: string | null, locality?: string | null, lon?: string | null, placeId?: string | null, postCode?: string | null, state?: string | null, stateDistrict?: string | null }> } };

export type ListNotificationsQueryVariables = Exact<{
  filters?: InputMaybe<NotificationFilterInput>;
  endingBefore?: InputMaybe<Scalars['String']['input']>;
  startingAfter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ListNotificationsQuery = { __typename?: 'Query', listNotifications: { __typename?: 'Notifications', count: number, hasMore: boolean, items: Array<{ __typename?: 'Notification', content: string, chatRoomId?: number | null, listingId?: number | null, dateCreated?: any | null, relatedUserUsername?: string | null, read?: boolean | null, type?: string | null, id: number }> } };

export type MarkAllNotificationAsReadMutationVariables = Exact<{ [key: string]: never; }>;


export type MarkAllNotificationAsReadMutation = { __typename?: 'Mutation', markAllNotificationAsRead: { __typename?: 'Notifications', items: Array<{ __typename?: 'Notification', content: string, listingId?: number | null, chatRoomId?: number | null, dateCreated?: any | null, read?: boolean | null, relatedUserUsername?: string | null, type?: string | null, id: number }> } };

export type MarkNotificationReadMutationVariables = Exact<{
  notificationId: Scalars['Float']['input'];
}>;


export type MarkNotificationReadMutation = { __typename?: 'Mutation', markNotificationRead: { __typename?: 'Notification', content: string, listingId?: number | null, chatRoomId?: number | null, dateCreated?: any | null, read?: boolean | null, type?: string | null, relatedUserUsername?: string | null, id: number } };

export type NewNotificationSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewNotificationSubscription = { __typename?: 'Subscription', newNotification: { __typename?: 'Notification', content: string, listingId?: number | null, chatRoomId?: number | null, dateCreated?: any | null, read?: boolean | null, type?: string | null, id: number, relatedUserUsername?: string | null } };

export type UpdateProfileMutationVariables = Exact<{
  profileData: UpdateProfileDto;
  profileId: Scalars['Float']['input'];
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'Profile', address?: string | null, avatar?: string | null, country?: string | null, city?: string | null, avatarThumbnail?: string | null, facebookHandle?: string | null, googleHandle?: string | null, id: number, name?: string | null, instagramHandle?: string | null, isPhoneNumberVerified?: boolean | null, linkedinHandle?: string | null, phoneNumber?: string | null, twitterHandle?: string | null, zipCode?: string | null, state?: string | null } };

export type CheckPasswordResetTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type CheckPasswordResetTokenQuery = { __typename?: 'Query', checkPasswordResetToken: { __typename?: 'ResetStatus', success?: boolean | null } };

export type ResetRequestMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ResetRequestMutation = { __typename?: 'Mutation', resetRequest: { __typename?: 'ResetStatus', success?: boolean | null } };

export type ResetPasswordMutationVariables = Exact<{
  resetData: ResetPasswordDto;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'ResetStatus', success?: boolean | null } };

export type UpdateUserMutationVariables = Exact<{
  userData: UpdateUserDto;
  userId: Scalars['Float']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', email: string, id: number, isEmailVerified: boolean, isStaff: boolean, username?: string | null } };

export type RemoveFavoriteMutationVariables = Exact<{
  listingId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
}>;


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite: { __typename?: 'Favorite', dateCreated: any, id: number, listing?: { __typename?: 'Listing', id: number, title: string } | null, user?: { __typename?: 'User', email: string, id: number, username?: string | null } | null } };

export type RemoveSearchHistoryMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveSearchHistoryMutation = { __typename?: 'Mutation', removeSearchHistory: { __typename?: 'Searches', items: Array<{ __typename?: 'Search', searchQuery: string }> } };

export type CreateSellerReviewMutationVariables = Exact<{
  reviewData: SellerReviewCreateDto;
}>;


export type CreateSellerReviewMutation = { __typename?: 'Mutation', createSellerReview: { __typename?: 'Review', review?: string | null, rating: number, dateCreated: any, id: number, reviewer: { __typename?: 'User', id: number, email: string, username?: string | null, profile?: { __typename?: 'Profile', avatar?: string | null, name?: string | null } | null }, seller: { __typename?: 'User', id: number, email: string, username?: string | null, profile?: { __typename?: 'Profile', avatar?: string | null, name?: string | null } | null }, listing?: { __typename?: 'Listing', id: number, title: string } | null } };

export type SummaryUserReviewQueryVariables = Exact<{
  usernameOrId: Scalars['String']['input'];
}>;


export type SummaryUserReviewQuery = { __typename?: 'Query', summaryUserReview: { __typename?: 'SummaryReview', avgRating?: number | null, five_star_count?: number | null, four_star_count?: number | null, one_star_count?: number | null, three_star_count?: number | null, reviewCount?: number | null, two_star_count?: number | null } };

export type ListSellerReviewsQueryVariables = Exact<{
  usernameOrId: Scalars['String']['input'];
  orderBy?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  startingAfter?: InputMaybe<Scalars['String']['input']>;
  endingBefore?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ReviewFilterInput>;
}>;


export type ListSellerReviewsQuery = { __typename?: 'Query', listSellerReviews: { __typename?: 'Reviews', count: number, items: Array<{ __typename?: 'Review', review?: string | null, rating: number, dateCreated: any, id: number, reviewer: { __typename?: 'User', id: number, email: string, username?: string | null, profile?: { __typename?: 'Profile', avatar?: string | null, name?: string | null } | null }, seller: { __typename?: 'User', id: number, email: string, username?: string | null, profile?: { __typename?: 'Profile', avatar?: string | null, name?: string | null } | null }, listing?: { __typename?: 'Listing', id: number, title: string } | null }> } };

export type GenerateCategoriesSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateCategoriesSitemapQuery = { __typename?: 'Query', generateCategoriesSitemap: { __typename?: 'SitemapLists', items: Array<{ __typename?: 'Sitemap', changefreq?: string | null, lastmod?: any | null, priority?: number | null, url: string }> } };

export type GenerateListingsSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateListingsSitemapQuery = { __typename?: 'Query', generateListingsSitemap: { __typename?: 'SitemapLists', items: Array<{ __typename?: 'Sitemap', changefreq?: string | null, lastmod?: any | null, priority?: number | null, url: string }> } };

export type GenerateSellersSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateSellersSitemapQuery = { __typename?: 'Query', generateSellersSitemap: { __typename?: 'SitemapLists', items: Array<{ __typename?: 'Sitemap', changefreq?: string | null, lastmod?: any | null, priority?: number | null, url: string }> } };

export type SignupMutationVariables = Exact<{
  userData: CreateUserDto;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', email: string, facebookId?: string | null, id: number, isEmailVerified: boolean, isStaff: boolean, username?: string | null, profile?: { __typename?: 'Profile', name?: string | null } | null } };
