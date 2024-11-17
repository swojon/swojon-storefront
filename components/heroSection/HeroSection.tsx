import React from "react";
import "./HeroSection.scss";
import Image from "next/image";

import Navbar from "../navbar/Navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full   hero-container relative ">
      <Image
        src="/assets/Swojon_Cover_photo.png"
        fill={true}
        sizes="100vw"
        className="object-center object-cover pointer-events-none z-0 "
        alt="cover"
      />
  
      <Navbar border="none" />

      <div className="flex hero-height justify-center items-center  hero-custom-container   relative  bg-gradient-to-t from-slate-900">
        <div className="md:text-center text-center space-y-2 md:space-y-4 ">
          <h1 className="lg:text-5xl font-lexed md:text-5xl text-4xl font-bold flex flex-col space-y-2 animate text-white slideInLeft ">
          Helping you Become Everyone's Trusted Choice
          </h1>
          <p className=" text-white xl:text-xl lg:text-lg md:text-base text-sm  sm:flex sm:flex-col   animate--delay-1s slideInLeft2   font-medium">
            <span className="md:block pe-2">
            Your first sale is one listing away
            </span>
            {/* <span>
              Where every purchase tells a story of style and savings.
            </span> */}
          </p>

          <div className="flex gap-2 flex-wrap justify-center">
          {/* <Link href="/explore">
              <button className="py-3.5 px-9 border border-gray-500  sm:border-activeColor rounded-md  text-whiteColor sm:text-activeColor relative  transition ease-in-out delay-150 duration-300 md:text-base text-sm   font-lexed font-medium  whitespace-nowrap shadow-2xl shadow-gray-800 w-full md:w-auto">
                Explore Products
              </button>
            </Link> */}
            <Link href="/upload-product">
              <button className="py-3.5 px-9 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-xl lg:text-lg md:text-base  font-lexed font-medium  whitespace-nowrap shadow-2xl shadow-gray-800 w-full md:w-auto">
                List your product
              </button>
            </Link>
          </div>
        </div>
   
      </div>

    </section>
  );
};

export default HeroSection;
