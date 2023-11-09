import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filters = [
  {
    id: "condition",
    name: "condition",
    options: [
      { value: "used", label: "used", checked: true },
      { value: "new", label: "new", checked: false },
    ],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}



const StatusFilter = ({initial} : {initial: any[]}) => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const [conditions, setConditions] = useState(initial)
  
  const handleChange = (val: any) => {
    console.log("input cchanged", val.target.name, val.target.value, val.target.checked)
    if (val.target.checked) setConditions([...conditions, val.target.value])
    else  setConditions(conditions.filter(item => item !== val.target.value))
    // conso setConditions([...conditions, val.target.value])le.log(val.target.name)
  }  

  
  // Get a new searchParams string by merging the current
  
  useEffect(()=>{
      const params = new URLSearchParams(searchParams.toString())
      params.set("condition", conditions.join(','))
      // router.push(pathname + '?' + params.toString())

  }, [conditions])
  console.log("applied conditions", conditions)
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
                          defaultChecked={conditions.includes(option.value)}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium ${
                            conditions.includes(option.value)
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
