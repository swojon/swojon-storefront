import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { useListCategoriesQuery } from "@/apollograph/generated";

const people = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Arlene Mccoysdf" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const CategoryDropDown = ({
  values,
  setFieldValue,
}: {
  values: any;
  setFieldValue: any;
}) => {
  const { data, loading, error } = useListCategoriesQuery();
  const categories = data?.listCategories.items;

  const [selected, setSelected] = useState(
    categories?.find((idx) => idx.id === values) ?? null
  );
  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value);
        setFieldValue("categoryId", value!.id);
      }}
    >
      {({ open }) => (
        <>
          <div className="relative ">
            <Listbox.Button className="relative w-full  rounded-md border border-gray-300 bg-white py-2 px-2 text-left shadow-sm flex items-center focus:border-activeColor focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm cursor-pointer">
              <div className="flex items-center  w-[80%]">
                <HiSquare3Stack3D className="text-activeColor text-lg me-3" />
                <span className=" truncate  ">{selected?.name}</span>
              </div>

              <div className="pointer-events-none w-[20%] flex items-center justify-end">
                <FaAngleDown />
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categories?.map((category) => (
                  <Listbox.Option
                    key={category.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-activeColor"
                          : "text-primaryColor",
                        "relative cursor-default select-none py-1.5 pl-3 pr-9"
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {category.name}
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

export default CategoryDropDown;
