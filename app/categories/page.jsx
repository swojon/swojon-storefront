import CategoryCard2 from "@/components/CategoryCard/CategoryCard2";
import React from "react";
import img1 from "@/public/assets/cat1.png";
import img2 from "@/public/assets/cat2.png";
import img3 from "@/public/assets/cat3.png";
import img4 from "@/public/assets/cat4.png";
import img5 from "@/public/assets/cat5.png";
import img6 from "@/public/assets/cat6.png";

const card = [
  { id: 13, banner: img1, title: "Furniture" },
  { id: 14, banner: img2, title: "Electronics" },
  { id: 123, banner: img3, title: "Gym Accessories" },
  { id: 12235, banner: img4, title: "instructive" },
  { id: 146, banner: img5, title: "Fashion" },
  { id: 123, banner: img6, title: "Home Alliances" },
];

const Categories = () => {
  return (
    <main>
      <h4>hello</h4>
      {/* <CategoryCard2 /> */}
    </main>
  );
};

export default Categories;
