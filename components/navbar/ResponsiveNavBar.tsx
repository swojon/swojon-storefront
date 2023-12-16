import { setNavOpen } from "@/app/redux/navSlice";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";

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
  return (
    <div className="flex h-16 justify-between gap-x-2 items-center ">
      <div className="flex items-center md:gap-x-5 gap-x-3  sm:w-[43%] w-[40%]">
        <button
          onClick={() => dispatch(setNavOpen())}
          className={`flex items-center  focus:outline-none  ${
            border === "border" ? "  text-primaryColor" : "text-white"
          } `}
        >
          <HiOutlineBars3CenterLeft className="text-2xl" />
        </button>

        <IoChatbubbleOutline
          className={`text-lg ${
            border === "border" ? "  text-primaryColor" : "text-white"
          } `}
        />
      </div>

      <Link href="/" className="sm:w-[14%] w[-20%] flex justify-center">
        <div className={` h-6 lg:w-[85px] md:w-20 w-16 `}>
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
        </div>
      </Link>

      <div className="flex items-center justify-end  md:gap-x-5 gap-x-3 sm:w-[43%] w-[40%]">
        <IoSearchOutline
          className={`text-lg ${
            border === "border" ? "  text-primaryColor" : "text-white"
          } `}
        />
        <FaRegHeart
          className={`text-lg ${
            border === "border" ? "  text-primaryColor" : "text-white"
          } `}
        />

        <Menu
          as="div"
          className="relative  flex-shrink-0 font-lexed font-medium "
        >
          <div>
            <Menu.Button className="flex items-center  xl:text-sm text-xs focus:outline-none  ">
              <Image
                className="h-6 w-6 rounded-full"
                src="/user1.jpg"
                width={300}
                height={300}
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
      </div>
    </div>
  );
};

export default ResponsiveNavBar;
