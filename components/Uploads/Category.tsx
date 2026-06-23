import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { BiSelection } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { useListCategoriesQuery } from "@/apollograph/generated";
import CategoryLoader from "./CategoryLoader";
// import CategoryOptionLoader from "./CategoryOptionLoader";
import dynamic from "next/dynamic";

const DynamicCategoryOptionLoader = dynamic(()=> import("./CategoryOptionLoader"), {ssr: false});

const Category = ({
  handleBlur,
  touched,
  setFieldValue,
  values,
  initialCategory,
  errors,
}: {
  handleBlur: any;
  touched: any;
  setFieldValue: any;
  values: any;
  errors: any;
  initialCategory: any;
}) => {
  
  const {
    data: categoriesData,
    loading,
    error,
  } = useListCategoriesQuery({
    variables: {
      limit: 1000,
    },
  });
 
  const categories = categoriesData?.listCategories.items;
  const [selectCategory, setSelectCategory] = useState<any>(initialCategory?? null);
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    if (!selectCategory ){
      setFieldValue("categoryId", null);
    }else{
      setFieldValue("categoryId", selectCategory?.id);
      console.log("selectCategory", selectCategory);
    }
    console.log("values", values)
  
  }, [selectCategory]);

  console.log("Selected Category", selectCategory)
  return (
    <section className="md:space-y-4 space-y-2 pt-4 	 ">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Category of your item? <span className="text-red-500">*</span>
      </h6>
      {touched?.categoryId && errors?.categoryId ? (
        <p className="md:text-base text-sm text-red-500 font-medium leading-6">
          {errors.categoryId}
        </p>
      ) : (
        <p className="md:text-base text-sm text-secondColor font-medium leading-6">
          Select or search the category of your item
        </p>
      )}

      <div className="rounded-2xl border border-gray-200  ">
        <div className="relative w-full md:p-6 p-2.5">
          <div className="pointer-events-none absolute inset-y-0 md:left-8 left-5 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            onChange={handleSearchChange}
            className="block w-full rounded-3xl  bg-gray-100 md:py-4 py-3 pr-3 pl-10 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
        <div className="md:p-6 p-2.5 border-y border-gray-200 flex items-center justify-between">
          <span className="md:text-base text-sm text-primaryColor font-lexed font-medium capitalize">
            {selectCategory ? selectCategory.name : "Select category from here"}
          </span>
          <span className="text-2xl text-primaryColor">
            {selectCategory ? (
              <MdOutlineClose
                className="cursor-pointer"
                onClick={() => setSelectCategory(null)}
              />
            ) : (
              <MdKeyboardArrowUp className="" />
            )}
          </span>
        </div>
        
        {loading &&
          <div className="md:p-6 p-2.5  flex items-center  gap-4 overflow-x-auto ">
             <CategoryLoader />
          </div>
        }
        
        {categories && (
          <DynamicCategoryOptionLoader 
            categories={categories}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            query={query}
          />
        )}
        
        {/* <NoResultFound /> */}
      </div>
    </section>
  );
};

export default Category;
