import React from "react";
import img1 from "@/public/assets/pro1.png";
import img2 from "@/public/assets/pro2.png";
import img3 from "@/public/assets/pro3.png";
import img4 from "@/public/assets/pro4.png";
import img5 from "@/public/assets/pro5.png";
import img6 from "@/public/assets/pro6.png";
import img7 from "@/public/assets/pro7.png";
import img8 from "@/public/assets/pro8.png";
import ProductCard from "@/components/Products/ProductCard";

const card = [
  { id: 13, banner: img1, title: "partex delux bed" },
  { id: 14, banner: img2, title: "partex delux bed" },
  { id: 123, banner: img3, title: "partex delux bed" },
  { id: 12235, banner: img4, title: "partex delux bed" },
  { id: 146, banner: img5, title: "partex delux bed" },
  { id: 123, banner: img6, title: "partex delux bed" },
  { id: 124388, banner: img1, title: "partex delux bed" },
  { id: 12783, banner: img8, title: "partex delux bed" },
];

const Products = () => {
  return (
    <section className="mt-20  custom-container bg-[#f9f9f9]">
      <div className="py-14">
        <h2 className="lg:text-4xl text-2xl font-lexed text-center text-primaryColor font-semiBold">
          Best Deals Products
        </h2>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 pt-5">
          {card.map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
