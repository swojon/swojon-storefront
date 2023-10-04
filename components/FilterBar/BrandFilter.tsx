import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "otobi", label: "otobi", checked: true },
      { value: "hatil", label: "hatil", checked: false },
      { value: "regal", label: "regal", checked: false },
      { value: "navana", label: "navana", checked: false },
      { value: "akhtar", label: "akhtar", checked: false },
      { value: "partex", label: "partex", checked: false },
    ],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const BrandFilter = () => {
  return (
    <div>
      <form className=" ">
        {filters.map((section) => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-b border-gray-200 py-4"
          >
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-lg font-lexed text-primaryColor">
                      Brands
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
                <Disclosure.Panel className="">
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
                      className="block w-full rounded-2xl border border-gray-300 bg-white py-1.5 pl-8 pr-3 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                  <div className="space-y-4 h-[150px]  overflow-y-auto small-scroll ">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium ${
                            option.checked
                              ? "text-activeColor"
                              : "text-primaryColor"
                          }`}
                        >
                          <span>{option.label} </span>{" "}
                          <span className="text-gray-400">(4,521)</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </div>
  );
};

export default BrandFilter;
