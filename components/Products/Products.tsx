import React from "react";

import ProductCard from "@/components/Products/ProductCard";
import ProductTabs from "@/components/Products/ProductTabs";
import { useListListingsQuery } from "@/apollograph/generated";
import ProductLoader from "../Loader/ProductLoader";
import Link from "next/link";

const Products = () => {
  const { data, loading, error } = useListListingsQuery();
  const featuredProduct = data?.listListings.items;

  return (
    <section className="mt-20   bg-[#f9f9f9]">
      <div className="py-14 custom-container">
      <div className="flex md:flex-row flex-col justify-between items-center space-y-2 md:space-x-0">
        <h2 className="lg:text-4xl text-2xl font-lexed text-primaryColor font-semiBold">
          Just In 
        </h2>
        <Link href="/explore">
          <button className="border border-activeColor md:py-2 md:px-3 py-1 px-2 rounded  text-activeColor lg:text-base text-sm font-lexed hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 ">
            View All
          </button>
        </Link>
      </div>

        <div className="mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 ">
          {featuredProduct?.map((product) => (
            <ProductCard key={product.id} card={product} />
          ))}
          {loading && <ProductLoader />}
        </div>
      </div>
    </section>
  );
};

export default Products;
