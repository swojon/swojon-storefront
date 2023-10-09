import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import icon1 from "@/public/assets/share.png";
import icon2 from "@/public/assets/heartIcon.png";
import ProductCard from "@/components/Products/ProductCard";
import SellerBar from "@/components/Seller/SellerBar";
import SellerRating from "@/components/Seller/SellerRating";

const card2 = [
  { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
  { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
  { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
  { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
  { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
  { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
  { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
  { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
];

const SellerProfile = () => {
  return (
    <section className="custom-container py-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Categories</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Furniture</h6>
          <MdKeyboardArrowRight />
          <h6 className=" capitalize">Product Details</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor capitalize">Seller Profile</h6>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Image src={icon1} alt="share icon" />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              share
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-primaryColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-3 pt-5">
        <div className="lg:w-[30%] w-[100%]">
          <SellerBar />
        </div>
        <div className="lg:w-[70%] w-[100%] ">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full lg:pb-10 md:pb-6 pb-4">
            {card2.map((card) => (
              <ProductCard card={card} key={card.id} />
            ))}
          </div>

          <div className=" lg:pt-10 md:pt-6 pt-4 border-t">
            <SellerRating />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerProfile;
