import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { useListCategoriesQuery } from "@/apollograph/generated";
import { getCategoryTree } from "../MegaMenu/MegaMenu";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const CategoryDropDown = ({
  values,
  setFieldValue,
}: {
  values: any;
  setFieldValue: any;
}) => {
  const { data, loading, error } = useListCategoriesQuery();
  const categories = data?.listCategories.items;
  const parentCategories = categories?.filter(
    (item) => item.parentCategory == null
  );
  const categoryTree = categories ? getCategoryTree(categories, null) : [];

  const [selected, setSelected] = useState(
    categories?.find((idx) => idx.id === values) ?? null
  );

  const [clickCategory, setClickCategory] = useState<any>(null);
  const [clickSubCategory, setClickSubCategory] = useState<any>(null);

  const handleSelectCategory = (category: any) => {
    // console.log("cat", category);
    setClickCategory(clickCategory?.id === category.id ? null : category);
  };

  const handleSelectSubCategory = (category: any) => {
    // console.log("cat", category);
    setClickSubCategory(clickSubCategory?.id === category.id ? null : category);
  };

  console.log(selected);

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value);
        setFieldValue("categoryId", value!.id);
      }}
    >
      {({ open }) => (
        <>
          <div className="relative ">
            <Listbox.Button className="relative w-full  rounded-md border border-gray-300 bg-white py-2 px-2 text-left shadow-sm flex items-center focus:border-activeColor focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm cursor-pointer">
              <div className="flex items-center  w-[80%]">
                <HiSquare3Stack3D className="text-activeColor text-lg me-3" />
                {selected ?
                <>
                  <span className=" truncate  ">{selected?.name}</span>{" "}
                  <span className="px-2 text-secondColor text-xs">in</span>
                  <span className="text-secondColor text-xs">
                    {selected?.parentCategory?.name}
                  </span>  
                </> :
                  <span className="text-secondColor">Select a Category</span>
                }
              </div>

              <div className="pointer-events-none w-[20%] flex items-center justify-end">
                <FaAngleDown />
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <div className="flex flex-col justify-center">
                  {categoryTree?.map((item) => (
                    <>                    
                    <div
                      key={item.id}
                      className="p-2 border flex justify-between"
                      onClick={() => handleSelectCategory(item)}
                    >
                      {item.name}

                      <div className="pointer-events-none w-[20%] flex items-center justify-end">
                        {clickCategory?.id === item.id ?  <FaAngleUp /> : <FaAngleDown/>}
                      </div>
                    </div>
                      
                    {!!clickCategory && item.id === clickCategory?.id &&
                        item.children.map((subcategory:any) => (
                          <>       
                          {subcategory.children.length > 0 ?   
                            <>            
                              <div
                                key={subcategory.id}
                                className="px-4 py-2 border  flex justify-between"
                                onClick={() => handleSelectSubCategory(subcategory)}
                              >
                                {subcategory.name}
          
                                <div className="pointer-events-none w-[20%] flex items-center justify-end">
                                  {clickSubCategory?.id === subcategory.id ?  <FaAngleUp /> : <FaAngleDown/>}
                                </div>
                              </div>
                                {!!clickSubCategory && subcategory.id === clickSubCategory.id &&
                                subcategory.children.map((grandSubCategory:any) => (
                                  <Listbox.Option
                                  key={grandSubCategory.id}
                                  className="ms-4 text-base sm:text-sm py-2 px-4 text-secondColor "
                                  value={grandSubCategory}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "block truncate"
                                        )}
                                      >
                                        {grandSubCategory.name}
                                      </span>
                                    </>
                                  )}
                                </Listbox.Option>
                                ))}
                              
                              </> : <div className="border">
                              <Listbox.Option
                                  key={subcategory.id}
                                  className="ms-4 text-base py-1 text-secondColor sm:text-sm"
                                  value={subcategory}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "block truncate"
                                        )}
                                      >
                                        {subcategory.name}
                                      </span>
                                    </>
                                  )}
                                </Listbox.Option></div>}
                          </>
                          ))}
                          </>
                  ))}
                </div>

           
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CategoryDropDown;
