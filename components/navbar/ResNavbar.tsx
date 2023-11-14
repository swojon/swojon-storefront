"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Navbar.scss";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setNavClose, setNavOpen } from "@/app/redux/navSlice";
import Link from "next/link";
import { useListCategoriesQuery } from "@/apollograph/generated";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";

import "./resNavbar.css";
import { CiDollar } from "react-icons/ci";

const ResNavbar = () => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state: any) => state.nav.open);
  const { data, loading, error } = useListCategoriesQuery();
  const categories = data?.listCategories.items;
  const parentCategories = categories?.filter(
    (item) => item.parentCategory == null
  );

  const [currentCategory, setCurrentCategory] = useState<any>(null);
  const [subCategories, setSubCategories] = useState<any>([]);
  const [visibleCategories, setVisibleCategories] = useState(4);

  const handleMouseEnter = (category: any) => {
    console.log("category hovered", category);
    setCurrentCategory(category);
  };

  if (currentCategory === null && !!parentCategories) {
    console.log("Setting initial selected categtory");
    setCurrentCategory(parentCategories[0]);
  }

  // const handleArrowClick = () => {
  //   setVisibleCategories((prevVisibleCategories) => prevVisibleCategories + 5);
  // };

  return (
    <div
      className={`fixed top-0 z-[1000]  lg:hidden w-full h-screen  transition delay-200 duration-700 ease-in-out ${
        isNavOpen ? "translate-x-0   " : "-translate-x-full "
      }`}
    >
      <div
        onClick={() => dispatch(setNavClose())}
        className="w-full h-full bg-[#2222226d] absolute left-0 top-0 z-100"
      ></div>
      <div
        className={`lg:[35%] md:w-[45%] w-[72%] sm:w-[65%] bg-white h-screen opacity-100   relative transition duration-700 ease-in-out delay-200 `}
      >
        <button
          className="absolute -right-12 top-0  p-3 bg-black rounded-sm text-white"
          onClick={() => dispatch(setNavClose())}
        >
          <AiOutlineClose className="text-2xl" />
        </button>
        <div className="relative h-full">
          <div className="flex border-b px-5 py-4 items-center gap-3">
            <span className="text-base text-primaryColor font-lexed font-medium">
              All
            </span>
            {parentCategories?.slice(0, visibleCategories).map((item) => (
              <span
                className="text-base text-primaryColor font-lexed font-medium pr-2 w-20 truncate"
                key="item.id"
              >
                {item.name}
              </span>
            ))}
            {/* <span>
              <MdKeyboardArrowRight onClick={handleArrowClick} />
            </span> */}
          </div>

          <div className="h-[77%] custom-scroll overflow-y-auto">
            {parentCategories?.map((item) => (
              <div
                className="flex justify-between items-center lg:px-8 md:px-4 px-3 my-4  cursor-pointer "
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <div className="grid grid-cols-3 items-center gap-5 w-[90%] ">
                  <div className="lg:h-16 lg:w-16 md:h-12 md:w-12 h-12 w-12 rounded-full border ">
                    <Image
                      src={item.banner ?? ""}
                      height={300}
                      width={300}
                      alt="banner"
                      className="w-full h-full object-cover rounded-full "
                    />
                  </div>
                  <span
                    className={` py-2 text-secondColor  capitalize font-lexed rounded-sm lg:text-lg md:text-base sm:text-sm text-xs font-medium  col-span-2`}
                  >
                    {item.name}
                  </span>
                </div>

                <MdKeyboardArrowRight className="text-sm text-gray-400" />
              </div>
            ))}
          </div>

          <div className="absolute py-5 px-14 bg-white bottom-0 left-0 w-full h-20 border-t flex justify-between items-center text-primaryColor">
            <Link href="/">
              <GrHomeRounded className="text-2xl" />
            </Link>
            <Link href="/wishlists">
              <FaRegHeart className="text-2xl" />
            </Link>
            <Link href="/points">
              <AiOutlineDollarCircle className="text-2xl" />
            </Link>
            <Link href="/profile">
              <FaRegUser className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResNavbar;
