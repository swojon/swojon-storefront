"use client";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useListCategoriesQuery } from "@/apollograph/generated";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./MegaMenu.css";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import Image from "next/image";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { current } from "@reduxjs/toolkit";
import Link from "next/link";
import MegamenuHeadingLoader from "../Loader/MegamenuHeadingLoader";
import MegamenuCategoryLoader from "../Loader/MegamenuCategoryLoader";

// import categoryData from "@/data/categoryData";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function MegaMenu({ border }: { border: any }) {
  const { data, loading, error } = useListCategoriesQuery({
    variables: {
      limit: 1030,
    },
    fetchPolicy: "cache-and-network",
  });
  const categories = data?.listCategories.items;

  const parentCategories = categories
    ? categories.filter((item) => item.parentCategory === null)
    : null;
  console.log("categories", categories);
  console.log("parentCategories", parentCategories);
  const [currentCategory, setCurrentCategory] = useState<any>(null);
  const [subCategories, setSubCategories] = useState<any>([]);

  const handleMouseEnter = (category: any) => {
    // console.log("category hovered", category);
    setCurrentCategory(category);
  };

  if (currentCategory === null && !!parentCategories) {
    // console.log("Setting initial selected categtory");
    setCurrentCategory(parentCategories[0]);
  }
  // console.log("sub categories", currentCategory);
  return (
    <>
      <Popover className="z-[100]">
        {({ open }) => (
          <>
            <div className="relative z-10 ">
              <div className=" flex ">
                <Popover.Button
                  className={classNames(
                    open ? "  " : "",
                    "group inline-flex items-center rounded-md whitespace-nowrap  font-medium  focus:outline-none  xl:text-sm text-xs "
                  )}
                >
                  <span
                    className={`inline-flex items-center border-b-2 border-transparent px-1 xl:text-sm text-xs  font-lexed  font-bold hover:border-activeColor  leading-none ${
                      border === "border" ? "  text-primaryColor" : "text-white"
                    }`}
                  >
                    All Category
                  </span>
                  {open ? (
                    <IoMdArrowDropup
                      className={`pl-1  text-xl ${
                        border === "border" ? "text-activeColor" : "text-white"
                      }`}
                    />
                  ) : (
                    <IoMdArrowDropdown
                      className={`pl-1  text-xl ${
                        border === "border" ? "text-activeColor" : "text-white"
                      }`}
                    />
                  )}
                </Popover.Button>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute shadow-2xl meg-menu w-[100vw]   top-[68px] inline  z-30 transform border-b border-gray-200   text-primaryColor rounded left-0  ">
                <div className="  py-3 w-full bg-white h-[100%] ">
                  {/* {error && <p> error </p>} */}

                  <div className="custom-container relative flex  gap-4 h-full">
                    {/* First Panel Start Here */}
                    <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[20%] pe-3  sticky meg-menu-items">
                      {loading ? (
                        <MegamenuHeadingLoader />
                      ) : (
                        parentCategories?.map((item) => (
                          <div
                            className={`flex justify-between items-center px-3 hover:bg-slate-200   cursor-pointer  ${
                              currentCategory.id === item.id
                                ? "bg-slate-200"
                                : ""
                            }`}
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(item)}
                          >
                            <h2
                              className={` py-2 text-secondColor  capitalize font-lexed rounded-sm text-sm font-medium truncate `}
                            >
                              {item.name}
                            </h2>
                            <MdKeyboardArrowRight className="text-sm text-gray-400" />
                          </div>
                        ))
                      )}
                    </div>

                    {/* Second Panel Start Here.  */}
                    <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[80%] pe-3  sticky meg-menu-items ">
                      <h6 className="text-lg text-primaryColor font-lexed flex  items-center">
                        <BsFillGrid3X3GapFill className="me-2" /> Shop by
                        category
                      </h6>

                      {loading && <MegamenuCategoryLoader />}

                      {currentCategory && (
                        <div className="flex flex-wrap gap-8 py-4">
                          {/* View All card */}
                          <Link href={`/categories/${currentCategory.slug}`}>
                            <div className=" w-[150px] rounded-lg relative   transition ease-in-out delay-150 duration-300">
                              <div className="w-full h-[150px] overflow-hidden bg-gray-100 flex items-center justify-center relative hover:scale-105 rounded-md">
                                <HiOutlineSquaresPlus className="text-2xl text-activeColor " />
                              </div>
                              <span className="pt-2 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                                <span className="truncate pr-1">View All</span>
                              </span>
                            </div>
                          </Link>

                          {categories!
                            .filter(
                              (item) =>
                                item.parentCategory?.id === currentCategory.id
                            )
                            .map((item: any) => (
                              <Link
                                key={item.id}
                                href={`/categories/${item.slug}`}
                              >
                                <div className="w-[150px]  rounded-md relative      ">
                                  <div className="w-full h-[150px] hover:scale-105 transition ease-in-out delay-150 duration-300 relative  rounded-md ">
                                    <Image
                                      src={
                                        item.banner ??
                                        "https://picsum.photos/200/300"
                                      }
                                      height={300}
                                      width={300}
                                      alt="banner"
                                      className="w-full h-full object-cover rounded-md "
                                    />{" "}
                                    <span className="absolute left-0 top-0 w-full h-full  rounded-md opacity-bg "></span>
                                  </div>

                                  <span className="pt-2 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                                    <span className="truncate pr-1">
                                      {item.name}
                                    </span>
                                  </span>
                                </div>
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>

                    {/* Third Panel Start Here */}
                    {/* <div className=" top-0  h-full overflow-y-auto  w-[45%] pe-3  sticky small-scroll ">
                      {currentCategory &&
                        categories!
                          .filter(
                            (item) =>
                              item.parentCategory?.id === currentCategory.id
                          )
                          .map((item: any) => (
                            <Fragment key={item.id}>
                              <h6 className="text-lg text-primaryColor font-lexed flex  items-center">
                                <BsFillGrid3X3GapFill className="me-2" />{" "}
                                {item.name}
                              </h6>
                              <div className="flex flex-wrap gap-5 py-4">
                              
                                <div className="w-20   ">
                                  <Link
                                    href={`/categories/${item.slug}`}
                                    className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                                  >
                                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center relative hover:scale-105">
                                      <HiOutlineSquaresPlus className="text-2xl text-activeColor " />
                                    </div>
                                    <span className="pt-1.5 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                                      <span className="truncate pr-1">
                                        View All
                                      </span>
                                    </span>
                                  </Link>
                                </div>

                                {categories!
                                  .filter(
                                    (cat) => cat.parentCategory?.id === item.id
                                  )
                                  .map((subItem: any) => (
                                    <div className="w-20   " key={subItem.id}>
                                      <Link
                                        href={`/categories/${subItem.slug}`}
                                        className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                                      >
                                        <div className="w-full h-20  relative hover:scale-105">
                                          <Image
                                            src={
                                              subItem.banner ??
                                              "https://picsum.photos/200/300"
                                            }
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
                    </div> */}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
