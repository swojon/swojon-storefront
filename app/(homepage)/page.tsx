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

const Home: NextPage = () => {
  // console.log(categoryData.data.listCategories.items);
  const {data: session} = useSession()
  console.log("session", session)
  
  return (
    <main className="">
      <HeroSection />
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
