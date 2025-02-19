import Image from "next/image";
import React from "react";
import trolly from "@/public/assets/trolly.png";
import substract from "@/public/assets/Subtract.png";
import layers from "@/public/assets/layers.png";

const SellBuyArea = () => {
  return (
    <div className="md:mt-20 mt-12 custom-container">
      <h2 className="lg:text-4xl text-2xl font-lexed text-center text-primaryColor font-bold">
        Sell and Buy Everything on Swojon
      </h2>
      <div className="pt-7  w-full mx-auto flex flex-wrap justify-center items-center gap-6">
        <div className=" p-3 space-y-3 lg:w-96 w-64 h-48  flex flex-col justify-center items-center text-center">
          <div className=" relative  w-32 h-32 flex justify-center items-center">
            <Image src={"/stickers/Browse.svg"} width={500} height={375} alt="" />
            {/* <div className="absolute  w-16 h-16 left-0 "></div> */}
          </div>
          <h6 className="text-lg md:text-2xl font-lexed font-semibold text-primaryColor">
          Browse
          </h6>
          <span className="text-sm md:text-base text-secondColor">
          Discover great deals while contributing to a greener future.
          </span>
        </div>

        <div className=" p-3 space-y-3  w-64 lg:w-96 h-48 flex flex-col justify-center items-center text-center">
        <div className=" relative  w-32 h-32 flex justify-center items-center">
            <Image src={"/stickers/Thrive.svg"} width={500} height={375} alt="" />
            {/* <div className="absolute  w-16 h-16 left-0 "></div> */}
          </div>
          <h6 className="text-lg md:text-2xl font-lexed font-semibold text-primaryColor">
          Sell
          </h6>
          <span className="text-sm md:text-base text-secondColor">
          Make money by selling new or pre-loved items while helping the planet
          </span>
        </div>

        <div className=" p-3 space-y-3 w-64 lg:w-96 h-48 flex flex-col justify-center items-center text-center">
          <div className=" relative  w-32 h-32 flex justify-center items-center">
            <Image src={"/stickers/Grow.svg"} width={500} height={375} alt="" />
            {/* <div className="absolute  w-16 h-16 left-0 "></div> */}
          </div>
          <h6 className="text-lg md:text-2xl font-lexed font-semibold text-primaryColor">
          Grow
          </h6>
          <span className="text-sm md:text-base text-secondColor">
          Build trust with reviews and grow your business with every sale.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellBuyArea;
