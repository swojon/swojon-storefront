import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useListLocationsQuery } from "@/apollograph/generated";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LocationFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [appliedLocations, setAppliedLocations] = useState<any[]>([]);

  const {
    data: locationsOptions,
    error: locationsError,
    loading: locationsLoading,
  } = useListLocationsQuery();

  const locations = locationsOptions?.listLocations.items;
  const [query, setQuery] = useState("");
  const filteredLocations = !!query
    ? locations?.filter((location) =>
        location.name?.toLowerCase().includes(query.toLowerCase())
      )
    : locations;

  const handleChange = (val: any) => {
    console.log(
      "input changed",
      val.target.name,
      val.target.value,
      val.target.checked
    );
    var applied = [];
    if (val.target.checked) applied = [...appliedLocations, val.target.value];
    else applied = appliedLocations.filter((item) => item !== val.target.value);
    // conso setAppliedBrands([...appliedBrands, val.target.value])le.log(val.target.name)
    const params = new URLSearchParams(searchParams.toString());
    applied.length > 0
      ? params.set("location", applied.join(","))
      : params.delete("location");
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    setAppliedLocations(searchParams.get("location")?.split(",") ?? []);
  }, [searchParams]);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center gap-2">
        <span className="md:text-2xl text-lg  font-bold font-lexed text-primaryColor">
          Location
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

      <div className="grid grid-cols-3 gap-3">
        {filteredLocations?.map((location) => (
          <div className="flex items-center" key={location.id}>
            <input
              id={`filter-${location.id}`}
              defaultValue={location.slug!}
              type="checkbox"
              onChange={handleChange}
              checked={appliedLocations.includes(location.slug!)}
              className="md:h-6 h-4 md:w-6 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
            />
            <label
              htmlFor={`filter-${location.id}-${location.id}`}
              className={`ml-3 md:text-base text-sm  flex space-x-1 capitalize font-lexed font-medium 
                          ${
                            appliedLocations.includes(location.slug!)
                              ? "text-activeColor"
                              : "text-primaryColor"
                          }`}
            >
              <span>{location.name} </span>{" "}
            </label>
          </div>
        ))}
      </div>

      {/* <Disclosure
        as="div"
        className="border-b border-gray-200 py-4"
        defaultOpen={appliedLocations.length > 0}
      >
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="md:text-lg text-base  font-bold font-lexed text-primaryColor">
                  Location
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
            <Disclosure.Panel className="pt-2 ">
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
              <div className="space-y-4 h-[150px]  overflow-y-auto small-scroll">
                {filteredLocations?.map((location) => (
                  <div className="flex items-center" key={location.id}>
                    <input
                      id={`filter-${location.id}`}
                      defaultValue={location.slug!}
                      type="checkbox"
                      onChange={handleChange}
                      checked={appliedLocations.includes(location.slug!)}
                      className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                    />
                    <label
                      htmlFor={`filter-${location.id}-${location.id}`}
                      className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium 
                          ${
                            appliedLocations.includes(location.slug!)
                              ? "text-activeColor"
                              : "text-primaryColor"
                          }`}
                    >
                      <span>{location.name} </span>{" "}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> */}
    </div>
  );
};

export default LocationFilter;
