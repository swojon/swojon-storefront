"use client";
import React from "react";

import { useListListingsQuery } from "@/apollograph/generated";
import Link from "next/link";
import dynamic from "next/dynamic";
import dImg from "@/public/assets/Dd (1).jpg";
import dImg2 from "@/public/assets/Dd (2).jpg";
import CardSlider from "./CardSlider";

const DynamicProductCard = dynamic(
  () => import("@/components/Products/ProductCard2"),
  { ssr: false }
);
const DynamicProductLoader = dynamic(() => import("../Loader/ProductLoader"), {
  ssr: false,
});

const DUMMYDATA = [
  {
    id: "1",
    title: "Nike Air Max 270",
    image: dImg,
    category: "Shoes",
    price: 150,
    discountPrice: 120,
    description:
      "A stylish and comfortable sneaker with maximum cushioning for all-day wear.",
  },
  {
    id: "2",
    title: "Adidas Ultraboost",
    image: dImg2,
    category: "Shoes",
    price: 180,
    description:
      "Experience ultimate comfort and energy return with Adidas Ultraboost running shoes.",
  },
  {
    id: "3",
    title: "Cerave Hydrating Cleanser",
    image: dImg2,
    category: "Skincare",
    price: 15,
    discountPrice: 12,
    description:
      "A gentle, non-foaming facial cleanser that hydrates while removing dirt and oil.",
  },
  {
    id: "4",
    title: "L'Oreal Paris Revitalift Cream",
    image: dImg,
    category: "Skincare",
    price: 25,
    description:
      "Anti-aging moisturizer with Pro-Retinol to reduce wrinkles and firm skin.",
  },
  {
    id: "5",
    title: "Samsung 55-inch 4K Smart TV",
    image: dImg,
    category: "Electronics",
    price: 650,
    discountPrice: 599,
    description:
      "Ultra HD Smart TV with vibrant colors and built-in streaming apps.",
  },
  {
    id: "6",
    title: "Apple AirPods Pro",
    image: dImg,
    category: "Electronics",
    price: 249,
    description:
      "Wireless noise-canceling earbuds with immersive sound and long battery life.",
  },
  {
    id: "7",
    title: "Dyson V11 Vacuum Cleaner",
    image: dImg,
    category: "Home Appliances",
    price: 599,
    discountPrice: 549,
    description:
      "High-performance cordless vacuum with intelligent cleaning sensors.",
  },
  {
    id: "8",
    title: "Instant Pot Duo 7-in-1",
    image: dImg2,
    category: "Home Appliances",
    price: 89,
    description:
      "Multi-functional pressure cooker for fast and easy meal prep.",
  },
  {
    id: "9",
    title: "Levi's 501 Original Jeans",
    image: dImg2,
    category: "Fashion",
    price: 60,
    discountPrice: 50,
    description: "Timeless straight-leg jeans crafted from durable denim.",
  },
  {
    id: "10",
    title: "Fossil Men's Chronograph Watch",
    image: dImg2,
    category: "Fashion",
    price: 120,
    description:
      "Elegant stainless steel watch with chronograph functionality.",
  },
];

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
      <div className="py-14 custom-container2">
        <div className="flex  justify-between items-center gap-2">
          <h2 className="lg:text-3xl text-2xl font-semibold text-primaryColor capitalize truncate">
            New Arrivals
          </h2>
          {/* <Link href="/explore">
            <button className="border border-activeColor md:py-2 md:px-5 py-1 px-3 rounded  text-activeColor lg:text-base text-sm font-bold hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 whitespace-nowrap">
              View All
            </button>
          </Link> */}
        </div>

        {/* <div className="mt-8 grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-5 gap-3 ">
          {featuredProduct?.map((product) => (
            <DynamicProductCard key={product.id} product={product} />
          ))}

          {loading && <DynamicProductLoader />}
        </div> */}

        <div className="my-8  ">
          {/* {DUMMYDATA?.map((product) => (
            <DynamicProductCard key={product.id} product={product} />
          ))} */}
          <CardSlider products={DUMMYDATA} />

          {loading && <DynamicProductLoader />}
        </div>
      </div>
    </section>
  );
};

export default Products;
