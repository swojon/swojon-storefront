import Image from "next/image";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "@/app/redux/modalSlice";

const reason = [
  { id: 1, name: "Sold out" },
  { id: 2, name: "Not available" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const RemoveItem = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(reason[0]);
  return (
    <section className="lg:w-[30%] md:w-[45%] sm:w-[55%] w-[80%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 py-8 px-5 relative">
      <div className="flex justify-center">
        <Image
          src="/assets/close.png"
          alt="close"
          width={400}
          height={400}
          className="w-[50px]"
        />
      </div>

      <h6 className="text-lg lg:text-xl font-semibold text-primaryColor text-center">
        Do you want to remove the item!!
      </h6>

      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-base font-medium text-gray-700 text-center">
              Select why you want to remove it?
            </Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-activeColor focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm">
                <span className="block truncate font-bold text-primaryColor">
                  {selected.name}
                </span>
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
                <Listbox.Options className="absolute z-10 mt-1 max-h-[130px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {reason.map((reason) => (
                    <Listbox.Option
                      key={reason.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "text-white bg-activeColor"
                            : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={reason}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold " : "font-normal",
                              "block truncate "
                            )}
                          >
                            {reason.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-activeColor",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
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

      <div className="pt-16 flex justify-center gap-4">
        <button
          onClick={() => dispatch(setModalClose(true))}
          className="py-2 px-5 font-bold rounded-md text-primaryColor bg-gray-200 text-base"
        >
          Cancel
        </button>
        <button className="py-2 px-5 font-bold rounded-md text-white bg-activeColor text-base">
          Confirm
        </button>
      </div>
    </section>
  );
};

export default RemoveItem;
