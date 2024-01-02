"use client";
import { useListFollowersQuery } from "@/apollograph/generated";
import FollowersLoader from "@/components/Loader/FollowersLoader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Followers = ({ params }: { params: { sellerId: string } }) => {
  const sellerId = parseInt(params.sellerId, 10);
  const { data, error, loading } = useListFollowersQuery({
    variables: {
      userId: sellerId,
    },
    skip: !sellerId,
  });

  const followers = data?.listFollowers.items;

  return (
    <section className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {followers &&
        followers.map((follower) => (
          <div
            key={follower.id}
            className="space-y-3 p-4 border border-gray-100 shadow-md bg-white rounded-md"
          >
            <div className="w-20 h-20 rounded-full">
              <Image
                src={follower.user.profile?.avatar ?? "/user1.jpg"}
                alt="user avatar"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h6 className="text-lg  text-primaryColor font-lexed font-medium">
              {follower.user.email}
            </h6>

            <div className="flex items-center gap-2 ">
              {follower.followStatus ? (
                <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
                  Follow me
                </button>
              ) : (
                <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
                  Unfollow
                </button>
              )}
              <Link
                href={`/seller/${follower.user.id}`}
                className="border border-activeColor  text-activeColor   rounded-lg py-1 text-center  sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      {loading && <FollowersLoader />}
    </section>
  );
};

export default Followers;
