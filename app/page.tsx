"use client";

import type { NextPage } from "next";
import { usePathname } from "next/navigation";
import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";
import HeroSection from "../components/heroSection/HeroSection";
import categoryData from "../data/categoryData";
import CategoryCard2 from "@/components/CategoryCard/CategoryCard2";
import Products from "@/components/Products/Products";
import Community from "@/components/Community/Community";
import ActionBanner from "@/components/ActionBanner/ActionBanner";
import ActionBanner2 from "@/components/ActionBanner2/ActionBanner2";
import SellBuyArea from "@/components/SellBuyArea/SellBuyArea";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import { RxHamburgerMenu } from "react-icons/rx";

import CategoriesBox from "@/components/CategoryCard/CategoriesBox";

const Home: NextPage = () => {
  // console.log(categoryData.data.listCategories.items);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <main className="">
      <HeroSection />
      <CategoriesBox />
      <Products />
      <Community />
      <ActionBanner />
      <SellBuyArea />
      <ActionBanner2 />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div>Hello World</div>
      </Drawer>
    </main>
  );
};

export default Home;
