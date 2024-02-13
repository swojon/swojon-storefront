import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const UpdateFormLoader = () => {
  return (
    <div className="space-y-5 animate-pulse">
      <div className={`border-b pb-5`}>
        <div
          className={`flex items-center  gap-1 custom-container justify-between `}
        >
          <div className="flex items-center space-x-1  text-sm   font-medium text-primaryColor">
            <h6 className="h-3 w-16 rounded-md bg-gray-300"></h6>
            <MdKeyboardArrowRight />
            <h6 className="h-3 w-16 rounded-md bg-gray-300"></h6>
          </div>
        </div>

        <div
          className={`xl:space-y-5 lg:space-y-4 space-y-3   bg-white transition ease-in-out delay-150 py-5  
          
          `}
        >
          <div className="flex lg:flex-row flex-col items-start gap-2 custom-container">
            <div className="flex-1 sm:w-[80%] w-[100%] xl:space-y-4 lg:space-y-4 space-y-3 ">
              <h5 className="h-3 w-[150px] rounded-md bg-gray-300"></h5>

              <p className="h-3 w-[250px] rounded-md bg-gray-300"></p>
            </div>

            <div className="flex-1 flex items-center justify-end gap-4 ">
              <button className="py-5 w-24 rounded-md bg-gray-300 "></button>
              <button
                type="button"
                className=" py-5 w-24 rounded-md bg-gray-300 "
              ></button>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:items-center justify-between gap-2 custom-container">
            <div className=" md:w-[50%] w-full">
              <div className="h-3 w-[75%] rounded-md bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:space-y-5 space-y-3 custom-container">
        <h6 className="h-3 w-[250px] rounded-md bg-gray-300"></h6>
        <p className="h-3 w-[55%] rounded-md bg-gray-300"></p>

        <div className="w-full md:h-[441px] h-[500px] rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
};

export default UpdateFormLoader;
