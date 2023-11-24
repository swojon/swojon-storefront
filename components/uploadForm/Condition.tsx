import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";

const condition = [
  { id: 4, name: "Brand new" },
  { id: 1, name: "Like new" },
  { id: 2, name: "Used" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Condition = ({
  values,
  setFieldValue,
}: {
  values: any;
  setFieldValue: any;
}) => {
  const [selected, setSelected] = useState("Used");
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {condition.map((item) => (

          <div
            onClick={() => setSelected(item.name)}
            className={`border p-2 rounded-2xl text-sm capitalize text-secondColor cursor-pointer hover:border-primaryColor ${classNames(item.name === selected ? "border-primaryColor" : " ")}`}
            key={item.id}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* <div className="pt-3">
        <label
          htmlFor="brand"
          className="block text-xs font-lexed pb-2 text-secondColor"
        >
          Notes on condition (Optional)
        </label>
        <textarea
          id="optional"
          name="optional"
          rows={4}
          className="block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm"
          defaultValue={""}
          placeholder="Details about the condition"
        />
      </div> */}
    </>
  );
};

export default Condition;
