import React from "react";

const SearchLoader = () => {
  return (
    <div className="w-full animate-pulse bg-white shadow-md">
      <div className="flex items-center space-x-4 border-b border-gray-100 px-5  py-4">
        <div className=" h-4  w-4 rounded bg-gray-300" />
        <div className="h-3 rounded-md w-[8%] bg-gray-300" />
        <div className="h-3 rounded-md w-[26%] bg-gray-300" />
      </div>
      <div className="flex items-center space-x-4 border-b border-gray-100 px-5  py-4">
        <div className=" h-4  w-4 rounded bg-gray-300" />

        <div className="h-3 rounded-md w-[8%] bg-gray-300" />
        <div className="h-3 rounded-md w-[26%] bg-gray-300" />
      </div>
    </div>
  );
};

export default SearchLoader;
