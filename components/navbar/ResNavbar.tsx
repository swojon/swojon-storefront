"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import "./Navbar.scss";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setNavClose, setNavOpen } from "@/app/redux/navSlice";
import Link from "next/link";
import { useListCategoriesQuery } from "@/apollograph/generated";
import { MdKeyboardArrowRight, MdArrowBackIos } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";

import "./resNavbar.css";
import { CiDollar } from "react-icons/ci";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

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

  // if (currentCategory === null && !!parentCategories) {
  //   console.log("Setting initial selected categtory");
  //   setCurrentCategory(parentCategories[0]);
  // }

  // const handleArrowClick = () => {
  //   setVisibleCategories((prevVisibleCategories) => prevVisibleCategories + 5);
  // };

  return (
    <div
      className={`fixed top-0 z-[1000]  w-full h-screen  transition delay-200 duration-700 ease-in-out ${
        isNavOpen ? "translate-x-0   " : "-translate-x-full "
      }`}
    >
      <div
        onClick={() => dispatch(setNavClose())}
        className="w-full h-full bg-[#2222226d] absolute left-0 top-0 z-100 "
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
                onClick={() => handleMouseEnter(item)}
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

        <div
          className={`absolute h-full w-full bg-white right-0 top-0 transition  duration-100 ease-in-out ${
            currentCategory !== null ? "translate-x-0   " : "-translate-x-full "
          }`}
        >
          <div className="flex border-b px-5 py-4 items-center gap-3 w-full">
            <span
              onClick={() => setCurrentCategory(null)}
              className="absolute left-5 text-base text-primaryColor font-lexed font-medium cursor-pointer"
            >
              <MdArrowBackIos />
            </span>
            <span className="w-full text-center text-base text-primaryColor font-lexed font-medium">
              {currentCategory?.name}
            </span>
          </div>

          <div className="p-6 custom-scroll overflow-y-auto h-full">
            {/* second category */}
            <h6 className="lg:text-lg md:text-base text-sm text-secondColor font-lexed flex  items-center">
              <BsFillGrid3X3GapFill className="me-2" /> Shop by category
            </h6>

            {currentCategory && (
              <div className="flex flex-wrap gap-5 pt-4 pb-6 border-b">
                {/* View All card */}
                <div className="w-20   ">
                  <Link
                    href={`/categories/${currentCategory.slug}`}
                    className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                  >
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center relative hover:scale-105">
                      <HiOutlineSquaresPlus className="text-2xl text-activeColor " />
                    </div>
                    <span className="pt-1.5 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                      <span className="truncate pr-1">View All</span>
                    </span>
                  </Link>
                </div>

                {categories!
                  .filter(
                    (item) => item.parentCategory?.id === currentCategory.id
                  )
                  .map((item: any) => (
                    <div key={item.id} className="w-20   ">
                      <Link
                        href={`/categories/${item.slug}`}
                        className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                      >
                        <div className="w-full h-20  relative hover:scale-105">
                          <Image
                            src={item.banner ?? ""}
                            height={300}
                            width={300}
                            alt="banner"
                            className="w-full h-full object-cover rounded-full "
                          />{" "}
                          <span className="absolute left-0 top-0 w-full h-full  rounded-full opacity-bg "></span>
                        </div>

                        <span className="pt-1.5 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                          <span className="truncate pr-1">{item.name}</span>
                        </span>
                      </Link>
                    </div>
                  ))}
              </div>
            )}

            {/* third category */}
            {currentCategory &&
              categories!
                .filter(
                  (item) => item.parentCategory?.id === currentCategory.id
                )
                .map((item: any) => (
                  <Fragment key={item.id}>
                    <h6 className="lg:text-lg md:text-base text-sm text-secondColor font-lexed flex  items-center pt-5">
                      <BsFillGrid3X3GapFill className="me-2 " /> {item.name}
                    </h6>
                    <div className="flex flex-wrap gap-5 py-4">
                      {/* View All card */}
                      <div className="w-20   ">
                        <Link
                          href={`/categories/${item.slug}`}
                          className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                        >
                          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center relative hover:scale-105">
                            <HiOutlineSquaresPlus className="text-2xl text-activeColor " />
                          </div>
                          <span className="pt-1.5 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                            <span className="truncate pr-1">View All</span>
                          </span>
                        </Link>
                      </div>

                      {categories!
                        .filter((cat) => cat.parentCategory?.id === item.id)
                        .map((subItem: any) => (
                          <div className="w-20   " key={subItem.id}>
                            <Link
                              href={`/categories/${subItem.slug}`}
                              className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                            >
                              <div className="w-full h-20  relative hover:scale-105">
                                <Image
                                  src={subItem.banner ?? ""}
                                  height={300}
                                  width={300}
                                  alt="banner"
                                  className="w-full h-full object-cover rounded-full "
                                />{" "}
                                <span className="absolute left-0 top-0 w-full h-full  rounded-full opacity-bg "></span>
                              </div>

                              <span className="pt-1.5 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                                <span className="truncate pr-1">
                                  {subItem.name}
                                </span>
                              </span>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </Fragment>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResNavbar;
