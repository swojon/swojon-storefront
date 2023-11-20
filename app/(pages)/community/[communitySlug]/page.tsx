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
  const [communityPanelOpen, setCommunityPanelOpen] = useState(true);
  const communityItem = parseInt(params.communitySlug, 10);
  const selectedCommunity = card.find((item) => item.id === communityItem);
  return (
    <section className="bg-[#f5f5f6]  lg:py-10 md:py-6 py-4.5">
      <div className="custom-container flex  gap-4 ">
        <div
          className={`lg:w-[28%] w-full  h-full relative ${
            communityPanelOpen
              ? "opacity-100"
              : " opacity-0 hidden pointer-events-none"
          }`}
        >
          <CommunityLists setCommunityPanelOpen={setCommunityPanelOpen} />
        </div>
        <div
          className={`w-full  h-full lg:block relative ${
            communityPanelOpen ? "block" : " hidden"
          }`}
        >
          <div className="absolute left-2 top-2 pb-3 z-10 ">
            <button
              onClick={() => setCommunityPanelOpen(!communityPanelOpen)}
              className="p-3 border border-activeColor text-primaryColor rounded-md bg-white"
            >
              <FaUsers />
            </button>
          </div>
          <CommunityDetails />
        </div>
      </div>
    </section>
  );
};

export default CommunitySlug;
