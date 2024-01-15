import type { NextPage } from "next";
import HeroSection from "@/components/heroSection/HeroSection";
import Products from "@/components/Products/Products";
import FeaturedCategoriesBox from "@/components/CategoryCard/FeaturedCategoriesBox";
import Footer from "@/components/footer/Footer";
import SellBuyArea from "@/components/SellBuyArea/SellBuyArea";
// import { useRouter } from "next/router";

const Home: NextPage = () => {
 
  
  return (
    <main className="">
      <HeroSection />
      {/* <h5
        onClick={() =>
          dispatch(
            setModalOpen({
              title: "this is a modal",
              body: "loginModal",
            })
          )
        }
      >
        LoginBtn
      </h5> */}
      <FeaturedCategoriesBox />
      <Products />
      {/* <Community /> */}
      {/* <ActionBanner /> */}
      <SellBuyArea /> 
      {/* <AppDownloadCTA />  */}

      <Footer/>
    </main>
  );
};

export default Home;
