import React from "react";

const FollowersLoader = () => {
  return (
    <>
      <div className="space-y-5 p-4 border border-gray-100 shadow-md bg-white rounded-md animate-pulse">
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>

        <h6 className="bg-gray-300 rounded-md w-24 h-4"></h6>

        <div className="flex items-center gap-2 ">
          <button className="py-3  bg-gray-300 rounded-md w-full"></button>

          <button className="py-3  bg-gray-300 rounded-md w-full"></button>
        </div>
      </div>
      <div className="space-y-5 p-4 border border-gray-100 shadow-md bg-white rounded-md animate-pulse">
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>

        <h6 className="bg-gray-300 rounded-md w-24 h-4"></h6>

        <div className="flex items-center gap-2 ">
          <button className="py-3  bg-gray-300 rounded-md w-full"></button>

          <button className="py-3  bg-gray-300 rounded-md w-full"></button>
        </div>
      </div>
    </>
  );
};

export default FollowersLoader;
