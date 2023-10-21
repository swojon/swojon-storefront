/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ListCategories($filters: CategoryFilterInput, $limit: Float, $startingAfter: Float) {\n  listCategories(filters: $filters, limit: $limit, starting_after: $startingAfter) {\n    hasMore\n    count\n    items {\n      id\n      name\n      slug\n      banner\n      description\n      status\n      isSponsored\n      isFeatured\n      parentCategory {\n        id\n        name\n        slug\n      }\n    }\n  }\n}": types.ListCategoriesDocument,
    "query ListFeaturedCategories($filters: CategoryFilterInput, $limit: Float) {\n  listCategories(filters: $filters, limit: $limit) {\n    items {\n      id\n      name\n      isFeatured\n    }\n    hasMore\n    count\n  }\n}": types.ListFeaturedCategoriesDocument,
    "query listChats($userId: Float) {\n  listChatRooms(userId: $userId) {\n    items {\n      chatName\n      id\n      isDeleted\n      messages {\n        id\n        content\n        dateSent\n        sender {\n          id\n          email\n        }\n      }\n    }\n  }\n}": types.ListChatsDocument,
    "query getChatMessage($chatRoomId: Float!) {\n  listChatMessages(chatRoomId: $chatRoomId) {\n    items {\n      id\n      content\n      dateSent\n      sender {\n        id\n        email\n      }\n    }\n  }\n}": types.GetChatMessageDocument,
    "mutation SendChatMessage($input: CreateMessageDTO!) {\n  sendChatMessage(chatData: $input) {\n    id\n    content\n    dateSent\n    sender {\n      id\n      email\n    }\n  }\n}": types.SendChatMessageDocument,
    "subscription NewMessageAdded($chatRoomId: Float!) {\n  newMessageAdded(chatRoomId: $chatRoomId) {\n    content\n    dateSent\n    id\n    sender {\n      email\n      id\n    }\n  }\n}": types.NewMessageAddedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListCategories($filters: CategoryFilterInput, $limit: Float, $startingAfter: Float) {\n  listCategories(filters: $filters, limit: $limit, starting_after: $startingAfter) {\n    hasMore\n    count\n    items {\n      id\n      name\n      slug\n      banner\n      description\n      status\n      isSponsored\n      isFeatured\n      parentCategory {\n        id\n        name\n        slug\n      }\n    }\n  }\n}"): (typeof documents)["query ListCategories($filters: CategoryFilterInput, $limit: Float, $startingAfter: Float) {\n  listCategories(filters: $filters, limit: $limit, starting_after: $startingAfter) {\n    hasMore\n    count\n    items {\n      id\n      name\n      slug\n      banner\n      description\n      status\n      isSponsored\n      isFeatured\n      parentCategory {\n        id\n        name\n        slug\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListFeaturedCategories($filters: CategoryFilterInput, $limit: Float) {\n  listCategories(filters: $filters, limit: $limit) {\n    items {\n      id\n      name\n      isFeatured\n    }\n    hasMore\n    count\n  }\n}"): (typeof documents)["query ListFeaturedCategories($filters: CategoryFilterInput, $limit: Float) {\n  listCategories(filters: $filters, limit: $limit) {\n    items {\n      id\n      name\n      isFeatured\n    }\n    hasMore\n    count\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query listChats($userId: Float) {\n  listChatRooms(userId: $userId) {\n    items {\n      chatName\n      id\n      isDeleted\n      messages {\n        id\n        content\n        dateSent\n        sender {\n          id\n          email\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query listChats($userId: Float) {\n  listChatRooms(userId: $userId) {\n    items {\n      chatName\n      id\n      isDeleted\n      messages {\n        id\n        content\n        dateSent\n        sender {\n          id\n          email\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getChatMessage($chatRoomId: Float!) {\n  listChatMessages(chatRoomId: $chatRoomId) {\n    items {\n      id\n      content\n      dateSent\n      sender {\n        id\n        email\n      }\n    }\n  }\n}"): (typeof documents)["query getChatMessage($chatRoomId: Float!) {\n  listChatMessages(chatRoomId: $chatRoomId) {\n    items {\n      id\n      content\n      dateSent\n      sender {\n        id\n        email\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SendChatMessage($input: CreateMessageDTO!) {\n  sendChatMessage(chatData: $input) {\n    id\n    content\n    dateSent\n    sender {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["mutation SendChatMessage($input: CreateMessageDTO!) {\n  sendChatMessage(chatData: $input) {\n    id\n    content\n    dateSent\n    sender {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription NewMessageAdded($chatRoomId: Float!) {\n  newMessageAdded(chatRoomId: $chatRoomId) {\n    content\n    dateSent\n    id\n    sender {\n      email\n      id\n    }\n  }\n}"): (typeof documents)["subscription NewMessageAdded($chatRoomId: Float!) {\n  newMessageAdded(chatRoomId: $chatRoomId) {\n    content\n    dateSent\n    id\n    sender {\n      email\n      id\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;