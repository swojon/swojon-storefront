import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";

const VerifyCode = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Link href="/">
        <Image
          src="/assets/swojon.svg"
          width={100}
          height={500}
          alt="logo"
          className="lg:w-[90px] md:w-20 w-16  "
        />
      </Link>

      <div className="space-y-4 pt-4">
        <div>
          <h6 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed capitalize">
            Verify Your Identity
          </h6>
          <p className="text-sm text-secondColor pt-1">
            Youre trying to log in. To make sure your account
          </p>
          <p className="text-sm text-secondColor">
            to secure. we have to verify your identity
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            name="code"
            id="code"
            className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor  lg:p-2.5 md:p-2 py-1 px-2 sm:text-sm text-xs "
            placeholder="verify code"
          />
          <button className="lg:py-2 md:py-2 py-1.5 border border-activeColor bg- lg:text-sm md:text-xs text-[12px] text-activeColor w-full rounded-md font-lexed font-medium">
            Verify
          </button>
        </form>
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

export default VerifyCode;
