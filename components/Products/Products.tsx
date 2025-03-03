"use client";
import React from "react";

import { useListListingsQuery } from "@/apollograph/generated";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicProductCard = dynamic(() => import("@/components/Products/ProductCard"), {ssr: false});
const DynamicProductLoader = dynamic(() => import("../Loader/ProductLoader"), {ssr: false});


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
    <section className="md:mt-20 mt-12  ">
      <div className="py-14 custom-container">
        <div className="flex  justify-between items-center gap-2">
          <h2 className="lg:text-4xl text-2xl font-semibold text-primaryColor capitalize truncate">
          New Arrivals
          </h2>
          <Link href="/explore">
            <button className="border border-activeColor md:py-2 md:px-5 py-1 px-3 rounded  text-activeColor lg:text-base text-sm font-bold hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>

        <div className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-8 gap-3 ">
          {featuredProduct?.map((product) => (
            <DynamicProductCard key={product.id} product={product} />
          ))}

          {loading && <DynamicProductLoader />}
        </div>
      </div>
    </section>
  );
};

export default Products;
