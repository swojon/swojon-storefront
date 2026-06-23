import { Fragment, useState } from "react";
// import AdDropdown from "./AdDropdown";
// import PriceRangeSlider from "./PriceRangeSlider";
import LocationFilter from "./LocationFilter";
import "./FilterCss.css";
// import CommunityFilter from "./CommunityFilter";
// import StatusFilter from "./ConditionFilter";
import BrandFilter from "./BrandFilter";
import CategoriesFilter from "./CategoriesFilter";
import ConditionFilter from "./ConditionFilter";
// import { useSearchParams } from "next/navigation";
import { FiFilter } from "react-icons/fi";

const FilterBar = () => {
  // const searchParams = useSearchParams()
  // const conditionFilter = searchParams.get("condition")
  // console.log(conditionFilter)
  return (
    <section className="sticky top-0 h-auto border rounded-md min-h-screen  ">
      <div className="flex  items-center p-3 border-b ">
        <span className=" py-1.5 pr-2 rounded-md  text-base flex justify-center items-center text-activeColor  ">
          <FiFilter />
        </span>{" "}
        <h6 className="md:text-lg text-base  font-bold font-lexed text-primaryColor">
          Filter
        </h6>
      </div>

      {/* <div className="py-4 mx-3 border-b">
        <span className="block text-lg pb-2  pt-0 text-primaryColor font-lexed">
          Ad Posted by
        </span>
        <AdDropdown />
      </div> */}

      {/* <div className="py-4 mx-3 border-b">
        <span className="block text-lg pb-2  pt-0 text-primaryColor font-lexed">
          Price Range (TK)
        </span>
        <PriceRangeSlider />
      </div> */}

      {/* <div className="px-3">
        <LocationFilter />
      </div> */}

      <div className="px-3">
        <CategoriesFilter />
      </div>

      {/* <div className="px-3">
        <CommunityFilter />
      </div> */}

      <div className="px-3">
        <ConditionFilter initial={[]} />
      </div>

      <div className="px-3">
        <BrandFilter />
      </div>
    </section>
  );
};

export default FilterBar;
