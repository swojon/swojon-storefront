import React from "react";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";
import { MdOutlineClose } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RatingsLoader from "../Loader/RatingsLoader";
import CircularProgressbarLoader from "../Loader/CircularProgressbarLoader";
import ProgressBarLoader from "../Loader/ProgressBarLoader";

const Review = () => {
  const percentage = 66;
  return (
    <section className="space-y-9 ">
      <h5 className="text-2xl text-primaryColor font-lexed font-medium">
        Customer review & ratings
      </h5>
      <div className="flex items-center justify-around gap-3 px-10">
        <div className="space-y-5">
          <h6 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-primaryColor font-lexed font-medium">
            4.5 <span className="text-sm">out of</span> 5
          </h6>

          <div className="flex items-center  gap-2">
            <div className="flex gap-1 items-center text-sm pb-0.5">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <small className="text-xs relative   whitespace-nowrap cursor-pointer">
              (4210 reviews)
              <span className="absolute left-0 px-1 -bottom-0.5 h-0.5 w-full bg-gray-300"></span>
            </small>
          </div>

          <div className="flex items-center gap-2 pb-3">
            <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center md:text-sm sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
              See all Reviews
            </button>
            <button className="border border-activeColor  text-whiteColor bg-activeColor  rounded-lg py-1 text-center md:text-sm sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
              Write a Review
            </button>
          </div>
        </div>

        {/* <RatingsLoader /> */}

        <div className=" flex flex-col items-center">
          <div className="w-[100px] mb-4">
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

          <span className="text-base text-primaryColor text-center">
            {percentage}% would recommend
          </span>
          <span className="text-sm text-secondColor text-center">
            10 recommendations
          </span>
        </div>

        {/* <CircularProgressbarLoader />

        <ProgressBarLoader /> */}

        <div className="space-y-2">
          <div className="flex items-center text-secondColor gap-3 w-[400px]">
            <div className="w-[18%] mx-auto ">
              <small className="text-xs relative   whitespace-nowrap">
                5 stars
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
              </small>
            </div>

            <div className=" w-[70%] ">
              <ProgressBar bar="75%" />
            </div>

            <div className="w-[12%] flex justify-end mx-auto ">
              <small className="text-xs   whitespace-nowrap ">75%</small>
            </div>
          </div>
          <div className="flex items-center text-secondColor gap-3 w-[400px] ">
            <div className="w-[18%] mx-auto ">
              <small className="text-xs relative   whitespace-nowrap">
                4 stars
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
              </small>
            </div>

            <div className=" w-[70%] ">
              <ProgressBar bar="95%" />
            </div>

            <div className="w-[12%]  flex justify-end ">
              <small className="text-xs   whitespace-nowrap ">95%</small>
            </div>
          </div>
          <div className="flex items-center text-secondColor gap-3 w-[400px] ">
            <div className="w-[18%] mx-auto ">
              <small className="text-xs relative   whitespace-nowrap">
                3 stars
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
              </small>
            </div>

            <div className=" w-[70%] ">
              <ProgressBar bar="5%" />
            </div>

            <div className="w-[12%] flex justify-end mx-auto ">
              <small className="text-xs   whitespace-nowrap ">5%</small>
            </div>
          </div>
          <div className="flex items-center text-secondColor gap-3 w-[400px] ">
            <div className="w-[18%] mx-auto ">
              <small className="text-xs relative   whitespace-nowrap">
                2 stars
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
              </small>
            </div>

            <div className=" w-[70%] ">
              <ProgressBar bar="5%" />
            </div>

            <div className="w-[12%] flex justify-end mx-auto ">
              <small className="text-xs   whitespace-nowrap ">5%</small>
            </div>
          </div>
          <div className="flex items-center text-secondColor gap-3 w-[400px] ">
            <div className="w-[18%] mx-auto ">
              <small className="text-xs relative   whitespace-nowrap">
                1 star
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></span>
              </small>
            </div>

            <div className=" w-[70%] ">
              <ProgressBar bar="5%" />
            </div>

            <div className="w-[12%] flex justify-end mx-auto ">
              <small className="text-xs   whitespace-nowrap ">5%</small>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  items-start  gap-5">
        <div className="flex  items-center gap-2 w-[30%] ">
          <SortBy /> <FilterBy />
        </div>
        <div className="flex gap-2.5 items-center flex-wrap ">
          <div className="bg-gray-100 px-4 py-2 flex gap-2.5 items-center rounded-2xl">
            <span className="text-sm">5 stars</span>{" "}
            <button>
              <MdOutlineClose className="text-sm border border-primaryColor rounded-full p-0.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-6 border space-y-2  rounded-md">
          <h6 className="text-lg text-primaryColor font-lexed font-medium">
            Holiday must have
          </h6>
          <div className="flex gap-1 items-center text-sm ">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>

          <span className="block text-sm text-secondColor">
            Kay - 5 months ago{" "}
          </span>

          <p className="text-base text-secondColor ">
            I like that I got my packages before the time I was supposed to that
            was great. plus they look exactly like the picture that I was
            presented with. and that I received every package except for one my
            dresser and I still havent heard anything or received anything
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
