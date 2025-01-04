
import type { NextPage } from "next";
import HeroSection from "@/components/heroSection/HeroSection";
import Products from "@/components/Products/Products";
import FeaturedCategoriesBox from "@/components/CategoryCard/FeaturedCategoriesBox";
import Footer from "@/components/footer/Footer";
import SellBuyArea from "@/components/SellBuyArea/SellBuyArea";
import Navbar from "@/components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <main className="">
      {/* <HeroSection /> */}
      <Navbar border="border" />
      <FeaturedCategoriesBox />
      <Products />
      {/* <Community /> */}
      {/* <ActionBanner /> */}
      <SellBuyArea />
      {/* <AppDownloadCTA />  */}
      <Footer />
    </main>
  );
};

export default Home;
