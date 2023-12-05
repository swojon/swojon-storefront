import React from "react";

const SellerCardLoader = () => {
  return (
    <div className="flex lg:flex-col sm:flex-row flex-col gap-5 animate-pulse">
      <div className=" rounded-md px-3 py-4 flex-1 lg:flex-none">
        <div className="h-24 w-24 bg-gray-300 rounded-full relative"></div>
        <div className="py-3 border-b space-y-3">
          <h6 className="w-[35%] h-3 bg-gray-300 rounded-md"></h6>

          <div className="flex space-x-1 items-center flex-wrap mt-2">
            <div className="w-[15%] h-2 bg-gray-300 rounded-md"></div>
            <div className="w-[15%] h-2 bg-gray-300 rounded-md"></div>
          </div>

          <div className="my-3 w-[45%] h-2 bg-gray-300 rounded-md"></div>

          <div className="grid grid-cols-2 gap-2 pt-3">
            <div className="bg-gray-300 rounded-md py-4"></div>
            <div className="bg-gray-300 rounded-md py-4"></div>
          </div>
        </div>

        <div className=" rounded-md  py-4 lg:space-y-4 md:space-y-3 space-y-2  flex-1 lg:flex-none ">
          <h5 className="w-[85%] h-7 bg-gray-300 rounded-md "></h5>

          <div className="lg:space-y-3 md:space-y-2 space-y-1 ">
            <div className="w-[45%] h-3 bg-gray-300 rounded-md"></div>

            <div className="w-[45%] h-3 bg-gray-300 rounded-md"></div>

            <div className="w-[45%] h-3 bg-gray-300 rounded-md"></div>
          </div>

          <div className="space-y-3 ">
            <h5 className="w-[55%] h-7 bg-gray-300 rounded-md mb-4"></h5>
            <p className="w-[95%] h-3 bg-gray-300 rounded-md"></p>
            <p className="w-[95%] h-3 bg-gray-300 rounded-md"></p>
            <p className="w-[95%] h-3 bg-gray-300 rounded-md"></p>
            <p className="w-[55%] h-3 bg-gray-300 rounded-md"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCardLoader;
