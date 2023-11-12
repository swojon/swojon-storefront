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
  facebookId: Scalars['String']['output'];
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
  facebookId: Scalars['String']['output'];
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
  facebookId: Scalars['String']['output'];
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

export type RemoveFavoriteMutationVariables = Exact<{
  listingId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
}>;


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite: { __typename?: 'Favorite', dateCreated: any, id: number, listing?: { __typename?: 'Listing', id: number, title: string } | null, user?: { __typename?: 'User', email: string, id: number, username?: string | null } | null } };


export const CreateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCreateDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"communities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"isSold"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"favoriteCount"}},{"kind":"Field","name":{"kind":"Name","value":"favoriteStatus"}}]}}]}}]} as unknown as DocumentNode<CreateListingMutation, CreateListingMutationVariables>;
export const ListCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startingAfter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"starting_after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startingAfter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMore"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"banner"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isSponsored"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"parentCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListCategoriesQuery, ListCategoriesQueryVariables>;
export const ListFeaturedCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListFeaturedCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<ListFeaturedCategoriesQuery, ListFeaturedCategoriesQueryVariables>;
export const AddFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFavorite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<AddFavoriteMutation, AddFavoriteMutationVariables>;
export const ListChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listChats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listChatRooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dateSent"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListChatsQuery, ListChatsQueryVariables>;
export const GetChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listChatMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chatRoomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dateSent"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChatMessageQuery, GetChatMessageQueryVariables>;
export const SendChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMessageDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendChatMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chatData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dateSent"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SendChatMessageMutation, SendChatMessageMutationVariables>;
export const NewMessageAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewMessageAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newMessageAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chatRoomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"dateSent"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewMessageAddedSubscription, NewMessageAddedSubscriptionVariables>;
export const ListBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListBrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listBrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ListBrandsQuery, ListBrandsQueryVariables>;
export const ListFavoriteListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListFavoriteListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listFavoriteListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"communities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"isSold"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"favoriteCount"}},{"kind":"Field","name":{"kind":"Name","value":"favoriteStatus"}}]}}]}}]}}]} as unknown as DocumentNode<ListFavoriteListingQuery, ListFavoriteListingQueryVariables>;
export const ListListingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListListings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listListings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"communities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"isSold"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"favoriteCount"}},{"kind":"Field","name":{"kind":"Name","value":"favoriteStatus"}}]}}]}}]}}]} as unknown as DocumentNode<ListListingsQuery, ListListingsQueryVariables>;
export const ListLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banner"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ListLocationsQuery, ListLocationsQueryVariables>;
export const RemoveFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFavorite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;