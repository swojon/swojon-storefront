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

export const CreateListingDocument = gql`
    mutation CreateListing($listingData: ListingCreateDTO!) {
  createListing(listingData: $listingData) {
    brand {
      id
      name
    }
    category {
      id
      name
      slug
    }
    communities {
      id
      name
    }
    dateCreated
    description
    id
    isApproved
    isFeatured
    isLive
    isSold
    location {
      id
      name
    }
    price
    title
    user {
      email
      id
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
export const ListCategoriesDocument = gql`
    query ListCategories($filters: CategoryFilterInput, $limit: Float, $startingAfter: Float) {
  listCategories(filters: $filters, limit: $limit, starting_after: $startingAfter) {
    hasMore
    count
    items {
      id
      name
      slug
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
export const ListFavoriteListingDocument = gql`
    query ListFavoriteListing($userId: Float!) {
  listFavoriteListing(userId: $userId) {
    items {
      brand {
        id
        name
      }
      category {
        id
        name
        slug
      }
      communities {
        id
        name
      }
      dateCreated
      description
      id
      isApproved
      isFeatured
      isLive
      isSold
      location {
        id
        name
      }
      price
      title
      user {
        email
        id
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
    query ListListings($filters: ListingFilterInput) {
  listListings(filters: $filters) {
    items {
      brand {
        id
        name
      }
      category {
        id
        name
        slug
      }
      communities {
        id
        name
      }
      dateCreated
      description
      id
      isApproved
      isFeatured
      isLive
      isSold
      location {
        id
        name
      }
      price
      title
      user {
        email
        id
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
      parentLocation {
        slug
        name
        id
      }
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
export const GetUserByIdDocument = gql`
    query GetUserById($userId: Float!) {
  getUserById(userId: $userId) {
    createdAt
    communities {
      id
      description
      banner
      name
      slug
    }
    email
    facebookId
    followerCount
    followingCount
    id
    isEmailVerified
    isStaff
    listingCount
    isApproved
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
      firstName
      instagramHandle
      isPhoneNumberVerified
      lastName
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
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
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
  members?: Maybe<Array<Scalars['Float']['output']>>;
  sender: User;
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  chatName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
};

export type ChatRoomWithMessage = {
  __typename?: 'ChatRoomWithMessage';
  chatName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  messages?: Maybe<Array<Chat>>;
};

export type ChatRoomsWithMessage = {
  __typename?: 'ChatRoomsWithMessage';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<ChatRoomWithMessage>;
};

export type Chats = {
  __typename?: 'Chats';
  count?: Maybe<Scalars['Float']['output']>;
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

export type CreateMessageDto = {
  chatRoomId?: InputMaybe<Scalars['Float']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  receiverId?: InputMaybe<Scalars['Float']['input']>;
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

export type Followers = {
  __typename?: 'Followers';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<User>;
};

export type Listing = {
  __typename?: 'Listing';
  brand?: Maybe<Brand>;
  category?: Maybe<Category>;
  communities: Array<Community>;
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  favoriteCount?: Maybe<Scalars['Float']['output']>;
  favoriteStatus?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Float']['output'];
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isSold?: Maybe<Scalars['Boolean']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  longitude?: Maybe<Scalars['String']['output']>;
  media: Array<ListingMedia>;
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  user: User;
};

export type ListingCommunityInputDto = {
  communityIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  listingId: Scalars['Float']['input'];
};

export type ListingCreateDto = {
  brandId?: InputMaybe<Scalars['Float']['input']>;
  categoryId: Scalars['Float']['input'];
  communityIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mediaUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type ListingFilterInput = {
  brandIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  categoryIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  communityIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  isFeatured?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
  locationIds?: InputMaybe<Array<Scalars['Float']['input']>>;
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
  communityIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Listings = {
  __typename?: 'Listings';
  count: Scalars['Float']['output'];
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
  parentLocation?: Maybe<Location>;
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

export type MemberCommunityList = {
  __typename?: 'MemberCommunityList';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<CommunityMember>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add category of brand */
  addBrandCategory: Brand;
  /** Add Communities to listing */
  addCommunityToListing: Listing;
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
  /** User create */
  createUser: User;
  /** User delete */
  deleteUser: User;
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
  /** Remove Communities from listing */
  removeCommunityToListing: Listing;
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
  /** Remove user from community */
  removeUserFromCommunity: CommunityMember;
  /** User remove role */
  removeUserRole: User;
  /** Send Chat Message */
  sendChatMessage: Chat;
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
  /** Update Listing/Seller Review */
  updateListingReview: Review;
  /** Update Location */
  updateLocation: Location;
  /** Profiile update */
  updateProfile: Profile;
  /** User update */
  updateUser: User;
};


export type MutationAddBrandCategoryArgs = {
  inputData: BrandCategoryInput;
};


export type MutationAddCommunityToListingArgs = {
  inputData: ListingCommunityInputDto;
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


export type MutationCreateUserArgs = {
  userData: CreateUserDto;
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Float']['input'];
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


export type MutationRemoveCommunityToListingArgs = {
  inputData: ListingCommunityInputDto;
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


export type MutationSendChatMessageArgs = {
  chatData: CreateMessageDto;
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
  firstName?: Maybe<Scalars['String']['output']>;
  googleHandle?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  instagramHandle?: Maybe<Scalars['String']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  linkedinHandle?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  twitterHandle?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find Community by Id */
  findCommunityById: Community;
  /** Get Category by Id, slug or name */
  getCategory: Category;
  /** Get Community by Id, slug or name */
  getCommunity: Community;
  /** Get Location by Id, slug or name */
  getLocation: Location;
  /** Profile find by id */
  getProfileById: Profile;
  /** List All Role */
  getRoles: Array<Role>;
  /** User find by id */
  getUserById: UserWithMeta;
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
  /** User login */
  login: TokenUserData;
  /** User logout */
  logout: User;
};


export type QueryFindCommunityByIdArgs = {
  communityId: Scalars['Float']['input'];
};


export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCommunityArgs = {
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


export type QueryGetUserByIdArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListBrandOptionsArgs = {
  categoryIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};


export type QueryListBrandsArgs = {
  ending_before?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  starting_after?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryListCategoriesArgs = {
  ending_before?: InputMaybe<Scalars['Float']['input']>;
  filters?: InputMaybe<CategoryFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  starting_after?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryListChatMessagesArgs = {
  chatRoomId: Scalars['Float']['input'];
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
  userId: Scalars['Float']['input'];
};


export type QueryListFollowingArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListListingReviewsArgs = {
  listingId: Scalars['Float']['input'];
};


export type QueryListListingsArgs = {
  ending_before?: InputMaybe<Scalars['Float']['input']>;
  filters?: InputMaybe<ListingFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  starting_after?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryListPointsHistoryArgs = {
  ending_before?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  starting_after?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryListSellerReviewsArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListUserCommunityArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListUserReviewsArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryLoginArgs = {
  userData: CreateUserDto;
};

export type Review = {
  __typename?: 'Review';
  dateCreated: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  listing: Listing;
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

export type ReviewUpdateDto = {
  rating: Scalars['Float']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
};

export type Reviews = {
  __typename?: 'Reviews';
  count: Scalars['Float']['output'];
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

/** ENUM for Category Status */
export enum Status {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Subscription = {
  __typename?: 'Subscription';
  newMessageAdded: Chat;
};


export type SubscriptionNewMessageAddedArgs = {
  chatRoomId: Scalars['Float']['input'];
};

/** ENUM for point Transaction Type */
export enum Transaction_Type {
  Expense = 'EXPENSE',
  Expired = 'EXPIRED',
  Referral = 'REFERRAL',
  Refill = 'REFILL',
  Reward = 'REWARD'
}

export type TokenUserData = {
  __typename?: 'TokenUserData';
  email: Scalars['String']['output'];
  expiresIn: Scalars['Float']['output'];
  facebookId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Role>>;
  sessionId?: Maybe<Scalars['String']['output']>;
  sessionMaxAge?: Maybe<Scalars['Float']['output']>;
  token: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UpdateProfileDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatarThumbnail?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  facebookHandle?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  googleHandle?: InputMaybe<Scalars['String']['input']>;
  instagramHandle?: InputMaybe<Scalars['String']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedinHandle?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  facebookId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Role>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserWithMeta = {
  __typename?: 'UserWithMeta';
  communities?: Maybe<Array<Community>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  facebookId?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Float']['output']>;
  followingCount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  listingCount?: Maybe<Scalars['Float']['output']>;
  pointBalance?: Maybe<Scalars['Float']['output']>;
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Role>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CreateListingMutationVariables = Exact<{
  listingData: ListingCreateDto;
}>;


export type CreateListingMutation = { __typename?: 'Mutation', createListing: { __typename?: 'Listing', dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null, communities: Array<{ __typename?: 'Community', id: number, name?: string | null }>, location?: { __typename?: 'Location', id: number, name: string } | null, user: { __typename?: 'User', email: string, id: number }, media: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> } };

export type ListCategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  startingAfter?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ListCategoriesQuery = { __typename?: 'Query', listCategories: { __typename?: 'Categories', hasMore?: boolean | null, count?: number | null, items: Array<{ __typename?: 'Category', id: number, name: string, slug?: string | null, banner?: string | null, description?: string | null, status?: Status | null, isSponsored?: boolean | null, isFeatured?: boolean | null, parentCategory?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null }> } };

export type ListFeaturedCategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFilterInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ListFeaturedCategoriesQuery = { __typename?: 'Query', listCategories: { __typename?: 'Categories', hasMore?: boolean | null, count?: number | null, items: Array<{ __typename?: 'Category', id: number, name: string, isFeatured?: boolean | null }> } };

export type AddFavoriteMutationVariables = Exact<{
  listingId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
}>;


export type AddFavoriteMutation = { __typename?: 'Mutation', addFavorite: { __typename?: 'Favorite', dateCreated: any, id: number, listing?: { __typename?: 'Listing', id: number, title: string } | null, user?: { __typename?: 'User', email: string, id: number, username?: string | null } | null } };

export type ListChatsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ListChatsQuery = { __typename?: 'Query', listChatRooms: { __typename?: 'ChatRoomsWithMessage', items: Array<{ __typename?: 'ChatRoomWithMessage', chatName?: string | null, id: number, isDeleted?: boolean | null, messages?: Array<{ __typename?: 'Chat', id: number, content?: string | null, dateSent?: any | null, sender: { __typename?: 'User', id: number, email: string } }> | null }> } };

export type GetChatMessageQueryVariables = Exact<{
  chatRoomId: Scalars['Float']['input'];
}>;


export type GetChatMessageQuery = { __typename?: 'Query', listChatMessages: { __typename?: 'Chats', items: Array<{ __typename?: 'Chat', id: number, content?: string | null, dateSent?: any | null, sender: { __typename?: 'User', id: number, email: string } }> } };

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

export type ListFavoriteListingQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type ListFavoriteListingQuery = { __typename?: 'Query', listFavoriteListing: { __typename?: 'FavoriteListings', items: Array<{ __typename?: 'Listing', dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null, communities: Array<{ __typename?: 'Community', id: number, name?: string | null }>, location?: { __typename?: 'Location', id: number, name: string } | null, user: { __typename?: 'User', email: string, id: number }, media: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> }> } };

export type ListListingsQueryVariables = Exact<{
  filters?: InputMaybe<ListingFilterInput>;
}>;


export type ListListingsQuery = { __typename?: 'Query', listListings: { __typename?: 'Listings', items: Array<{ __typename?: 'Listing', dateCreated?: any | null, description?: string | null, id: number, isApproved?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, isSold?: boolean | null, price: number, title: string, favoriteCount?: number | null, favoriteStatus?: boolean | null, brand?: { __typename?: 'Brand', id: number, name: string } | null, category?: { __typename?: 'Category', id: number, name: string, slug?: string | null } | null, communities: Array<{ __typename?: 'Community', id: number, name?: string | null }>, location?: { __typename?: 'Location', id: number, name: string } | null, user: { __typename?: 'User', email: string, id: number }, media: Array<{ __typename?: 'ListingMedia', url: string, isPrimary: boolean }> }> } };

export type ListLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListLocationsQuery = { __typename?: 'Query', listLocations: { __typename?: 'Locations', items: Array<{ __typename?: 'Location', banner?: string | null, description?: string | null, id: number, isDeleted?: boolean | null, isFeatured?: boolean | null, isLive?: boolean | null, name: string, slug?: string | null, parentLocation?: { __typename?: 'Location', slug?: string | null, name: string, id: number } | null }> } };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'UserWithMeta', createdAt: any, email: string, facebookId?: string | null, followerCount?: number | null, followingCount?: number | null, id: number, isEmailVerified: boolean, isStaff: boolean, listingCount?: number | null, isApproved: boolean, pointBalance?: number | null, username?: string | null, communities?: Array<{ __typename?: 'Community', id: number, description?: string | null, banner?: string | null, name?: string | null, slug?: string | null }> | null, profile?: { __typename?: 'Profile', address?: string | null, avatar?: string | null, country?: string | null, city?: string | null, avatarThumbnail?: string | null, facebookHandle?: string | null, googleHandle?: string | null, id: number, firstName?: string | null, instagramHandle?: string | null, isPhoneNumberVerified?: string | null, lastName?: string | null, linkedinHandle?: string | null, phoneNumber?: string | null, twitterHandle?: string | null, zipCode?: string | null, state?: string | null } | null, roles?: Array<{ __typename?: 'Role', id: number, name: string, description: string }> | null } };

export type RemoveFavoriteMutationVariables = Exact<{
  listingId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
}>;


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite: { __typename?: 'Favorite', dateCreated: any, id: number, listing?: { __typename?: 'Listing', id: number, title: string } | null, user?: { __typename?: 'User', email: string, id: number, username?: string | null } | null } };
