"use client";
import { BsDot } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { HiShare } from "react-icons/hi";
import img1 from "@/public/assets/comm1.png";
import img2 from "@/public/assets/comm2.png";
import img3 from "@/public/assets/comm3.png";
import img4 from "@/public/assets/comm4.png";
import { FaUsers } from "react-icons/fa6";
import Image from "next/image";
import {
  useGetCommunityQuery,
  useListListingsQuery,
} from "@/apollograph/generated";
import ProductCard from "@/components/Products/ProductCard";
import ProductLoader from "@/components/Loader/ProductLoader";
import { useDispatch, useSelector } from "react-redux";
import { setCommunityOpen } from "@/app/redux/communitySlice";
import CommunityDropDown from "@/components/Community/CommunityDropDown";
import { useState } from "react";

const tabData = [
  { id: 18, title: "All posts" },
  { id: 41, title: "Featured post" },
  { id: 12, title: "People" },
  { id: 17, title: "Media" },
];

const CommunityContent = ({ params }: { params: any }) => {
  const communityId = parseInt(params.communitySlug, 10);
  const {
    data: communityData,
    loading: communityLoading,
    error: communityError,
  } = useGetCommunityQuery({
    variables: {
      id: communityId,
    },
  });
  const community = communityData?.getCommunity;

  const {
    data: listingData,
    loading: listingLoading,
    error: listingError,
  } = useListListingsQuery({
    variables: {
      filters: {
        communityIds: [communityId],
      },
    },
  });
  const listings = listingData?.listListings.items;

  const [selectedTab, setSelectedTab] = useState("All posts");

  return (
    <section className={`lg:w-[73%] w-full relative lg:block block`}>
      {/* <div className="absolute left-2 top-2 pb-3 z-10 lg:hidden">
        <button
          // onClick={() => dispatch(setCommunityOpen())}
          className="p-3  border border-activeColor text-primaryColor rounded-md bg-white"
        >
          <FaUsers />
        </button>
      </div> */}
      <div className="w-full h-[220px] rounded-md">
        <Image
          src={"/assets/communityBanner.png"}
          width={1600}
          height={1000}
          className="w-full h-full object-cover rounded-md"
          alt="community banner"
        />
      </div>

      <div className="flex justify-between items-start py-6 ">
        <div className="space-y-1 ">
          <h6 className="lg:text-3xl md:text-lg sm:text-lg text-base text-primaryColor font-lexed font-medium">
            {community?.name}
          </h6>
          <div className="flex items-center  text-secondColor ">
            <span className=" text-base font-lexed ">
              {community?.memberCount} members
            </span>
            <span className=" text-base font-lexed  flex items-center">
              <BsDot className="text-sm" /> 8 Post uploaded
            </span>
          </div>
          <div className="flex items-center text-secondColor ">
            <TiLocation className="text-lg text-activeColor pe-1" />{" "}
            <span className="text-base">
              {community?.location?.name ?? "Bangladesh"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="py-1.5 px-2.5 text-sm bg-white text-primaryColor flex items-center rounded-md">
            <HiShare className="mr-2" />
            Share
          </button>
          <CommunityDropDown />
        </div>
      </div>

      <div className=" border-b flex gap-4 flex-wrap">
        {tabData.map((tab) => (
          <span
            onClick={() => setSelectedTab(tab.title)}
            key={tab.id}
            className={`whitespace-nowrap inline-flex items-center border-b-2  px-1 py-1.5 lg:text-base text-sm font-medium font-lexed   hover:border-gray-200 ${
              selectedTab === tab.title
                ? "border-activeColor text-activeColor"
                : "text-secondColor border-transparent"
            }`}
          >
            {tab.title}
          </span>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2  pt-10">
        {listings?.map((product) => (
          <ProductCard key={product.id} card={product} />
        ))}
        {listingLoading && <ProductLoader />}
      </div>
    </section>
  );
};

export default CommunityContent;
