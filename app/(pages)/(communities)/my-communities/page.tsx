"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import CommunityCard from "@/components/Community/CommunityCard";
import { useListCommunitiesQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";
import Link from "next/link";
import { useSelector } from "react-redux";

const MyCommunities = () => {
  // const [community, setCommunity] = useState("Join to Buy");
  const {user} = useSelector((state: any ) => state.auth)
  const {data, loading, error } = useListCommunitiesQuery({
    variables: {
        filters: {
            userIds: [user?.id ?? 3]
        }
    }
  })
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
            <Link href={"/explore-community"}
              className={`md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs font-lexed rounded-md border border-activeColor  bg-white text-primaryColor ` }
            >
              All Community
            </Link>
            <Link href={"/my-communities"}
              className={`md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs font-lexed rounded-md border border-activeColor  bg-activeColor text-white`}
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

export default MyCommunities;
