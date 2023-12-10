import React from "react";
import "./HeroSection.scss";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
// import Hero1 from "../../public/assets/bannerHeadPhone.jpg";

import Navbar2 from "../navbar/Navbar2";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full   hero-container relative ">
      <Navbar2 border="none" />

      <div className="flex  hero-height items-center  custom-container  justify-center ">
        <div className="text-center  space-y-2 md:space-y-4 md:px-5 ">
          <h1 className="lg:text-6xl font-lexed md:text-4xl text-3xl font-semibold flex flex-col space-y-2 animate text-whiteColor slideInLeft">
            <span> Save! Declutter! </span>
          </h1>
          <p className="text-gray-100 lg:text-lg md:text-base text-sm  lg:flex md:flex-col    animate--delay-1s slideInLeft2">
            <span>
              Sustainable Shopping, Unbeatable Prices – Welcome to Swojon, where
            </span>
            <span>every purchase tells a story of style and savings.</span>
          </p>

          <div>
            <Link href="/upload-product">
              <button className="py-2 px-4 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md whitespace-nowrap">
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
