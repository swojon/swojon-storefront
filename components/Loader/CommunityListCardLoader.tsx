import React from "react";

const CommunityListCardLoader = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-1 p-1.5 bg-[#F5F5F6] rounded-md animate-pulse">
        <div className="h-[70px] w-[48px] rounded-md bg-gray-300"></div>
        <div className="w-[70%]  space-y-2">
          <h6 className="w-16 h-2 bg-gray-300 rounded-md"></h6>
          <div className="flex items-center  gap-2 ">
            <span className=" w-20 h-2 bg-gray-300 rounded-md"></span>
            <span className=" w-20 h-2 bg-gray-300 rounded-md"></span>
          </div>
          <div className="w-16 h-2 bg-gray-300 rounded-md "></div>
        </div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
      </div>

      <div className="flex items-center justify-between gap-1 p-1.5 bg-[#F5F5F6] rounded-md animate-pulse">
        <div className="h-[70px] w-[48px] rounded-md bg-gray-300"></div>
        <div className="w-[70%]  space-y-2">
          <h6 className="w-16 h-2 bg-gray-300 rounded-md"></h6>
          <div className="flex items-center  gap-2 ">
            <span className=" w-20 h-2 bg-gray-300 rounded-md"></span>
            <span className=" w-20 h-2 bg-gray-300 rounded-md"></span>
          </div>
          <div className="w-16 h-2 bg-gray-300 rounded-md "></div>
        </div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
      </div>
    </>
  );
};

export default CommunityListCardLoader;
