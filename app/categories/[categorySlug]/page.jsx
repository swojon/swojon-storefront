"use client";

import { useRouter } from "next/navigation";
import SearchBanner from "../../../components/searchBanner/SearchBanner";
import CategoryCart from "../../../components/elements/CategoryCart";
import ProductDetails from "../../../components/elements/ProductDetails";
import laptop from "../../../public/laptop.png";
import monitor from "../../../public/monitor.png";
import console from "../../../public/console.png";
import dress from "../../../public/dress.png";
import smartphone from "../../../public/smartphone.png";
import data2 from "../../../data/data";
import brand from "../../../data/brand";
import Brands from "../../pages/brands/Brands";
import categoryData from "../../../data/categoryData";

const data = [
  { id: 1, item: "laptop", img: laptop, title: "100000+ listing" },
  { id: 2, item: "monitor", img: monitor, title: "100000+ listing" },
  { id: 3, item: "console", img: console, title: "100000+ listing" },
  { id: 4, item: "dress", img: dress, title: "100000+ listing" },
  { id: 5, item: "smartphone", img: smartphone, title: "100000+ listing" },
];

const CategoryDetail = ({ params }) => {
  const categoryItem = params.categorySlug;

  const selectedCategory = categoryData.data.listCategories.items.find(
    (item) => item.slug === categoryItem
  );

  return (
    <div className="custom-container">
      <SearchBanner img={selectedCategory.cardImg} />

      <div>
        <h3 className="text-xl capitalize font-semibold">
          {selectedCategory.name}
        </h3>
        <div className="flex justify-between py-9">
          {selectedCategory?.children.map((data) => (
            <CategoryCart key={data.id} data={data} height={"200px"} />
          ))}
        </div>
      </div>

      <div className="px-3">
        <Brands data={brand} />
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

export default CategoryDetail;
