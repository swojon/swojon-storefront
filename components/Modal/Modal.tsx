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
import VerificationCodeModal from "./VerificationCodeModal";
import AdditionalDetail from "./AdditionalDetail";
import FilterModal from "./FilterModal";
import UploadAvatarModal from "./UploadAvatarModal";
import RemoveItem from "./RemoveItem";
const SENDOFFERMODAL = "sendOfferModal";
const CHATMODAL = "chatModal";
const LOGINMODAL = "loginModal";
const SELLPRODUCT = "sellProduct";
const SUCCESS = "product-create-success";
const WRITEREVIEW = "writeReview";
const EDITEMAIL = "editEmail";
const VERIFYCODE = "VerifyCode";
const ADDITIONALDETAILS = "additionalDetails";
const FILTERMODAL = "filterModal";
const UPLOADIMAGEMODAL = "uploadImageModal";
const REMOVEITEMMODAL = "removeItemModal";

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
        className="relative z-[15000] "
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
          <div
            // onClose={() => dispatch(setModalClose(true))}
            className="fixed  inset-0 bg-gray-700 bg-opacity-75 transition-opacity "
          />
        </Transition.Child>

        <div className="fixed w-full left-0 right-0 inset-0 z-1000 overflow-y-auto ">
          {modalStack[modalStack.length - 1]?.body === "navbar" ? (
            <NavbarModal />
          ) : (
            <div className="flex min-h-full   items-center	 sm:p-0 custom-container">
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
                  className={`relative transform overflow-hidden    transition-all sm:my-5 mx-auto max-h-[90dvh] h-auto 
             w-full
                  `}
                >
                  {/*      ${
                    modalStack[modalStack.length - 1]?.title ===
                    "Delete the information?"
                      ? "sm:w-2/6"
                      : modalStack[modalStack.length - 1]?.title ===
                        "write review modal"
                      ? "lg:w-[40%] md:w-[55%] w-[80%]"
                      : "lg:w-[32%] md:w-[55%] w-[80%]"
                  } */}

                  {/* <Dialog.Title
                        as="h3"
                        className="text-base font-medium leading-6 text-gray-700"
                      >
                        {modalStack[modalStack.length - 1]?.title}
                      </Dialog.Title> */}
                  {modalStack[modalStack.length - 1]?.body === FILTERMODAL && (
                    <FilterModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ===
                    UPLOADIMAGEMODAL && (
                    <UploadAvatarModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ===
                    SENDOFFERMODAL && (
                    <SendOfferModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === EDITEMAIL && (
                    <EditEmailModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ===
                    REMOVEITEMMODAL && (
                    <RemoveItem
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === VERIFYCODE && (
                    <VerificationCodeModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === WRITEREVIEW && (
                    <WriteReviewModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === CHATMODAL && (
                    <StartChatModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === SELLPRODUCT && (
                    <SellProductModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ===
                    ADDITIONALDETAILS && (
                    <AdditionalDetail
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === SUCCESS && (
                    <SuccessModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === LOGINMODAL && (
                    <LoginModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ? (
                    <></>
                  ) : (
                    <div className=" w-full h-full  "></div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          )}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
