import React from "react";
import { BsDot } from "react-icons/bs";

const ProductInfoLoader = () => {
  return (
    <section className="space-y-5 p-4  animate-pulse">
      <div className="space-y-4 border-b border-gray-100">
        <div className="h-2 w-16 bg-gray-300 rounded-md"></div>

        <div className="flex   gap-3 items-center    pb-5">
          <div className="h-[60px] w-[60px] bg-gray-300 rounded-full"></div>

          <div className=" space-y-4">
            <h6 className="h-2 w-20 bg-gray-300 rounded-md"></h6>

            <div className="flex gap-3 items-center">
              <div className="h-2 w-20 bg-gray-300 rounded-md "></div>
              <BsDot className="text-secondColor text-lg" />
              <div className="h-2 w-20 bg-gray-300 rounded-md "></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex   gap-3 items-center justify-between ">
        <div className="h-2 w-[20%] bg-gray-300 rounded-md"></div>
        <div className="h-2 w-[20%] bg-gray-300 rounded-md" />
      </div>

      <div className="h-5 w-[30%] bg-gray-300 rounded-md"></div>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="h-[100px] w-full bg-gray-300 rounded-md" />

        <div className="h-[100px] w-full bg-gray-300 rounded-md" />
      </div>

      <div className="px-4 py-5  border border-[#F1F1F1] rounded-md space-y-5">
        <div className="flex   gap-3 items-center justify-between ">
          <div className="h-2 w-[20%] bg-gray-300 rounded-md" />
          <div className="h-2 w-[20%] bg-gray-300 rounded-md" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-2 w-[60%] bg-gray-300 rounded-md" />
        </div>
      </div>

      <div className="border-b border-[#F1F1F1]" />

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="h-12 w-full bg-gray-300 rounded-md" />
        <div className="h-12 w-full bg-gray-300 rounded-md" />
      </div>
    </section>
  );
};

export default ProductInfoLoader;
