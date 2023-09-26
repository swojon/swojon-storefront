"use client";

import type { NextPage } from "next";

import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import HeroSection from "../components/heroSection/HeroSection";
import categoryData from "../data/categoryData";
import CategoryCard2 from "@/components/CategoryCard/CategoryCard2";
import Products from "@/components/Products/Products";
import Community from "@/components/Community/Community";
import ActionBanner from "@/components/ActionBanner/ActionBanner";

const Home: NextPage = () => {
  // console.log(categoryData.data.listCategories.items);
  return (
    <section className="">
      <HeroSection />
      <CategoryCard2 />
      <Products />
      <Community />
      <ActionBanner />
    </section>
  );
};

export default Home;
