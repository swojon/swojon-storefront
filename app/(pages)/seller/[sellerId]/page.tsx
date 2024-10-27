"use client";
import React from "react";
import { useGetUserByIdOrUsernameQuery } from "@/apollograph/generated";
import SellerProductList from "@/components/Seller/SellerProductList";
import ProductLoader from "@/components/Loader/ProductLoader";

const SellerListings = ({ params }: { params: { sellerId: string } }) => {
  const { data, error, loading } = useGetUserByIdOrUsernameQuery({
    variables: {
      usernameOrId: params.sellerId,
    },
    skip: !params.sellerId,
  });
  const seller = data?.getUserByIdOrUsername;

  return (
      <>
      {loading && (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full lg:pb-10 md:pb-6 pb-4">
         <ProductLoader />
        </div>
      )}
      {seller && <SellerProductList sellerId={seller?.id} />}
      </>
      
      
  );
};

export default SellerListings;
