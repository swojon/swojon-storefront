import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { HiShare } from "react-icons/hi";
import CommunityCard from "./CommunityCard";
import img1 from "@/public/assets/comm1.png";
import img2 from "@/public/assets/comm2.png";
import img3 from "@/public/assets/comm3.png";
import img4 from "@/public/assets/comm4.png";

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

const CommunityDetails = () => {
  return (
    <section className="">
      <div className="w-full h-[468px] rounded-md">
        <Image
          src="/assets/communityBanner.png"
          width={700}
          height={600}
          className="w-full h-full object-cover rounded-md"
          alt="community banner"
        />
      </div>

      <div className="flex justify-between items-start py-6 ">
        <div className="space-y-1 ">
          <h6 className="text-2xl text-primaryColor font-lexed font-medium">
            Dhaka University Community
          </h6>
          <div className="flex items-center  text-secondColor ">
            <span className=" text-base font-lexed ">2.8K members</span>
            <span className=" text-base font-lexed  flex items-center">
              <BsDot className="text-sm" /> 8 Post uploaded
            </span>
          </div>
          <div className="flex items-center text-secondColor ">
            <TiLocation className="text-lg text-activeColor pe-1" />{" "}
            <span className="text-base">Fatehpur, Hathazari</span>
          </div>
        </div>

        <button className="py-1.5 px-2.5 text-sm bg-white text-primaryColor flex items-center rounded-md">
          <HiShare className="mr-2" />
          Share
        </button>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2  pt-10">
        {card.map((com: any) => (
          <CommunityCard key={com.id} card={com} />
        ))}
      </div>
    </section>
  );
};

export default CommunityDetails;
