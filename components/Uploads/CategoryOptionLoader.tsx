import Image from 'next/image';
import React, { useMemo } from 'react'
import { BiSelection } from 'react-icons/bi';

function CategoryOptionLoader({categories, selectCategory, setSelectCategory, query} : {categories: any; selectCategory:any, setSelectCategory:any; query:any}) {
//   const parentCategories = useMemo(() => categories.filter((item:any) => item.parentCategory === null), [categories]);
    console.log("categories", categories)
    console.log("reloaded again", selectCategory)
    
    const categoryOptions = !!query
        ? categories?.filter((ca:any) =>
            ca.name?.toLowerCase().includes(query.toLowerCase())
          )
        : categories.filter( (ca: any)  => ca.parentCategory?.id == selectCategory?.id);
    
    if (selectCategory && categoryOptions.length < 1) categoryOptions.unshift(selectCategory)
console.log("categoryOptions", categoryOptions)  
  const setSelectCategoryClick = (category:any) => {
        setSelectCategory(category);
  }
  return (
       <div className="md:p-6 p-2.5 md:grid lg:grid-cols-5 md:grid-cols-4  flex items-center  gap-4 overflow-x-auto ">
               {categoryOptions?.map((category:any) => {
                const childrenCount = categories.filter((ca:any) => ca.parentCategory?.id === category.id ).length;
                return (
                 <div
                   key={category.id}
                   className={`flex flex-col justify-center items-center text-center  p-2 border flex-none w-[190px] md:w-auto  rounded-2xl cursor-pointer md:space-y-2.5 space-y-1 h-[128px] ${
                     category?.id === selectCategory?.id
                       ? "border-activeColor bg-activeColor bg-opacity-5"
                       : "border-gray-200 hover:border-gray-300"
                   }`}
                   onClick={() => setSelectCategoryClick(category)}
                 >
                   {category.icon ? (
                     <Image
                       src={category.icon}
                       alt="categoryIcon"
                       width={30}
                       height={30}
                       className="w-6 h-6"
                     />
                   ) : (
                     <BiSelection className="text-lg" />
                   )}
                   <span className="md:text-base text-sm text-primaryColor font-lexed font-medium capitalize">
                     {category.name}
                   </span>
                   <span className="md:text-sm text-xs text-secondColor">
                     {childrenCount > 0 ?
                      `${childrenCount} sub category`
                    : category.description}
                   </span>
                 </div>
               )})}
             </div>
  )
}

export default CategoryOptionLoader