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
      <Image
        src="/assets/Swojon_Cover_photo.png"
        layout="fill"
        className="object-center object-cover pointer-events-none z-0 "
        alt="cover"
      />
      {/* <div className="bg-gradient-to-t from-purple-500 to-pink-500 z-20 w-full h-full"></div> */}
      <Navbar2 border="none" />

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
        {/* <div className="absolute bottom-0 left-0  w-full p-2 z-10 md:hidden">
          <Link href="/upload-product">
            <button className="py-2.5 px-9 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 text-sm hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md whitespace-nowrap w-full">
              List your product
            </button>
          </Link>
        </div> */}
      </div>

      {/* <div className="absolute bottom-0 left-0  w-full p-2 z-10 sm:hidden">
        <Link href="/upload-product">
          <button className="py-2.5 px-9 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 text-sm hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md whitespace-nowrap w-full">
            List your product
          </button>
        </Link>
      </div> */}

      {/* <div className="absolute left-0 right-0 w-full top-0 ">
        <Image
          src="/assets/Swojon_Cover_photo.png"
          width={2000}
          height={1500}
          className="w-full h-full object-cover"
          alt="cover"
        />
      </div> */}

      {/* <div className="flex  hero-height items-center  custom-container   relative">
        <div className=" space-y-2 md:space-y-4 z-10">
          <h1 className="lg:text-6xl font-lexed md:text-5xl text-4xl font-bold flex flex-col space-y-2 animate text-primaryColor slideInLeft">
            <span> Save! Declutter! </span>
          </h1>
          <p className="text-secondColor xl:text-xl lg:text-lg md:text-base text-sm  sm:flex sm:flex-col    animate--delay-1s slideInLeft2 w-[65%] sm:w-auto">
            <span className="md:block pe-2">
              Sustainable Shopping, Unbeatable Prices – Welcome to Swojon
            </span>
            <span>
              Where every purchase tells a story of style and savings.
            </span>
          </p>

          <div className="">
            <Link href="/upload-product">
              <button className="py-3.5 px-9 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 md:text-base text-sm hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md whitespace-nowrap">
                List your product
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0  w-full p-2 z-10 md:hidden">
          <Link href="/upload-product">
            <button className="py-2.5 px-9 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 text-sm hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md whitespace-nowrap w-full">
              List your product
            </button>
          </Link>
        </div>
        <div className="absolute sm:right-0 -right-16 top-1/2 -translate-y-1/2 flex items-center md:justify-normal justify-center  h-full px-2 md:px-0">
          <Image
            src="/assets/undrawBG.svg"
            width={1000}
            height={1000}
            className="md:h-[85%] sm:h-[50%] h-[70%] w-auto my-auto z-0"
            alt="cover"
          />
        </div>
      </div> */}
      {/* <div className="flex flex-row  hero-height items-center  custom-container ">
        <div className="flex-1  space-y-2 md:space-y-4  ">
          <h1 className="lg:text-6xl font-lexed md:text-4xl text-3xl font-bold flex flex-col space-y-2 animate text-primaryColor slideInLeft">
            <span> Save! Declutter! </span>
          </h1>
          <p className="text-secondColor lg:text-lg md:text-base text-sm  lg:flex md:flex-col    animate--delay-1s slideInLeft2">
            <span className="md:block">
              Sustainable Shopping, Unbeatable Prices – Welcome to Swojon, where
            </span>
            <span>every purchase tells a story of style and savings.</span>
          </p>

          <div>
            <Link href="/upload-product">
              <button className="py-2.5 px-6 bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md whitespace-nowrap">
                List your product
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 my-7 h-full flex items-center ">
          <Image
            src="/assets/undrawBG.svg"
            width={1000}
            height={1000}
            className="h-[85%] w-auto mx-auto "
            alt="cover"
          />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
