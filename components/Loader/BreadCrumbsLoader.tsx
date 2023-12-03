import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumbsLoader = () => {
  return (
    <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
      <h6 className="">Home</h6>
      <MdKeyboardArrowRight />

      <div className="h-2 w-14 rounded-md bg-gray-300 animate-pulse"></div>
      <MdKeyboardArrowRight />

      <h6 className="h-2 w-14 rounded-md bg-gray-300 animate-pulse"></h6>
    </div>
  );
};

export default BreadCrumbsLoader;
