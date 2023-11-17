'use client';
import user from "@/public/userMale.png";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import icon1 from "@/public/assets/govtIcon.png";
import icon2 from "@/public/assets/emailIcon.png";
import icon3 from "@/public/assets/phoneIcon.png";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useListFollowersQuery, useListFollowingQuery } from "@/apollograph/generated";
import { useSelector } from "react-redux";
import FollowUserCard from "@/components/FollowUserCard/FollowUserCard";


const Followers = () => {
  const {user} = useSelector((state: any) => state.auth)
  const {data, error, loading} = useListFollowingQuery({
    variables: {
      userId: user.id
    }
  })
  const followers = data?.listFollowing.items;
  
  return (
    <section>
      <div className="border-b px-5 py-3.5">
        <h6 className="text-primaryColor text-2xl font-lexed font-medium">
          People you follow
        </h6>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 px-5 pt-10">
      {followers?.map(follower => (
            <FollowUserCard user={follower} key={follower.id} />
          ))}
        {/* <div className="border rounded-md px-3 py-4 flex-1 lg:flex-none relative">
          <div className="absolute right-3 top-3 w-7 h-7 flex justify-center items-center rounded-full border border-activeColor cursor-pointer">
            <AiFillHeart className="text-activeColor" />
          </div>
          <div className="h-24 w-24  rounded-full relative">
            <Image
              src={user}
              width={400}
              height={400}
              alt="user"
              className="w-full h-full object-cover"
            />
            <span className="absolute text-[#ff0f0f] right-1 bottom-0">
              <MdVerifiedUser className="text-2xl" />
            </span>
          </div>
          <div className="py-3 border-b space-y-1 ">
            <h6 className="text-base font-lexed font-medium text-primaryColor">
              Mr. Ananto Jalil
            </h6>

            <h6 className="lg:text-lg text-base text-[#ff0f0f]">
              Non - verified Seller
            </h6>

            <div className="flex space-x-1 items-center flex-wrap">
              <div className="flex items-center space-x-1">
                <FaStar className="text-[#FFB800]" />
                <span className="text-sm">4.80</span>
              </div>

              <div className="flex items-center space-x-1">
                <BsDot className="text-secondColor" />
                <span className="text-sm">33 reviews</span>
              </div>

              <div className="flex items-center space-x-1">
                <BsDot className="text-secondColor" />
                <span className="text-sm">20 products</span>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-primaryColor">
              <FaLocationDot className="text-activeColor text-sm " />
              <span className="text-sm ">Mirpur-14, Dhaka</span>
            </div>
          </div>

          <div className="py-3 border-b flex lg:justify-start justify-between">
            <div className="lg:w-[30%] text-sm">
              <h6 className="text-secondColor">Call Now :</h6>
            </div>
            <div className=" text-sm text-activeColor">
              <h6 className="">01712345678</h6>
              <h6 className="">01712345678</h6>
            </div>
          </div>
          <div className="py-3 border-b flex lg:justify-start justify-between">
            <div className="lg:w-[30%] text-sm ">
              <h6 className="text-secondColor">Email :</h6>
            </div>
            <div className=" text-sm text-activeColor">
              <h6 className="">abc@gmail.com</h6>
              <h6 className="">abc@gmail.com</h6>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-5">
            <div className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              OFFER PRICE
            </div>
            <div className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              Chat Now
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Followers;
