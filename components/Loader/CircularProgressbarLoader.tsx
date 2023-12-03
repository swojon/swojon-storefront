import React from "react";

const CircularProgressbarLoader = () => {
  return (
    <div className="flex flex-col items-center animate-pulse space-y-3">
      <div className="w-[100px] h-[100px] rounded-full border-8 border-gray-100"></div>
      <span className="w-40 h-3 bg-gray-300 rounded-md "></span>
      <span className="w-24 h-2 bg-gray-300 rounded-md"></span>
    </div>
  );
};

export default CircularProgressbarLoader;
