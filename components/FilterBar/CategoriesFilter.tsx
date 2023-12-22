import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import icon from "@/public/assets/desktop.png";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter} from "next/navigation";
import { useListCategoriesQuery } from "@/apollograph/generated";

const categories = [
  {
    id: 13,
    icon: icon,
    title: "Furniture",
    children: [
      { id: 45, title: "bedroom furniture" },
      { id: 475, title: "bedroom furniture" },
      { id: 4475, title: "bedroom furniture" },
      { id: 4775, title: "bedroom furniture" },
    ],
  },
  { id: 14, icon: icon, title: "Electronics", children: [] },
  {
    id: 123,
    icon: icon,
    title: "Gym Accessories",
    children: [],
  },
  {
    id: 9712235,
    icon: icon,
    title: "instructive",
    children: [],
  },
  { id: 99146, icon: icon, title: "Fashion", children: [] },
  {
    id: 3465123,
    icon: icon,
    title: "Home Alliances",
    children: [],
  },
];

const CategoriesFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const [appliedCategories, setAppliedCategories] = useState<any[]>([] )

  const handleChange = (val: any) => {
    console.log("input changed", val.target.name, val.target.value, val.target.checked)
    var applied = []
    if (val.target.checked) applied = [...appliedCategories, val.target.value]
    else  applied = appliedCategories.filter(item => item !== val.target.value)
    // conso setAppliedBrands([...appliedBrands, val.target.value])le.log(val.target.name)
    const params = new URLSearchParams(searchParams.toString())
    applied.length > 0 ? params.set("category", applied.join(',')) : params.delete('category')
    !!params.toString() ?  router.push(pathname + '?' + params.toString()) : router.push(pathname)
  }  

  useEffect(() => {
    setAppliedCategories(searchParams.get("category")?.split(',')  ?? [])
  }, [searchParams])

  console.log("applied appliedCategories", appliedCategories)  
  const {data: categoryOptions, loading: categoryLoading, error: categoryError} = useListCategoriesQuery({
    variables: {
      limit: 1000
    }
  })
  const categories = categoryOptions?.listCategories.items
  const [query, setQuery] = useState("")
  const filteredCategories = !!query ? categories?.filter(ca => ca.name?.toLowerCase().includes(query.toLowerCase())) : categories; 
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value)
  }

  return (
    <div className="">
      <Disclosure
      as="div" 
      className="border-b border-gray-200 py-4"
      defaultOpen={appliedCategories.length > 0 }
      >
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-lg font-lexed text-primaryColor">
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
                          ${ appliedCategories.includes(category.slug!) 
                              ? "text-activeColor"
                              : "text-primaryColor"
                          }`}
                        >
                          
                          <span>{category.name} </span>{" "}
                          {/* <span className="text-gray-400">(4,521)</span> */}
                        </label>
                        </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CategoriesFilter;
