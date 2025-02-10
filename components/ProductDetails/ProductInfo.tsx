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
import { MdVerifiedUser } from "react-icons/md";
import { FaShippingFast, FaStoreAlt, FaTruckPickup } from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import { FaStore } from "react-icons/fa6";

const ProductInfo = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const [shippingMethod, setShippingMethod] = useState<"delivery"|"pickup">("delivery");
  return (
    <section className="space-y-4 p-4 lg:min-h-[577px] border border-gray-50 rounded-md">
    
      {/* <div className="space-y-4 border-b border-gray-100">
        <span className="text-base text-primaryColor font-medium">
          Listed by
        </span>

        <div className="flex   gap-3 items-center    pb-4">
          <Link href={`/seller/${ product?.user?.username ?? product?.user?.id}`}>
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
            <Link href={`/seller/${ product?.user?.username ?? product?.user?.id}`}>
              <h6 className="lg:text-base text-sm font-lexed font-medium text-primaryColor flex items-center gap-1">
                {product?.user?.profile?.name ??
                  product?.user?.username ??
                  product?.user?.email.split('@')[0]}
                  {product?.user?.isVerified && (
                      <MdVerifiedUser className="text-activeColor text-sm md:text-base "  />
                  )}
              </h6>
            </Link>

            <div className="flex flex-wrap  gap-1 items-center ">
              <SellerReviewDropdown sellerId={product?.user?.id} />
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex   gap-3 items-center justify-between ">
      <h4 className="text-primaryColor text-2xl	font-bold ">
            {product?.title}
          </h4>
        
        {/* <span className="lg:text-base text-sm font-lexed font-medium text-secondColor">
          Listed {timeAgo(product?.dateCreated)}
        </span> */}
      </div>

      <span className="lg:text-2xl text-lg font-lexed font-bold text-activeColor block">
        Tk {product?.price} 
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
          About This Item
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
                  props: { description: product?.description, title: product?.title },
                })
              )
            }
            className="text-activeColor font-medium whitespace-nowrap"
          >
            See more
          </button>
        </div>
      </div>


      <div className="border-b border-[#F1F1F1]" />
      <span className="text-lg font-lexed font-bold  block">
      How you&apos;ll get this item:
      </span>
      <div className="grid grid-cols-2 gap-x-4">
        <div className={`px-3 py-5 flex flex-col justify-between border border-[#F1F1F1] rounded-md space-y-4 relative h-[98px] ${
  shippingMethod === "delivery"
    ? " border-activeColor bg-activeColor bg-opacity-5"
    : "border-gray-200 hover:border-gray-500"
}`
        }
        onClick={() => setShippingMethod("delivery")}
        >
        <FaShippingFast width={100} height={100} className="w-auto h-[19.15px] mx-auto max-w-[65%]" />

          <span className="block text-base font-bold text-primaryColor text-center">
            Home Delivery
          </span>
          
        </div>
       
        <div className={`px-3 py-5 flex flex-col justify-between border border-[#F1F1F1] rounded-md space-y-4 relative h-[98px] ${
  shippingMethod === "pickup"
    ? " border-activeColor bg-activeColor bg-opacity-5"
    : "border-gray-200 hover:border-gray-500"
}`
        }
        onClick={() => setShippingMethod("pickup")}
        >  <FaStoreAlt width={80} height={80} className="w-auto h-[19.15px] mx-auto max-w-[65%]" />
          {/* <Image
            src={product?.brand?.logo ?? "/assets/samsungIcon.png"}
            width={80}
            height={80}
            className="w-auto h-[19.15px] mx-auto max-w-[65%]"
            alt="icon"
          /> */}
          <span className="block text-base font-bold text-primaryColor text-center">
            Pickup
          </span>
        </div>
        
      </div>
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
          // onClick={() =>
          //   dispatch(
          //     setModalOpen({
          //       title: "this is a modal",
          //       body: "chatModal",
          //       props: { productId: product.id, product: product },
          //     })
          //   )
          // }
          className="py-[13px] text-center bg-activeColor text-white text-base rounded-md"
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;
