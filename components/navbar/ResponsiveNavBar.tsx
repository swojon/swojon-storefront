"use client";
import { setNavOpen } from "@/app/redux/navSlice";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiWechatLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import defaultAvatar from "@/public/assets/avatar.svg";
import { LuUser2 } from "react-icons/lu";
import SearchField from "../SearchField/SearchField";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ResponsiveNavBar = ({
  border,
  handleSignOut,
}: {
  border: any;
  handleSignOut: any;
}) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className="h-16  z-10">
      {showSearchBar ? (
        <div className="pt-4">
          <SearchField setShowSearchBar={setShowSearchBar} />
        </div>
      ) : (
        <div className="flex justify-between gap-x-2 items-center h-full">
          <div className="flex items-center md:gap-x-5 gap-x-3  sm:w-[43%] w-[40%] z-10">
            <button
              onClick={() => dispatch(setNavOpen())}
              className={`flex items-center  focus:outline-none  ${
                border === "border" ? "  text-primaryColor" : "text-white"
              } `}
            >
              <HiOutlineBars3CenterLeft className="text-2xl" />
            </button>

            {/* <IoChatbubbleOutline
          className={`text-lg ${
            border === "border" ? "  text-primaryColor" : "text-white"
          } `}
        /> */}
          </div>

          <Link
            href="/"
            className="sm:w-[14%] w[-20%] flex justify-center z-10"
          >
            <div className={` h-6 md:w-[85px] sm:w-[85px] w-[80px] `}>
              {border === "border" ? (
                <Image
                  src="/assets/swojon.svg"
                  width={100}
                  height={500}
                  alt="logo"
                  className="w-full  h-full "
                />
              ) : (
                <Image
                  // src="/assets/swojonI.svg"
                  src="/assets/swojon.svg"
                  width={100}
                  height={500}
                  alt="logo"
                  className="w-full h-full "
                />
              )}
            </div>
          </Link>

          <div className="flex items-center justify-end  md:gap-x-5 gap-x-3 sm:w-[43%] w-[40%] z-10">
            {/* <IoSearchOutline
          className={`text-lg ${
            border === "border" ? "  text-primaryColor" : "text-white"
          } `}
        />
        <RiWechatLine
          className={`text-xl ${
            border === "border" ? "  text-primaryColor" : "text-white"
          } `}
        />

        <Menu
          as="div"
          className="relative  flex-shrink-0 font-lexed font-medium "
        >
          <div>
            <Menu.Button className="flex items-center  xl:text-sm text-xs focus:outline-none  ">
              <GoPerson
                className={`text-lg h-5 w-6  ${
                  border === "border" ? "text-primaryColor" : "text-white"
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/profile"
                    className={classNames(
                      active ? "bg-gray-200" : "",
                      "block px-4 py-1 text-sm text-gray-700"
                    )}
                  >
                    My Profile
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                <div className="my-2 border border-t"></div>
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/help-center"
                    className={classNames(
                      active ? "bg-gray-200" : "",
                      "block px-4 py-1 text-sm text-gray-700"
                    )}
                  >
                    Help Center
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/FAQ"
                    className={classNames(
                      active ? "bg-gray-200" : "",
                      "block px-4 py-1 text-sm text-gray-700"
                    )}
                  >
                    FAQ
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    onClick={handleSignOut}
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-1 text-sm text-gray-700"
                    )}
                  >
                    Sign out
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu> */}
            {/* {authState.isAuthenticated && ( */}
              <IoSearchOutline
                onClick={() => setShowSearchBar(true)}
                className={`text-xl font-bold ${
                  border === "border"
                    ? "  text-primaryColor"
                    : "text-primaryColor "
                } `}
              />
            {/* )} */}

            {authState.isAuthenticated && (
              <Link href="/chat">
                <RiWechatLine
                  className={`text-2xl  ${
                    border === "border"
                      ? "text-primaryColor"
                      : "text-primaryColor"
                  }`}
                />
              </Link>
            )}

            {/* {authState.isAuthenticated === false ? (
          <Link href="/signup">
            <button
              className={`py-1.5  leading-0 font-lexed font-medium  md:text-base text-sm  hover:-translate-y-1 transition ease-in-out delay-150 duration-300 before:content-[''] before:w-full before:h-1 before:bg-red-400 before:left-0 before:bottom-0 whitespace-nowrap ${
                border === "border" ? "text-primaryColor" : "text-primaryColor"
              }`}
            >
              sign up
            </button>
          </Link>
        ) : (
          <Menu
            as="div"
            className="relative  flex-shrink-0 font-lexed font-medium "
          >
            <div>
              <Menu.Button className="flex items-center  xl:text-sm text-xs focus:outline-none  ">
                {authState?.user?.profile?.avatar ? (
                  <Image
                    className="h-7 w-7 rounded-full"
                    src={authState?.user?.profile?.avatar ?? defaultAvatar}
                    alt="user"
                  />
                ) : (
                  <LuUser2
                    className={`text-[22px] font-semiBold  ${
                      border === "border"
                        ? "text-primaryColor"
                        : "text-primaryColor"
                    }`}
                  />
                )}
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-200" : "",
                        "block px-4 py-1 text-sm text-gray-700"
                      )}
                    >
                      My Profile
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  <div className="my-2 border border-t"></div>
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/help-center"
                      className={classNames(
                        active ? "bg-gray-200" : "",
                        "block px-4 py-1 text-sm text-gray-700"
                      )}
                    >
                      Help Center
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/FAQ"
                      className={classNames(
                        active ? "bg-gray-200" : "",
                        "block px-4 py-1 text-sm text-gray-700"
                      )}
                    >
                      FAQ
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={handleSignOut}
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-1 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        )} */}

            {authState.isAuthenticated && (
              <Menu
                as="div"
                className="relative  flex-shrink-0 font-lexed font-medium "
              >
                <div>
                  <Menu.Button className="flex items-center  xl:text-sm text-xs focus:outline-none  ">
                    {authState?.user?.profile?.avatar ? (
                      <Image
                        className="h-7 w-7 rounded-full"
                        src={authState?.user?.profile?.avatar ?? defaultAvatar}
                        alt="user"
                      />
                    ) : (
                      <LuUser2
                        className={`text-[22px] font-semiBold  ${
                          border === "border"
                            ? "text-primaryColor"
                            : "text-primaryColor"
                        }`}
                      />
                    )}
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/profile"
                          className={classNames(
                            active ? "bg-gray-200" : "",
                            "block px-4 py-1 text-sm text-gray-700"
                          )}
                        >
                          My Profile
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      <div className="my-2 border border-t"></div>
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/help-center"
                          className={classNames(
                            active ? "bg-gray-200" : "",
                            "block px-4 py-1 text-sm text-gray-700"
                          )}
                        >
                          Help Center
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/FAQ"
                          className={classNames(
                            active ? "bg-gray-200" : "",
                            "block px-4 py-1 text-sm text-gray-700"
                          )}
                        >
                          FAQ
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          onClick={handleSignOut}
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-1 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}

            {authState.isAuthenticated === false && (
              <Link href="/login">
                <button
                  className={`py-1.5 px-1 leading-0 font-lexed font-medium  md:text-base text-sm  hover:-translate-y-1 transition ease-in-out delay-150 duration-300 before:content-[''] before:w-full before:h-1 before:bg-red-400 before:left-0 before:bottom-0 whitespace-nowrap ${
                    border === "border"
                      ? "text-primaryColor"
                      : "text-primaryColor"
                  }`}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNavBar;
