"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { timeAgo } from "@/lib/helpers/timeAgo";
import { IoMdTime } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import FavoriteProduct from "./FavoriteProduct";
import { useSession } from "next-auth/react";
import OtherInfo from "./OtherInfo";

const ProductCard = ({ product }: { product: any }) => {
  const {data:session, status } = useSession();

  return (
    <div className="rounded-2xl border border-gray-50  cursor-pointer transition ease-in-out delay-150 duration-300">
      <div className="md:h-[270px] sm:h-[250px] h-[250px] relative overflow-hidden  rounded-lg ">
        <Link href={`/products/${product.id}`}>
          <Image
            src={
              product.media?.length > 0
                ? product.media[0].url
                : "/assets/pro1.png"
            }
            width={500}
            height={500}
            alt="product banner"
            className="h-full w-full object-cover rounded-lg  hover:scale-110 transition ease-in-out delay-150 duration-300 "
          />
        </Link>
        {status === "authenticated" && session.user?.id != product.user.id && (
          <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300">
            <FavoriteProduct listing={product} />
          </div>
        )}
        {status === "authenticated" && session?.user?.id === product.user.id &&  !product.isSold && (
          <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor  transition ease-in-out delay-150 duration-300 text-primaryColor">
            <OtherInfo listing={product}/>
          </div>
        )}
        {!product.isAvailable  && !product.isSold &&(
          <div className="absolute left-0 top-0 m-3 w-24 h-8 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor  transition ease-in-out delay-150 duration-300 text-primaryColor">
            Unavailable
          </div>
        )}
        {product.isSold &&(
          <div className="absolute left-0 top-0 m-3 w-16 h-8 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor  transition ease-in-out delay-150 duration-300 text-primaryColor">
          Sold
        </div>
        )}
      </div>
      
      <Link href={`/products/${product.id}`} className="">
        <div className="pt-2  pb-1 flex flex-row   items-center font-lexed justify-between">
          <div className="w-[85%] ">
            <h6 className="md:text-xl text-lg font-semibold text-primaryColor capitalize truncate">
              {product.title}
            </h6>
          </div>
          {/* <div className="flex gap-1  items-center">
            <CiStar className="text-secondColor text-sm" />{" "}
            <span className="text-secondColor text-sm">4.4</span>
          </div> */}
        </div>

        <div className="pb-1  flex items-center  text-secondColor ">
          <IoMdTime className="text-sm md:text-base" />
          <span className="text-sm md:text-base ps-1">
            {timeAgo(product.dateCreated)}
          </span>
        </div>

        <div className=" pb-1 flex items-center   text-secondColor">
          <AiOutlineUser className="text-sm md:text-base" />
          <span className="text-sm md:text-base ps-1">
            {product.user.username ??
              product.user.profile?.name ??
              product.user.email.split("@")[0]}
          </span>
        </div>

        <span className="text-primaryColor md:text-xl text-lg mt-1.5 font-semibold">
          <span className="text-sm pe-0.5">Tk </span> {product.price}
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
