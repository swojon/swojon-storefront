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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}



export default function Navbar2({ border }: { border: any }) {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth)
  const handleSignOut = () => {
    dispatch(setUserLogout(true))
    deleteCookie('authorization')
  }
  console.log("session", user);
  return (
    <Disclosure
      as="nav"
      className={` py-1  ${border === "border" ? "border-b border-[#E6E6E6" : "border-0"
        }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto    sm:px-[3vw] lg:px-[6vw]">
            <div className="flex h-16 justify-between items-center">
              <div className="flex px-2 lg:px-0">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center font-lexed text-activeColor font-semibold xl:text-2xl lg:text-lg text-base"
                >
                  Swojon
                </Link>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-1 xl:space-x-4">
                  <span className="text-primaryColor inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  font-lexed hover:border-activeColor hover:text-gray-200">
                    <MegaMenu />
                  </span>
                  <Link
                    href="#"
                    className="text-primaryColor inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium font-lexed hover:border-activeColor hover:text-gray-200"
                  >
                    All Ads
                  </Link>
                  <Link
                    href="#"
                    className="text-primaryColor inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium font-lexed hover:border-activeColor hover:text-gray-200"
                  >
                    Community
                  </Link>
                </div>
              </div>
              <div className={` w-full  lg:w-56 xl:w-[300px] `}>
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative ">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  ">
                    <MagnifyingGlassIcon
                      className="h-7 w-7  p-1.5 bg-activeColor text-white rounded-full mr-1 "
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-2xl border border-gray-300 bg-white py-2 pl-3 pr-8 leading-5 placeholder-[#C0C0C0] focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>

              <div className="flex items-center lg:hidden">
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
                <Menu as="div" className="relative ml-3 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none ">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={user}
                        alt=""
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {authState.isAuthenticated && (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              user {authState.user.username!}
                            </Link>
                          )}
                        </Menu.Item>
                      )}

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={handleSignOut}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                
                  <Link href="/chat">
                    <button className="border border-activeColor py-1.5 px-3 rounded  bg-white text-activeColor lg:text-sm text-xs flex items-center space-x-1 hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 ">
                      <PiChatsCircleFill /> <span> Chat</span>
                    </button>
                  </Link>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                        
                  </Menu>

                  {authState.isAuthenticated === false ? (
                    <Link href="/signin">
                      <button className="border border-activeColor py-1.5 px-3 rounded  bg-white text-activeColor lg:text-sm text-xs flex items-center space-x-1 hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 font-lexed font-medium ">
                        <CiLogin /> <span> login</span>
                      </button>
                    </Link>
                  ) : (
                    <Link href="/chat">
                      <button className="border font-lexed border-activeColor py-1.5 px-3 rounded  bg-white text-activeColor lg:text-sm text-xs flex items-center space-x-1 hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 font-medium ">
                        <PiChatsCircleFill /> <span> Chat</span>
                      </button>
                    </Link>
                  )}

                  <button className="border border-activeColor py-1.5 px-3 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 lg:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium ">
                    Sell Product
                  </button>
               
              </div>
            </div>
          </div>
        </>
      )}
      

  {/* <Disclosure.Panel className="lg:hidden bg-white">
            <div className="space-y-1 pt-2 pb-3">
             
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel> */}
    
    </Disclosure>
  );
}