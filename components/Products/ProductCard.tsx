"use client";
import Image from "next/image";
import React, { useState } from "react";
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
  const [showOfferPriceTooltip, setShowOfferPriceTooltip] = useState(false);
  const [showChatNowTooltip, setShowChatNowTooltip] = useState(false);
  
  const handleOfferPriceClick = () => {
    setShowOfferPriceTooltip(!showOfferPriceTooltip);
    setShowChatNowTooltip(false);
  };

  const handleChatNowClick = () => {
    setShowChatNowTooltip(!showChatNowTooltip);
    setShowOfferPriceTooltip(false);
  };

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
    <div className="rounded-2xl bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
      <div className="md:h-[215px] h-[225px] relative overflow-hidden  rounded-t-xl rounded-b-sm">
        <Link href={`/products/${listing.id}`}>
          <Image
            src={
              listing.media?.length > 0
                ? listing.media[0].url
                : "/assets/pro1.png"
            }
            width={500}
            height={500}
            alt="product banner"
            className="h-full w-full object-cover rounded-t-xl rounded-b-sm hover:scale-110 transition ease-in-out delay-150 duration-300 "
          />
        </Link> 
         {authState.isAuthenticated && <>
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
         </>} 
        
      </div>

      <div className="pt-3  flex flex-row   items-center font-lexed ">
        <Link href={`/products/${listing.id}`} className="w-[63%] ">
          <h6 className="lg:text-lg text-base font-semibold text-primaryColor capitalize truncate">
            {listing.title}
          </h6>
        </Link>
        <span className="text-activeColor  md:text-sm  text-sm w-[37%]  flex justify-end items-center truncate">
          <span className="text-xs pe-0.5">TK,</span> {listing.price}
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
      {authState.isAuthenticated ? (
         
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
          className="border border-activeColor text-whiteColor bg-activeColor  rounded-lg py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300"
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
          className="border border-activeColor text-activeColor  rounded-lg py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300"
        >
          Chat Now
        </button>
      </div>
       
        ) : (
     
            <div className="grid grid-cols-2 gap-2">
              <div className="relative" onClick={handleOfferPriceClick}>
                <button className="border border-activeColor text-whiteColor bg-activeColor rounded-lg py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg cursor-pointer transition ease-in-out delay-150 duration-300 w-full">
                  Offer Price
                </button>
                {showOfferPriceTooltip && (
                  <Link href="/signin" className="">
                    <span className="absolute tooltip z-20 whitespace-nowrap -top-11 border bg-white text-primaryColor  left-[50%] p-2  -translate-x-1/2 text-xs rounded-md">
                      Please <span className="underline">Sign In</span> first
                    </span>
                  </Link>
                )}
              </div>

              <div className="relative" onClick={handleChatNowClick}>
                <button className="border border-activeColor text-activeColor rounded-lg py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg cursor-pointer transition ease-in-out delay-150 duration-300 w-full">
                  Chat Now
                </button>
                {showChatNowTooltip && (
                  <Link href="/signin" className="">
                    <span className="absolute tooltip z-20 whitespace-nowrap -top-11 border bg-white text-primaryColor  left-[50%] p-2  -translate-x-1/2 text-xs rounded-md">
                      Please <span className="underline">Sign In</span> first
                    </span>
                  </Link>
                )}
              </div>
            </div>
        
        )}

    </div>
  );
};

export default ProductCard;
