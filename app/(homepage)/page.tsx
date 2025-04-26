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

const Home: NextPage = () => {
  return (
    <main className="">
      {/* <HeroSection /> */}
      <Navbar border="border" />
      <HeroSectionMasonry />
      {/* <FeaturedCategoriesBox /> */}
      <Products />
      <MasonryBoxes />
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
