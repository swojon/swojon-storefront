"use client";

import type { NextPage } from "next";

import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`
  query Now {
    now(id: "1")
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
