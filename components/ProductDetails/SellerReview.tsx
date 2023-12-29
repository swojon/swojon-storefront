import React from "react";
import { BsDot } from "react-icons/bs";
import ReviewStars from "../Review/ReviewStars";
import { useSummaryUserReviewQuery } from "@/apollograph/generated";

const SellerReview = ({sellerId}: {sellerId: number}) => {
  const {data, loading, error } = useSummaryUserReviewQuery({
    variables:{
      userId: sellerId
    },
    skip: !sellerId
  })
  const review = data?.summaryUserReview
  const avgRating = Math.ceil(review?.avgRating!)
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className=" text-base font-medium text-secondColor text-center relative">
        {review?.reviewCount} Reviews
        <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-400"></span>
      </span>

      <BsDot className="text-secondColor text-lg" />
      <div className="flex flex-wrap gap-2 items-center">
        <ReviewStars avgRating={avgRating!}/>
        <span className=" text-base font-medium text-secondColor text-center relative">
          ({avgRating!} stars)
        </span>
      </div>
    </div>
  );
};

export default SellerReview;
