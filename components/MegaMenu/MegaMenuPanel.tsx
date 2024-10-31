import Link from 'next/link';
import React, { useMemo, useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { HiOutlineSquaresPlus } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

export default function MegaMenuPanel({categories}:{categories: any}) {
    
    const parentCategories = useMemo(() => categories.filter((item:any) => item.parentCategory === null), [categories]);
    const [currentCategory, setCurrentCategory] = useState<any>(() => parentCategories[0]);
    // const [subCategories, setSubCategories] = useState<any>([]);
    
    const handleMouseEnter = (category: any) => {
        // console.log("category hovered", category);
        setCurrentCategory(category);
    };
    
    return (
        <>
            <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[20%] pe-3  sticky meg-menu-items">
                {
                    parentCategories?.map((item:any) => (
                        <div
                        className={`flex justify-between items-center px-3 hover:bg-slate-200   cursor-pointer  ${
                            currentCategory?.id === item.id
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
                }
            </div>         
            
            {/* Second Panel Start Here.  */}
        
           <div className=" top-0 border-r border-gray-200 h-full overflow-y-auto  w-[80%] pe-3  sticky meg-menu-items ">
           <h6 className="text-lg text-primaryColor font-lexed flex  items-center">
             <BsFillGrid3X3GapFill className="me-2" /> Shop by
             category
           </h6>

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

               {categories.filter(
                   (item:any) => item.parentCategory?.id === currentCategory.id
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
         </>
  )
}
