import { Fragment, useState } from "react";
import AdDropdown from "./AdDropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import LocationFilter from "./LocationFilter";
import "./FilterCss.css";
import CommunityFilter from "./CommunityFilter";
import StatusFilter from "./StatusFilter";
import BrandFilter from "./BrandFilter";

import CategoriesFilter from "./CategoriesFilter";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

const FilterBar = () => {
  return (
    <section className="min-w-[300px] border rounded-md min-h-screen  overflow-y-auto">
      <div className="flex justify-between items-center p-3 border-b ">
        <h6 className="text-lg font-lexed text-primaryColor">Filter by:</h6>
        <span className="text-activeColor  relative  leading-0">
          Reset
          <span className="absolute left-0 bottom-1 h-0.5 w-full bg-activeColor"></span>
        </span>
      </div>

      <div className="py-4 mx-3 border-b">
        <span className="block text-lg pb-2  pt-0 text-primaryColor font-lexed">
          Ad Posted by
        </span>
        <AdDropdown />
      </div>

      <div className="py-4 mx-3 border-b">
        <span className="block text-lg pb-2  pt-0 text-primaryColor font-lexed">
          Price Range (TK)
        </span>
        <PriceRangeSlider />
      </div>

      <div className="px-3">
        <LocationFilter />
      </div>

      <div className="px-3">
        <CategoriesFilter />
      </div>

      <div className="px-3">
        <CommunityFilter />
      </div>

      <div className="px-3">
        <StatusFilter />
      </div>

      <div className="px-3">
        <BrandFilter />
      </div>
    </section>
  );
};

export default FilterBar;
