import React from "react";
import img1 from "@/public/assets/comm1.png";
import img2 from "@/public/assets/comm2.png";
import img3 from "@/public/assets/comm3.png";
import img4 from "@/public/assets/comm4.png";
import CommunityLists from "@/components/Community/CommunityLists";
import CommunityDetails from "@/components/Community/CommunityDetails";

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
  const communityItem = parseInt(params.communitySlug, 10);
  const selectedCommunity = card.find((item) => item.id === communityItem);
  return (
    <section className="bg-[#f5f5f6]  py-10">
      <div className="custom-container flex  gap-4">
        <div className="w-[28%] lg:block hidden">
          <CommunityLists />
        </div>
        <div className="lg:w-[72%] w-full">
          <CommunityDetails />
        </div>
      </div>
    </section>
  );
};

export default CommunitySlug;
