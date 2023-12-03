"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShareIcon from "@/public/assets/share.png";
import icon2 from "@/public/assets/heartIcon.png";
import ProductCard from "@/components/Products/ProductCard";
import SellerBar from "@/components/Seller/SellerBar";
import SellerRating from "@/components/Seller/SellerRating";
import { useGetUserByIdQuery } from "@/apollograph/generated";
import SellerProductList from "@/components/Seller/SellerProductList";
import SellerProfileCard from "@/components/Seller/SellerProfileCard";
import NotMatched from "@/components/NotMatched/NotMatched";
import ProductLoader from "@/components/Loader/ProductLoader";

const tabData = [
  { id: 1, tab: "listing" },
  { id: 1, tab: "reviews" },
  { id: 1, tab: "follows" },
];

const SellerProfile = ({ params, children }: { children: any, params: { sellerId: string } }) => {
  const sellerId = parseInt(params.sellerId, 10);
  const { data, error, loading } = useGetUserByIdQuery({
    variables: {
      userId: sellerId,
    },
    skip: !sellerId,
  });
  const seller = data?.getUserById;

  const [selectedTab, setSelectedTab] = useState(tabData[0].tab);

  return (
    <section className="custom-container py-10">
      <div className="flex items-center ">
        <div
          className="flex items-center space-x-1  text-sm text-secondColor 
        w-[30%] px-2"
        >
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Seller</h6>
          <MdKeyboardArrowRight />
          <h6 className="">{seller?.username ?? seller?.email}</h6>
          <MdKeyboardArrowRight />
        </div>

        <div className="w-[70%] flex justify-between items-center  px-2">
          <div
            className={`flex flex-row items-center gap-5 text-base capitalize`}
          >
            {tabData.map((item) => (
              <span
                key={item.id}
                className={` cursor-pointer ${
                  selectedTab === item.tab
                    ? "border-b border-activeColor text-primaryColor"
                    : "border-b border-transparent hover:border-gray-200 text-secondColor"
                }`}
                onClick={() => setSelectedTab(item.tab)}
              >
                {item.tab}{" "}
                {selectedTab === item.tab && (
                  <span className="text-gray-400 text-sm">(45)</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Image src={ShareIcon} alt="share icon" />
              <span className="text-sm text-primaryColor relative  leading-0 cursor">
                share
                <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-primaryColor"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {seller && (
        <div className="flex lg:flex-row flex-col gap-3 pt-10">
          <div className="lg:w-[30%] w-[100%]">
            {/* <SellerBar seller={seller}/>
             */}
            <SellerProfileCard seller={seller} />
          </div>
          <div className="lg:w-[70%] w-[100%] ">
             {children}

            {/* <div className=" lg:pt-10 md:pt-6 pt-4 border-t">
              <SellerRating sellerId={seller.id} />
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default SellerProfile;
