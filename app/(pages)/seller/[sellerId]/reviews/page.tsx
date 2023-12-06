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
    <div className="">
      {loading && <RatingsLoader />}
      <SellerReview sellerId={sellerId} />
    </div>
  );
};

export default SellerListings;
