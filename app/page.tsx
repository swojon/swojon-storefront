"use client";

import type { NextPage } from "next";

import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import HeroSection from "../components/heroSection/HeroSection";

const query = gql`
  query Now {
    now(id: "1")
  }
`;

const Home: NextPage = () => {
  return (
    <section>
      <HeroSection />
    </section>
  );
};

export default Home;
