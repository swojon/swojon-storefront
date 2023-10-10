import React from "react";
import icon1 from "@/public/assets/safe1.png";
import icon2 from "@/public/assets/safe2.png";
import icon3 from "@/public/assets/safe3.png";
import icon4 from "@/public/assets/safe4.png";
import icon5 from "@/public/assets/safe5.png";
import icon6 from "@/public/assets/safe6.png";
import Image from "next/image";

const safetyTips = [
  {
    id: 188,
    title: "Keep things local",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon1,
  },
  {
    id: 148,
    title: "Exchange item and payment",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon2,
  },
  {
    id: 718,
    title: "Fake payment services",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon3,
  },
  {
    id: 187,
    title: "Use common sense",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon4,
  },
  {
    id: 145,
    title: "Fake information requests",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon5,
  },
  {
    id: 178,
    title: "Information sharing",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon6,
  },
];

const SafetyTips = () => {
  return (
    <section className="pt-7">
      <h5 className="lg:text-2xl md:text-lg text-base font-lexed text-primaryColor font-medium pb-4">
        Safety Tips
      </h5>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
        {safetyTips.map((item) => (
          <div className="lg:space-y-3 md:space-y-2 space-y-1" key={item.id}>
            <Image src={item.icon} alt="icon" />
            <h6 className="lg:text-lg text-base font-medium font-lexed text-primaryColor">
              {item.title}
            </h6>
            <p className="lg:text-sm text-xs text-secondColor">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetyTips;
