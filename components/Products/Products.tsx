import React from "react";

import ProductCard from "@/components/Products/ProductCard";
import ProductTabs from "@/components/Products/ProductTabs";
import { useListListingsQuery } from "@/apollograph/generated";
import ProductLoader from "../Loader/ProductLoader";

const Products = () => {
  const { data, loading, error } = useListListingsQuery();
  const featuredProduct = data?.listListings.items;

  return (
    <section className="mt-20   bg-[#f9f9f9]">
      <div className="py-14 custom-container">
        <h2 className="lg:text-4xl text-2xl font-lexed text-center text-primaryColor font-semiBold">
          Just In
        </h2>

        {/* <div className="py-7 flex justify-center items-center flex-wrap gap-3">
          // {category.map((tab) => (
            // <ProductTabs key={tab.id} tabItem={tab} />
          // ))}
        </div> */}

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
