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

// import categoryData from "@/data/categoryData";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const getCategoryTree = (categories: any[], target: any): any[] => {
  let cats = categories.filter((cat) =>
    target === null
      ? cat.parentCategory === null
      : cat.parentCategory?.id === target.id
  );
  const categoryList: any[] = [];

  cats.forEach((cat) => {
    categoryList.push({
      ...cat,
      children: getCategoryTree(categories, cat),
    });
  });
  return categoryList;
};

export default function MegaMenu() {
  const { data, loading, error } = useListCategoriesQuery(); 
  const categories = data?.listCategories.items;
  const parentCategories = categories?.filter((item) => item.parentCategory == null)
  
  const [currentCategory, setCurrentCategory] = useState<any>(null);
  const [subCategories, setSubCategories] = useState<any>([])

  const handleMouseEnter = (category: any) => {
    console.log("category hovered", category)
    setCurrentCategory(category);
  };
  
  if (currentCategory === null && !!parentCategories){
    console.log("Setting initial selected categtory")
    setCurrentCategory(parentCategories[0])
  }
  console.log("sub categories", subCategories)
  return (
    <>
      <Popover className=" z-20">
        {({ open }) => (
          <>
            <div className="relative z-10 ">
              <div className=" flex ">
                <Popover.Button
                  className={classNames(
                    open ? "  text-primaryColor" : "text-secondColor",
                    "group inline-flex items-center rounded-md   font-medium  focus:outline-none   "
                  )}
                >
                  <span>All Category</span>
                  {open ? (
                    <IoMdArrowDropup className="pl-1 text-activeColor text-xl" />
                  ) : (
                    <IoMdArrowDropdown className="pl-1 text-activeColor text-xl" />
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
              <Popover.Panel className="absolute meg-menu w-[100vw]   top-[75px] inline  z-30 transform shadow-lg   text-primaryColor rounded left-0  ">
                <div className=" relative py-3 w-full border bg-white h-[80%] flex custom-container gap-4">
                  {loading && <p> Loading </p>}
                  {error && <p> error </p>}
                  
                  {/* First Panel Start Here */}
                  <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[20%] pe-3  sticky meg-menu-items">
                    {parentCategories?.map((item) => (
                          <div
                            className="flex justify-between items-center px-3 hover:bg-slate-200   cursor-pointer "
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(item)}
                          >
                            <h2
                              className={` py-2 text-secondColor  capitalize font-lexed rounded-sm text-sm font-medium truncate  `}
                            >
                              {item.name}
                            </h2>
                            <MdKeyboardArrowRight className="text-sm text-gray-400" />
                          </div>
                    ))}
                  </div>
                    
                    {/* Second Panel Start Here.  */}
                  <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[35%] pe-3  sticky meg-menu-items ">
                    <h6 className="text-lg text-primaryColor font-lexed flex  items-center">
                      <BsFillGrid3X3GapFill className="me-2" /> Shop by category
                    </h6>

                    {currentCategory && (
                      <div className="flex flex-wrap gap-5 py-4">
                         {/* View All card */}
                         <div  className="w-20   ">
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

                        { categories!.filter(item => item.parentCategory?.id === currentCategory.id).map((item: any) => (
                          <div key={item.id} className="w-20   ">
                            <Link
                              href={`/categories/${item.slug}`}
                              className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                            >
                            <div className="w-full h-20  relative hover:scale-105">
                              <Image
                                src={item.banner?? ""}
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
                  </div>

                  {/* Third Panel Start Here */}
                  <div className=" top-0  h-full overflow-y-auto  w-[45%] pe-3  sticky small-scroll ">
                    
                    {currentCategory && categories!.filter(item => item.parentCategory?.id === currentCategory.id).map((item: any) => (
                          <Fragment key={item.id}>
                            
                              <h6 className="text-lg text-primaryColor font-lexed flex  items-center">
                                <BsFillGrid3X3GapFill className="me-2" /> {item.name}
                              </h6> 
                              <div className="flex flex-wrap gap-5 py-4">
                             
                                {/* View All card */}
                                <div  className="w-20   ">
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

                                { categories!.filter(cat => cat.parentCategory?.id === item.id).map((subItem: any) => (
                                  <div  className="w-20   " key={subItem.id}>
                                    
                                    <Link
                                      href={`/categories/${subItem.slug}`}
                                      className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
                                    >
                                      <div className="w-full h-20  relative hover:scale-105">
                                      <Image
                                        src={subItem.banner?? ""}
                                        height={300}
                                        width={300}
                                        alt="banner"
                                        className="w-full h-full object-cover rounded-full "
                                      />{" "}
                                      <span className="absolute left-0 top-0 w-full h-full  rounded-full opacity-bg "></span>
                                    </div>

                                    <span className="pt-1.5 text-primaryColor text-sm font-medium  w-full flex justify-center items-center ">
                                      <span className="truncate pr-1">{subItem.name}</span>
                                    </span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                          </Fragment>
                          
                    
                        ))}
                       
                     
                    
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
