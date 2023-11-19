import React from "react";

import ProductCard from "@/components/Products/ProductCard";
import ProductTabs from "@/components/Products/ProductTabs";
import { useListListingsQuery } from "@/apollograph/generated";
import ProductLoader from "../Loader/ProductLoader";

const category = [
  {
    id: 13,
    banner: "/assets/cat1.png",
    title: "Furniture",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
    ],
  },
  {
    id: 14,
    banner: "/assets/cat2.png",
    title: "Electronics",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
      { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
    ],
  },
  {
    id: 123,
    banner: "/assets/cat3.png",
    title: "Gym Accessories",
    children: [
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 12235,
    banner: "/assets/cat4.png",
    title: "instructive",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },

      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 146,
    banner: "/assets/cat5.png",
    title: "Fashion",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },

      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 123,
    banner: "/assets/cat6.png",
    title: "Home Alliances",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },

      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 88814,
    banner: "/assets/cat2.png",
    title: "Electronics",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
      { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
    ],
  },
  {
    id: 126663,
    banner: "/assets/cat3.png",
    title: "Gym Accessories",
    children: [
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
];

const Products = () => {
  const { data, loading, error } = useListListingsQuery();
  const featuredProduct = data?.listListings.items;

  return (
    <section className="mt-20   bg-[#f9f9f9]">
      <div className="py-14 custom-container">
        <h2 className="lg:text-4xl text-2xl font-lexed text-center text-primaryColor font-semiBold">
          Best Deals Products
        </h2>

        <div className="py-7 flex justify-center items-center flex-wrap gap-3">
          {/* {category.map((tab) => (
            <ProductTabs key={tab.id} tabItem={tab} />
          ))} */}
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 ">
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
