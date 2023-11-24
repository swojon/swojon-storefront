'use client'
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShareIcon from "@/public/assets/share.png";
import icon2 from "@/public/assets/heartIcon.png";
import ProductCard from "@/components/Products/ProductCard";
import SellerBar from "@/components/Seller/SellerBar";
import SellerRating from "@/components/Seller/SellerRating";
import { useGetUserByIdQuery } from "@/apollograph/generated";
import SellerProductList from "@/components/Seller/SellerProductList";
import SellerProfileCard from "@/components/Seller/SellerProfileCard";

const SellerProfile = ({ params }: { params: { sellerId: string }}) => {
  const sellerId = parseInt(params.sellerId, 10)
  const {data, error, loading} = useGetUserByIdQuery({
    variables: {
      userId: sellerId
    },
    skip: !sellerId
  })
  const seller = data?.getUserById;

  return (
    <section className="custom-container py-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Seller</h6>
          <MdKeyboardArrowRight />
          <h6 className="">{seller?.username ?? seller?.email}</h6>
          <MdKeyboardArrowRight />
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Image 
              src={ShareIcon} 
              alt="share icon"
           />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              share
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-primaryColor"></span>
            </span>
          </div>
        </div>
      </div>
      {seller && 
      <div className="flex lg:flex-row flex-col gap-3 pt-5">
        <div className="lg:w-[30%] w-[100%]">
          {/* <SellerBar seller={seller}/>
           */}
           <SellerProfileCard seller={seller} />
        </div>
        <div className="lg:w-[70%] w-[100%] ">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full lg:pb-10 md:pb-6 pb-4">
           
            <SellerProductList sellerId={seller.id} />
          </div>

          <div className=" lg:pt-10 md:pt-6 pt-4 border-t">
            <SellerRating sellerId={seller.id} />
          </div>
        </div>
      </div>
      }
    </section>
  );
};

export default SellerProfile;
