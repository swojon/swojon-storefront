import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const NotificationDropDown = ({ border }: { border: any }) => {
  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button className="flex items-center  text-primaryColor hover:text-gray-600 focus:outline-none ">
          <span className="sr-only">Open options</span>
          <FaBell
            className={`text-lg  ${
              border === "border" ? "text-activeColor" : "text-white"
            }`}
          />
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
        <Menu.Items className="absolute -left-10 z-10 mt-2  origin-top-left top-7 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-[350px]">
          <div className="p-3.5 pb-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-primaryColor text-lg font-lexed font-medium">
                All Notification
              </span>
              <span className="text-activeColor text-lg font-lexed font-medium">
                See all
              </span>
            </div>

            <div className="">
              <span className="block text-base text-primaryColor">Today</span>

              <div className="border-b relative">
                <div className="py-3 ps-6 text-sm text-secondColor">
                  New User{" "}
                  <span className="text-activeColor font-lexed">
                    David macculum
                  </span>{" "}
                  sent a request to join Dhaka University community.
                </div>
                <span className="absolute left-1 top-3.5 text-activeColor">
                  <GoDotFill />
                </span>
              </div>
              <div className="border-b relative">
                <div className="py-3 ps-6 text-sm text-secondColor">
                  New User{" "}
                  <span className="text-activeColor font-lexed">
                    David macculum
                  </span>{" "}
                  sent a request to join Dhaka University community.
                </div>
              </div>
            </div>

            <div className="">
              <span className="block text-base text-secondColor">
                Yesterday
              </span>

              <div className="border-b relative">
                <div className="py-3 ps-6 text-sm text-secondColor">
                  New User{" "}
                  <span className="text-activeColor font-lexed">
                    David macculum
                  </span>{" "}
                  sent a request to join Dhaka University community.
                </div>
              </div>
              <div className=" ">
                <div className="py-3 ps-6 text-sm text-secondColor">
                  New User{" "}
                  <span className="text-activeColor font-lexed">
                    David macculum
                  </span>{" "}
                  sent a request to join Dhaka University community.
                </div>
              </div>
            </div>
            {/* <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-activeColor text-white" : "text-primaryColor",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Unfollow group
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-activeColor text-white" : "text-primaryColor",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Leave group
                </Link>
              )}
            </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationDropDown;
