import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./Review.css";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const people = [
  { id: 1, name: "All ratings" },
  { id: 2, name: "5 starts" },
  { id: 3, name: "Sort by lowest First" },
  { id: 4, name: "Sort by highest First" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const FilterBy = () => {
  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-left shadow-sm focus:border-activeColor focus:outline-none focus:ring-1 focus:ring-activeColor md:text-sm text-xs">
          <span className="block truncate">
            filter by <span className="text-secondColor">all ratings</span>
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
          <div className="flex items-center">
            <input
              id=""
              defaultValue=""
              type="checkbox"
              //   onChange={handleChange}
              //   checked={appliedBrands.includes(brand.slug!)}
              className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
            />
            <label
              //   htmlFor={`filter-${brand.id}-${brand.id}`}
              className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium text-primaryColor
                          `}
            >
              <span>5 stars</span>{" "}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id=""
              defaultValue=""
              type="checkbox"
              //   onChange={handleChange}
              //   checked={appliedBrands.includes(brand.slug!)}
              className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
            />
            <label
              //   htmlFor={`filter-${brand.id}-${brand.id}`}
              className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium text-primaryColor
                          `}
            >
              <span>4 stars</span>{" "}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id=""
              defaultValue=""
              type="checkbox"
              //   onChange={handleChange}
              //   checked={appliedBrands.includes(brand.slug!)}
              className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
            />
            <label
              //   htmlFor={`filter-${brand.id}-${brand.id}`}
              className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium text-primaryColor
                          `}
            >
              <span>3 stars</span>{" "}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id=""
              defaultValue=""
              type="checkbox"
              //   onChange={handleChange}
              //   checked={appliedBrands.includes(brand.slug!)}
              className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
            />
            <label
              //   htmlFor={`filter-${brand.id}-${brand.id}`}
              className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium text-primaryColor
                          `}
            >
              <span>2 stars</span>{" "}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id=""
              defaultValue=""
              type="checkbox"
              //   onChange={handleChange}
              //   checked={appliedBrands.includes(brand.slug!)}
              className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
            />
            <label
              //   htmlFor={`filter-${brand.id}-${brand.id}`}
              className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium text-primaryColor
                          `}
            >
              <span>1 star</span>{" "}
            </label>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FilterBy;
