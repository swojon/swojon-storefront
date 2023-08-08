import React from "react";
import SearchBanner from "../../../components/searchBanner/SearchBanner";
import CategoryCart from "../../../components/elements/CategoryCart";
import ProductDetails from "../../../components/elements/ProductDetails";
import laptop from "../../../public/laptop.png";
import monitor from "../../../public/monitor.png";
import console from "../../../public/console.png";
import dress from "../../../public/dress.png";
import smartphone from "../../../public/smartphone.png";
import data2 from "../../../data/data";

const Category = () => {
  const data = [
    { id: 1, item: "laptop", img: laptop, title: "100000+ listing" },
    { id: 2, item: "monitor", img: monitor, title: "100000+ listing" },
    { id: 3, item: "console", img: console, title: "100000+ listing" },
    { id: 4, item: "dress", img: dress, title: "100000+ listing" },
    { id: 5, item: "smartphone", img: smartphone, title: "100000+ listing" },
  ];
  return (
    <div className="custom-container">
      <SearchBanner />

      <div>
        <h3 className="text-xl capitalize font-semibold">shop by category</h3>
        <div className="flex justify-between py-9">
          {data.map((data) => (
            <CategoryCart key={data.id} data={data} height={"200px"} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl capitalize font-semibold">
          Shop Certified Mobiles
        </h3>
        <p>
          Browse inspected phones and tablets, with 7-day money back guarantee
        </p>
        <div className="flex justify-between py-9 gap-x-2">
          {data2.map((item) => (
            <ProductDetails key={item.id} data={item} height={"220px"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
