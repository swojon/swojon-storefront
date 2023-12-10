"use client"; 
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./Review.css";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const starOptions =  [
  { value: "1", label: "1 star"  },
  { value: "2", label: "2 stars" },
  { value: "3", label: "3 stars" },
  { value: "4", label: "4 stars" },
  { value: "5", label: "5 stars" },

]

const FilterByStars = () => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const [filteredStars, setFilteredStars] = useState<any[]>([])
  
  const handleChange = (val: any) => {
    var applied = []
    console.log("input changed", val.target.name, val.target.value, val.target.checked)
    if (val.target.checked) applied = [...filteredStars, val.target.value]
    else  applied = filteredStars.filter(item => item !== val.target.value)
    // conso setConditions([...conditions, val.target.value])le.log(val.target.name)
    const params = new URLSearchParams(searchParams.toString())
    applied.length > 0 ? params.set("stars", applied.join(',')) : params.delete('stars')
    !!params.toString() ?  router.push(pathname + '?' + params.toString()) : router.push(pathname)
  }  
  
  useEffect(() => {
    console.log("search params changed")
    setFilteredStars(searchParams.get("stars")?.split(',')  ?? [])
  }, [searchParams])

  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-left shadow-sm focus:border-activeColor focus:outline-none focus:ring-1 focus:ring-activeColor md:text-sm text-xs">
          <span className="block truncate">
            filter by <span className="text-secondColor">star rating</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-full  z-10 mt-1 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border p-5 space-y-4">
            {starOptions.map((option, optionIdx) => (
              <div className="flex items-center" key={optionIdx}>
                <input
                id={`star-${optionIdx}`}
                defaultValue={option.value}
                type="checkbox"
                onChange={handleChange}
                checked={filteredStars.includes(option.value)}
                className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
              />
              <label
                  htmlFor={`star-${optionIdx}`}
                className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium ${
                  filteredStars.includes(option.value)
                    ? "text-activeColor"
                    : "text-primaryColor"
                }`}
                
              >
                <span>{option.label}</span>{" "}
              </label>
            </div>
            ))}
            
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FilterByStars;
