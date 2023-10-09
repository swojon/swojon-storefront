"use client";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import login from "../../../public/login.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {}

const SignIn: NextPage = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState<string|null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const redirect = searchParams.get('redirect') === "true"
  const next_url = searchParams.get('next')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
   
      // validate your userinfo
      e.preventDefault();
      console.log("email: ", userInfo.email, "password", userInfo.password);
      setError(null)
      const res = await fetch( `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
          username : userInfo.email,
          password : userInfo.password,
        }),
        headers: {
          "Content-Type":  "application/json"
        },
        credentials: 'include',
        redirect: 'follow'
      });
      if (res.status != 200) {
        console.log("Failed to login")
        setError("Something Went Wrong")
      }
      else {
        // toast.success("Successfully Logged in")
        console.log("Log in Successfull")
        if (redirect)
          router.push(next_url? next_url : '/')

      }

    
  };
  return (
    <div className=" w-full min-h-screen flex items-center bg-white absolute top-0 left-0 ">
      <div className="w-1/2 min-h-screen flex items-center bg-slate-100">
        <div className="w-2/3 h-1/3 m-auto ">
          <Image src={login} alt="" className="w-full  " />
        </div>
      </div>
      <div className=" bg-white w-1/2  p-4 text-center">
        <div className=" pb-4 w-full border-gray-100 ">
          <h1 className="text-3xl font-bold text-[#cc0000]	">zwapto</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pt-5 w-2/3 mx-auto">
          <h2 className="text-center text-xl font-semibold ">Sign in</h2>

          <div className="flex  gap-6">
            <div className="relative h-10 w-full ">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-500 placeholder-shown:border-t-blue-gray-500 focus:border-2 focus:border-[#cc0000] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-lg"
                placeholder=" "
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                type="email"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-grey-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cc0000]peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#cc0000] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#cc0000] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
          </div>

          <div className="flex  gap-6">
            <div className="relative h-10 w-full ">
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-500 placeholder-shown:border-t-blue-gray-500 focus:border-2 focus:border-[#cc0000] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-lg"
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
                type="password"
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-grey-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cc0000]peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#cc0000] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#cc0000] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
          </div>
          {error && 
            <div className="text-center text-red-500">
                <p>{error}</p>
            </div>  
          }
          <button
            type="submit"
            className="py-3 border border-[#cc0000] w-full rounded "
          >
            sign in
          </button>
        </form>
        <h6 className="pt-4 text-gray-400">
          {"Don't have an account yet? "}
          <Link href="/auth/signup">
            <span className="text-[#cc0000e0]">Create account</span>
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default SignIn;
