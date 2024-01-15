import Image from "next/image";
import React from "react";
import trolly from "@/public/assets/trolly.png";
import substract from "@/public/assets/Subtract.png";
import layers from "@/public/assets/layers.png";

const SellBuyArea = () => {
  return (
    <div className="my-20 custom-container">
      <h2 className="lg:text-4xl text-2xl font-lexed text-center text-primaryColor font-semiBold">
        Best Deals Products
      </h2>
      <div className="pt-5 lg:w-[80%] w-full mx-auto flex flex-wrap justify-center items-center gap-3">
        <div className=" p-3 space-y-2  w-56  flex flex-col justify-center items-center text-center">
          <div className=" relative  w-16 h-16 bg-[#ffebeb] rounded-full flex justify-center items-center">
            <Image src={trolly} alt="" />
            <div className="absolute animate-ping w-16 h-16 left-0 border bg-[#ffebeb] rounded-full"></div>
          </div>
          <h6 className="md:text-lg text-base font-lexed font-medium text-primaryColor">
            Sell and Declutter
          </h6>
          <span className="md:text-sm text-xs text-secondColor">
            Make money while saving the earth
          </span>
        </div>

        <div className=" p-3 space-y-2  w-56 h-48 flex flex-col justify-center items-center text-center">
          <div className=" relative  w-16 h-16 bg-[#fff8dd] rounded-full flex justify-center items-center">
            <Image src={substract} alt="" />
            <div className="absolute animate-ping w-16 h-16 left-0 border bg-[#fff8dd] rounded-full 	"></div>
          </div>
          <h6 className="text-lg font-lexed font-medium text-primaryColor">
            Best Deal
          </h6>
          <span className="text-sm  text-secondColor">
            It’s also a great deal for the environment
          </span>
        </div>

        <div className=" p-3 space-y-2  w-56 h-48 flex flex-col justify-center items-center text-center">
          <div className=" relative  w-16 h-16 bg-[#e8ffed] rounded-full flex justify-center items-center">
            <Image src={layers} alt="" />
            <div className="absolute animate-ping w-16 h-16 left-0 border bg-[#e8ffed] rounded-full"></div>
          </div>
          <h6 className="text-lg font-lexed font-medium text-primaryColor">
            Simply Buy and Sell
          </h6>
          <span className="text-sm  text-secondColor">
            It’s also a great deal for the environment
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellBuyArea;
