"use client";

import type { NextPage } from "next";
import HeroSection from "@/components/heroSection/HeroSection";
import Products from "@/components/Products/Products";
import Community from "@/components/Community/Community";
import ActionBanner from "@/components/ActionBanner/ActionBanner";
import SellBuyArea from "@/components/SellBuyArea/SellBuyArea";
import { useState } from "react";

import FeaturedCategoriesBox from "@/components/CategoryCard/FeaturedCategoriesBox";
import { useSession } from "next-auth/react";
import { setCookie } from "cookies-next";
import { redirect, useSearchParams, useRouter } from "next/navigation";
import AppDownloadCTA from "@/components/AppDownloadCTA/AppDownloadCTA";
// import { useRouter } from "next/router";

const Home: NextPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  // console.log(categoryData.data.listCategories.items);  
  console.log("Got token", searchParams.get("token"))
  const token = searchParams.get("token")
  if (!!token){
    console.log("setting token to cookies", token)
    setCookie('authorization', token, {secure:true })
    // redirect('/')
    router.push('/', {shallow: true })
    // window.location.reload()
    router.refresh()

  }
  
  return (
    <main className="">
      <HeroSection />
      {/* <h5
        onClick={() =>
          dispatch(
            setModalOpen({
              title: "this is a modal",
              body: "loginModal",
            })
          )
        }
      >
        LoginBtn
      </h5> */}
      <FeaturedCategoriesBox />
      <Products />
      <Community />
      {/* <ActionBanner />
      <SellBuyArea /> */}
      {/* <AppDownloadCTA />  */}
    </main>
  );
};

export default Home;
