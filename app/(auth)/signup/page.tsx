"use client";
import React, { useEffect } from "react";
import signin from "@/public/assets/signin.svg";
import Image from "next/image";
import Link from "next/link";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { setCookie } from "cookies-next";

const page = () => {
  useEffect(() => {
    setCookie('host', window.location.origin )
  }, [])
  return (
    <div className=" w-full min-h-screen h-full flex items-center bg-white fixed top-0 left-0 ">
      <div className="flex-1 min-h-screen flex items-center relative">
      <div className="w-2/3 h-1/3 m-auto ">
          <Image src={signin} alt="" className="w-full  h-full" />
        </div>
        <div className="absolute left-0 bottom-0 ">
          <Image
            src="/assets/loginDesign.png"
            width={100}
            height={100}
            className="w-full h-full"
            alt="design"
          />
        </div>
      </div>
      <div className=" bg-white flex-1   ">
        <div className="px-12 space-y-3">
          <Link
            href="/"
            className="text-lg font-bold text-activeColor	font-lexed"
          >
            Swojon
          </Link>

          <form className="space-y-4  mx-auto">
            <div>
              <h2 className=" text-2xl font-semibold font-lexed">Sign Up</h2>
              <p className="text-base text-secondColor">
                Please enter your details.
              </p>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Name
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor sm:text-sm p-2.5"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Email
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor sm:text-sm p-2.5"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Password
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor sm:text-sm p-2.5"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-3 border border-activeColor bg-activeColor text-sm text-white w-full rounded font-lexed"
            >
              Get Started
            </button>
          </form>

          <div className="space-y-2">
            <Link
              href="/"
              className="py-2 flex justify-center items-center space-x-2 border border-[#E6E6E6]  text-sm text-primaryColor w-full rounded font-lexed"
            >
              <span>
                <FcGoogle />
              </span>
              <span>Continue with Google</span>
            </Link>
            <Link
              href="/"
              className="py-2 flex justify-center items-center space-x-2 border border-[#E6E6E6]  text-sm text-primaryColor w-full rounded font-lexed"
            >
              <span>
                <FaApple />
              </span>
              <span>Continue with Apple</span>
            </Link>
            <h6 className="text-center text-secondColor text-sm">
              {" "}
              already have an account !{" "}
              <Link href="/auth/signin">
                <span className="text-activeColor">Login</span>
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
