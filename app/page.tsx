"use client";

import type { NextPage } from "next";

import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import HeroSection from "../components/heroSection/HeroSection";
import categoryData from "../data/categoryData";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

const Home: NextPage = () => {
  console.log(categoryData.data.listCategories.items);
  return (
    <section>
      <HeroSection />
      <CategoryCard />
    </section>
  );
};

export default Home;
