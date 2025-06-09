"use client";
import React from "react";

import { useListListingsQuery } from "@/apollograph/generated";
import CardSlider from "./CardSlider";
import ProductLoader from "../Loader/ProductLoader";


const FlashSale = () => {
  const { data, loading, error } = useListListingsQuery({
    variables: {
      filters: {
        status: "approved",
        collectionSlug: ["flash-sale"],
      },
      orderBy: "newest",
      limit: 12,
    },
  });
  const featuredProduct = data?.listListings.items;

  return (
    <section className="md:mt-10 mt-12">
      <div className=" custom-container2">
        <div className="flex  justify-between items-center gap-2">
          <h2 className="lg:text-3xl text-2xl font-semibold text-primaryColor capitalize truncate">
            Flash Sale
          </h2>
            <div className="flex items-center gap-2">
                <a href="/collections/flash-sale" className="text-secondColor text-base">See All</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short text-secondColor"
                  viewBox="0 0 16 16"   
                />
            </div>
        </div>

        <div className="mt-10  ">
          {featuredProduct && <CardSlider products={featuredProduct} /> }

          {loading && <ProductLoader />}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
