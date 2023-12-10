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
import SendOfferModal from "./SendOfferModal";
import NavbarModal from "./NavbarModal";
import StartChatModal from "./StartChatModal";
import LoginModal from "./LoginModal";
import SellProductModal from "./SellProductModal";
import SuccessModal from "./SuccessModal";
import WriteReviewModal from "./WriteReviewModal";
import EditEmailModal from "./EditEmailModal";
import EditNumberlModal from "./EditNumberlModal";
const SENDOFFERMODAL = "sendOfferModal";
const CHATMODAL = "chatModal";
const LOGINMODAL = "loginModal";
const SELLPRODUCT = "sellProduct";
const SUCCESS = "success";
const WRITEREVIEW = "writeReview";
const EDITEMAIL = "editEmail";
const EDITNUMBER = "editNumber";

export default function Modal() {
  const open = useSelector((state: any) => state.modal.open);
  const modalStack = useSelector((state: any) => state.modal.stack);

  //   const body = useSelector((state: any) => state.modal.body);
  //   const title = useSelector((state: any) => state.modal.title);

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
          {modalStack[modalStack.length - 1]?.body === "navbar" ? (
            <NavbarModal />
          ) : (
            <div className="flex min-h-full   items-center	text-center  sm:p-0 ">
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
                  className={`relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all sm:my-5 mx-auto  h-auto ${
                    modalStack[modalStack.length - 1]?.title ===
                    "Delete the information?"
                      ? "sm:w-2/6"
                      : modalStack[modalStack.length - 1]?.title ===
                        "write review modal"
                      ? "lg:w-[45%] md:w-[55%] w-[80%]"
                      : "lg:w-[35%] md:w-[55%] w-[80%]"
                  }`}
                >
                  {/* <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className={`rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100  focus:ring-offset-2 ${
                        modalStack[modalStack.length - 1]?.title ===
                        "Delete the information?"
                          ? " focus:ring-red-500"
                          : "focus:ring-indigo-500"
                      }`}
                      onClick={() => dispatch(setModalClose(true))}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div> */}

                  <div className="  sm:flex sm:items-start  w-full h-full overflow-auto form-scrollbar">
                    <div className="  w-full ">
                      {/* <Dialog.Title
                        as="h3"
                        className="text-base font-medium leading-6 text-gray-700"
                      >
                        {modalStack[modalStack.length - 1]?.title}
                      </Dialog.Title> */}
                      {modalStack[modalStack.length - 1]?.body ===
                        SENDOFFERMODAL && (
                        <SendOfferModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body ===
                        EDITEMAIL && (
                        <EditEmailModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body ===
                        EDITNUMBER && (
                        <EditNumberlModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body ===
                        WRITEREVIEW && (
                        <WriteReviewModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body ===
                        CHATMODAL && (
                        <StartChatModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body ===
                        SELLPRODUCT && (
                        <SellProductModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body === SUCCESS && (
                        <SuccessModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body ===
                        LOGINMODAL && (
                        <LoginModal
                          props={modalStack[modalStack.length - 1]?.props}
                        />
                      )}
                      {modalStack[modalStack.length - 1]?.body ? (
                        <></>
                      ) : (
                        <div className=" w-full h-full  "></div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          )}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
