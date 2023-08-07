import React from "react";
import "./HeroSection.scss";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Hero1 from "../../public/hero1.png";
import Hero2 from "../../public/hero2.png";
import Hero3 from "../../public/hero3.png";
import Hero4 from "../../public/hero4.png";

const HeroSection = () => {
  return (
    <section className="w-full  hero-container flex flex-col justify-center">
      <div className="flex w-full left gap-x-4">
        <div className="flex-1 ">
          <h1>Empower Your Lifestyle With zwapto!</h1>
          <p className="py-2">
            At ROFTAN, we blend sustainability with convenience
          </p>

          <div class="relative w-2/3 my-3 mb-4 flex  flex-wrap ">
            <div className="relative">
              <input
                type="search"
                className=" m-0  block   flex-auto rounded-l-xl  bg-white bg-clip-padding pl-9 py-[0.7rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700  focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-100 dark:focus:border-primary"
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
        </div>
        <div className="flex-1 border flex justify-between gap-x-4 md:flex-shrink-0">
          <Image
            src={Hero1}
            className="hero1 w-full border-blue-900  md:h-64 "
            alt="Picture of the author"
          />
          <Image
            src={Hero2}
            className="hero1 w-full border-blue-900  md:h-64  "
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className=" flex pt-4 gap-x-4 ">
        <div className="flex-1 border flex justify-between  md:flex-shrink-0 ">
          <div className="w-full relative rounded-3xl flex justify-between bg-trans">
            <div className="flex-1 z-10 p-8 flex flex-col justify-end text-[#FFFFFF]">
              <h2 className="text-xl">Best selling</h2>
              <p className="text-sm">Write a small details about the product</p>
            </div>
            <Image
              src={Hero3}
              className="hero1 w-full  h-64 flex-1 z-10"
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex-1 border flex justify-between gap-x-4 md:flex-shrink-0 ">
          <div className="w-full relative">
            <Image
              src={Hero4}
              className="hero1 w-full   md:h-64 "
              alt="Picture of the author"
            />

            <div className=" absolute bottom-0 left-0 z-10 p-8  text-[#FFFFFF]">
              <h2 className="text-xl">Best selling</h2>
              <p className="text-sm">Write a small details about the product</p>
            </div>
          </div>

          <Image
            src={Hero2}
            className="hero1 w-full  md:h-64 "
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
