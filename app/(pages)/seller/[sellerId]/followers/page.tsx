"use client";
import { useAddFollowMutation, useListFollowersQuery, useRemoveFollowMutation } from "@/apollograph/generated";
import FollowUserCard from "@/components/FollowUserCard/FollowUserCard";
import FollowersLoader from "@/components/Loader/FollowersLoader";
import FollowUserCardLoader from "@/components/Loader/FollowUserCardLoader";
import NotMatched from "@/components/NotMatched/NotMatched";
import defaultAvatar from "@/public/assets/defaultAvatar.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Followers = ({ params }: { params: { sellerId: string } }) => {
  const sellerId = parseInt(params.sellerId, 10);
  const { data, error, loading } = useListFollowersQuery({
    variables: {
      userId: sellerId,
    },
    skip: !sellerId,
  });

  const followers = data?.listFollowers.items;
  // console.log("Got seller to render", seller)
  
  const authState = useSelector((state: any) => state.auth);
  const [addFollow,{data:addData, loading:addLoading, error:addError}] = useAddFollowMutation();
  const [removeFollow,{data:removeData, loading:removeLoading, error:removeError}] = useRemoveFollowMutation();
  
  const handleFollowAdd = (followedUser:any, userId:number) => {
    addFollow({
      variables: {
        userId: userId,
        followedUserId: followedUser.id
      },
      update(cache, {data}){
        const cId = cache.identify(followedUser);
        cache.modify({
          id: cId,
          fields: {
            followStatus(prev) {
              return !prev
            }
          }
        }) 
      }
    })
  }
  const handleFollowRemove = (followedUser:any, userId:number) => {
    removeFollow({
      variables: {
        userId: userId,
        followedUserId: followedUser.id
      },
      update(cache, {data}){
        const cId = cache.identify(followedUser);
        cache.modify({
          id: cId,
          fields: {
            followingStatus(prev) {
              return !prev
            }
          }
        }) 
      }
    })
  }
  
  return (
    <>
    <section className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {followers &&
        followers.map((follower) => (
          <FollowUserCard follower={follower} key={follower.id} />
        ))}
      {loading && <FollowUserCardLoader />}
      
    </section>
    {!loading && (!followers || followers.length <= 0) && (
      <div className=" pt-16">
        <NotMatched title={"Sorry! No follower Found"} />
      </div>
    )}
    </>
  );
};

export default Followers;
