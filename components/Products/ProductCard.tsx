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
import { IoMdTime } from "react-icons/io";
import { TiUser } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import {
  ListListingsDocument,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from "@/apollograph/generated";
import FavoriteProduct from "./FavoriteProduct";

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

  return (
    <div className="rounded-2xl   cursor-pointer transition ease-in-out delay-150 duration-300">
      <div className="md:h-[270px] sm:h-[250px] h-[250px] relative overflow-hidden  rounded-lg ">
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
            className="h-full w-full object-cover rounded-lg  hover:scale-110 transition ease-in-out delay-150 duration-300 "
          />
        </Link>
        {authState.isAuthenticated && (
          <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300">
            <FavoriteProduct listing={listing} />
          </div>
        )}
      </div>

      <Link href={`/products/${listing.id}`} className="">
        <div className="  py-1 flex flex-row   items-center font-lexed justify-between">
          <div className="w-[85%] ">
            <h6 className="lg:text-lg text-base font-semibold text-primaryColor capitalize truncate">
              {listing.title}
            </h6>
          </div>
          {/* <div className="flex gap-1  items-center">
            <CiStar className="text-secondColor text-sm" />{" "}
            <span className="text-secondColor text-sm">4.4</span>
          </div> */}
        </div>

        <div className="pb-1  flex items-center  text-secondColor ">
          <IoMdTime className="text-xs " />
          <span className="text-xs  ps-1">{timeAgo(listing.dateCreated)}</span>
        </div>

        <div className=" pb-1 flex items-center   text-secondColor">
          <AiOutlineUser className="text-xs" />
          <span className="text-xs ps-1">
            {listing.user.username ?? listing.user.profile?.name ?? listing.user.email.split('@')[0]}
          </span>
        </div>

        <span className="text-primaryColor  md:text-base  text-md mt-1.5 font-medium">
          <span className="text-xs pe-0.5">Tk </span> {listing.price}
        </span>
      </Link>

      {/* {authState.isAuthenticated ? (
         
      <div className="px-2.5 pb-2.5 grid grid-cols-2 gap-2">
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
     
            <div className="px-2.5 pb-2.5  grid grid-cols-2 gap-2">
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
        
        )} */}
    </div>
  );
};

export default ProductCard;
