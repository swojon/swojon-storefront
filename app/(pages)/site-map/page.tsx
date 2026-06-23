import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const SiteMap = () => {
  return (
    <section className="custom-container py-10 ">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-1  text-sm text-secondColor">
          <h6>Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor">Site Map</h6>
        </div>
        <h2 className="text-primaryColor font-lexed xl:text-3xl lg:text-2xl md:text-lg text-base font-medium">
          Site Map
        </h2>
        <div className="text-center text-base text-secondColor">
          <p>Need something cleared up? Here are our most</p>
          <p>frequently asked questions.</p>
        </div>
      </div>

      <div className="pt-16">
        <h6 className="text-2xl font-lexed text-primaryColor">
          Products topics
        </h6>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 pt-7">
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Furniture
            </span>
            <span className="text-sm font-lexed text-primaryColor">452</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Furniture
            </span>
            <span className="text-sm font-lexed text-primaryColor">452</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Furniture
            </span>
            <span className="text-sm font-lexed text-primaryColor">452</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Furniture
            </span>
            <span className="text-sm font-lexed text-primaryColor">452</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Furniture
            </span>
            <span className="text-sm font-lexed text-primaryColor">452</span>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <h6 className="text-2xl font-lexed text-primaryColor">
          Company topics
        </h6>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 pt-7">
          <div className="flex justify-start items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Community
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Category
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Contact us
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Messages
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              All Adds
            </span>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <h6 className="text-2xl font-lexed text-primaryColor">Help topics</h6>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 pt-7">
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">FAQ</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Privacy Policy
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Terms and Condition
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Help Center
            </span>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <h6 className="text-2xl font-lexed text-primaryColor">Extra topics</h6>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 pt-7">
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              About us
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Site map
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3 border border-gray-100 bg-[#F1FAF7] rounded-md">
            <span className="text-sm font-lexed text-primaryColor">
              Careers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteMap;
