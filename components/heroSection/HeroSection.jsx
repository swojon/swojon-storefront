import React from "react";
import "./HeroSection.scss";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Hero1 from "../../public/assets/hero1.png";

import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#fdf7df] h-full  hero-container ">
      <Navbar />

      <div className="sm:flex hero-height items-center md:pl-[6vw] px-5 py-4 md:py-0  space-y-3 md:space-x-0  ">
        <div className="flex-1  space-y-1 md:space-y-4 ">
          <h1 className="lg:text-6xl md:text-4xl text-3xl heading-font font-semibold flex flex-col space-y-1">
            <span>Find your all </span>
            <span>solution in one place</span>
          </h1>
          <p className="lg:text-lg md:text-base text-sm  lg:flex lg:flex-col  text-secondColor">
            <span> Get everything, that you need with always relaxation. </span>
            <span> Buy from a trustable source and get relax.</span>
          </p>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5 heading-font font-medium md:text-base text-sm">
            <button className="border border-activeColor py-2 px-3 rounded bg-activeColor text-whiteColor ">
              Sell Your Product
            </button>
            <button className="border border-activeColor py-2 px-3 rounded  text-activeColor ">
              All Categories
            </button>
          </div>
        </div>

        <div className="flex-1 w-full  md:h-auto ">
          <Image
            src={Hero1}
            alt="hero-img"
            className="sm:w-full w-[80%] mx-auto h-full pb-3"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
