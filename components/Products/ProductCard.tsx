"use client";
import Image from "next/image";
import React from "react";
import icon1 from "@/public/assets/heartIcon.png";
import time from "@/public/assets/time.png";
import user from "@/public/user1.jpg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";

const ProductCard = ({ card }: { card: any }) => {
  const dispatch = useDispatch();

  return (
    <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
      <div className="lg:h-[210px] md:h-[170px] h-[130px] relative overflow-hidden rounded-tl-md  rounded-tr-md">
        <Link href={`/products/${card.id}`}>
          <Image
            src={"/assets/pro1.png"}
            width={500}
            height={500}
            alt="product banner"
            className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
          />
        </Link>
        <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300">
          <Image src={icon1} alt="heart icon" />
        </div>
      </div>

      <div className="md:pt-3 pt-1 flex flex-row  justify-between items-center font-lexed ">
        <Link href={`/products/${card.id}`}>
          <h6 className="md:text-lg text-base font-semibold text-primaryColor capitalize">
            {card.title}
          </h6>
        </Link>
        <span className="text-activeColor md:text-base text-sm">TK, 7000</span>
      </div>

      <div className="flex items-center  text-secondColor">
        <Image src={time} alt="time icon" />
        <span className="text-xs font-lexed ps-1">10 mnt ago</span>
      </div>

      <div className="flex items-center md:space-x-2 space-x-1 md:py-4 py-2">
        <div className="w-7 h-7 rounded-full">
          <Image
            src={user}
            alt="user"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-xs text-secondColor ">Ad by</span>
        <span className="text-primaryColor md:text-base text-xs font-medium">
          Ibrahim K. Sakib
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() =>
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "sendOfferModal",
                props: { productId: card.id },
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
