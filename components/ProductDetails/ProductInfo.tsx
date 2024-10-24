"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetail.css";
import Link from "next/link";
import { setModalOpen } from "@/app/redux/modalSlice";
import { timeAgo } from "@/lib/helpers/timeAgo";
import "./ProductDetail.css";
import SellerReviewDropdown from "../Review/SellerReviewDropdown";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import defaultAvatar from "@/public/assets/defaultAvatar.svg";

const ProductInfo = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  return (
    <section className="space-y-4 p-4 lg:min-h-[577px] border border-gray-50 rounded-md">
    
      <div className="space-y-4 border-b border-gray-100">
        <span className="text-base text-primaryColor font-medium">
          Listed by
        </span>

        <div className="flex   gap-3 items-center    pb-4">
          <Link href={`/seller/${product?.user?.id}`}>
            <div className=" md:h-[60px] h-[40px] md:w-[60px] w-[40px] rounded-full">
              <Image
                src={product?.user?.profile?.avatar ?? defaultAvatar}
                width={400}
                height={400}
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Link>

          <div className="  md:space-y-2 space-y-1">
            <Link href={`/seller/${product?.user?.id}`}>
              <h6 className="lg:text-base text-sm font-lexed font-medium text-primaryColor">
                {product?.user?.profile?.name ??
                  product?.user?.username ??
                  product?.user?.email.split('@')[0]}
              </h6>
            </Link>

            <div className="flex flex-wrap  gap-1 items-center ">
              <SellerReviewDropdown sellerId={product?.user?.id} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex   gap-3 items-center justify-between ">
        <span className="lg:text-base text-sm font-lexed font-medium text-primaryColor">
          Item Information
        </span>
        <span className="lg:text-base text-sm font-lexed font-medium text-secondColor">
          Listed {timeAgo(product?.dateCreated)}
        </span>
      </div>

      <span className="lg:text-2xl text-lg font-lexed font-bold text-activeColor block">
        {product?.price} Tk
      </span>

      {product?.quantity > 1 && (
        <div className=" px-3 py-2 bg-[#F1F1F1] rounded-md">
          <span className="text-primaryColor text-sm font-medium ">
            {product.quantity} Items available
          </span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-4">
        <div className="px-3 py-5 flex flex-col justify-between border border-[#F1F1F1] rounded-md space-y-4 relative h-[98px]">
          <Image
            src="/assets/starIcon.png"
            width={80}
            height={80}
            className="w-[22px] h-[19.15px] mx-auto"
            alt="icon"
          />
          <span className="block text-base font-bold text-primaryColor text-center">
            {product?.condition}
          </span>
          <div className="absolute right-1 -top-3">
            <Image
              src="/assets/info.png"
              width={80}
              height={80}
              className="w-[16px] h-[16px] "
              alt="icon"
            />
          </div>
        </div>
        {!!product?.brand && (
          <div className="px-3 py-5 flex flex-col justify-between border border-[#F1F1F1] rounded-md space-y-4 h-[98px]">
            <Image
              src={product?.brand?.logo ?? "/assets/samsungIcon.png"}
              width={80}
              height={80}
              className="w-auto h-[19.15px] mx-auto max-w-[65%]"
              alt="icon"
            />
            <span className="block text-base font-bold text-primaryColor text-center">
              {product?.brand?.name}
            </span>
          </div>
        )}
      </div>

      <div className="p-4  border border-[#F1F1F1] rounded-md space-y-4">
        <span className=" text-base font-medium text-secondColor text-center">
          Additional Details
        </span>

        <div className="flex flex-wrap gap-2 justify-between items-center">
          <div className="w-[75%]">
            <p className="truncate text-base font-bold text-primaryColor ">
              {product?.description}
            </p>
          </div>
          <button
            onClick={() =>
              dispatch(
                setModalOpen({
                  title: "this is a modal",
                  body: "additionalDetails",
                  props: { description: product?.description },
                })
              )
            }
            className="text-activeColor font-medium whitespace-nowrap"
          >
            See more
          </button>
        </div>
      </div>

      {/*==== for Courier Delivery==== */}
      {product?.dealingMethod === "courier" && (
        <div className="p-4  border border-[#F1F1F1] rounded-md space-y-4">
          <span className=" text-base font-medium text-secondColor text-center">
            Courier Delivery
          </span>

          <div className="flex gap-2 justify-between items-center">
            <h6 className=" truncate text-base font-bold text-primaryColor ">
              150 Tk
            </h6>
          </div>

          <div className="border-b border-[#F1F1F1]" />

          <div className="flex gap-2 justify-between items-center">
            <div className="w-[75%]">
              <p className=" truncate text-base font-medium text-primaryColor ">
                User can request delivery options
              </p>
            </div>
            <button className="text-activeColor font-medium">See more</button>
          </div>
        </div>
      )}

      {/*==== for Meetup==== */}

      {product?.dealingMethod === "meetup" && (
        <div className="p-4  border border-[#F1F1F1] rounded-md space-y-3">
          <div className="flex justify-between items-center">
            <span className=" text-base font-medium text-secondColor text-center">
              Meetup
            </span>
            {/* <span className=" text-base font-medium text-secondColor text-center relative">
              View in map
              <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-400"></span>
            </span> */}
          </div>
          {product?.meetupLocations?.map((mL: any) => (
            <div
              key={mL.placeId}
              className="flex justify-between items-center gap-2 "
            >
              <div className="flex gap-2 items-center w-[85%]">
                <span className=" text-base font-bold text-primaryColor text-center">
                  <CiLocationOn />
                </span>
                <span className="truncate pr-2 text-base font-bold text-primaryColor text-center relative">
                  {mL.displayName}
                </span>
              </div>
              <Link
              href={`https://maps.google.com/?q=${mL.lat},${mL.lon}`}
              target="blank">

<span className="inline-block whitespace-nowrap text-sm font-medium text-secondColor text-center relative">
                Map
                <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-400"></span>
              </span>
              </Link>
              
            </div>
          ))}
        </div>
      )}

      <div className="border-b border-[#F1F1F1]" />

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {/* <button
          onClick={() =>
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "sendOfferModal",
                props: { productId: product.id, product: product },
              })
            )
          }
          className="py-[13px] text-center bg-activeColor text-white text-base rounded-md"
        >
          Make Offer
        </button> */}
        <button
          onClick={() =>
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "chatModal",
                props: { productId: product.id, product: product },
              })
            )
          }
          className="py-[13px] text-center bg-activeColor text-white text-base rounded-md"
        >
          Chat with Seller
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;
