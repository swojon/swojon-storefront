"use client";
import next, { NextPage } from "next";
import { FormEventHandler, useEffect, useState } from "react";
import signin from "@/public/assets/signin.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/app/redux/authSlice";
import DynamicModal from "@/components/Modal/DynamicModal";
// import { setCookie } from "cookies-next";

interface Props {}

const handleGoogleClick = () => {
  window.open(`${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/google`, "_self");
  // window.open(`http://localhost:3005/auth/google`, '_self')
};

const SignIn: NextPage = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  // const redirect = searchParams.get("redirect") === "true";
  const redirect = true;
  const next_url = searchParams.get("next");
  if (next_url) setCookie('next', next_url, {maxAge: 60 * 5 })
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();
    console.log("email: ", userInfo.email, "password", userInfo.password);
    setError(null);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/login`,
      {
        method: "POST",
        body: JSON.stringify({
          username: userInfo.email,
          password: userInfo.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        redirect: "follow",
      }
    );
    const data = await res.json();
    if (res.status != 200) {
      console.log("Failed to login");
      setError("Something Went Wrong");
    } else {
      // toast.success("Successfully Logged in")
      console.log("Log in Successfull");
      // console.log(res.json())

      console.log(data);
      // cookies().set('authorization', data["token"], {secure: true})
      dispatch(setAuthState(data));
      setCookie("authorization", data.token, { secure: true, maxAge: 60 * 60 * 24 * 7 });

      if (redirect) router.push(next_url ? next_url : "/");
    }
  };

  const handleChange = (e: any) => {
    if (e.target.name === "email")
      setUserInfo({ email: e.target.value, password: userInfo.password });
    if (e.target.name === "password")
      setUserInfo({ email: userInfo.email, password: e.target.value });
  };
  return (


        <div className=" bg-white lg:w-[50%] md:w-[75%] w-full">
          <div className="lg:px-24 md:px-16 ">
            <Link href="/" className="">
              <Image
                src="/assets/swojon.svg"
                width={100}
                height={500}
                alt="logo"
                className="lg:w-[90px] md:w-20 w-16  "
              />
            </Link>

            <form
              className="lg:space-y-4 md:space-y-3 space-y-2 mx-auto pt-3"
              onSubmit={handleSubmit}
            >
              <div>
                <h2 className=" lg:text-2xl md:text-lg text-base font-semibold font-lexed">
                  Log in
                </h2>
                <p className="lg:text-base md:text-sm text-[10px] text-secondColor">
                  Welcome back! Please enter your details.
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block lg:text-base md:text-sm text-xs font-medium text-primaryColor font-lexed"
                >
                  Email
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor  lg:p-2.5 md:p-2 py-1 px-2 sm:text-sm text-xs "
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block lg:text-base md:text-sm text-xs font-medium text-primaryColor font-lexed"
                >
                  Password
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor lg:p-2.5 md:p-2 py-1 px-2 sm:text-sm text-xs"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="md:h-4 h-2.5 md:w-4 w-2.5 rounded border-gray-200 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <label
                    htmlFor="comments"
                    className="text-secondColor lg:text-sm md:text-xs text-[10px]"
                  >
                    remember me
                  </label>
                </div>

                <Link
                  href="/"
                  className="lg:text-sm md:text-xs text-[10px] text-activeColor"
                >
                  Forgot password
                </Link>
              </div>

              <button
                type="submit"
                className="lg:py-3 md:py-2 py-1.5 border border-activeColor bg-activeColor lg:text-sm md:text-xs text-[12px] text-white w-full rounded font-lexed"
              >
                Log in
              </button>
            </form>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleGoogleClick}
                className="md:py-2 py-1.5 flex justify-center items-center space-x-2 border border-[#E6E6E6]  lg:text-sm md:text-xs text-[12px] text-primaryColor w-full rounded font-lexed"
              >
                <span>
                  <FcGoogle />
                </span>
                <span>Continue with Google</span>
              </button>
              {/* <Link
                href="/"
                className="md:py-2 py-1.5 flex justify-center items-center space-x-2 border border-[#E6E6E6]  lg:text-sm md:text-xs text-[12px] text-primaryColor w-full rounded font-lexed"
              >
                <span>
                  <FaApple />
                </span>
                <span>Continue with Apple</span>
              </Link> */}
              <h6 className="text-center text-secondColor lg:text-sm md:text-xs text-[13px]">
                {" "}
                Don’t have an account?{" "}
                <Link href="/signup">
                  <span className="text-activeColor">Sign up !</span>
                </Link>
              </h6>
            </div>
          </div>
        </div>
  
  );
};

export default SignIn;
