import Image from "next/image";
import React from "react";
import user from "@/public/userMale.png";
import { FaStar } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import icon1 from "@/public/assets/govtIcon.png";
import icon2 from "@/public/assets/emailIcon.png";
import icon3 from "@/public/assets/phoneIcon.png";
import SellerReviewDropdown from "../Review/SellerReviewDropdown";

const SellerProfileCard = ({ seller }: { seller: any }) => {
  // console.log("Got seller to render", seller)
  return (
    <div className="flex lg:flex-col sm:flex-row flex-col gap-5">
      <div className=" rounded-md px-3 py-4 flex-1 lg:flex-none">
        <div className="h-24 w-24  rounded-full relative">
          <Image
            src={seller?.profile?.avatar ?? "/user1.jpg"}
            width={400}
            height={400}
            alt="user"
            className="w-full h-full object-cover rounded-full"
          />
          <span className="absolute text-[#08B66D] right-1 bottom-0">
            <MdVerifiedUser className="text-2xl" />
          </span>
        </div>
        <div className="py-3 border-b space-y-1">
          <h6 className="md:text-lg text-base font-lexed font-bold text-primaryColor">
            {seller?.username ?? seller?.email}
          </h6>

          {/* <h6 className="lg:text-lg text-base text-[#08B66D]">
            Verified Seller
          </h6> */}

          <div className="flex space-x-1 items-center flex-wrap">
            <SellerReviewDropdown sellerId={seller?.id} />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="md:text-base text-sm text-primaryColor">
                20 products
              </span>
            </div>
          </div>
        </div>

        {/* <div className="py-3 border-b flex lg:justify-start justify-between">
          <div className="lg:w-[30%] text-sm">
            <h6 className="text-secondColor">Call Now :</h6>
          </div>
          <div className=" text-sm text-activeColor">
            <h6 className="">01712345678</h6>
           
          </div>
        </div> */}
        <div className="py-3 border-b flex lg:justify-start justify-between">
          <div className="lg:w-[30%] text-sm ">
            <h6 className="text-secondColor">Member Since :</h6>
          </div>
          <div className=" text-sm text-activeColor">
            <h6 className="">{"Jan 2023"}</h6>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-3">
          <button
            className="border border-activeColor text-activeColor  rounded-md 
          py-2 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 font-semibold"
          >
            Follow
          </button>
          <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-2 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 font-semibold">
            Send Message
          </button>
        </div>
      </div>

      <div className=" rounded-md px-3 py-4 lg:space-y-4 md:space-y-3 space-y-2  flex-1 lg:flex-none ">
        <h5 className="lg:text-2xl md:text-lg text-base font-lexed font-medium text-primaryColor ">
          Confirmed Information
        </h5>

        <div className="lg:space-y-3 md:space-y-2 space-y-1 ">
          <div className="flex items-center space-x-3">
            <Image src={icon1} alt="icon" />
            <span className="lg:text-lg md:text-base text-sm text-primaryColor font-lexed font-medium">
              Government ID
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Image src={icon2} alt="icon" />
            <span className="lg:text-lg md:text-base text-sm text-primaryColor font-lexed font-medium">
              Email Address
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Image src={icon3} alt="icon" />
            <span className="lg:text-lg md:text-base text-sm text-primaryColor font-lexed font-medium">
              Phone Number
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfileCard;
