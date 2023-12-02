import React from "react";
import { BsDot } from "react-icons/bs";

const MeetTheSellerLoader = () => {
  return (
    <div>
      <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
        Meet the Seller
      </h6>
      <div className="flex flex-col md:flex-row gap-2 md:items-start md:justify-between pt-2 animate-pulse">
        <div className="flex gap-7 items-center">
          <div className="lg:h-24 lg:w-24 md:h-16 md:w-16 rounded-full bg-gray-300"></div>

          <div className="py-3  space-y-2">
            <h6 className="w-24 h-5 bg-gray-300 rounded-md"></h6>

            <div className="flex space-x-1 items-center">
              <div className="w-14 h-3 bg-gray-300 rounded-md"></div>

              <div className="flex items-center space-x-1">
                <BsDot className="text-secondColor" />
                <div className="w-14 h-3 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gray-300 rounded-md px-14 py-4"></div>
      </div>
    </div>
  );
};

export default MeetTheSellerLoader;
