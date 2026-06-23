import React from "react";
import ReviewStars from "./ReviewStars";
import {format } from "date-fns";

function ReviewDetailCard({ review }: { review: any }) {

  return (
    <div className=" space-y-2  rounded-md masonry-item ">
      <div className="flex gap-1 items-center text-sm ">
        <ReviewStars avgRating={review.rating} />
        {/* <span className="text-sm text-secondColor">({review.rating})</span> */}
      </div>

      <span className="block text-sm text-secondColor">
        {review.reviewer.username ?? review.reviewer.email} - {format(review?.dateCreated, 'dd MMMM yyyy')}
      </span>

      <p className="md:text-base text-sm text-secondColor ">{review.review}</p>
    </div>
  );
}

export default ReviewDetailCard;
