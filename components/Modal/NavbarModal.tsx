"use client";
import { Fragment, ReactNode, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "@/app/redux/modalSlice";

const NavbarModal = () => {
  const open = useSelector((state: any) => state.modal.open);
  const modalStack = useSelector((state: any) => state.modal.stack);

  //   const body = useSelector((state: any) => state.modal.body);
  //   const title = useSelector((state: any) => state.modal.title);

  const dispatch = useDispatch();

  const cancelButtonRef = useRef(null);
  return (
    <div className="border border-red-100 min-h-screen   	 p-4 text-center  sm:p-0 ">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <Dialog.Panel
          className={`relative transform overflow-hidden rounded-lg bg-white   pb-4 text-left shadow-xl transition-all sm:my-5   h-auto `}
        >
          <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
            <button
              type="button"
              className={`rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100  focus:ring-offset-2 }`}
              onClick={() => dispatch(setModalClose(true))}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div>hello there</div>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  );
};

export default NavbarModal;
