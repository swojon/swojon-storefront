import React from "react";

const ProductInfoLoader = () => {
  return (
    <section className="space-y-3">
      <div className="  space-y-5">
        <div className="space-y-5">
          <small className="w-16 h-2 bg-gray-300 rounded-md block"></small>
          <div className="w-56 h-12 bg-gray-300 rounded-md"></div>
          <div className="w-28 h-6 bg-gray-300 rounded-md "></div>
        </div>

        <div className="flex space-x-2 items-center">
          <div className="w-24 h-3 bg-gray-300 rounded-md"></div>

          <div className="w-24 h-3 bg-gray-300 rounded-md"></div>
        </div>

        <div className="grid grid-cols-2 gap-2 pb-3">
          <button className="bg-gray-300 rounded-md py-4  w-full"></button>

          <button className="bg-gray-300 rounded-md py-4  w-full"></button>
        </div>

        <div className=" border-t border-gray-200 space-y-3 pt-3">
          <div className="w-16 h-2 bg-gray-300 rounded-md "></div>
          <div className="flex items-start gap-3 md:text-sm text-xs">
            <div className=" w-24 h-3 bg-gray-300 rounded-md"></div>
            <div className="w-32 h-3 bg-gray-300 rounded-md"></div>
          </div>

          <div className="flex items-start gap-3 md:text-sm text-xs">
            <div className="w-24 h-3 bg-gray-300 rounded-md"></div>
            <div className="w-32 h-3 bg-gray-300 rounded-md"></div>
          </div>

          <div className="flex items-start gap-3 md:text-sm text-xs">
            <div className="w-24 h-3 bg-gray-300 rounded-md"></div>
            <div className="w-32 h-3 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-6">
        <div className="w-16 h-2 bg-gray-300 rounded-md "></div>
        <p className="w-full h-3 bg-gray-300 rounded-md"></p>
        <p className="w-full h-3 bg-gray-300 rounded-md"></p>
        <p className="w-1/2 h-3 bg-gray-300 rounded-md"></p>
      </div>
    </section>
  );
};

export default ProductInfoLoader;
