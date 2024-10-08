import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import icon from "@/public/assets/desktop.png";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useListCategoriesQuery } from "@/apollograph/generated";
import { BiSelection } from "react-icons/bi";

const CategoriesFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [appliedCategories, setAppliedCategories] = useState<any[]>([]);

  const handleChange = (slug: any) => {
  
    var applied = [];
    if (!appliedCategories.includes(slug)) applied = [...appliedCategories, slug];
    else
      applied = appliedCategories.filter((item) => item !== slug);
    // conso setAppliedBrands([...appliedBrands, val.target.value])le.log(val.target.name)
    const params = new URLSearchParams(searchParams.toString());
    applied.length > 0
      ? params.set("category", applied.join(","))
      : params.delete("category");
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };

  useEffect(() => {
    setAppliedCategories(searchParams.get("category")?.split(",") ?? []);
  }, [searchParams]);

  // console.log("applied appliedCategories", appliedCategories);
  const {
    data: categoryOptions,
    loading: categoryLoading,
    error: categoryError,
  } = useListCategoriesQuery({
    variables: {
      limit: 1020,
    },
  });
  const categories = categoryOptions?.listCategories.items;
  // const [selectCategory, setSelectCategory] = useState<any>(null);
  const [query, setQuery] = useState("");
  const filteredCategories = !!query
    ? categories?.filter((ca) =>
        ca.name?.toLowerCase().includes(query.toLowerCase())
      )
    : categories;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  console.log("show", filteredCategories);

  return (
    <div className="space-y-3">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:gap-2">
        <span className="md:text-2xl text-lg  font-bold font-lexed text-primaryColor">
          Categories
        </span>
        <div className="relative w-[250px] my-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7 text-gray-400 p-1.5 rounded-full mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            onChange={handleSearchChange}
            className="block w-full rounded-2xl border border-gray-300 bg-white py-1.5 pl-8 pr-3 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div className="flex items-center  gap-4 overflow-x-auto small-scroll2 pb-3">
        {filteredCategories?.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col justify-center  items-center flex-none w-[160px] h-[128px]  text-center pt-5  pb-4 px-4 border  rounded-md cursor-pointer space-y-3  ${
              appliedCategories.includes(category?.slug)
                ? " border-activeColor "
                : "border-gray-200 hover:border-gray-500"
            }`}
            onClick={() => handleChange(category?.slug)}
          >
            {category.icon ? (
              <Image
                alt="brand logo"
                src={category.icon}
                width={100}
                height={100}
                className="w-auto h-8 rounded-md max-w-20"
              />
            ) : (
              <BiSelection className="text-primaryColor" />
            )}
            <span className="block text-base text-primaryColor font-lexed font-medium capitalize">
              {category.name}
            </span>
          </div>
        ))}
      </div>

      {/* <button className=" text-base rounded-md text-activeColor font-bold relative">
        See more{" "}
        <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-activeColor"></span>
      </button> */}
      {/* <Disclosure
        as="div"
        className="border-b border-gray-200 py-4"
        defaultOpen={appliedCategories.length > 0}
      >
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="md:text-lg text-base  font-bold font-lexed text-primaryColor">
                  Categories
                </span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <IoIosArrowDropup
                      className="text-2xl text-activeColor"
                      aria-hidden="true"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      className="text-2xl text-activeColor"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-2 ">
              <div className="relative w-full my-3">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
                  <MagnifyingGlassIcon
                    className="h-7 w-7 text-gray-400 p-1.5 rounded-full mr-1 "
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  onChange={handleSearchChange}
                  className="block w-full rounded-2xl border border-gray-300 bg-white py-1.5 pl-8 pr-3 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>

              <div className="space-y-4 h-[150px]  overflow-y-auto small-scroll">
                {filteredCategories?.map((category) => (
                  <div className="flex items-center" key={category.id}>
                    <input
                      id={`filter-${category.id}`}
                      defaultValue={category.slug!}
                      type="checkbox"
                      onChange={handleChange}
                      checked={appliedCategories.includes(category.slug!)}
                      className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                    />
                    <label
                      htmlFor={`filter-${category.id}-${category.id}`}
                      className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium 
                          ${
                            appliedCategories.includes(category.slug!)
                              ? "text-activeColor"
                              : "text-primaryColor"
                          }`}
                    >
                      <span>{category.name} </span>{" "}
                    
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> */}
    </div>
  );
};

export default CategoriesFilter;
