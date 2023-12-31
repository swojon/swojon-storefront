"use client";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetail.css";
import Link from "next/link";
import { setModalOpen } from "@/app/redux/modalSlice";
import { timeAgo } from "@/lib/helpers/timeAgo";
import ReviewDropdown from "../Review/ProductReviewDropdown";
import ProductReviewDropdown from "../Review/ProductReviewDropdown";
import "./ProductDetail.css";
import SellerReviewDropdown from "../Review/SellerReviewDropdown";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import SellerReview from "./SellerReview";
import defaultAvatar from "@/public/assets/defaultAvatar.svg";

const ProductInfo = ({ product }: { product: any }) => {
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
    <section className="space-y-4 p-4 lg:min-h-[577px] border border-gray-50 rounded-md">
      {/* <div className="  space-y-4">
        <div className="space-y-2">
          <small className="text-xs text-secondColor">
            Posted {timeAgo(product?.dateCreated)}
          </small>
          <h5 className="lg:text-4xl md:text-lg text-base font-lexed text-primaryColor  capitalize">
            {product?.title}
          </h5>
          <h5 className="lg:text-2xl md:text-lg text-base font-lexed text-primaryColor ">
            TK {product?.price}
          </h5>
        </div>

        <div className="flex space-x-1 items-center">
          <div className="flex items-center ">
            <ProductReviewDropdown listingId={product.id} />
          </div>
        </div>
        
        <div className="flex space-x-1 items-center">
          <HiLocationMarker className="text-activeColor" />
          <span className=" md:text-sm text-xs">Halishohor, Chattagram</span>
        </div>

        {authState.isAuthenticated ? (
          <>
            <div className="grid grid-cols-2 gap-2 pb-3">
              <button
                onClick={() =>
                  dispatch(
                    setModalOpen({
                      title: "this is a modal",
                      body: "sendOfferModal",
                      props: { productId: product.id, product: product },
                    })
                  )
                }
                className="border border-activeColor text-whiteColor bg-activeColor  rounded-lg py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 "
              >
                Offer Price
              </button>
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
                className="border border-activeColor text-activeColor  rounded-lg py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300"
              >
                Chat Now
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2 pb-3">
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
          </>
        )}

        <div className=" border-t border-gray-200 space-y-2 pt-3">
          <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
            Details
          </h6>
          <div className="flex items-start gap-2 md:text-sm text-xs">
            <div className="w-[30%]   text-secondColor">Condition:</div>
            <div className="w-[70%]  text-primaryColor">Used</div>
          </div>

          <div className="flex items-start gap-2 md:text-sm text-xs">
            <div className="w-[30%]   text-secondColor">Brand</div>
            <div className="w-[70%]  text-primaryColor">
              {product?.brand?.name ?? "Unknown"}
            </div>
          </div>

          <div className="flex items-start gap-2 md:text-sm text-xs">
            <div className="w-[30%]   text-secondColor">Category</div>
            <div className="w-[70%]  text-primaryColor">
              {product?.category?.parentCategory
                ? `${product?.parentCategory?.name} > ${product?.category?.name}`
                : product?.category?.name}
            </div>
          </div>

          <div className="flex items-start gap-2 md:text-sm text-xs">
            <div className="w-[30%]   text-secondColor">Posted</div>
            <div className="w-[70%]  text-primaryColor">
              {product?.dateCreated}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 ">
        <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
          Description
        </h6>
        <p className="text-secondColor pb-2 lg:text-base md:text-sm text-xs">
          {product?.description}
        </p>
      </div> */}
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
                  product?.user?.email}
              </h6>
            </Link>

            <div className="flex flex-wrap  gap-1 items-center ">
              <SellerReview sellerId={product?.user?.id} />
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
            <p className=" truncate text-base font-bold text-primaryColor ">
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

              <span className="inline-block whitespace-nowrap text-sm font-medium text-secondColor text-center relative">
                Map
                <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-400"></span>
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="border-b border-[#F1F1F1]" />

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <button
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
        </button>
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
          className="py-[13px] text-center bg-secondColor text-white text-base rounded-md"
        >
          Chat with Seller
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;
