import React from "react";
import ReviewProgressBar from "./ReviewProgressBar";
import ReviewStars from "./ReviewStars";
import { useDispatch } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";
import { useSummaryUserReviewQuery } from "@/apollograph/generated";
import { useSession } from "next-auth/react";

function SummarySellerReview({ sellerUsernameOrId }: { sellerUsernameOrId: string }) {
  const dispatch = useDispatch();
  const {data:session, status} = useSession(); 
  const { data, loading, error } = useSummaryUserReviewQuery({
    variables: {
      usernameOrId: sellerUsernameOrId,
    },
  });

  return (
    <div className="flex items-center flex-wrap xl:justify-around  justify-center xl:gap-3 lg:gap-5 gap-8 ">
      <div className="md:space-y-5 space-y-3">
        <h6 className=" lg:text-5xl md:text-4xl sm:text-2xl text-lg text-primaryColor font-lexed font-medium">
          { data?.summaryUserReview?.avgRating ? data!.summaryUserReview!.avgRating.toFixed(2) : 0}{" "}
          <span className="text-sm">out of</span> 5
        </h6>

        <div className="flex items-center  gap-2">
          <div className="flex gap-1 items-center text-sm pb-0.5">
            <ReviewStars avgRating={data?.summaryUserReview.avgRating!} />
          </div>
          <small className="text-xs relative   whitespace-nowrap cursor-pointer">
            ( {data?.summaryUserReview.reviewCount ?? 0} reviews)
            <span className="absolute left-0 px-1 -bottom-0.5 h-0.5 w-full bg-gray-300"></span>
          </small>
        </div>

        <div className="flex items-center gap-2 pb-3">
          <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center md:text-sm sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            See all Reviews
          </button>
          {status === "authenticated" && session?.username != sellerUsernameOrId && session?.user?.id != Number(sellerUsernameOrId) && 
           <button
           onClick={() =>
             dispatch(
               setModalOpen({
                 title: "write review modal",
                 body: "writeReview",
                 props: {sellerUsernameOrId: sellerUsernameOrId}
               })
             )
           }
           className="border border-activeColor  text-whiteColor bg-activeColor  rounded-lg py-1 text-center md:text-sm sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3"
         >
           Write a Review
         </button>
          }
         
        </div>
      </div>

      {/* <RatingsLoader /> */}
      {/* 
      <div className=" flex flex-col items-center">
        <div className="lg:w-[80px] md:w-[70px] sm:w-[50px] w-[60px] mb-4">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
            styles={buildStyles({
              textColor: "#3b51a4",
              pathColor: "#3b51a4",
            })}
          />
        </div>

        <span className=" text-sm text-primaryColor text-center">
          {percentage}% would recommend
        </span>
        <span className=" text-xs text-secondColor text-center">
          10 recommendations
        </span>
      </div> */}

      {/* <CircularProgressbarLoader />

    <ProgressBarLoader /> */}

      <div className="space-y-2 w-[280px]">
        <div className="flex items-center text-secondColor gap-3 w-full ">
          <div className="w-[18%] mx-auto ">
            <small className="text-xs relative   whitespace-nowrap">
              5 stars
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
            </small>
          </div>

          <ReviewProgressBar
            count={data?.summaryUserReview.five_star_count!}
            total={data?.summaryUserReview.reviewCount!}
          />
        </div>

        <div className="flex items-center text-secondColor gap-3 w-full ">
          <div className="w-[18%] mx-auto ">
            <small className="text-xs relative   whitespace-nowrap">
              4 stars
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
            </small>
          </div>

          <ReviewProgressBar
            count={data?.summaryUserReview.four_star_count!}
            total={data?.summaryUserReview.reviewCount!}
          />
        </div>

        <div className="flex items-center text-secondColor gap-3 w-full ">
          <div className="w-[18%] mx-auto ">
            <small className="text-xs relative   whitespace-nowrap">
              3 stars
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
            </small>
          </div>

          <ReviewProgressBar
            count={data?.summaryUserReview.three_star_count!}
            total={data?.summaryUserReview.reviewCount!}
          />
        </div>

        <div className="flex items-center text-secondColor gap-3 w-full ">
          <div className="w-[18%] mx-auto ">
            <small className="text-xs relative   whitespace-nowrap">
              2 stars
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
            </small>
          </div>

          <ReviewProgressBar
            count={data?.summaryUserReview.two_star_count!}
            total={data?.summaryUserReview.reviewCount!}
          />
        </div>

        <div className="flex items-center text-secondColor gap-3 w-full ">
          <div className="w-[18%] mx-auto ">
            <small className="text-xs relative   whitespace-nowrap">
              1 star
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
            </small>
          </div>

          <ReviewProgressBar
            count={data?.summaryUserReview.one_star_count!}
            total={data?.summaryUserReview.reviewCount!}
          />
        </div>
      </div>
    </div>
  );
}

export default SummarySellerReview;
