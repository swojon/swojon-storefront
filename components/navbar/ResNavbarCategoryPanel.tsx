import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { HiOutlineSquaresPlus } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function ResNavbarCategoryPanel({categories, currentCategory, setCurrentCategory} : {categories: any, currentCategory: any, setCurrentCategory: any}) {
    const parentCategories = useMemo(() => categories.filter((item:any) => item.parentCategory === null), [categories]);

    const handleMouseEnter = (category: any) => {
        console.log("category hovered", category);
        setCurrentCategory(category);
    };

    return (
    <>
        {currentCategory ? <>
                  
            <h6 className="lg:text-lg md:text-base text-sm mt-2 text-secondColor font-lexed flex  items-center">
              <BsFillGrid3X3GapFill className="me-2" /> Shop by category
            </h6>

              <div className="flex flex-wrap gap-5 pt-4 pb-6 ">
                {/* View All card */}

                <Link href={`/categories/${currentCategory.slug}`}>
                  <div className=" w-[110px] rounded-lg relative   transition ease-in-out delay-150 duration-300">
                    <div className="w-full h-[110px] overflow-hidden bg-gray-100 flex items-center justify-center relative hover:scale-105 rounded-md">
                      <HiOutlineSquaresPlus className="text-2xl text-activeColor " />
                    </div>
                    <span className="pt-2 text-primaryColor text-xs font-medium  w-full flex justify-center items-center ">
                      <span className="truncate pr-1">View All</span>
                    </span>
                  </div>
                </Link>

                {categories!
                  .filter(
                    (item:any) => item.parentCategory?.id === currentCategory.id
                  )
                  .map((item: any) => (
                    <Link href={`/categories/${item.slug}`} key={`sub${item.id}`} className="  ">
                      <div className="w-[110px]  rounded-md relative      ">
                        <div className="w-full h-[110px] hover:scale-105 transition ease-in-out delay-150 duration-300 relative  rounded-md ">
                          <Image
                            src={item.banner ?? "https://picsum.photos/200/300"}
                            height={300}
                            width={300}
                            alt="banner"
                            className="w-full h-full object-cover rounded-md "
                          />{" "}
                          <span className="absolute left-0 top-0 w-full h-full  rounded-md opacity-bg "></span>
                        </div>

                        <span className="pt-2 text-primaryColor text-xs font-medium  w-full flex justify-center items-center ">
                          <span className="truncate pr-1">{item.name}</span>
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
           
        </> : <>
     {parentCategories?.map((item:any) => (
              <div
                className="flex justify-between items-center lg:px-8 md:px-4 px-3 my-4  cursor-pointer "
                key={item.id}
                onClick={() => handleMouseEnter(item)}
              >
                <div className="grid grid-cols-3 items-center  w-[90%] ">
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
                    className={` py-2 text-secondColor  capitalize font-lexed rounded-sm lg:text-lg md:text-base sm:text-sm text-sm font-medium  col-span-2`}
                  >
                    {item.name}
                  </span>
                </div>

                <MdKeyboardArrowRight className="text-lg text-gray-400" />
              </div>
        ))}</>
        }
    </>
  )
}
