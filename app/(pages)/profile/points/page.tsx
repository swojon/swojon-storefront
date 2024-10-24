"use client";
import { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiFilterAlt, BiSolidDollarCircle } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const PointRow = () => {
  return (
    <>
      <tr>
        <td className="relative w-12 px-6 sm:w-16 sm:px-8 overflow-visible">
          {/* {selectedListing.includes(listing.id) && (
          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
        )} */}
          <input
            type="checkbox"
            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor sm:left-6"
          />
        </td>
        <td className="h-7 px-3 py-4 text-sm text-secondColor  ">12/11/2023</td>
        <td className="h-7 px-3 py-4 text-sm text-secondColor  ">1200</td>
        <td className="h-7 px-3 py-4 text-sm text-secondColor  ">$ 200</td>
        <td className="h-7 px-3 py-4 text-sm text-secondColor  ">
          Master Card
        </td>
        <td className="h-7 px-3 py-4 text-sm text-secondColor  ">
          <BsThreeDots />
        </td>
      </tr>
    </>
  );
};

const MyPoints = () => {
  // const [selected, setSelected] = useState(people[0]);
  return (
    <section>
      <div className="border-b lg:px-5 md:px-3 px-2 lg:py-3.5 md:py-2.5 py-2">
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base  font-lexed font-medium">
          My Points
        </h6>
      </div>
      <div className="lg:px-5 md:px-3 px-2 py-6 lg:space-y-6 md:space-y-4 space-y-2">
        <div className="space-y-1.5">
          <span className="lg:text-sm md:text-xs text-[12px] text-secondColor ">
            Available Point
          </span>
          <div className="flex items-center space-x-1">
            <BiSolidDollarCircle className="lg:text-2xl md:text-lg text-base text-yellow-500" />
            <span className="lg:text-3xl md:text-2xl sm:text-lg text-base text-primaryColor font-lexed">
              1230
            </span>
          </div>
        </div>
        <span className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed pt-2">
          Transaction History
        </span>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          <div className="flex justify-start items-start gap-3">
            <button className="bg-activeColor md:px-3 px-1.5 md:py-2 py-1 md:text-sm text-xs text-white rounded-md border border-activeColor">
              Purchase
            </button>
            <button className="bg-white md:px-3 px-1.5 md:py-2 py-1 md:text-sm text-xs text-activeColor rounded-md border border-activeColor">
              Expanse
            </button>
          </div>
          <div className="flex md:justify-end justify-start items-start gap-3">
          
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md border border-activeColor bg-white md:px-3 px-1.5 md:py-2 py-1 md:text-sm text-xs font-medium text-activeColor shadow-sm  focus:outline-none focus:ring-2 focus:ring-activeColor focus:ring-offset-2 items-center ">
                    <BiFilterAlt className="pe-1 text-lg" /> Options
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-activeColor text-white"
                                : "text-primaryColor",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-activeColor text-white"
                                : "text-primaryColor",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-activeColor text-white"
                                : "text-primaryColor",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            
            <button className="bg-activeColor md:px-3 px-1.5 md:py-2 py-1 md:text-sm text-xs text-white rounded-md border border-activeColor flex items-center">
              <AiOutlinePlus className="me-1 text-lg" /> Buy my points
            </button>
          </div>
        </div>

        <div className="inline-block min-w-full py-2 align-middle ">
          <div className=" shadow ring-1 ring-secondColor ring-opacity-5 md:rounded-sm overflow-x-auto">
            <table className="min-w-full divide-y bg-white table-scroll">
              <thead className="bg-gray-10">
                <tr>
                  <th
                    scope="col"
                    className="relative w-12 px-6 sm:w-16 sm:px-8"
                  >
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left md:text-base text-sm font-bold text-primaryColor  "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left md:text-base text-sm font-bold text-primaryColor  "
                  >
                    Points
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left md:text-base text-sm font-bold text-primaryColor "
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left md:text-base text-sm font-bold text-primaryColor "
                  >
                    Payment method
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left md:text-base text-sm font-bold text-primaryColor "
                  >
                    actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
             
                  <PointRow />
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPoints;
