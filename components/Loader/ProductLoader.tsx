import Image from "next/image";
import React from "react";

const ProductLoader = () => {
  return (
    <>
      <div className="animate-pulse   transition ease-in-out delay-150 duration-300 space-y-3">
        <div className="md:h-[270px] h-[275px] relative overflow-hidden  rounded-lg bg-gray-100 flex justify-center items-center">
          <Image
            src="/assets/image.png"
            width={200}
            height={100}
            alt="product banner"
            className="h-16 w-20 object-cover rounded-tl-md  rounded-tr-md opacity-25 "
          />
        </div>

        <div className=" w-[70%] h-3.5 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[45%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-3 bg-gray-300 rounded-md" />
      </div>

      <div className="animate-pulse   transition ease-in-out delay-150 duration-300 space-y-3">
        <div className="md:h-[270px] h-[275px] relative overflow-hidden  rounded-lg bg-gray-100 flex justify-center items-center">
          <Image
            src="/assets/image.png"
            width={200}
            height={100}
            alt="product banner"
            className="h-16 w-20 object-cover rounded-tl-md  rounded-tr-md opacity-25 "
          />
        </div>

        <div className=" w-[70%] h-3.5 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[45%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-3 bg-gray-300 rounded-md" />
      </div>

      <div className="animate-pulse   transition ease-in-out delay-150 duration-300 space-y-3">
        <div className="md:h-[270px] h-[275px] relative overflow-hidden  rounded-lg bg-gray-100 flex justify-center items-center">
          <Image
            src="/assets/image.png"
            width={200}
            height={100}
            alt="product banner"
            className="h-16 w-20 object-cover rounded-tl-md  rounded-tr-md opacity-25 "
          />
        </div>

        <div className=" w-[70%] h-3.5 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[45%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-3 bg-gray-300 rounded-md" />
      </div>

      <div className="animate-pulse   transition ease-in-out delay-150 duration-300 space-y-3">
        <div className="md:h-[270px] h-[275px] relative overflow-hidden  rounded-lg bg-gray-100 flex justify-center items-center">
          <Image
            src="/assets/image.png"
            width={200}
            height={100}
            alt="product banner"
            className="h-16 w-20 object-cover rounded-tl-md  rounded-tr-md opacity-25 "
          />
        </div>

        <div className=" w-[70%] h-3.5 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[45%] h-2 bg-gray-300 rounded-md" />
        <div className=" w-[30%] h-3 bg-gray-300 rounded-md" />
      </div>
    </>
  );
};

export default ProductLoader;
