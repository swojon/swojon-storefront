/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export type Categories = {
  __typename?: 'Categories';
  count: Scalars['Float']['output'];
  items: Array<Category>;
};

export type Category = {
  __typename?: 'Category';
  banner?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isGlobal?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isSponsored?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  parentCategory?: Maybe<Category>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type CategoryCreateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentCategoryId?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
};

export type CategoryUpdateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  isSponsored?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentCategoryId?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
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
};

export type ChatRooms = {
  __typename?: 'ChatRooms';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<ChatRoom>;
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
  createdBy: User;
  dateCreated: Scalars['DateTime']['output'];
  dateUpdated: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isDeleted: Scalars['Boolean']['output'];
  latitude?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  memberCount?: Maybe<Scalars['Float']['output']>;
  members?: Maybe<Array<CommunityMember>>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  updatedBy: User;
};

export type CommunityCreateDto = {
  banner?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
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
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMessageDto = {
  chatRoomId?: InputMaybe<Scalars['Float']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  receiverId: Scalars['Float']['input'];
  senderId: Scalars['Float']['input'];
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

export type MemberCommunityList = {
  __typename?: 'MemberCommunityList';
  count?: Maybe<Scalars['Float']['output']>;
  items: Array<CommunityMember>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Follow user */
  addFollow: Follow;
  /** User update role */
  addUserRole: User;
  /** Add user to community */
  addUserToCommunity: CommunityMember;
  /** Create Category */
  createCategory: Category;
  /** Create Community */
  createCommunity: Community;
  /** Profile create */
  createProfile: Profile;
  /** Role Create */
  createRole: Role;
  /** User create */
  createUser: User;
  /** User delete */
  deleteUser: User;
  /** List All Followerer */
  listFollowers: Followers;
  /** List All Following */
  listFollowing: Followers;
  /** User login */
  login: TokenUserData;
  /** User logout */
  logout: User;
  /** Remove Category */
  removeCategory: Category;
  /** Unfollow user */
  removeFollow: Follow;
  /** Remove user from community */
  removeUserFromCommunity: CommunityMember;
  /** User remove role */
  removeUserRole: User;
  /** Send Chat Message */
  sendChatMessage: Chat;
  /** User signup */
  signup: User;
  /** Update Category */
  updateCategory: Category;
  /** Update Community */
  updateCommunity: Community;
  /** Update Community Member */
  updateCommunityMember: CommunityMember;
  /** Profiile update */
  updateProfile: Profile;
  /** User update */
  updateUser: User;
};


export type MutationAddFollowArgs = {
  followedUserId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationAddUserRoleArgs = {
  roleId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationAddUserToCommunityArgs = {
  communityData: CommunityMemberCreateDto;
};


export type MutationCreateCategoryArgs = {
  categoryData: CategoryCreateDto;
};


export type MutationCreateCommunityArgs = {
  communityData: CommunityCreateDto;
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


export type MutationListFollowersArgs = {
  userId: Scalars['Float']['input'];
};


export type MutationListFollowingArgs = {
  userId: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  userData: CreateUserDto;
};


export type MutationRemoveCategoryArgs = {
  categoryId: Scalars['Float']['input'];
};


export type MutationRemoveFollowArgs = {
  followedUserId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
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


export type MutationUpdateProfileArgs = {
  profileData: UpdateProfileDto;
  profileId: Scalars['Float']['input'];
};


export type MutationUpdateUserArgs = {
  userData: UpdateUserDto;
  userId: Scalars['Float']['input'];
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
  /** Profile find by id */
  getProfileById: Profile;
  /** List ALl Role */
  getRoles: Array<Role>;
  /** User find by id */
  getUserById: User;
  /** User find list */
  getUsers: Array<User>;
  /** List All Categories */
  listCategories: Categories;
  /** List All Chat Messages */
  listChatMessages: Chats;
  /** List All Chat Rooms of a User */
  listChatRooms: ChatRooms;
  /** List All Communities */
  listCommunities: Communities;
  /** List all communities a user is member of */
  listUserCommunity: MemberCommunityList;
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


export type QueryGetProfileByIdArgs = {
  profileId: Scalars['Float']['input'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListChatMessagesArgs = {
  chatRoomId: Scalars['Float']['input'];
};


export type QueryListChatRoomsArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryListUserCommunityArgs = {
  userId: Scalars['Float']['input'];
};

export type Role = {
  __typename?: 'Role';
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type TokenUserData = {
  __typename?: 'TokenUserData';
  email: Scalars['String']['output'];
  expiresIn: Scalars['Float']['output'];
  facebookId: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Role>>;
  sessionId?: Maybe<Scalars['String']['output']>;
  sessionMaxAge?: Maybe<Scalars['Float']['output']>;
  token: Scalars['String']['output'];
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
  isApproved: Scalars['Boolean']['input'];
  isStaff: Scalars['Boolean']['input'];
  isSuperAdmin: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  facebookId: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isApproved: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Role>>;
};

export type ListChatsQueryVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type ListChatsQuery = { __typename?: 'Query', listChatRooms: { __typename?: 'ChatRooms', count?: number | null, items: Array<{ __typename?: 'ChatRoom', id: number, chatName?: string | null, isDeleted?: boolean | null }> } };


export const ListChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listChats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listChatRooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chatName"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}}]}}]}}]}}]} as unknown as DocumentNode<ListChatsQuery, ListChatsQueryVariables>;