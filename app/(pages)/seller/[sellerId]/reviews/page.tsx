"use client";
import React, { useState } from "react";
import SellerRating from "@/components/Seller/SellerRating";
import { useGetUserByIdQuery } from "@/apollograph/generated";
import RatingsLoader from "@/components/Loader/RatingsLoader";
import Review from "@/components/Review/Review";
import SellerReview from "@/components/Review/SellerReview";


const SellerListings = ({ params }: { params: { sellerId: string } }) => {
  const sellerId = parseInt(params.sellerId, 10);
  const { data, error, loading } = useGetUserByIdQuery({
    variables: {
      userId: sellerId,
    },
    skip: !sellerId,
  });
  const seller = data?.getUserById;
  return (
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full lg:pb-10 md:pb-6 pb-4">
        {loading && <RatingsLoader />}
        <SellerReview />
      </div>
  );
};

export default SellerListings;
