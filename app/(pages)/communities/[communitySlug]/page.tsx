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
import { useListListingsQuery } from "@/apollograph/generated";
import ProductCard from "@/components/Products/ProductCard";
import ProductLoader from "@/components/Loader/ProductLoader";
import { useDispatch, useSelector } from "react-redux";
import { setCommunityOpen } from "@/app/redux/communitySlice";

const card = [
  {
    id: 134,
    banner: img1,
    title: "Chittagong University1",
    joined: "Join to Buy",
  },
  {
    id: 143,
    banner: img2,
    title: "Chittagong University2",
    joined: "Join to Buy",
  },
  {
    id: 123,
    banner: img3,
    title: "Chittagong University3",
    joined: "Join to Buy",
  },
  {
    id: 1227,
    banner: img4,
    title: "Chittagong University4",
    joined: "Already Joined",
  },
  {
    id: 1225,
    banner: img4,
    title: "Chittagong University5",
    joined: "Join to Buy",
  },
  {
    id: 1224,
    banner: img4,
    title: "Chittagong University6",
    joined: "Join to Buy",
  },
  {
    id: 12275,
    banner: img4,
    title: "Chittagong University7",
    joined: "Already Joined",
  },
];

const CommunityContent = ({ params }: { params: any }) => {
  //   const { data, loading, error } = useListListingsQuery();
  //   const featuredProduct = data?.listListings.items;
  const communityItem = parseInt(params.communitySlug, 10);
  const selectedCommunity = card.find((item) => item.id === communityItem);
  const dispatch = useDispatch();
  const isCommunityOpen = useSelector((state: any) => state.community.open);
  return (
    <section
      className={`lg:w-[73%] w-full relative lg:block ${
        isCommunityOpen ? "hidden" : "block"
      }`}
    >
      <div className="absolute left-2 top-2 pb-3 z-10 lg:hidden">
        <button
          onClick={() => dispatch(setCommunityOpen())}
          className="p-3  border border-activeColor text-primaryColor rounded-md bg-white"
        >
          <FaUsers />
        </button>
      </div>
      <div className="w-full h-[468px] rounded-md">
        <Image
          src="/assets/communityBanner.png"
          width={1600}
          height={1000}
          className="w-full h-full object-cover rounded-md"
          alt="community banner"
        />
      </div>

      <div className="flex justify-between items-start py-6 ">
        <div className="space-y-1 ">
          <h6 className="text-2xl text-primaryColor font-lexed font-medium">
            {selectedCommunity?.title} Community
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

      {/* <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2  pt-10">
        {featuredProduct?.map((product) => (
          <ProductCard key={product.id} card={product} />
        ))}
        {loading && <ProductLoader />}
      </div> */}
    </section>
  );
};

export default CommunityContent;
