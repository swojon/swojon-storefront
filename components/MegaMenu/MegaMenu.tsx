"use client";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useListCategoriesQuery } from "@/apollograph/generated";
import { MdKeyboardArrowRight } from "react-icons/md";

// import categoryData from "@/data/categoryData";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function MegaMenu() {
  const { data, loading, error } = useListCategoriesQuery();
  console.log("mega", data);

  const [clickedItem, setClickedItem] = useState<any[]>([null, null, null]);

  // useEffect(() => {
  //   setHoveredItem("item1");
  // }, []);

  // const handleItemHover = (itemName) => {
  //   setHoveredItem(itemName);
  // };

  // const handleItemLeave = () => {
  //   setHoveredItem(null);
  // };

  const categories = data?.listCategories.items;
  console.log("Clicked Item", clickedItem);
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
              <Popover.Panel className="absolute h-[70vh] w-[100vw] border-red-400  bg-white top-[61px] inline  z-30 transform shadow-lg border py-3 text-primaryColor rounded left-0">
                <div className=" relative h-full ">
                  {loading && <p> Loading </p>}
                  {error && <p> error </p>}

                  <div className="flex ">
                    <div className="sticky top-0   h-[65vh] overflow-y-auto small-scroll w-[250px]">
                      {data &&
                        categories
                          ?.filter((item) => item.parentCategory == null)
                          .map((item) => (
                            <div
                              className="flex items-center hover:bg-slate-200 w-full justify-between cursor-pointer px-3 "
                              // onMouseEnter={() => handleItemHover(item.id)}
                              // onMouseLeave={handleItemLeave}
                              key={item.id}
                              onClick={() =>
                                setClickedItem([item?.id, null, null])
                              }
                            >
                              <h2
                                className={` py-2 text-activeColor w-[85%] capitalize font-lexed rounded-sm text-sm font-medium truncate `}
                              >
                                {item?.name}
                              </h2>
                              <MdKeyboardArrowRight className="text-sm text-primaryColor" />

                              {/* {hoveredItem === item.id && (
                          <div className="category-sub-items px-4  w-[70%]  h-[60vh] grid grid-cols-4 overflow-auto gap-2	">
                            {item?.children.map((sub) => (
                              <div className="sub-item " key={sub.id}>
                                <div className="relative mb-2">
                                  <h3 className="text-base italic text-gray-600	megamenu-subHead">
                                    {sub.name}
                                  </h3>
                                </div>

                                {sub.children.map((child) => (
                                  <p
                                    key={child.id}
                                    className="text-sm text-gray-400 py-[3px]"
                                  >
                                    {child.name}
                                  </p>
                                ))}
                              </div>
                            ))}
                          </div>
                        )} */}
                            </div>
                          ))}
                    </div>

                    {clickedItem[0] && (
                      <div className="sticky top-0 px-2 h-[65vh] overflow-y-auto small-scroll min-w-[300px] grid grid-cols-2 gap-3">
                        {categories
                          ?.filter(
                            (item) => item.parentCategory?.id === clickedItem[0]
                          )
                          .map((item) => (
                            <div
                              className=" w-full  border h-[150px]"
                              key={item.id}
                              onClick={() =>
                                setClickedItem([clickedItem[0], item.id, null])
                              }
                            >
                              <h2
                                className={`px-3 py-2 text-primaryColor  capitalize font-lexed rounded-sm text-sm font-medium truncate `}
                              >
                                {item?.name}
                              </h2>
                            </div>
                          ))}
                      </div>
                    )}

                    {clickedItem[1] && (
                      <div className="sticky top-0 px-2 h-[65vh] overflow-y-auto small-scroll w-[300px]">
                        {categories
                          ?.filter(
                            (item) => item.parentCategory?.id === clickedItem[1]
                          )
                          .map((item) => (
                            <div
                              className="flex items-center w-full justify-between border-b small-scroll"
                              key={item.id}
                              onClick={() =>
                                setClickedItem([
                                  clickedItem[0],
                                  clickedItem[1],
                                  item.id,
                                ])
                              }
                            >
                              <h2
                                className={`px-3 py-2 text-activeColor w-[85%] capitalize font-lexed rounded-sm text-lg font-medium truncate hover:bg-slate-200`}
                              >
                                {item?.name}
                              </h2>
                              <MdKeyboardArrowRight className="text-lg text-primaryColor" />
                            </div>
                          ))}
                      </div>
                    )}

                    {clickedItem[2] && (
                      <div className="sticky top-0 px-2 h-[65vh] overflow-y-auto small-scroll w-[300px]">
                        {categories
                          ?.filter(
                            (item) => item.parentCategory?.id === clickedItem[2]
                          )
                          .map((item) => (
                            <div
                              className="flex items-center w-full justify-between border-b small-scroll"
                              key={item.id}
                            >
                              <h2
                                className={`px-3 py-2 text-activeColor w-[85%] capitalize font-lexed rounded-sm text-lg font-medium truncate hover:bg-slate-200`}
                              >
                                {item?.name}
                              </h2>
                              <MdKeyboardArrowRight className="text-lg text-primaryColor" />
                            </div>
                          ))}
                      </div>
                    )}
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
