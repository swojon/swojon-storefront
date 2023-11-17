import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { FaStar, FaLocationDot } from 'react-icons/fa6'
import { MdVerifiedUser } from 'react-icons/md'
import Image from "next/image"

import defaultAvatar from "@/public/userMale.png";

export const FollowUserCard = ({user}: {user:any}) => (
    <div className="border rounded-md px-3 py-4 flex-1 lg:flex-none relative">
          <div className="absolute right-3 top-3 w-7 h-7 flex justify-center items-center rounded-full border border-activeColor cursor-pointer">
            <AiFillHeart className="text-activeColor" />
          </div>
          <div className="h-24 w-24  rounded-full relative">
            <Image
              src={user?.profile?.avatar ?? defaultAvatar}
              width={400}
              height={400}
              alt="user"
              className="w-full h-full object-cover"
            />
            <span className="absolute text-[#08B66D] right-1 bottom-0">
              <MdVerifiedUser className="text-2xl" />
            </span>
          </div>
          <div className="py-3 border-b space-y-1">
            <h6 className="text-base font-lexed font-medium text-primaryColor">
              {user.username ?? user. email}
            </h6>

            <h6 className="lg:text-lg text-base text-[#08B66D]">
              Verified Seller
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

          <div className="grid grid-cols-1 pt-5">
            <div className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              Follow
            </div>
          </div>
        </div>
) 

export default FollowUserCard
