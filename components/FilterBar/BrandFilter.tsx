import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useListBrandsQuery } from "@/apollograph/generated";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiSelection } from "react-icons/bi";
import Image from "next/image";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const BrandFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [appliedBrands, setAppliedBrands] = useState<any[]>([]);
  // const [selectBrand, setSelectBrand] = useState<any>(null);

  const handleChange = (slug: any) => {
    var applied = [];
    if (!appliedBrands.includes(slug)) applied = [...appliedBrands, slug];
    else applied = appliedBrands.filter((item) => item !== slug);
    // conso setAppliedBrands([...appliedBrands, val.target.value])le.log(val.target.name)
    const params = new URLSearchParams(searchParams.toString());
    applied.length > 0
      ? params.set("brand", applied.join(","))
      : params.delete("brand");
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };

  // useEffect(()=>{

  //     // router.push(pathname + '?' + params.toString())
  // }, [appliedBrands])

  useEffect(() => {
    setAppliedBrands(searchParams.get("brand")?.split(",") ?? []);
  }, [searchParams]);

  // console.log("applied appliedBrands", appliedBrands);
  const {
    data: brandOptions,
    loading: brandLoading,
    error: brandError,
  } = useListBrandsQuery();
  const brands = brandOptions?.listBrands.items;
  const [query, setQuery] = useState("");
  const filteredBrands = !!query
    ? brands?.filter((br) =>
        br.name?.toLowerCase().includes(query.toLowerCase())
      )
    : brands;
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className="space-y-3">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:gap-2">
        <span className="md:text-2xl text-lg  font-bold font-lexed text-primaryColor">
          Brands
        </span>
        <div className="relative w-[250px] my-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7 text-gray-400 p-1.5 rounded-full mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            onChange={handleSearchChange}
            className="block w-full rounded-2xl border border-gray-300 bg-white py-1.5 pl-8 pr-3 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>

      <div className=" flex items-center  gap-4 overflow-x-auto small-scroll2 pb-3">
        {filteredBrands?.map((brand) => (
          <div
            key={brand.id}
            className={`flex flex-col justify-center  items-center flex-none w-[160px] h-[128px]  text-center pt-5  pb-4 px-4 border  rounded-md cursor-pointer space-y-3  ${
              appliedBrands.includes(brand.slug)
                ? " border-activeColor "
                : "border-gray-200 hover:border-gray-500"
            }`}
            onClick={() => handleChange(brand.slug)}
          >
            {brand.logo ? (
              <Image
                alt="brand logo"
                src={brand.logo}
                width={100}
                height={100}
                className="w-auto h-8 rounded-md max-w-20"
              />
            ) : (
              <BiSelection className="text-primaryColor" />
            )}
            <span className="block text-base text-primaryColor font-lexed font-medium capitalize">
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      {/* <button className=" text-base rounded-md text-activeColor font-bold relative">
        See more{" "}
        <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-activeColor"></span>
      </button> */}
      {/* <form className=" ">
        <Disclosure
          as="div"
          className="border-b border-gray-200 py-4"
          defaultOpen={appliedBrands.length > 0}
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="md:text-lg text-base  font-bold font-lexed text-primaryColor">
                    Brands
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <IoIosArrowDropup
                        className="text-2xl text-activeColor"
                        aria-hidden="true"
                      />
                    ) : (
                      <IoIosArrowDropdown
                        className="text-2xl text-activeColor"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="">
                <div className="relative w-full my-3">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
                    <MagnifyingGlassIcon
                      className="h-7 w-7 text-gray-400 p-1.5 rounded-full mr-1 "
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    onChange={handleSearchChange}
                    className="block w-full rounded-2xl border border-gray-300 bg-white py-1.5 pl-8 pr-3 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
                <div className="space-y-4 h-[150px]  overflow-y-auto small-scroll ">
                  {filteredBrands?.map((brand) => (
                    <div key={brand.id} className="flex items-center">
                      <input
                        id={`filter-${brand.id}`}
                        defaultValue={brand.slug!}
                        type="checkbox"
                        onChange={handleChange}
                        checked={appliedBrands.includes(brand.slug!)}
                        className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                      />
                      <label
                        htmlFor={`filter-${brand.id}-${brand.id}`}
                        className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium 
                          ${
                            appliedBrands.includes(brand.slug!)
                              ? "text-activeColor"
                              : "text-primaryColor"
                          }`}
                      >
                        <span>{brand.name} </span>{" "}
                       
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </form> */}
    </div>
  );
};

export default BrandFilter;
