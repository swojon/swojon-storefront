"use client";

import type { NextPage } from "next";

import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import HeroSection from "../components/heroSection/HeroSection";


const Home: NextPage = () => {
  return (
    <section>
      <HeroSection />
    </section>
  );
};

export default Home;
