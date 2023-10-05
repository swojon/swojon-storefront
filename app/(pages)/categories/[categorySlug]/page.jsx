"use client";

import { useRouter } from "next/navigation";

import CategoryCart from "../../../../components/elements/CategoryCart";
import FilterBar from "@/components/FilterBar/FilterBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "@/components/Products/ProductCard";
import SortDropDown from "@/components/SortDropDown/SortDropDown";
import Link from "next/link";

const card = [
  {
    id: 13,
    banner: "/assets/cat1.png",
    title: "Furniture",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
      { id: 12443, banner: "/assets/pro4.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 12784443, banner: "/assets/pro6.png", title: "partex delux bed" },
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

const card2 = [
  { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
  { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
  { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
  { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
  { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
  { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
  { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
  { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
];

const CategoryDetail = ({ params }) => {
  const categoryItem = parseInt(params.categorySlug, 10);
  console.log(categoryItem);

  const selectedCategory = card.find((item) => item.id === categoryItem);

  console.log(selectedCategory);

  return (
    <section className="custom-container py-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Categories</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor capitalize">
            {selectedCategory?.title}
          </h6>
        </div>

        <div className="w-[200px]">
          <SortDropDown />
        </div>
      </div>
      <div className="flex  space-x-3 pt-5">
        <div>
          <FilterBar />
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 ">
          {card2.map((card) => (
            <ProductCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDetail;
