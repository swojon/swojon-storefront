"use client";
import Image from "next/image";
import React from "react";
import heartIcon from "@/public/assets/heartIcon.png";
import heartIconFilled from "@/public/assets/heartIconFilled.svg.svg";
import time from "@/public/assets/time.png";
import user from "@/public/user1.jpg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";
import { timeAgo } from "@/lib/helpers/timeAgo";
import {
  ListListingsDocument,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from "@/apollograph/generated";

const ProductCard = ({ card: listing }: { card: any }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
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
    <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
      <div className="md:h-[215px] h-[225px] relative overflow-hidden rounded-tl-md  rounded-tr-md">
        <Link href={`/products/${listing.id}`}>
          <Image
            src={
              listing.media.length > 0
                ? listing.media[0].url
                : "/assets/pro1.png"
            }
            width={500}
            height={500}
            alt="product banner"
            className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
          />
        </Link>
        {listing.favoriteStatus ? (
          <div
            onClick={() => handleFavoriteRemove(listing.id, authState.user.id)}
            className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300"
          >
            <Image src={heartIconFilled} alt="heart icon filled" />
          </div>
        ) : (
          <div
            onClick={() => handleFavoriteAdd(listing.id, authState.user.id)}
            className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300"
          >
            <Image src={heartIcon} alt="heart icon" />
          </div>
        )}
      </div>

      <div className="pt-3  flex flex-row  justify-between items-center font-lexed ">
        <Link href={`/products/${listing.id}`}>
          <h6 className="lg:text-lg text-base font-semibold text-primaryColor capitalize">
            {listing.title}
          </h6>
        </Link>
        <span className="text-activeColor lg:text-base md:text-sm  text-sm">
          TK, {listing.price}
        </span>
      </div>

      <div className="flex items-center  text-secondColor pt-2">
        <Image src={time} alt="time icon" />
        <span className="text-xs font-lexed ps-1">
          {timeAgo(listing.dateCreated)}
        </span>
      </div>

      <div className="flex items-center md:space-x-2 space-x-1 md:py-4 py-3">
        <div className="w-7 h-7 rounded-full">
          <Image
            src={user}
            alt="user"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-xs text-secondColor ">Ad by</span>
        <span className="text-primaryColor lg:text-base md:text-sm text-xs font-medium">
          {listing.user.username ?? listing.user.email}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() =>
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "sendOfferModal",
                props: { productId: listing.id, product: listing },
              })
            )
          }
          className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300"
        >
          Offer Price
        </button>
        <button
          onClick={() =>
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "chatModal",
                props: { productId: listing.id, product: listing },
              })
            )
          }
          className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300"
        >
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
