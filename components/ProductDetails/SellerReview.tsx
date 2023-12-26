import React from "react";
import { BsDot } from "react-icons/bs";
import ReviewStars from "../Review/ReviewStars";

const SellerReview = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className=" text-base font-medium text-secondColor text-center relative">
        30 Reviews
        <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-400"></span>
      </span>

      <BsDot className="text-secondColor text-lg" />
      <div className="flex flex-wrap gap-2 items-center">
        <ReviewStars />
        <span className=" text-base font-medium text-secondColor text-center relative">
          (4 stars)
        </span>
      </div>
    </div>
  );
};

export default SellerReview;
