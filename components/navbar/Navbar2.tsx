"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import MegaMenu from "../MegaMenu/MegaMenu";
import { PiChatsCircleFill } from "react-icons/pi";
import user from "@/public/user1.jpg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen } from "@/app/redux/navSlice";
import { useSession } from "next-auth/react";
import { CiLogin } from "react-icons/ci";
import { setUserLogout } from "@/app/redux/authSlice";
import { deleteCookie } from "cookies-next";
import SearchField from "../SearchField/SearchField";
import burgerIcon from "@/public/assets/nav-hamburger.png";
import { setModalOpen } from "@/app/redux/modalSlice";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar2({ border }: { border: any }) {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  const handleSignOut = () => {
    dispatch(setUserLogout(true));
    deleteCookie("authorization");
  };
  console.log("session", user);
  return (
    <Disclosure
      as="nav"
      className={` py-1  ${
        border === "border" ? "border-b border-[#E6E6E6]" : "border-0"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto    custom-container">
            <div className="flex h-16 justify-between gap-2 items-center">
              <div className="flex px-2 lg:px-0">
                <Link
                  href="/"
                  className={`flex flex-shrink-0  font-lexed text-activeColor font-semibold xl:text-2xl lg:text-lg text-base lg:w-32 md:w-20 w-16 h-9   justify-center items-center`}
                >
                  {border === "border" ? (
                    <Image
                      src="/assets/swojon_Logo_-01-cropped.svg"
                      width={100}
                      height={500}
                      alt="logo"
                      className="w-full  h-full"
                    />
                  ) : (
                    <Image
                      src="/assets/swojon_logo_inverted.svg"
                      width={100}
                      height={500}
                      alt="logo"
                      className="w-full h-full"
                    />
                  )}
                </Link>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-1 xl:space-x-4">
                  <span className="text-primaryColor inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  font-lexed hover:border-activeColor hover:text-gray-200">
                    <MegaMenu />
                  </span>
                  <Link
                    href="#"
                    className={`	 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium font-lexed hover:border-activeColor hover:text-gray-200 ${
                      border === "border"
                        ? "  text-primaryColor"
                        : "text-secondColor"
                    }`}
                  >
                    All Ads
                  </Link>
                  <Link
                    href="/community"
                    className={`	 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium font-lexed hover:border-activeColor hover:text-gray-200 ${
                      border === "border"
                        ? "  text-primaryColor"
                        : "text-secondColor"
                    }`}
                  >
                    Community
                  </Link>
                </div>
              </div>
              <div className={` w-full  lg:w-56 xl:w-[380px] `}>
                <SearchField />
              </div>
                
                {/* mobile hamburger button */}
              <div className="flex items-center ">
                <Disclosure.Button
                  onClick={() => dispatch(setNavOpen())}
                  className="inline-flex items-center justify-center rounded-md p-2 text-activeColor  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-activeColor"
                >
                  <span className="sr-only">Open main menu</span>

                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>
              <div className="hidden  lg:flex lg:items-center space-x-3">
                {/* Profile dropdown */}

                {authState.isAuthenticated === false ? (
                  <Link href="/signin">
                    <button className="border border-activeColor py-1.5 px-3 rounded  bg-white text-activeColor lg:text-sm text-xs flex items-center space-x-1 hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 font-lexed font-medium ">
                      <CiLogin /> <span> login</span>
                    </button>
                  </Link>
                ) : (
                  <Link href="/chat">
                    <button className="border font-lexed border-activeColor py-1.5 px-2 rounded  bg-white text-activeColor lg:text-sm text-xs flex items-center space-x-1 hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 font-medium ">
                      <PiChatsCircleFill /> <span> Chat</span>
                    </button>
                  </Link>
                )}

                <Link href="/upload-product">
                  <button
                    // onClick={() =>
                    //   dispatch(
                    //     setModalOpen({
                    //       title: "this is a modal",
                    //       body: "sellProduct",
                    //     })
                    //   )
                    // }
                    className="border border-activeColor py-1.5 px-2 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 lg:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium "
                  >
                    Sell Product
                  </button>
                </Link>

                {authState.isAuthenticated === false ? (
                  <Link href="/signup">
                    <button
                      className={`py-1.5 px-2 leading-0 font-lexed font-medium   lg:text-sm text-xs hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 before:content-[''] before:w-full before:h-1 before:bg-red-400 before:left-0 before:bottom-0 ${
                        border === "border" ? "text-primaryColor" : "text-white"
                      }`}
                    >
                      sign up
                    </button>
                  </Link>
                ) : (
                  <Menu
                    as="div"
                    className="relative ml-3 flex-shrink-0 font-lexed font-medium "
                  >
                    <div>
                      <Menu.Button className="flex items-center bg-activeColor text-sm focus:outline-none  p-1 rounded-3xl gap-1">
                        <Image
                          className="h-7 w-7 rounded-full"
                          src={user}
                          alt="user"
                        />

                        <Image
                          className="h-7 w-7 rounded-full"
                          src={burgerIcon}
                          alt="bar"
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
                        {/* {authState.isAuthenticated && (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-1 text-sm text-gray-700"
                                )}
                              >
                                user: {authState.user.username!}
                              </Link>
                            )}
                          </Menu.Item>
                        )} */}

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
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(
                                active ? "bg-gray-200" : "",
                                "block px-4 py-1.5 text-sm text-gray-700"
                              )}
                            >
                              Followers
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(
                                active ? "bg-gray-200" : "",
                                "block px-4 py-1 text-sm text-gray-700"
                              )}
                            >
                              Following
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          <div className="my-2 border"></div>
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={handleSignOut}
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
                              onClick={handleSignOut}
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
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
