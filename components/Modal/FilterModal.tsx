import { setModalClose } from "@/app/redux/modalSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import LocationFilter from "../FilterBar/LocationFilter";
import CategoriesFilter from "../FilterBar/CategoriesFilter";

const FilterModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[60%] h-full   bg-white mx-auto  rounded-lg py-4  relative">
      <h6 className="px-4 pb-4 border-b border-gray-200 md:text-lg text-sm text-center font-bold text-primaryColor ">
        Filters
      </h6>{" "}
      <button
        className="rounded-full bg-activeColor p-1  text-white absolute right-4 top-4"
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>
      <div className="px-6 pt-4 space-y-4 h-full max-h-[80vh] overflow-y-auto form-scrollbar">
        <LocationFilter />
        <CategoriesFilter />
      </div>
    </div>
  );
};

export default FilterModal;
