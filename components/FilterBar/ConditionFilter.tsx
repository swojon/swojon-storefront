import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import brandNew from "@/public/assets/new-product.png";
import used from "@/public/assets/second-hand.png";
import Image from "next/image";

const options = [
  { value: "used", label: "used", checked: true, icon: used },
  { value: "new", label: "new", checked: false, icon: brandNew },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const ConditionFilter = ({ initial }: { initial: any[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [conditions, setConditions] = useState<any[]>([]);

  const handleChange = (condition: any) => {
    var applied = [];
    if (!conditions.includes(condition)) applied = [...conditions ,condition];
    else applied = conditions.filter((item) => item !== condition);
    // conso setConditions([...conditions, val.target.value])le.log(val.target.name)
    const params = new URLSearchParams(searchParams.toString());
    applied.length > 0
      ? params.set("condition", applied.join(","))
      : params.delete("condition");
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };

  // useEffect(()=>{
  //     const params = new URLSearchParams(searchParams.toString())
  //     conditions.length > 0 ? params.set("condition", conditions.join(',')) : params.delete('condition')
  //     !!params.toString() ?  router.push(pathname + '?' + params.toString()) : router.push(pathname)
  //     // router.push(pathname + '?' + params.toString())

  // }, [conditions])

  useEffect(() => {
    console.log("search params changed");
    setConditions(searchParams.get("condition")?.split(",") ?? []);
  }, [searchParams]);

  console.log("applied conditions", conditions);
  return (
    <div className="space-y-3">
      <span className="md:text-2xl text-lg  font-bold font-lexed text-primaryColor">
        Condition
      </span>

      <div className="flex items-center  gap-4">
        {options.map((option, optionIdx) => (
          <div
            key={optionIdx}
            // className={`flex flex-col justify-center border-gray-200 hover:border-gray-500 items-center flex-none w-[160px] h-[128px]  text-center pt-5  pb-4 px-4 border  rounded-md cursor-pointer space-y-3 `}
            className={`flex flex-col justify-center  items-center flex-none w-[160px] h-[128px]  text-center pt-5  pb-4 px-4 border  rounded-md cursor-pointer space-y-3  ${
              conditions.includes(option.value)
                ? " border-activeColor "
                : "border-gray-200 hover:border-gray-500"
            }`}
            onClick={() => handleChange(option.value)}
          >
            <Image
              alt="icon"
              src={option.icon}
              width={100}
              height={100}
              className="w-auto h-8 rounded-md max-w-20"
            />

            <span className="block text-base text-primaryColor font-lexed font-medium capitalize">
              {option.value}
            </span>
          </div>
          // <div key={option.value} className="flex items-center">
          //   <input
          //     id={`filter-${optionIdx}`}
          //     defaultValue={option.value}
          //     type="checkbox"
          //     checked={conditions.includes(option.value)}
          //     onChange={handleChange}
          //     className="md:h-6 h-4 md:w-6 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
          //   />
          //   <label
          //     htmlFor={`filter-${optionIdx}`}
          //     className={`ml-3 md:text-base text-sm  flex space-x-1 capitalize font-lexed font-medium w-[75%]  ${
          //       conditions.includes(option.value)
          //         ? "text-activeColor"
          //         : "text-primaryColor"
          //     }`}
          //   >
          //     <span>{option.label} </span>
          //     <span className="text-gray-400">(4,521)</span>
          //   </label>
          // </div>
        ))}
      </div>

      {/* <form className=" ">
        <Disclosure
          as="div"
          className="border-b border-gray-200 py-4"
          defaultOpen={conditions.length > 0}
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="md:text-lg text-base  font-bold font-lexed text-primaryColor">
                    Condition
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
                  {options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${optionIdx}`}
                        defaultValue={option.value}
                        type="checkbox"
                        checked={conditions.includes(option.value)}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                      />
                      <label
                        htmlFor={`filter-${optionIdx}`}
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
      </form> */}
    </div>
  );
};

export default ConditionFilter;
