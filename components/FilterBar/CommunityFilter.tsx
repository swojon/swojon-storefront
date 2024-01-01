import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useListCommunitiesQuery } from "@/apollograph/generated";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const CommunityFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [appliedCommunities, setAppliedCommunities] = useState(
    searchParams.get("community")?.split(",") ?? []
  );

  const handleChange = (val: any) => {
    console.log(
      "input changed",
      val.target.name,
      val.target.value,
      val.target.checked
    );
    var applied = [];
    if (val.target.checked) applied = [...appliedCommunities, val.target.value];
    else
      applied = appliedCommunities.filter((item) => item !== val.target.value);
    // conso setAppliedCommunities([...appliedCommunities, val.target.value])le.log(val.target.name)
    const params = new URLSearchParams(searchParams.toString());
    applied.length > 0
      ? params.set("community", applied.join(","))
      : params.delete("community");
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };

  // useEffect(()=>{
  //     const params = new URLSearchParams(searchParams.toString())
  //     appliedCommunities.length > 0 ? params.set("community", appliedCommunities.join(',')) : params.delete('community')
  //     !!params.toString() ?  router.push(pathname + '?' + params.toString()) : router.push(pathname)
  //     // router.push(pathname + '?' + params.toString())
  // }, [appliedCommunities])
  useEffect(() => {
    console.log("search params changed");
    setAppliedCommunities(searchParams.get("community")?.split(",") ?? []);
  }, [searchParams]);

  console.log("applied appliedCommunities", appliedCommunities);
  const {
    data: communityOptions,
    loading: communityLoading,
    error: communityError,
  } = useListCommunitiesQuery();
  const communities = communityOptions?.listCommunities.items;
  const [query, setQuery] = useState("");
  const filteredCommunities = !!query
    ? communities?.filter((com) =>
        com.name?.toLowerCase().includes(query.toLowerCase())
      )
    : communities;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div>
      <form className=" ">
        <Disclosure
          as="div"
          className="border-b border-gray-200 py-4"
          defaultOpen={appliedCommunities.length > 0}
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="md:text-lg text-base  font-bold font-lexed text-primaryColor">
                    Communities
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
                  {filteredCommunities?.map((community) => (
                    <div key={community.id} className="flex items-center">
                      <input
                        id={`filter-${community.id}`}
                        defaultValue={community.slug!}
                        type="checkbox"
                        onChange={handleChange}
                        checked={appliedCommunities.includes(community.slug!)}
                        className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                      />
                      <label
                        htmlFor={`filter-${community.id}`}
                        className={`ml-3 text-sm  flex space-x-1 capitalize font-lexed font-medium ${
                          appliedCommunities.includes(community.slug!)
                            ? "text-activeColor"
                            : "text-primaryColor"
                        }`}
                      >
                        <span>{community.name} </span>{" "}
                        {/* <span className="text-gray-400">(4,521)</span> */}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </form>
    </div>
  );
};

export default CommunityFilter;
