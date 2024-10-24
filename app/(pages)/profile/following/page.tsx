"use client";
import {
  useListFollowingQuery,
} from "@/apollograph/generated";
import { useSelector } from "react-redux";
import FollowUserCard from "@/components/FollowUserCard/FollowUserCard";
import Link from "next/link";
import NotMatched from "@/components/NotMatched/NotMatched";
import FollowUserCardLoader from "@/components/Loader/FollowUserCardLoader";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";

const Followers = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { data, error, loading } = useListFollowingQuery({
    variables: {
      userId: user.id,
    },
  });
  const followers = data?.listFollowing.items;
  const isMobile = useIsMobile();

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
        <h6 className="text-primaryColor md:text-left text-center lg:text-2xl md:text-lg text-base font-lexed font-bold ">
          People you follow
        </h6>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  pt-10">
        {followers?.map((follower) => (
          <FollowUserCard follower={follower} key={follower.id} />
        ))}
        {loading && <FollowUserCardLoader />}

       
      </div>
      {!loading && (!followers || followers.length <= 0) && (
            <div className=" pt-16">
              <NotMatched title={"You don't seem to be following any sellers yet"} 
              subtitle={"Start exploring to find your favorite ones!"}
              cta={{
                text: "Explore Products",
                link : "/explore"
              }}
              />
            </div>
          )}
  
    </section>
  );
};

export default Followers;
