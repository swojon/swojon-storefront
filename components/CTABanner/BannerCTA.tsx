import Image from "next/image";
import React from "react";
import trolly from "@/public/assets/trolly.png";
import substract from "@/public/assets/Subtract.png";
import layers from "@/public/assets/layers.png";
import Link from "next/link";

const BannerCTA = () => {
  return (
    <div className="">
        <div className="flex md:flex-row flex-col w-full h-full custom-container ">
  <div className="md:flex-1  pt-[3vh] md:pt-0 flex items-center z-10 ">
    <div className=" lg:space-y-3 space-y-2">
     
              {/* Content Section */}
              <div className="space-y-6 pr-4">
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 leading-tight">
          Boost Your Sales, Expand Your Reach - It&apos;s free
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
          List your products on swojon and unlock instant visibility to thousands of potential customers. Get a free store, increased product exposure.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex space-x-4">
          <Link href="/upload-product">
                <button className="py-3.5 px-9  xs:px-3  bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-xl lg:text-lg md:text-base sm:text-xs font-lexed font-medium  whitespace-nowrap shadow-2xl  w-full md:w-auto  hover:shadow-lg hover:-translate-y-1">
                  List Your Product
                </button>
              </Link>
          </div>
        </div>
    </div>
  </div>

  <div className="md:flex-1 h-full z-10 hidden md:block">
    <div className="w-full h-full  flex md:justify-right justify-end md:items-end">
      <Image
        src={"/stickers/Fly.svg"}
        alt="mobile"
        width={1000}
        height={750}
        className="md:w-[65%] w-[40%] xl:h-[90%] md:h-auto h-[70%]"
      />
    </div>
  </div>
</div>

     
    </div>
  );
};

export default BannerCTA;
