import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { BiSelection } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { useListBrandsQuery } from "@/apollograph/generated";
import BrandLoader from "./BrandLoader";
import Image from "next/image";

const Brand = ({
  touched,
  handleBlur,
  setFieldValue,
  values,
  handleChange,
  errors,
  initialBrand
}: {
  touched: any;
  handleBlur: any;
  errors: any;
  setFieldValue: any;
  values: any;
  handleChange: any;
  initialBrand: any;
}) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const [selectBrand, setSelectBrand] = useState<any>(initialBrand ?? null);
  const {
    data: brandData,
    loading: brandLoading,
    error: brandError,
  } = useListBrandsQuery();
  const brands = brandData?.listBrands.items;
  const filteredBrands = !!query
    ? brands?.filter((br) =>
        br.name?.toLowerCase().includes(query.toLowerCase())
      )
    : brands;

  useEffect(() => {
    if (!selectBrand) setFieldValue("brandId", null);
    else setFieldValue("brandId", selectBrand.id);
  }, [selectBrand]);

  return (
    <section className="md:space-y-4 space-y-2 pt-4">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Brand?
      </h6>
      {touched?.brandId && errors.brandId ? (
        <p className="md:text-base text-sm text-red-500 font-medium leading-6">
          {errors.brandId}
        </p>
      ) : (
        <p className="md:text-base text-sm text-secondColor font-medium leading-6">
          Choose a Brand From the list
        </p>
      )}

      <div className="rounded-2xl border border-gray-200  ">
        <div className="relative w-full md:p-6 p-2.5">
          <div className="pointer-events-none absolute inset-y-0 md:left-8 left-4 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            onChange={handleSearchChange}
            className="block w-full rounded-3xl bg-gray-100 md:py-4 py-3 pr-3 pl-9 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="Search brand  e.g. Apple"
            type="search"
          />
        </div>
        <div className="md:p-6 p-2.5 border-y border-gray-200 flex items-center justify-between">
          <span className="md:text-base text-sm text-primaryColor font-lexed font-medium capitalize">
            {selectBrand ? selectBrand.name : "Select Brand from here"}
          </span>
          <span className="text-2xl text-primaryColor">
            {selectBrand ? (
              <MdOutlineClose
                className="cursor-pointer"
                onClick={() => setSelectBrand(null)}
              />
            ) : (
              <MdKeyboardArrowUp className="" />
            )}
          </span>
        </div>

        <div className="md:p-6 p-2.5  flex items-center  gap-4 overflow-x-auto small-scroll2">
          {brandLoading && <BrandLoader />}
          {filteredBrands?.map((item: any) => (
            <div
              key={item.id}
              className={`flex flex-col justify-center  items-center flex-none w-[220px] h-[128px]  text-center pt-5  pb-4 px-4 border  rounded-md cursor-pointer space-y-3  ${
                item?.id === selectBrand?.id
                  ? " border-activeColor "
                  : "border-gray-200 hover:border-gray-500"
              }`}
              onClick={() => setSelectBrand(item)}
            >
              {item.logo ? (
                <Image
                  alt="brand logo"
                  src={item.logo}
                  width={100}
                  height={100}
                  className="w-auto h-8 rounded-md max-w-20"
                />
              ) : (
                <BiSelection className="text-primaryColor" />
              )}
              <span className="block text-base text-primaryColor font-lexed font-medium capitalize">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 ">
        <span className="md:text-2xl text-lg text-primaryColor font-lexed font-bold block ">
          Need to add more details?
        </span>

        <p className="md:text-base text-sm text-secondColor ">
          Adding additional details help your customers know more about the
          product results less query for you
        </p>

        <textarea
          id="text"
          rows={4}
          name="description"
          onChange={handleChange}
          value={values.description}
          className="block w-full rounded-md border border-gray-300  md:py-4 py-3 pr-3 px-5 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
          placeholder="e.g. This smartphone comes with some cool feature.."
        />
      </div>
    </section>
  );
};

export default Brand;
