"use client";
import {  useListFollowersQuery } from "@/apollograph/generated";
import FollowUserCard from "@/components/FollowUserCard/FollowUserCard";
import FollowUserCardLoader from "@/components/Loader/FollowUserCardLoader";
import NotMatched from "@/components/NotMatched/NotMatched";
import React from "react";

const Followers = ({ params }: { params: { sellerId: string } }) => {
  
  const { data, error, loading } = useListFollowersQuery({
    variables: {
      usernameOrId:params.sellerId,
    },
    skip: !params.sellerId,
  });

  const followers = data?.listFollowers.items;
  // console.log("Got seller to render", seller)
  
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
        <NotMatched
         title={"This seller doesn’t have any followers yet."} 
         subtitle={"Be the first to follow and stay updated!"}/>

      </div>
    )}
    </>
  );
};

export default Followers;
