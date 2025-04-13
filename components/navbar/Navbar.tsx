"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import defaultAvatar from "@/public/assets/avatar.svg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FaRegBell } from "react-icons/fa";
import { setNotificationDrawerOpen } from "@/app/redux/notificationSlice";
import { RiWechatLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { LuUser2 } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useApolloClient } from "@apollo/client";
import { PiShoppingCart } from "react-icons/pi";
import { setCartDrawerOpen } from "@/app/redux/cartDrawerSlice";

const DynamicSearchField = dynamic(() => import("../SearchField/SearchField"), {
  ssr: false,
});
const DynamicResponsiveNavBar = dynamic(() => import("./ResponsiveNavBar"), {
  ssr: false,
});
const DynamicMegaMenu = dynamic(() => import("../MegaMenu/MegaMenu"), {
  ssr: false,
});
const DynamicNotificationBell = dynamic(() => import("./NotificationBell"), {
  ssr: false,
});

const handleSignOut = () => {
  // console.log("signing out");
  toast.loading("signing you out", { id: "signInToast" });
  signOut({
    redirect: true,
    callbackUrl: "/",
  });
  // dispatch(setUserLogout(true));
  // deleteCookie("authorization");
  toast.success("Signed out", { id: "signInToast" });
  // window.location.reload();
};

export default function Navbar({ border }: { border: any }) {
  const { data: session, status } = useSession();
  console.log("status", status);

  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);

  // console.log("session", user);
  return (
    <Disclosure
      as="nav"
      className={` px-[2vw] bg-transparent z-[100]  ${
        border === "border" ? "border-b border-[#E6E6E6]" : "border-0"
      }`}
    >
      {({ open }) => (
        <>
          <div className=" ">
            <div className="w-full lg:hidden">
              {/* mobile navbar */}
              <DynamicResponsiveNavBar
                border={border}
                handleSignOut={handleSignOut}
              />
            </div>
            <div className="lg:flex h-16 justify-between gap-2 items-center hidden">
              <div className="xl:w-[28%] lg:w-[28%] md:w-[15%] w-[10%]  flex  gap-x-1 lg:px-0  items-center z-10">
                <Link
                  href="/"
                  className={`  lg:w-[90px] md:w-20 w-16 pb-0.5 lg:flex items-center lg:mr-1 xl:mr-3.5 hidden `}
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
                  className={` md:w-10 w-10 h-9  justify-center items-center lg:mr-1 xl:mr-3.5  lg:hidden`}
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
                  <div className=" ">
                    <DynamicMegaMenu border={border} />
                  </div>
                  <Link
                    href="/explore"
                    className={`whitespace-nowrap	 inline-flex items-center border-b-2 border-transparent px-1  xl:text-sm text-xs font-bold font-lexed hover:border-activeColor  leading-none ${
                      border === "border" ? "  text-primaryColor" : "text-white"
                    }`}
                  >
                    All Products
                  </Link>
                  <Link
                    href="/courier-shield"
                    className={`whitespace-nowrap	 inline-flex items-center border-b-2 border-transparent px-1  xl:text-sm text-xs font-bold font-lexed hover:border-activeColor  leading-none ${
                      border === "border" ? "  text-primaryColor" : "text-white"
                    }`}
                  >
                    Courier Shield
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
              <div className={`xl:w-[47%] lg:w-[45%] hidden lg:block  w-full `}>
                <DynamicSearchField setShowSearchBar={null} />
              </div>

              <div className="xl:w-[25%] lg:w-[27%] hidden   lg:flex lg:items-center justify-end gap-4  z-10">
                {status === "authenticated" && (
                  <DynamicNotificationBell
                    border={border}
                    handleBellClick={() =>
                      dispatch(setNotificationDrawerOpen())
                    }
                  />
                )}
                {status === "authenticated" && (
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

                {status === "authenticated" && (
                  <Menu
                    as="div"
                    className="relative  flex-shrink-0 font-lexed font-medium "
                  >
                    <div>
                      <Menu.Button className="flex items-center  xl:text-sm text-xs focus:outline-none ">
                        {authState?.user?.profile?.avatar ? (
                          <Image
                            className="h-7 w-7 rounded-full"
                            src={
                              authState?.user?.profile?.avatar ?? defaultAvatar
                            }
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
                      {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Account settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Support
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                License
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items> */}
                      <div className="absolute right-0 z-[150] mt-2 w-48 origin-top-right rounded-xl bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  cursor-pointer py-1">
                        <Link href="/profile?sidebar=hide">
                          <div className="px-4 py-1 md:text-base text-sm text-primaryColor font-semibold hover:bg-gray-200 cursor-pointer  w-full">
                            My Profile
                          </div>
                        </Link>

                        <div className="mt-1 border border-t"></div>

                        <Link href="/help-center">
                          <div className="px-4 py-1 md:text-base text-sm text-primaryColor font-semibold hover:bg-gray-200 cursor-pointer  w-full">
                            Help Center
                          </div>
                        </Link>

                        <Link href="/FAQ">
                          <div className="px-4 py-1 md:text-base text-sm text-primaryColor font-semibold hover:bg-gray-200 cursor-pointer  w-full">
                            FAQ
                          </div>
                        </Link>

                        <button
                          onClick={handleSignOut}
                          className="px-4 py-1 md:text-base text-sm text-primaryColor font-semibold hover:bg-gray-200 cursor-pointer  w-full text-start"
                        >
                          Sign out
                        </button>
                      </div>
                    </Transition>
                  </Menu>
                )}

                <div
                  className="relative "
                  onClick={() => dispatch(setCartDrawerOpen())}
                >
                  <button
                    className={`py-1.5  leading-0 font-lexed font-semibold  md:text-2xl xl:text-3xl text-sm   transition ease-in-out delay-150 duration-300  whitespace-nowrap ${
                      border === "border"
                        ? "text-primaryColor"
                        : "text-primaryColor"
                    }`}
                  >
                    <PiShoppingCart />
                  </button>

                  <div className="absolute -right-[2px] top-0  h-[18px] lg:h-[18px] xl:h-[20px] w-[18px] lg:w-[18px] xl:w-[20px] rounded-full  flex items-center justify-center bg-activeColor text-center ">
                    <span className="font-semibold   text-white text-[8px] xl:text-[10px] block  p-0 leading-none">
                      10
                    </span>
                  </div>
                </div>

                {status != "authenticated" && (
                  <Link href="/login">
                    <button
                      className={`py-1.5 px-1 leading-0 font-lexed font-medium  md:text-base text-sm  hover:-translate-y-[2px] transition ease-in-out delay-150 duration-300  whitespace-nowrap ${
                        border === "border"
                          ? "text-primaryColor"
                          : "text-primaryColor"
                      }`}
                    >
                      Login
                    </button>
                  </Link>
                )}

                {status === "authenticated" ? (
                  <></> // <Link href="/upload-product">
                ) : (
                  //   <button
                  //     // onClick={() =>
                  //     //   dispatch(
                  //     //     setModalOpen({
                  //     //       title: "this is a modal",
                  //     //       body: "sellProduct",
                  //     //     })
                  //     //   )
                  //     // }
                  //     className={`whitespace-nowrap border border-activeColor py-1.5 px-2 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md   `}
                  //   >
                  //     Sell Product
                  //   </button>
                  // </Link>
                  <Link
                    href="/signup"
                    className="whitespace-nowrap border border-activeColor py-1.5 px-2 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md   "
                  >
                    Create Account
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
