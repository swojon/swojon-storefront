"use client";
import Image from "next/image";
import React, { useState } from "react";
import heartIcon from "@/public/assets/heartIcon.png";
import heartIconFilled from "@/public/assets/heartIconFilled.svg.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";
import { timeAgo } from "@/lib/helpers/timeAgo";
import { IoMdTime } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

import {
  ListListingsDocument,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from "@/apollograph/generated";
import FavoriteProduct from "./FavoriteProduct";
import OtherInfo from "./OtherInfo";
import { CiEdit } from "react-icons/ci";

const UserProductCard = ({ card: listing }: { card: any }) => {
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
    <div className="rounded-2xl border border-gray-50  cursor-pointer transition ease-in-out delay-150 duration-300">
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
          <div className="absolute right-10 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300">
            <FavoriteProduct listing={listing} />
          </div>
        )}
        {authState.isAuthenticated && (
          <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor  transition ease-in-out delay-150 duration-300 text-primaryColor">
            <OtherInfo />
          </div>
        )}
      </div>

      <Link href={`/products/${listing.id}`} className="">
        <div className="  py-1 flex flex-row   items-center font-lexed justify-between relative">
          <div className="w-[85%] ">
            <h6 className="lg:text-lg text-base font-semibold text-primaryColor capitalize truncate">
              {listing.title}
            </h6>
          </div>
          {authState.isAuthenticated && (
            <div className="flex items-center text-primaryColor text-sm relative">
              {/* <MdOutlineEdit className="text-lg font-bold " />{" "} */}
              <h6 className="font-medium">Edit</h6>
              <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
            </div>
          )}
        </div>

        <div className="pb-1  flex items-center  text-secondColor ">
          <IoMdTime className="text-xs " />
          <span className="text-xs  ps-1">{timeAgo(listing.dateCreated)}</span>
        </div>

        <div className=" pb-1 flex items-center   text-secondColor">
          <AiOutlineUser className="text-xs" />
          <span className="text-xs ps-1">
            {listing.user.username ??
              listing.user.profile?.name ??
              listing.user.email.split("@")[0]}
          </span>
        </div>

        <span className="text-primaryColor  md:text-base  text-md mt-1.5 font-medium">
          <span className="text-xs pe-0.5">Tk </span> {listing.price}
        </span>
      </Link>
    </div>
  );
};

export default UserProductCard;
