"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const OtherInfo = ({ listing }: { listing: any }) => {
  const productId = { id: listing.id };
  const router = useRouter();
  const handleUpdateInfo = () => {
    console.log("info", listing);
    const myProduct = listing;
    router.push(
      {
        pathname: "upload-product",
        query: { data: JSON.stringify(myProduct) },
      } as any
      // use this to clear query strings like key value from URL
    );
  };

  const checkConsole = () => {
    console.log(listing);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-full bg-white text-primaryColor  focus:outline-none ">
          <span className="sr-only">Open options</span>
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={{
                    pathname: "/upload-product",
                    query: { productId: JSON.stringify(productId) },
                  }}
                  // onClick={handleUpdateInfo}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-1.5 text-sm"
                  )}
                >
                  Update
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  onClick={checkConsole}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-1.5 text-sm"
                  )}
                >
                  Remove
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-1.5 text-sm"
                  )}
                >
                  Marked as sold
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default OtherInfo;
