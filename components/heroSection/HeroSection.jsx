import React from "react";
import "./HeroSection.scss";
import Image from "next/image";
import Hero1 from "../../public/hero1.png";
import Hero2 from "../../public/hero2.png";
import Hero3 from "../../public/hero3.png";
// import Hero4 from "../../public/hero4.png";

const HeroSection = () => {
  return (
    <section className="w-full  hero-container flex flex-col justify-center">
      <div className="flex w-full left">
        <div className="flex-1 border">
          <h1>Empower Your Lifestyle With zwapto!</h1>
          <p>At ROFTAN, we blend sustainability with convenience</p>
        </div>
        <div className="flex-1 border flex justify-between gap-x-4 md:flex-shrink-0">
          <Image
            src={Hero1}
            className="hero1 w-full border-blue-900  h-64"
            alt="Picture of the author"
          />
          <Image
            src={Hero1}
            className="hero1 w-full border-blue-900  h-64 "
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="right flex pt-4 ">
        <div className="flex-1 border flex justify-between gap-x-4 md:flex-shrink-0 ">
          {/* <Image
            src={Hero1}
            className="hero1 w-full border-blue-900  h-64"
            alt="Picture of the author"
          />
          <Image
            src={Hero1}
            className="hero1 w-full border-blue-900  h-64 "
            alt="Picture of the author"
          /> */}
        </div>
        <div className="flex-1 border flex justify-between gap-x-4 md:flex-shrink-0">
          <Image
            src={Hero3}
            className="hero1 w-full border-blue-900  h-64"
            alt="Picture of the author"
          />
          <Image
            src={Hero2}
            className="hero1 w-full border-blue-900  h-64 "
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
