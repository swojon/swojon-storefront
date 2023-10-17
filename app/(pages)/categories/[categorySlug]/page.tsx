"use client";

import { useRouter } from "next/navigation";

import CategoryCart from "../../../../components/elements/CategoryCart";
import FilterBar from "@/components/FilterBar/FilterBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "@/components/Products/ProductCard";
import SortDropDown from "@/components/SortDropDown/SortDropDown";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setFilterOpen } from "@/app/redux/filterSlice";

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

const CategoryDetail = ({ params }: { params: any }) => {
  const categoryItem = parseInt(params.categorySlug, 10);
  console.log("re Rendered");
  const selectedCategory = card.find((item) => item.id === categoryItem);
  const appliedFilter = [];
  console.log(selectedCategory);

  const dispatch = useDispatch();

  return (
    <section className="custom-container py-10">
      <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Categories</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor capitalize">
            {selectedCategory?.title}
          </h6>
        </div>

        <div className=" flex justify-between items-center gap-3 ">
          <span
            onClick={() => dispatch(setFilterOpen())}
            className="border border-gray-400 py-1.5 px-2 rounded-md  text-base flex justify-center items-center text-activeColor block lg:hidden"
          >
            <FiFilter />
          </span>
          <div className="lg:w-[200px] md:w-[130px]">
            <SortDropDown />
          </div>
        </div>
      </div>
      <div className="flex  gap-3 pt-5">
        <div className="w-[25%] lg:block hidden">
          <FilterBar />
        </div>
        <div className="lg:w-[75%] w-full">
          <div className="grid xl:grid-cols-3 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full">
            {card2.map((card) => (
              <ProductCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetail;