"use client";

import { useListFollowersQuery } from "@/apollograph/generated";
import { useSelector } from "react-redux";
import FollowUserCard from "@/components/FollowUserCard/FollowUserCard";
import FollowUserCardLoader from "@/components/Loader/FollowUserCardLoader";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";
import Link from "next/link";
import NotMatched from "@/components/NotMatched/NotMatched";
import { useSession } from "next-auth/react";

const Followers = () => {
  const {data: session} = useSession();
  const { data, error, loading } = useListFollowersQuery({
    variables: {
      usernameOrId: String(session?.user?.id!),
    },
    skip: !session?.user?.id
  });
  const followers = data?.listFollowers.items;
  const isMobile = useIsMobile();
  console.log("Followers", followers);
  return (
    <section>
      <div className="relative">
        {isMobile && (
          <Link
            href={"/profile"}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 border border-secondColor  rounded-md  cursor-pointer"
            // onClick={handleLeftArrowIconClick}
          >
            <HiArrowLeft className="text-primaryColor" />
          </Link>
        )}{" "}
        <h6 className="text-primaryColor text-center md:text-left lg:text-2xl md:text-lg text-base font-lexed font-bold ">
          Followers
        </h6>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2  grid-cols-1 gap-4  pt-10">
        {followers?.map((follower) => (
          <FollowUserCard follower={follower} key={follower.id} />
        ))}
        {loading && <FollowUserCardLoader />}

      
      </div>
          
    {!loading && (!followers || followers.length <= 0) && (
            <div className=" pt-16">
              <NotMatched 
              title={"It looks like you don't have any followers yet!"}
               />
            </div>
          )}
  
    

    </section>
  );
};

export default Followers;

  