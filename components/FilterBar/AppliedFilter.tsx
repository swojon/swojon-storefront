import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function AppliedFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterFields = [
    "condition",
    "community",
    "location",
    "brand",
    "category",
  ];
  // console.log("all serach params", searchParams.values())

  const [filters, setFilters] = useState<any[]>([]);
  useEffect(() => {
    var filtersFromSearchParams: any[] = [];
    searchParams.forEach((val, key) => {
      console.log("looking", val, key);
      if (filterFields.includes(key))
        filtersFromSearchParams = filtersFromSearchParams.concat(
          val.split(",")
        );
    });
    setFilters(filtersFromSearchParams);
  }, [searchParams]);

  const handleRemove = (val: string) => {
    var effectedKeys: any = [];
    searchParams.forEach((value, key) => {
      if (value.split(",").includes(val)) {
        effectedKeys.push([key, value.split(",").filter((v) => v !== val)]);
      }
      // if (filterFields.includes(key)) filtersFromSearchParams = filtersFromSearchParams.concat(val.split(','))
    });
    // const keys = effectedKeys.keys();
    console.log("keys", effectedKeys);
    const params = new URLSearchParams(searchParams.toString());
    effectedKeys.forEach((arr: any) => {
      const k = arr[0];
      const v = arr[1];
      v.length > 0 ? params.set(k, v.join(",")) : params.delete(k);
    });
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };

  const handleRemoveAll = () => {
    const params = new URLSearchParams(searchParams.toString());
    filterFields.forEach((fi) => {
      params.delete(fi);
    });
    !!params.toString()
      ? router.push(pathname + "?" + params.toString())
      : router.push(pathname);
  };
  // console.log(filtersFromSearchParams)
  return (
    <div className="flex gap-2.5 items-center flex-wrap  ">
      {filters.map((fi) => (
        <div
          key={fi}
          className="bg-gray-100 px-3 py-1 flex gap-2.5 items-center rounded-2xl"
        >
          <span className="text-sm">{fi}</span>{" "}
          <button onClick={() => handleRemove(fi)}>
            <MdOutlineClose className="text-sm border border-primaryColor rounded-full p-0.5" />
          </button>
        </div>
      ))}
      {filters.length > 0 ? (
        <button
          onClick={() => handleRemoveAll()}
          className="bg-activeColor px-3 py-1 text-sm text-white rounded-2xl"
        >
          Clear All
        </button>
      ) : null}
    </div>
  );
}

export default AppliedFilter;
