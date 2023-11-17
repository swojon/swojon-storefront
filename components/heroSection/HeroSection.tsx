import React from "react";
import "./HeroSection.scss";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
// import Hero1 from "../../public/assets/bannerHeadPhone.jpg";

import Navbar2 from "../navbar/Navbar2";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const HeroSection = () => {
  return (
    <section className="w-full   hero-container relative ">
      <Navbar2 border="none" />

      {/* <div className="absolute  left-0 top-0 w-full h-full z-0 flex md:justify-end items-end">
        <div className=" w-full h-full  flex justify-center lg:items-end md:items-center">
          <Image
            src={Hero1}
            alt="hero-img"
            className="sm:w-[80%] md:[85%] w-full mx-auto  z-0"
          />
        </div>
      </div> */}

      <div className="flex  hero-height items-center  custom-container   justify-center ">
        <div className="text-center  space-y-2 md:space-y-4 ">
          <h1 className="lg:text-6xl font-lexed md:text-4xl text-3xl font-semibold flex flex-col space-y-2 animate text-whiteColor slideInLeft">
            <span> Save! Declutter! </span>
            
          </h1>
          <p className="text-gray-300 lg:text-lg md:text-base text-sm  lg:flex md:flex-col    animate--delay-1s slideInLeft2">
            <span>Sustainable Shopping, Unbeatable Prices – Welcome to Swojon, where every purchase tells a story of style and savings.</span>
           
          </p>

          {/* <div className="w-full sm:[250px] md:w-[270px] lg:w-[320px] xl:w-[350px] mx-auto">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative ">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  ">
                <MagnifyingGlassIcon
                  className="h-7 w-7  p-1.5 bg-activeColor text-white rounded-full mr-1 "
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-2xl border border-gray-300 bg-white py-2 pl-3 pr-8 leading-5 placeholder-[#C0C0C0] focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
