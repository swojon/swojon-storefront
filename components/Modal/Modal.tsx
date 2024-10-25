"use client";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "@/app/redux/modalSlice";
import dynamic from "next/dynamic";

import "./Modal.scss";

const DynamicSendOfferModal = dynamic(()=> import("./SendOfferModal"), {ssr: false})
const DynamicNavbarModal = dynamic(()=> import("./NavbarModal"), {ssr: false})
const DynamicStartChatModal = dynamic(()=> import("./StartChatModal"), {ssr: false})
const DynamicLoginModal = dynamic(()=> import("./LoginModal"), {ssr: false})
const DynamicSellProductModal = dynamic(()=> import("./SellProductModal"), {ssr: false})
const DynamicSuccessModal = dynamic(()=> import("./SuccessModal"), {ssr: false})
const DynamicWriteReviewModal = dynamic(()=> import("./WriteReviewModal"), {ssr: false})
const DynamicEditEmailModal = dynamic(()=> import("./EditEmailModal"), {ssr: false})
const DynamicVerificationCodeModal = dynamic(()=> import("./VerificationCodeModal"), {ssr: false})
const DynamicAdditionalDetail = dynamic(()=> import("./AdditionalDetail"), {ssr: false})
const DynamicFilterModal = dynamic(()=> import("./FilterModal"), {ssr: false})
const DynamicUploadAvatarModal = dynamic(()=> import("./UploadAvatarModal"), {ssr: false})
const DynamicSendSellerMessage = dynamic(()=> import("./SendSellerMessage"), {ssr: false})

const SENDOFFERMODAL = "sendOfferModal";
const CHATMODAL = "chatModal";
const SENDSELLERCHAT = "sendSellerModal"
const LOGINMODAL = "loginModal";
const SELLPRODUCT = "sellProduct";
const SUCCESS = "product-create-success";
const WRITEREVIEW = "writeReview";
const EDITEMAIL = "editEmail";
const VERIFYCODE = "VerifyCode";
const ADDITIONALDETAILS = "additionalDetails";
const FILTERMODAL = "filterModal";
const UPLOADIMAGEMODAL = "uploadImageModal";


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
          <div className="fixed  inset-0 bg-gray-700 bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed w-full left-0 right-0 inset-0 z-1000 overflow-y-auto ">
          {modalStack[modalStack.length - 1]?.body === "navbar" ? (
            <DynamicNavbarModal />
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
                    <DynamicFilterModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ===
                    UPLOADIMAGEMODAL && (
                    <DynamicUploadAvatarModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ===
                    SENDOFFERMODAL && (
                    <DynamicSendOfferModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === EDITEMAIL && (
                    <DynamicEditEmailModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === VERIFYCODE && (
                    <DynamicVerificationCodeModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === WRITEREVIEW && (
                    <DynamicWriteReviewModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === CHATMODAL && (
                    <DynamicStartChatModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                   {modalStack[modalStack.length - 1]?.body === SENDSELLERCHAT && (
                    <DynamicSendSellerMessage
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === SELLPRODUCT && (
                    <DynamicSellProductModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body ===
                    ADDITIONALDETAILS && (
                    <DynamicAdditionalDetail
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === SUCCESS && (
                    <DynamicSuccessModal
                      props={modalStack[modalStack.length - 1]?.props}
                    />
                  )}
                  {modalStack[modalStack.length - 1]?.body === LOGINMODAL && (
                    <DynamicLoginModal
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
