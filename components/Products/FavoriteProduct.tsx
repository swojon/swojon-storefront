import {
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from "@/apollograph/generated";
import { useSession } from "next-auth/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";

function FavoriteProduct({ listing }: { listing: any }) {
  const {data:session, status} = useSession();
  const [
    addFavorite,
    { data: addData, loading: addLoading, error: addErrror },
  ] = useAddFavoriteMutation();
  const [
    removeFavorite,
    { data: removeData, loading: removeLoading, error: removeError },
  ] = useRemoveFavoriteMutation();
  const handleFavoriteAdd = (listingId: number, userId: any) => {
    addFavorite({
      variables: {
        listingId,
        userId,
      },
      update(cache, { data }) {
        // console.log("updating cache", cache,  data)
        const cId = cache.identify(listing);
        // console.log("cache id", cId)
        cache.modify({
          id: cId,
          fields: {
            favoriteCount(prev) {
              return prev + 1;
            },
            favoriteStatus(prev) {
              return true;
            },
          },
        });
        // console.log("cache updated", cache)
      },
    });
  };
  const handleFavoriteRemove = (listingId: number, userId: any) => {
    removeFavorite({
      variables: {
        listingId,
        userId,
      },
      update(cache, { data }) {
        // console.log("updating cache", cache,  data)
        const cId = cache.identify(listing);
        // console.log("cache id", cId)
        cache.modify({
          id: cId,
          fields: {
            favoriteCount(prev) {
              return prev - 1;
            },
            favoriteStatus(prev) {
              return false;
            },
          },
        });
        // console.log("cache updated", cache)
      },
    });
  };
  return (
    <>
      {status === "authenticated" && (
        <>
          {listing?.favoriteStatus ? (
            <span
              onClick={() =>
                handleFavoriteRemove(listing.id, session?.user?.id)
              }
            >
              <AiFillHeart className="text-lg text-red-400" />
            </span>
          ) : (
            <span
              onClick={() => handleFavoriteAdd(listing.id, session?.user?.id)}
            >
              <FiHeart className="text-base text-red-400" />
            </span>
          )}
        </>
      )}
    </>
  );
}

export default FavoriteProduct;
