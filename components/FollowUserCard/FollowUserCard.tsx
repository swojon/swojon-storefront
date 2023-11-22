import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { FaStar, FaLocationDot } from 'react-icons/fa6'
import { MdVerifiedUser } from 'react-icons/md'
import Image from "next/image"

import defaultAvatar from "@/public/userMale.png";
import { useDispatch, useSelector } from 'react-redux'
import { useAddFollowMutation, useRemoveFollowMutation } from '@/apollograph/generated'

export const FollowUserCard = ({follow}: {follow:any}) => {
  const dispatch = useDispatch()
  const authState = useSelector((state: any) => state.auth)
  const [Unfollow, {data: unfollowData, loading: unfollowLoading, error: unfollowError}] = useRemoveFollowMutation()
  const [addFollow, {data: followData, loading: followLoading, error: followError }] = useAddFollowMutation()
  const handleFollowAdd = (userId: number, followedUserId: number) => {
    addFollow({
      variables: {
        userId,
        followedUserId
      },
      update(cache, {data}) {
        console.log(cache)
        const cId = cache.identify(follow)
        console.log("cid", cId)
        cache.modify({
          id: cId,
          fields: {
            followStatus(prev) {
              return true 
            },
          }
        })
      }
    })
  }

  const handleFollowRemove = (userId: number, followedUserId: number) => {
    Unfollow({
      variables: {
        userId, 
        followedUserId
      },
      update(cache, {data}) {
        console.log("cache now" , cache)
        const cId = cache.identify(follow)
        console.log("cid", cId)
        cache.modify({
          id: cId,
          fields: {
            followStatus(prev) {
              return false 
            },
          }
        })
      }
    })
  }

  return (
    <div className="border rounded-md px-3 py-4 flex-1 lg:flex-none relative">
          <div className="absolute right-3 top-3 w-7 h-7 flex justify-center items-center rounded-full border border-activeColor cursor-pointer">
            <AiFillHeart className="text-activeColor" />
          </div>
          <div className="h-24 w-24  rounded-full relative">
            <Image
              src={follow.user?.profile?.avatar ?? defaultAvatar}
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
              {follow.user.username ?? follow.user.email} 
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
              <span className="text-sm ">Mirpur-14,  Dhaka</span>
            </div>
          </div>

          <div className="grid grid-cols-1 pt-5">
            {follow.followStatus === true ? 
            <button onClick={() => handleFollowRemove(authState.user.id, follow.user.id)} className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              Unfollow
            </button>
            : <div onClick={() => handleFollowAdd(authState.user.id, follow.user.id)} className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
            Follow
          </div>
          }
          </div>
        </div>
) 

}

export default FollowUserCard
