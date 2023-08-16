"use client";

import type { NextPage } from "next";

import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import HeroSection from "../components/heroSection/HeroSection";
import categoryData from "../data/categoryData";

const query = gql`
  query Now {
    now(id: "1")
  }
`;

const Home: NextPage = () => {
  console.log(categoryData.data.listCategories.items);
  return (
    <section>
      <HeroSection />
    </section>
  );
};

export default Home;
