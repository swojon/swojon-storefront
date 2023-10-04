import React from "react";
import "./HeroSection.scss";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
// import Hero1 from "../../public/assets/bannerHeadPhone.jpg";

import Navbar2 from "../navbar/Navbar2";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen h-full  hero-container relative ">
      <div className="hidden md:block">
        <Navbar2 border="none" />
      </div>
      {/* <div className="absolute  left-0 top-0 w-full h-full z-0 flex md:justify-end items-end">
        <div className=" w-full h-full  flex justify-center lg:items-end md:items-center">
          <Image
            src={Hero1}
            alt="hero-img"
            className="sm:w-[80%] md:[85%] w-full mx-auto  z-0"
          />
        </div>
      </div> */}

      <div className="flex flex-col-reverse md:flex-row hero-height items-center md:pl-[6vw] px-5 my-4 md:py-0   md:space-x-0  ">
        <div className="flex-1  space-y-1 md:space-y-4 z-10">
          <h1 className="lg:text-6xl font-lexed md:text-4xl text-3xl font-semibold flex flex-col space-y-2 animate text-whiteColor slideInLeft">
            <span>Find your all </span>
            <span>solution in one place</span>
          </h1>
          <p className="text-gray-300 lg:text-lg md:text-base text-sm  lg:flex lg:flex-col    animate--delay-1s slideInLeft2">
            <span> Get everything, that you need with always relaxation. </span>
            <span> Buy from a trustable source and get relax.</span>
          </p>

          <div className="flex  space-x-3 sm:space-x-5 font-lexed font-medium md:text-base text-sm">
            <button className="border border-activeColor py-2 px-3 rounded bg-activeColor text-whiteColor hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300">
              Sell Your Product
            </button>
            <button className="border border-activeColor py-2 px-3 rounded text-activeColor hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 ">
              All Categories
            </button>
          </div>
        </div>

        <div className="flex-1 w-full h-f"></div>
      </div>
    </section>
  );
};

export default HeroSection;
