"use client";
import Image from "next/image";
import React from "react";
import user from "@/public/userMale.png";
import { FaStar } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";

const SellerBox = ({seller}: {seller: any }) => {
  const dispatch = useDispatch();
  return (
    <section className="shadow-md rounded-lg border">
      <div className="p-3 bg-[#F1F7FF] border-b">
        <span className="text-lg font-lexed font-medium text-primaryColor">
          Meet with Seller
        </span>
      </div>
      <div className="px-3 py-5">
        <Link href={`/seller/${seller?.id}`}>
          <div className="h-20 w-20  rounded-full">
            <Image
              src={user}
              width={400}
              height={400}
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <div className="py-3 border-b space-y-1">
          <h6 className="text-base font-lexed font-medium text-primaryColor">
            {seller?.username}
          </h6>

          <div className="flex space-x-1 items-center text-[#08B66D]">
            <MdVerifiedUser className="" />
            <span className="text-sm">Halishohor, Chattagram</span>
          </div>

          <div className="flex space-x-1 items-center">
            <div className="flex items-center space-x-1">
              <FaStar className="text-[#FFB800]" />
              <span className="text-sm">4.80</span>
            </div>

            <div className="flex items-center space-x-1">
              <BsDot className="text-secondColor" />
              <span className="text-sm">33 reviews</span>
            </div>
          </div>
        </div>

        <div className="py-3 border-b flex ">
          <div className="w-[30%] text-sm">
            <h6 className="text-secondColor">Call Now :</h6>
          </div>
          <div className=" text-sm text-activeColor">
            <h6 className="">01712345678</h6>
            <h6 className="">01712345678</h6>
          </div>
        </div>
        <div className="py-3 border-b flex ">
          <div className="w-[30%] text-sm ">
            <h6 className="text-secondColor">Email :</h6>
          </div>
          <div className=" text-sm text-activeColor">
            <h6 className="">{seller?.email}</h6>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-3">
          <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
            OFFER PRICE
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
    </section>
  );
};

export default SellerBox;
