"use client";

import type { NextPage } from "next";
import HeroSection from "@/components/heroSection/HeroSection";
import Products from "@/components/Products/Products";
import Community from "@/components/Community/Community";
import ActionBanner from "@/components/ActionBanner/ActionBanner";
import ActionBanner2 from "@/components/ActionBanner2/ActionBanner2";
import SellBuyArea from "@/components/SellBuyArea/SellBuyArea";
import { useState } from "react";

import FeaturedCategoriesBox from "@/components/CategoryCard/FeaturedCategoriesBox";
import { useSession } from "next-auth/react";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";

const Home: NextPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  // console.log(categoryData.data.listCategories.items);  
  console.log("Got token", searchParams!.token)
  if (searchParams!.token){
    setCookie('authorization', searchParams!.token, {secure:true })
    redirect('/')
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
      <ActionBanner2 />
    </main>
  );
};

export default Home;
