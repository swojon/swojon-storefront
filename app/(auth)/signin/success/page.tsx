"use client";
import next, { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";

import { deleteCookie, getCookie, setCookie } from "cookies-next";

const SignInSuccess: NextPage = (): JSX.Element => {
    const searchParams = useSearchParams()
    const router = useRouter()
    // console.log(categoryData.data.listCategories.items);  
    // console.log("Got token", searchParams.get("token"))
    const token = searchParams.get("token")
    const redirect = searchParams.get("redirect")
    if (!!token){
    //   console.log("setting token to cookies", token)
      setCookie('authorization', token, {secure:true })
      router.push('/signin/success?redirect=1', {shallow: true })
      // window.location.reload()
      router.refresh()
    }
    if (!!redirect){
      const next_url = getCookie('next')
      console.log("next url redirecting", next_url)
      if (next_url){
        // deleteCookie("next")
        router.push(next_url)
      } else{
        router.push('/')
      }
    }
    
  return (
    <div className=" bg-white lg:w-[50%] md:w-[75%] w-full ">
    <div className="lg:px-24 md:px-16 ">
        <p>Sign In Successfull</p>
        <p>Redirecting</p>
        {/* <p className="text-center pt-2">Or</p> */}
    
      </div>
    </div>


              
  );
};

export default SignInSuccess;
