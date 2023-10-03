import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "used", label: "used", checked: true },
      { value: "new", label: "new", checked: false },
    ],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const StatusFilter = () => {
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
                      Status
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
                <Disclosure.Panel className="pt-4">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor "
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium ${
                            option.checked
                              ? "text-activeColor"
                              : "text-primaryColor"
                          }`}
                        >
                          <span>{option.label} </span>
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

export default StatusFilter;
