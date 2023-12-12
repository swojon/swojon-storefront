"use client";
import { Fragment, ReactNode, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "@/app/redux/modalSlice";

import "./Modal.scss";


export default function DynamicModal({children}: {children: any}) {
  const open = useSelector((state: any) => state.modal.open);
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[1500]"
        onClose={() => dispatch(setModalClose(true))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed inset-0 z-1000 overflow-y-auto ">
            {children}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
