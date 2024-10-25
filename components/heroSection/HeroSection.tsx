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
        layout="fill"
        className="object-center object-cover pointer-events-none z-0 "
        alt="cover"
      />
  
      <Navbar border="none" />

      <div className="flex md:justify-end hero-height justify-center items-center  custom-container   relative  md:bg-none bg-gradient-to-t from-slate-700">
        <div className="md:text-center text-center space-y-2 md:space-y-4 ">
          <h1 className="lg:text-6xl font-lexed md:text-5xl text-4xl font-bold flex flex-col space-y-2 animate md:text-[#374798] text-white slideInLeft ">
            Save! Declutter!
          </h1>
          <p className="md:text-slate-500 text-white xl:text-xl lg:text-lg md:text-base text-sm  sm:flex sm:flex-col   animate--delay-1s slideInLeft2   font-medium">
            <span className="md:block pe-2">
              Sustainable Shopping, Unbeatable Prices – Welcome to Swojon,
            </span>
            <span>
              Where every purchase tells a story of style and savings.
            </span>
          </p>

          <div className="">
            <Link href="/upload-product">
              <button className="py-3.5 px-9 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 md:text-base text-sm   font-lexed font-medium  whitespace-nowrap shadow-2xl shadow-gray-800 w-full md:w-auto">
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
