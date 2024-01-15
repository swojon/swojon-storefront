"use client";
import React from "react";
import { useGetUserByIdQuery } from "@/apollograph/generated";
import SellerProductList from "@/components/Seller/SellerProductList";
import ProductLoader from "@/components/Loader/ProductLoader";

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
        {loading && <ProductLoader />}
        <SellerProductList sellerId={seller?.id} />
      </div>
      
  );
};

export default SellerListings;
