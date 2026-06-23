"use client";
import React from "react";

import { useListListingsQuery } from "@/apollograph/generated";
import CardSlider from "./CardSlider";
import ProductLoader from "../Loader/ProductLoader";


const Products = () => {
  const { data, loading, error } = useListListingsQuery({
    variables: {
      filters: {
        status: "approved",
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
            New Arrivals
          </h2>
        </div>

        <div className="mt-10  ">
          {featuredProduct && <CardSlider products={featuredProduct} /> }

          {loading && <ProductLoader />}
        </div>
      </div>
    </section>
  );
};

export default Products;
