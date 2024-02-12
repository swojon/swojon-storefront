"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import MegaMenu from "../MegaMenu/MegaMenu";
// import user from "@/public/user1.jpg";
import defaultAvatar from "@/public/assets/avatar.svg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie } from "cookies-next";
import SearchField from "../SearchField/SearchField";
import { FaRegBell } from "react-icons/fa";
import { setNotificationDrawerOpen } from "@/app/redux/notificationSlice";
import { RiWechatLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { RxAvatar } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const handleSignOut = () => {
  console.log("signing out");
  toast.loading("signing you out", { id: "signInToast" });
  // dispatch(setUserLogout(true));
  deleteCookie("authorization");
  toast.success("Signed out", { id: "signInToast" });
  window.location.reload();
};

export default function Navbar2({ border }: { border: any }) {
  const router = useRouter();

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
              <ResponsiveNavBar border={border} handleSignOut={handleSignOut} />
            </div>
            <div className="lg:flex h-16 justify-between gap-2 items-center hidden">
              <div className="xl:w-[28%] lg:w-[28%] md:w-[15%] w-[10%]  flex  gap-x-1 lg:px-0  items-center z-10">
                <Link
                  href="/"
                  className={`  lg:w-[85px] md:w-20 w-16 pb-0.5 lg:flex items-center lg:mr-1 xl:mr-3.5 hidden `}
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
                    <MegaMenu border={border} />
                  </div>
                  <Link
                    href="/explore"
                    className={`whitespace-nowrap	 inline-flex items-center border-b-2 border-transparent px-1  xl:text-sm text-xs font-bold font-lexed hover:border-activeColor  leading-none ${
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
              <div className={`xl:w-[47%] lg:w-[45%] hidden lg:block  w-full `}>
                <SearchField setShowSearchBar={null} />
              </div>

              <div className="xl:w-[25%] lg:w-[27%] hidden   lg:flex lg:items-center justify-end gap-4  z-10">
                {authState.isAuthenticated && (
                  // <NotificationDropDown border={border} />
                  <div
                    className="relative cursor-pointer"
                    onClick={() => dispatch(setNotificationDrawerOpen())}
                  >
                    <FaRegBell
                      className={`text-lg  ${
                        border === "border"
                          ? "text-primaryColor"
                          : "text-primaryColor"
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
                        border === "border"
                          ? "text-primaryColor"
                          : "text-primaryColor"
                      }`}
                    />
                  </Link>
                )}

                {authState.isAuthenticated === false ? (
                  <Link href="/signup">
                    <button
                      className={`py-1.5  leading-0 font-lexed font-medium  md:text-base text-sm  hover:-translate-y-1 transition ease-in-out delay-150 duration-300 before:content-[''] before:w-full before:h-1 before:bg-red-400 before:left-0 before:bottom-0 whitespace-nowrap ${
                        border === "border"
                          ? "text-primaryColor"
                          : "text-primaryColor"
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
                        <Link href="/profile">
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

                {authState.isAuthenticated === false && (
                  <Link href="/login">
                    <button
                      className={`py-1.5 px-1 leading-0 font-lexed font-medium  md:text-base text-sm  hover:-translate-y-1 transition ease-in-out delay-150 duration-300 before:content-[''] before:w-full before:h-1 before:bg-red-400 before:left-0 before:bottom-0 whitespace-nowrap ${
                        border === "border"
                          ? "text-primaryColor"
                          : "text-primaryColor"
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
                    className={`whitespace-nowrap border border-activeColor py-1.5 px-3 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg hover:-translate-y-1 font-lexed font-medium shadow-md`}
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
