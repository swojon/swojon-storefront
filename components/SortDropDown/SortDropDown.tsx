import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {  ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
  { id: 1, name: "Most Relevant", value: "default" },
  { id: 2, name: "Newest first", value: "newest" },
  { id: 3, name: "Price (Low => High)", value: "lowest" },
  { id: 4, name: "Price (High => Low)", value: "highest" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const SortDropDown = () => {  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [appliedSorting, setAppliedSorting] = useState<any>(null);

  


  useEffect(() => {
    setAppliedSorting(searchParams.get("sort") ?? "default");
  }, [searchParams]);

  const handleChange = (val:any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (val === "default" ) {
      params.delete("sort");
    }else {
      params.set("sort", val)
    }

    !!params.toString()
    ? router.push(pathname + "?" + params.toString())
    : router.push(pathname);
  }

  return (
    <Listbox value={appliedSorting} onChange={handleChange}>
      {({ open }) => (
        <>
          <div className="relative ">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-left shadow-sm focus:border-activeColor focus:outline-none focus:ring-1 focus:ring-activeColor md:text-sm text-xs">
              <span className="block truncate">{sortOptions.find(so => so.value === appliedSorting)?.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {sortOptions.map((so) => (
                  <Listbox.Option
                    key={so.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-activeColor"
                          : "text-primaryColor",
                        "relative cursor-default select-none py-1.5 pl-3 pr-9 border-b"
                      )
                    }
                    value={so.value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {so.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default SortDropDown;
