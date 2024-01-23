import { setModalClose } from "@/app/redux/modalSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import LocationFilter from "../FilterBar/LocationFilter";
import CategoriesFilter from "../FilterBar/CategoriesFilter";
import "./Modal.scss";
import ConditionFilter from "../FilterBar/ConditionFilter";
import BrandFilter from "../FilterBar/BrandFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { filterFields } from "../FilterBar/AppliedFilter";

const FilterModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathname = usePathname()

  const dispatch = useDispatch();
  const handleRemoveAll = () => {
    const params = new URLSearchParams(searchParams.toString());
    filterFields.forEach((fi) => {
      params.delete(fi);
    });
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };
  return (
    <div className="xl:w-[60%] lg:w-[70%] md:w-[75%]  w-[90%] h-[90dvh] rounded-lg bg-white mx-auto relative">
      <div className="relative h-12 border-b border-gray-300 flex items-center justify-center rounded-t-lg">
        <h6 className="px-4 md:text-lg text-sm text-center font-bold text-primaryColor ">
          Filters
        </h6>{" "}
        <button
          className="rounded-full bg-activeColor p-1  text-white absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>

      <div className="md:px-8 px-2 py-2 md:py-4  mb-2 md:space-y-5 space-y-3 z-0 filter-content  overflow-y-auto form-scrollbar ">
        <LocationFilter />
        <CategoriesFilter />
        <ConditionFilter initial={[]} />
        <BrandFilter />
      </div>

      <div className=" w-full h-14 border-t border-gray-300 rounded-b-lg bg-white md:px-8 px-2 z-10 flex items-center justify-between">
        <button onClick={handleRemoveAll} className=" py-1  text-sm text-primaryColor rounded-md">
          Clear all
        </button>
        <button onClick={() => dispatch(setModalClose(true))} className="border border-activeColor bg-activeColor  py-1 px-3 text-sm text-white rounded-md">
          Show results
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
