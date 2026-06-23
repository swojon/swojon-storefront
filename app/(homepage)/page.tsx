import type { NextPage } from "next";
import HeroSection from "@/components/heroSection/HeroSection";
import Products from "@/components/Products/Products";
import FeaturedCategoriesBox from "@/components/CategoryCard/FeaturedCategoriesBox";
import Footer from "@/components/footer/Footer";
import SellBuyArea from "@/components/SellBuyArea/SellBuyArea";
import Navbar from "@/components/navbar/Navbar";
import NotFoundPage from "../(pages)/404/page";
import NotFound from "@/components/NotMatched/NotFound";
import HeroSectionMasonry from "@/components/heroSection/HeroSectionMasonry";
import MasonryBoxes from "@/components/CategoryCard/MasonryBoxes";
import ReelSection from "@/components/ReelSections/ReelSection";
import FlashSale from "@/components/Products/FlashSale";
import ShopByCollection from "@/components/ReelSections/ShopByCollection";

const Home: NextPage = () => {
  return (
    <main className="">
      {/* <HeroSection /> */}
      <Navbar border="border" />
      <HeroSectionMasonry />
      {/* <FlashSale /> */}
      <Products />
      {/* <MasonryBoxes /> */}
      <ShopByCollection title="Diapering & Hygiene" slug="diapering"/>
      <ShopByCollection title="Newborn Must-Haves" slug="newborn-essentials"/>
      <ShopByCollection title="Healthy feeding made easy" slug="feeding-days"/>
      <ShopByCollection title="Smooth transition to solid food" slug="solid-starter"/>
      <ShopByCollection title="Healthy mama, happy baby" slug="new-moms-essentials"/>

      <ReelSection />
      {/* <Community /> */}
      {/* <ActionBanner /> */}
      {/* <SellBuyArea /> */}
      {/* <AppDownloadCTA />  */}
      <Footer />
      {/* <NotFound title="✨ We're making our site even better! ✨" subtitle="Exciting updates are on the way—check back soon! 🚀 " cta={{link: "/courier-shield", text: "Visit Courier Shield"}} /> */}
    </main>
  );
};

export default Home;
