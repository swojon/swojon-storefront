"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCommunityClose } from "@/app/redux/communitySlice";
import { FaUsers } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useListCommunitiesQuery } from "@/apollograph/generated";
import CommunityListCard from "./CommunityListCard";

const CommunityLists = () => {
  const {user} = useSelector((state: any) => state.auth)
  const dispatch = useDispatch();
  const {data, loading, error } = useListCommunitiesQuery()
  const communities = data?.listCommunities.items;

  const isCommunityOpen = useSelector((state: any) => state.community.open);
  return (
    <section
      className={`lg:w-[27%] lg:block w-full sticky top-0 h-auto  rounded-md min-h-screen space-y-4 bg-white p-4 ${
        isCommunityOpen ? "block" : "hidden"
      }`}
    >
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed font-medium">
            Community
          </h2>
          <div
            className=" text-primaryColor  cursor-pointer lg:hidden"
            onClick={() => dispatch(setCommunityClose())}
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="relative  ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-gray-400 rounded-full ml-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-lg border border-gray-100 bg-gray-100 py-2 pl-8 pr-3 leading-5 placeholder-text-gray-400 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm "
            placeholder="Search community"
            type="search"
          />
        </div>
        <div className="border-b"></div>
        {/* <div className="w-full py-2 bg-activeColor text-white text-sm flex justify-center items-center gap-2 rounded-md">
          <span>
            <AiOutlinePlus />
          </span>
          <span>Create community</span>
        </div> */}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <h6 className="xl:text-lg md:text-base text-base text-primaryColor font-lexed font-medium">
           Discover
          </h6>
          <Link
            href="/explore-community"
            className="xl:text-sm md:text-xs text-xs text-activeColor cursor-pointer"
          >
            See all
          </Link>
        </div>

        {communities?.map((item) => (
            <CommunityListCard item={item}  key={`com${item.id}`}/>
          ))}
      </div>
    </section>
  );
};

export default CommunityLists;
