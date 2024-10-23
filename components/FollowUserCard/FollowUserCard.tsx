import React from 'react'
import Image from "next/image";
import defaultAvatar from "@/public/userMale.png";
import { useDispatch, useSelector } from 'react-redux'
import { useAddFollowMutation, useRemoveFollowMutation } from '@/apollograph/generated'
import Link from 'next/link'

export const FollowUserCard = ({follower}: {follower:any}) => {
  console.log("follower", follower)
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
        const cId = cache.identify(follower)
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
        const cId = cache.identify(follower)
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
    <div
            key={follower.id}
            className="flex flex-col justify-items-center align-items-center space-y-3 p-4 border border-gray-100 shadow-md bg-white rounded-md"
          >
            <div className=" m-auto w-20 h-20 rounded-full">
              <Image
                src={follower.user.profile?.avatar ?? defaultAvatar}
                alt="user avatar"
                width={300}
                height={300}
                className=" w-full h-full object-cover rounded-full"
              />
            </div>

            <h6 className="m-auto text-lg  text-primaryColor font-lexed font-medium">
              {follower.user.username ?? follower.user.email}
            </h6>
            <div className="flex flex-col gap-2 pt-3 ">
            {authState.isAuthenticated && authState.user.id !== follower.user.id && (
                <>
                
                {follower.followStatus ? (
               <button
               onClick={() =>
                handleFollowRemove(follower, authState.user.id)
              }
               className="border border-activeColor text-activeColor  rounded-md 
          py-2 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 font-semibold">
               Unfollow
             </button>
              ) : (
                
                 <button 
                 onClick={() => handleFollowAdd(follower, authState.user.id)}
                className="border border-activeColor text-activeColor  rounded-md 
          py-2 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 font-semibold">
                 Follow
               </button>
              )}
               </>
            )}

              <Link
                href={`/seller/${follower.user.id}`}
                className="border border-activeColor text-activeColor  rounded-md 
          py-2 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 font-semibold"
              >
                View Details
              </Link>
            </div>
           
            
          </div>
) 

}

export default FollowUserCard
