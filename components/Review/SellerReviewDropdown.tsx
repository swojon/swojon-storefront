import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

import "./Review.css";
import ProgressBar from "./ProgressBar";
import { BsDot } from "react-icons/bs";
import { useSummaryUserReviewQuery } from "@/apollograph/generated";
import ReviewStars from "./ReviewStars";

const SellerReviewDropdown = ({ sellerId }: { sellerId: number }) => {
  const { data, loading, error } = useSummaryUserReviewQuery({
    variables: {
      usernameOrId: String(sellerId),
    },
  });

  const getPercentage = (count: number, total: number) => {
    if (!count || !total) return 0;
    return Math.trunc((count / total) * 100);
  };
  const review = data?.summaryUserReview;
  const avgRating = Math.ceil(review?.avgRating!);

  return (
    <>
      <div className="flex items-center">
        <Menu as="div" className="relative inline-block ">
          <div>
            <Menu.Button className="flex items-center text-xs text-primaryColor hover:text-gray-600 focus:outline-none gap-1 ">
              <span className="md:text-base text-sm font-medium text-primaryColor text-center relative">
                {review?.reviewCount} Reviews
                <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-400"></span>
              </span>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute  z-10 -left-1  mt-2  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border p-5 space-y-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-base text-primaryColor">
                    {data?.summaryUserReview.avgRating ?? 0} out of 5
                  </span>

                  <div className="flex items-center gap-1 text-sm">
                    <ReviewStars
                      avgRating={data?.summaryUserReview.avgRating ?? 0}
                    />
                  </div>
                </div>
                <span className="text-xs text-primaryColor pt-1">
                  {data?.summaryUserReview.reviewCount ?? 0} reviews
                </span>
              </div>

              <div className="space-y-2 md:w-[270px] sm:w-[230px] w-[200px]">
                <div className="flex items-center text-secondColor gap-3 w-full ">
                  <div className="w-[18%] mx-auto ">
                    <small className="text-xs relative   whitespace-nowrap">
                      5 stars
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
                    </small>
                  </div>

                  <div className=" w-[70%] ">
                    <ProgressBar
                      bar={`${getPercentage(
                        data?.summaryUserReview.five_star_count!,
                        data?.summaryUserReview.reviewCount!
                      )}%`}
                    />
                  </div>

                  <div className="w-[12%] flex justify-end mx-auto ">
                    <small className="text-xs   whitespace-nowrap ">{`${getPercentage(
                      data?.summaryUserReview.five_star_count!,
                      data?.summaryUserReview.reviewCount!
                    )}%`}</small>
                  </div>
                </div>

                <div className="flex items-center text-secondColor gap-3 w-full ">
                  <div className="w-[18%] mx-auto ">
                    <small className="text-xs relative   whitespace-nowrap">
                      4 stars
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
                    </small>
                  </div>

                  <div className=" w-[70%] ">
                    <ProgressBar
                      bar={`${getPercentage(
                        data?.summaryUserReview.four_star_count!,
                        data?.summaryUserReview.reviewCount!
                      )}%`}
                    />
                  </div>

                  <div className="w-[12%]  flex justify-end ">
                    <small className="text-xs   whitespace-nowrap ">{`${getPercentage(
                      data?.summaryUserReview.four_star_count!,
                      data?.summaryUserReview.reviewCount!
                    )}%`}</small>
                  </div>
                </div>

                <div className="flex items-center text-secondColor gap-3 w-full ">
                  <div className="w-[18%] mx-auto ">
                    <small className="text-xs relative   whitespace-nowrap">
                      3 stars
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
                    </small>
                  </div>

                  <div className=" w-[70%] ">
                    <ProgressBar
                      bar={`${getPercentage(
                        data?.summaryUserReview.three_star_count!,
                        data?.summaryUserReview.reviewCount!
                      )}%`}
                    />
                  </div>

                  <div className="w-[12%] flex justify-end mx-auto ">
                    <small className="text-xs   whitespace-nowrap ">{`${getPercentage(
                      data?.summaryUserReview.three_star_count!,
                      data?.summaryUserReview.reviewCount!
                    )}%`}</small>
                  </div>
                </div>

                <div className="flex items-center text-secondColor gap-3 w-full ">
                  <div className="w-[18%] mx-auto ">
                    <small className="text-xs relative   whitespace-nowrap">
                      2 stars
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
                    </small>
                  </div>

                  <div className=" w-[70%] ">
                    <ProgressBar
                      bar={`${getPercentage(
                        data?.summaryUserReview.two_star_count!,
                        data?.summaryUserReview.reviewCount!
                      )}%`}
                    />
                  </div>

                  <div className="w-[12%] flex justify-end mx-auto ">
                    <small className="text-xs   whitespace-nowrap ">{`${getPercentage(
                      data?.summaryUserReview.two_star_count!,
                      data?.summaryUserReview.reviewCount!
                    )}%`}</small>
                  </div>
                </div>

                <div className="flex items-center text-secondColor gap-3 w-full ">
                  <div className="w-[18%] mx-auto ">
                    <small className="text-xs relative   whitespace-nowrap">
                      1 star
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
                    </small>
                  </div>

                  <div className=" w-[70%] ">
                    <ProgressBar
                      bar={`${getPercentage(
                        data?.summaryUserReview.one_star_count!,
                        data?.summaryUserReview.reviewCount!
                      )}%`}
                    />
                  </div>

                  <div className="w-[12%] flex justify-end mx-auto ">
                    <small className="text-xs   whitespace-nowrap ">{`${getPercentage(
                      data?.summaryUserReview.one_star_count!,
                      data?.summaryUserReview.reviewCount!
                    )}%`}</small>
                  </div>
                </div>
              </div>

              <Link
                href={`/seller/${sellerId}/reviews`}
                className="flex items-center justify-center "
              >
                <small className="text-sm relative   whitespace-nowrap">
                  see all reviews
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
                </small>
              </Link>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <BsDot className="text-secondColor text-lg sm:block hidden" />
        <div className="flex flex-wrap gap-2 items-center">
          <ReviewStars avgRating={avgRating!} />
          <span className=" md:text-base text-sm font-medium text-secondColor text-center relative">
            {/* ({avgRating!} ) */}
          </span>
        </div>
      </div>
    </>
  );
};

export default SellerReviewDropdown;
