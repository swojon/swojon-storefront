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
    <section className="space-y-3 overflow-auto scroll-hidden">
      <div className="  space-y-4">
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
        {/* 
        <div className="flex space-x-1 items-center">
          <HiLocationMarker className="text-activeColor" />
          <span className=" md:text-sm text-xs">Halishohor, Chattagram</span>
        </div> */}

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
                    <span className="absolute tooltip z-20 whitespace-nowrap -top-11 bg-white text-primaryColor border left-[50%] p-2  -translate-x-1/2 text-xs rounded-md">
                      Please sign in first
                      <span className="absolute left-[50%]  -translate-x-1/2 bottom-1.5 h-[2px] w-[85%]  bg-gray-400"></span>
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
                    <span className="absolute tooltip z-20 whitespace-nowrap -top-11 bg-white text-primaryColor border left-[50%] p-2  -translate-x-1/2 text-xs rounded-md">
                      Please sign in first
                      <span className="absolute left-[50%]  -translate-x-1/2 bottom-1.5 h-[2px] w-[85%]  bg-gray-400"></span>
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
                ? `${product?.parentCategory?.name} > ${product?.category.name}`
                : product?.category.name}
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
      </div>

      {/* <div className="space-y-2 ">
        <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
          Tags
        </h6>
      
      </div> */}
    </section>
  );
};

export default ProductInfo;
