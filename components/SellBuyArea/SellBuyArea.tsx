import Image from "next/image";
import React from "react";
import trolly from "@/public/assets/trolly.png";
import substract from "@/public/assets/Subtract.png";
import layers from "@/public/assets/layers.png";

const SellBuyArea = () => {
  return (
    <div className="md:mt-20 mt-12 custom-container">
      <h2 className="lg:text-4xl text-2xl font-lexed text-center text-primaryColor font-bold">
        Best Deals Products
      </h2>
      <div className="pt-7 lg:w-[80%] w-full mx-auto flex flex-wrap justify-center items-center gap-3">
        <div className=" p-3 space-y-3  w-64 h-48  flex flex-col justify-center items-center text-center">
          <div className=" relative  w-16 h-16 bg-[#ffebeb] rounded-full flex justify-center items-center">
            <Image src={trolly} alt="" />
            <div className="absolute animate-ping w-16 h-16 left-0 border bg-[#ffebeb] rounded-full"></div>
          </div>
          <h6 className="text-lg md:text-2xl font-lexed font-semibold text-primaryColor">
            Sell and Declutter
          </h6>
          <span className="text-sm md:text-base text-secondColor">
            Make money while saving the earth
          </span>
        </div>

        <div className=" p-3 space-y-3  w-64 h-48 flex flex-col justify-center items-center text-center">
          <div className=" relative  w-16 h-16 bg-[#fff8dd] rounded-full flex justify-center items-center">
            <Image src={substract} alt="" />
            <div className="absolute animate-ping w-16 h-16 left-0 border bg-[#fff8dd] rounded-full 	"></div>
          </div>
          <h6 className="text-lg md:text-2xl font-lexed font-semibold text-primaryColor">
            Best Deal
          </h6>
          <span className="text-sm md:text-base text-secondColor">
            It’s also a great deal for the environment
          </span>
        </div>

        <div className=" p-3 space-y-3 w-64 h-48 flex flex-col justify-center items-center text-center">
          <div className=" relative  w-16 h-16 bg-[#e8ffed] rounded-full flex justify-center items-center">
            <Image src={layers} alt="" />
            <div className="absolute animate-ping w-16 h-16 left-0 border bg-[#e8ffed] rounded-full"></div>
          </div>
          <h6 className="text-lg md:text-2xl font-lexed font-semibold text-primaryColor">
            Simply Buy and Sell
          </h6>
          <span className="text-sm md:text-base text-secondColor">
            It’s also a great deal for the environment
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellBuyArea;
