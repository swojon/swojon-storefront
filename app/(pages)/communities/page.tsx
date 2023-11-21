"use client";
import img1 from "@/public/assets/comm1.png";
import img2 from "@/public/assets/comm2.png";
import img3 from "@/public/assets/comm3.png";
import img4 from "@/public/assets/comm4.png";
import CommunityLists from "@/components/Community/CommunityLists";
import CommunityDetails from "@/components/Community/CommunityDetails";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useListListingsQuery } from "@/apollograph/generated";
import ProductCard from "@/components/Products/ProductCard";
import ProductLoader from "@/components/Loader/ProductLoader";
import { useDispatch, useSelector } from "react-redux";
import { setCommunityOpen } from "@/app/redux/communitySlice";

const card = [
  {
    id: 134,
    banner: img1,
    title: "Chittagong University",
    joined: "Join to Buy",
  },
  {
    id: 143,
    banner: img2,
    title: "Chittagong University",
    joined: "Join to Buy",
  },
  {
    id: 123,
    banner: img3,
    title: "Chittagong University",
    joined: "Join to Buy",
  },
  {
    id: 1227,
    banner: img4,
    title: "Chittagong University",
    joined: "Already Joined",
  },
  {
    id: 1225,
    banner: img4,
    title: "Chittagong University",
    joined: "Join to Buy",
  },
  {
    id: 1224,
    banner: img4,
    title: "Chittagong University",
    joined: "Join to Buy",
  },
  {
    id: 12275,
    banner: img4,
    title: "Chittagong University",
    joined: "Already Joined",
  },
];

const CommunitySlug = ({ params }: { params: any }) => {
  const { data, loading, error } = useListListingsQuery();
  const featuredProduct = data?.listListings.items;
  const dispatch = useDispatch();
  const isCommunityOpen = useSelector((state: any) => state.community.open);

  return (
    <section
      className={`lg:w-[73%] w-full relative lg:block ${
        isCommunityOpen ? "hidden" : "block"
      }`}
    >
      <div className=" pb-3 z-10 lg:hidden">
        <button
          onClick={() => dispatch(setCommunityOpen())}
          className="p-3  border border-activeColor text-primaryColor rounded-md bg-white"
        >
          <FaUsers />
        </button>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 ">
        {featuredProduct?.map((product) => (
          <ProductCard key={product.id} card={product} />
        ))}
        {loading && <ProductLoader />}
      </div>
    </section>
  );
};

export default CommunitySlug;
