import React from "react";

const ProfileLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="w-32 h-4 rounded-md bg-gray-300"></div>

      <div className="lg:w-[50%] w-full   rounded-md space-y-5 pt-7">
        <div className="">
          <div className="md:w-24 md:h-24 w-16 rounded-full border bg-gray-300"></div>
          <span className="w-28 h-5 rounded-md bg-gray-300 mt-4 block"></span>

          <span className="w-40 h-3 rounded-md bg-gray-300 mt-4 block"></span>
        </div>

        <div className="pb-2.5 border-b border-gray-200 space-y-3">
          <span className="w-20 h-2 rounded-md bg-gray-300  block"></span>
          <div className="flex flex-wrap justify-between items-center gap-2">
            <span className="w-[25%] h-3 rounded-md bg-gray-300  block"></span>
            <button className="w-10 h-3 rounded-md bg-gray-300  block"></button>
          </div>
        </div>

        <div className="pb-2.5 border-b border-gray-200 space-y-3">
          <span className="w-20 h-2 rounded-md bg-gray-300  block"></span>
          <div className="flex flex-wrap justify-between items-center gap-2">
            <span className="w-[25%] h-3 rounded-md bg-gray-300  block"></span>
            <button className="w-10 h-3 rounded-md bg-gray-300  block"></button>
          </div>
        </div>

        <div className="pb-2.5 border-b border-gray-200 space-y-3">
          <span className="w-20 h-2 rounded-md bg-gray-300  block"></span>
          <div className="flex flex-wrap justify-between items-center gap-2">
            <span className="w-[25%] h-3 rounded-md bg-gray-300  block"></span>
            <button className="w-10 h-3 rounded-md bg-gray-300  block"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLoader;
