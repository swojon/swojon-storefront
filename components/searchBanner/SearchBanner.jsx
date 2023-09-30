import React from "react";
import bgSearch from "../../public/bgSearch.jpg";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";

const SearchBanner = ({ img }) => {
  return (
    <section className=" my-5 ">
      <div className="w-full h-[70vh]  relative rounded-lg">
        <Image
          src={img}
          alt=""
          className="w-full h-full object-cover opacity-75 rounded-lg"
        />
        <div className="bg-[#1b1b1b74] absolute w-full h-full left-0 top-0 rounded-lg">
          <div className="flex px-[9vw] items-center h-full">
            <div className="text-white font-medium w-full">
              <h2 className="text-3xl">
                Every kinda thing, for every kinda person
              </h2>

              <div class="w-full py-4  flex">
                <div className="relative w-full ">
                  <input
                    type="search"
                    className=" m-0 w-full  block   flex-auto rounded-l-xl  bg-white bg-clip-padding pl-9 py-[0.7rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700  focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-100 dark:focus:border-primary"
                    placeholder="lets search together"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                  />
                  <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#cc0000]" />
                </div>

                <button
                  className="relative z-[2] flex items-center rounded-lg bg-primary px-6 py-2.5 text-xs font-medium  leading-tight bg-[#cc0000] shadow-md transition duration-150 ease-in-out hover:bg-primary-700  focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Search
                </button>
              </div>

              <p className="text-sm">
                Trending: switch, nintendo, ps5, iphone, macbook, monitor, tv
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
