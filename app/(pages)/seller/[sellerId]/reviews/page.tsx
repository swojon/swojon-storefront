"use client";
import React from "react";
import { useGetUserByIdQuery } from "@/apollograph/generated";
import RatingsLoader from "@/components/Loader/RatingsLoader";
import SellerReview from "@/components/Review/SellerReview";

const SellerListings = ({ params }: { params: { sellerId: string } }) => {
  const sellerId = parseInt(params.sellerId, 10);
  const { data, error, loading } = useGetUserByIdQuery({
    variables: {
      userId: sellerId,
    },
    skip: !sellerId,
  });
  return (
    <div className="">
      {loading && <RatingsLoader />}
      <SellerReview sellerId={sellerId} />
    </div>
  );
};

export default SellerListings;
