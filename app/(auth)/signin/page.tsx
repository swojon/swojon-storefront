"use client";
import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import signin from "@/public/assets/signin.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/app/redux/authSlice";

interface Props {}

const handleGoogleClick = () => {
  window.open(`${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/google`, '_self')
  // window.open(`http://localhost:3005/auth/google`, '_self')

}

const SignIn: NextPage = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  // const redirect = searchParams.get("redirect") === "true";
  const redirect = true;
  const next_url = searchParams.get("next");

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
      setCookie("authorization", data.token, { secure: true });

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
    <div className=" w-full min-h-screen h-full flex items-center bg-white fixed top-0 left-0 ">
      <div className="flex-1 min-h-screen flex items-center  relative">
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

          <form className="space-y-4  mx-auto" onSubmit={handleSubmit}>
            <div>
              <h2 className=" text-2xl font-semibold font-lexed">Log in</h2>
              <p className="text-base text-secondColor">
                Welcome back! Please enter your details.
              </p>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor sm:text-sm p-2.5"
                  placeholder="***"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="flex h-5 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <label htmlFor="comments" className="text-secondColor text-sm">
                  remember me
                </label>
              </div>

              <Link href="/" className="text-sm text-activeColor">
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="py-3 border border-activeColor bg-activeColor text-sm text-white w-full rounded font-lexed"
            >
              Log in
            </button>
          </form>

          <div className="space-y-2">
            <button
              onClick={handleGoogleClick}
              className="py-2 flex justify-center items-center space-x-2 border border-[#E6E6E6]  text-sm text-primaryColor w-full rounded font-lexed"
            >
              <span>
                <FcGoogle />
              </span>
              <span>Continue with Google</span>
            </button>
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
              Don’t have an account?{" "}
              <Link href="/auth/signup">
                <span className="text-activeColor">Sign up !</span>
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
