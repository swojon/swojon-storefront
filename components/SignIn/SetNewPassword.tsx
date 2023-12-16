import Image from "next/image";
import Link from "next/link";
import { FaRegCommentDots, FaRegEnvelope } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa6";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";

const SetNewPassword = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <Image
          src="/assets/swojon.svg"
          width={100}
          height={500}
          alt="logo"
          className="lg:w-[90px] md:w-20 w-16  "
        />
      </Link>

      <div className="space-y-6 pt-4 w-full">
        <div className="text-center">
          <h6 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed capitalize">
            Set New Password
          </h6>
          <p className="text-sm text-secondColor pt-1">
            for matthew mat@gmail.com
          </p>
        </div>

        <div className=" flex justify-center">
          <div className="space-y-1 ">
            <div className="flex  items-center gap-2">
              <IoIosCheckmarkCircleOutline className="text-green-400 text-sm " />
              <span className="text-green-400 text-sm">1 Letter</span>
            </div>
            <div className="flex  items-center gap-2">
              <IoIosCheckmarkCircleOutline className="text-gray-400 text-sm" />
              <span className="text-gray-400 text-sm">1 Number</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosCheckmarkCircleOutline className="text-gray-400 text-sm" />
              <span className="text-gray-400 text-sm">Min 8 characters</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-full">
          <div className="relative w-full">
            <input
              type="newPassword"
              name="newPassword"
              id="newPassword"
              className="block w-full rounded-md border border-gray-200 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor lg:py-2.5 md:py-2 py-1 pl-2 pr-10 sm:text-sm text-xs"
              placeholder="new password"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              <FaRegEyeSlash />
              {/* <FaRegEye /> */}
            </span>
          </div>

          <div className="relative w-full">
            <input
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              className="block w-full rounded-md border border-gray-200 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor lg:py-2.5 md:py-2 py-1 pl-2 pr-10 sm:text-sm text-xs"
              placeholder="confirm password"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              <FaRegEyeSlash />
              {/* <FaRegEye /> */}
            </span>
          </div>

          <button className="lg:py-2 md:py-2 py-1.5 border border-activeColor bg- lg:text-sm md:text-xs text-[12px] text-activeColor w-full rounded-md font-lexed font-medium">
            Set New Password
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 cursor-pointer pt-7">
        <Link href="">
          <span className="text-xs capitalize text-activeColor">
            privacy policy
          </span>
        </Link>

        <BsDot className="text-secondColor" />

        <Link href="">
          <span className="text-xs capitalize text-activeColor">
            terms & condition
          </span>
        </Link>

        <BsDot className="text-secondColor" />

        <Link href="">
          <span className="text-xs capitalize text-activeColor">help</span>
        </Link>
      </div>
    </div>
  );
};

export default SetNewPassword;
