"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from "@/public/assets/comm1.png";
import img2 from "@/public/assets/comm2.png";
import img3 from "@/public/assets/comm3.png";
import img4 from "@/public/assets/comm4.png";
import CommunityCard from "@/components/Community/CommunityCard";

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

const Community = () => {
  const [community, setCommunity] = useState("Join to Buy");
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
              onClick={() => setCommunity("Join to Buy")}
              className={`md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs font-lexed rounded-md border border-activeColor ${
                community === "Join to Buy"
                  ? "bg-activeColor text-white "
                  : "bg-white text-primaryColor"
              }`}
            >
              All Community
            </button>
            <button
              onClick={() => setCommunity("Already Joined")}
              className={`md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs font-lexed rounded-md border border-activeColor ${
                community === "Already Joined"
                  ? "bg-activeColor text-white "
                  : "bg-white text-primaryColor"
              }`}
            >
              Joined Community
            </button>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2  pt-10">
          {card
            .filter((item: any) => item.joined === community)
            .map((com: any) => (
              <CommunityCard key={com.id} card={com} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
