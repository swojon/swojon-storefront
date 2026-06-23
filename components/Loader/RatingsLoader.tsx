import React from "react";

const RatingsLoader = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-primaryColor font-lexed font-medium flex items-end gap-4">
        <div className="w-14 h-12 bg-gray-300 rounded-md"></div>
        <span className="w-8 h-2 bg-gray-300 rounded-md"></span>{" "}
        <div className="w-14 h-12 bg-gray-300 rounded-md"></div>
      </div>

      <div className="flex items-center  gap-2">
        <div className="w-24 h-3 bg-gray-300 rounded-md"></div>
        <small className="w-24 h-3 bg-gray-300 rounded-md"></small>
      </div>

      <div className="flex items-center gap-2 pb-3">
        <button className="bg-gray-300 rounded-md py-4 w-32"></button>
        <button className="bg-gray-300 rounded-md py-4 w-32"></button>
      </div>
    </div>
  );
};

export default RatingsLoader;
