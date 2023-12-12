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
import NotificationDropDown from "../Notification/NotificationDropDown";
import { FaRegBell } from "react-icons/fa";
import { setNotificationDrawerOpen } from "@/app/redux/notificationSlice";
import { IoLogoWechat } from "react-icons/io5";
import { RiWechatLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const handleSignOut = () => {
  console.log("signing out")
  toast.loading("signing you out", {id: "signInToast"})
  // dispatch(setUserLogout(true));
  deleteCookie("authorization");
  toast.success("Signed out", {id: "signInToast"})
  window.location.reload()
};

export default function Navbar2({ border }: { border: any }) {
  const router = useRouter()

  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  
  
  console.log("session", user);
  return (
    <Disclosure
      as="nav"
      className={` py-1 px-[2vw]  ${
        border === "border" ? "border-b border-[#E6E6E6]" : "border-0"
      }`}
    >
      {({ open }) => (
        <>
          <div className=" ">
            <div className="flex h-16 justify-between gap-2 items-center ">
              <div className="xl:w-[28%] lg:w-[28%] md:w-[15%] w-[10%]  flex  gap-x-1 lg:px-0  items-center ">
                <Link
                  href="/"
                  className={`   lg:w-[85px] md:w-20 w-16 pb-0.5 lg:flex items-center lg:mr-1 xl:mr-3.5 hidden `}
                >
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
                      src="/assets/swojonI.svg"
                      width={100}
                      height={500}
                      alt="logo"
                      className="w-full h-full "
                    />
                  )}
                </Link>

                <Link
                  href="/"
                  className={`font-lexed text-activeColor font-semibold xl:text-2xl lg:text-lg text-base  md:w-10 w-10 h-9  justify-center items-center lg:mr-1 xl:mr-3.5  lg:hidden`}
                >
                  {border === "border" ? (
                    <Image
                      src="/assets/SWlogi.svg"
                      width={100}
                      height={500}
                      alt="logo"
                      className="w-full  h-full"
                    />
                  ) : (
                    <Image
                      src="/assets/swojon_logoS_inverted.svg"
                      width={100}
                      height={500}
                      alt="logo"
                      className="w-full h-full"
                    />
                  )}
                </Link>
                <div className="hidden  lg:flex items-center lg:gap-x-1 xl:gap-x-3">
                  <div className="text-primaryColor inline-flex items-center border-b-2 border-transparent px-1  text-sm font-medium  font-lexed  hover:border-activeColor  leading-none">
                    <MegaMenu border={border} />
                  </div>
                  <Link
                    href="/explore"
                    className={`whitespace-nowrap	 inline-flex items-center border-b-2 border-transparent px-1  xl:text-sm text-xs font-medium font-lexed hover:border-activeColor  leading-none ${
                      border === "border" ? "  text-primaryColor" : "text-white"
                    }`}
                  >
                    All Ads
                  </Link>
                  {/* <Link
                    href="/communities"
                    className={`whitespace-nowrap inline-flex items-center border-b-2 border-transparent px-1  xl:text-sm text-xs font-medium font-lexed hover:border-activeColor  leading-none ${
                      border === "border" ? "  text-primaryColor" : "text-white"
                    }`}
                  >
                    Community
                  </Link> */}
                </div>
              </div>
              <div className={`xl:w-[47%] lg:w-[45%]   w-full `}>
                <SearchField />
              </div>

              {/* mobile hamburger button */}
              <div className="flex items-center lg:hidden  gap-2">
                {/* {authState.isAuthenticated && (
                 
                  <div
                    className="relative cursor-pointer"
                    onClick={() => dispatch(setNotificationDrawerOpen())}
                  >
                    <FaRegBell
                      className={`text-lg  ${
                        border === "border" ? "text-activeColor" : "text-white"
                      }`}
                    />
                    <div
                      className="absolute -top-2 -right-1 bg-white border w-4
                    h-4 text-[8px] text-secondColor rounded-full flex items-center justify-center "
                    >
                      <small className="leading-none"> 10</small>
                    </div>
                  </div>
                )} */}
                <Disclosure.Button
                  onClick={() => dispatch(setNavOpen())}
                  className={`inline-flex items-center justify-center rounded-md p-2     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-activeColor ${
                    border === "border" ? "  text-activeColor" : "text-white"
                  } `}
                >
                  <span className="sr-only">Open main menu</span>

                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>

              <div className="xl:w-[25%] lg:w-[27%] hidden   lg:flex lg:items-center justify-end xl:gap-4 gap-2">
                {authState.isAuthenticated && (
                  // <NotificationDropDown border={border} />
                  <div
                    className="relative cursor-pointer"
                    onClick={() => dispatch(setNotificationDrawerOpen())}
                  >
                    <FaRegBell
                      className={`text-lg  ${
                        border === "border" ? "text-primaryColor" : "text-white"
                      }`}
                    />
                    {/* <div
                      className="absolute -top-2 -right-1 bg-white border w-4
                    h-4 text-[8px] text-secondColor rounded-full flex items-center justify-center "
                    >
                      <small className="leading-none"> 10</small>
                    </div> */}
                  </div>
                )}
                {authState.isAuthenticated && (
                  <Link href="/chat">
                    <RiWechatLine
                      className={`text-2xl  ${
                        border === "border" ? "text-primaryColor" : "text-white"
                      }`}
                    />
                  </Link>
                )}

                {authState.isAuthenticated === false ? (
                  <Link href="/signup">
                    <button
                      className={`py-1.5  leading-0 font-lexed font-medium  xl:text-sm text-xs  hover:-translate-y-1 transition ease-in-out delay-150 duration-300 before:content-[''] before:w-full before:h-1 before:bg-red-400 before:left-0 before:bottom-0 whitespace-nowrap ${
                        border === "border" ? "text-primaryColor" : "text-white"
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
                        <Image
                          className="h-7 w-7 rounded-full"
                          src={user}
                          alt="user"
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
                  </Menu>
                )}

                {authState.isAuthenticated === false && (
                  <Link href="/signin">
                    <button
                      className={`py-1.5 px-1 leading-0 font-lexed font-medium  xl:text-sm text-xs  hover:-translate-y-1 transition ease-in-out delay-150 duration-300 before:content-[''] before:w-full before:h-1 before:bg-red-400 before:left-0 before:bottom-0 whitespace-nowrap ${
                        border === "border" ? "text-primaryColor" : "text-white"
                      }`}
                    >
                      login
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
                    className={`whitespace-nowrap border border-activeColor py-1.5 px-2 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md   `}
                  >
                    Sell Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
