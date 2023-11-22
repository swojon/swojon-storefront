"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import CommunityCard from "@/components/Community/CommunityCard";
import { useListCommunitiesQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";
import Link from "next/link";

const Community = () => {
  // const [community, setCommunity] = useState("Join to Buy");
  const {data, loading, error } = useListCommunitiesQuery()
  const communities = data?.listCommunities.items;
  
  return (
    <section className="custom-container">
      <div className="py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1  text-secondColor">
            <h1 className="md:text-base text-sm">Home</h1>
            <MdKeyboardArrowRight />
            <h1 className="md:text-base text-sm">Community</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <button
              className={`md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs font-lexed rounded-md border border-activeColor bg-activeColor text-white ` }
            >
              All Community
            </button>
            <Link href={"/my-communities"}
              className={`md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs font-lexed rounded-md border border-activeColor bg-white text-primaryColor `}
            >
              Joined Community
            </Link >
          </div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2  pt-10">
          {communities?.map((com: any) => (
              <CommunityCard key={com.id} card={com} />
            ))}
          {loading && <ProductLoader />}
        </div>
      </div>
    </section>
  );
};

export default Community;
