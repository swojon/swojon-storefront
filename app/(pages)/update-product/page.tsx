"use client";
import { useGetListingQuery } from "@/apollograph/generated";
import UpdateFormLoader from "@/components/Loader/UpdateFormLoader";
import Uploads from "@/components/Uploads/Uploads";
import { useSearchParams } from "next/navigation";
import React from "react";

const UpdateProduct = () => {
  const searchParams = useSearchParams();

  const getProduct = searchParams.get("productId");
  const productId = parseInt(getProduct, 10);

  const { data, error, loading } = useGetListingQuery({
    variables: {
      id: productId,
    },
    skip: !productId,
  });
  const product = data?.getListing;

  console.log("result2", product);
  return (
    <section className="py-10 ">
      {loading ? <UpdateFormLoader /> : <Uploads product={product} />}
    </section>
  );
};

export default UpdateProduct;
