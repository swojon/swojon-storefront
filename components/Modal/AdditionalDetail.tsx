import { setModalClose } from "@/app/redux/modalSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const AdditionalDetail = ({props}: {props:any}) => {
  const dispatch = useDispatch();
  return (
    <section className="w-full h-full  space-y-3 lg:space-y-4 p-7 relative">
      <div className="flex justify-between items-center">
        <h6 className="text-2xl font-lexed font-bold text-primaryColor ">
          Additional Details
        </h6>
        <button
          className="text-2xl text-primaryColor "
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>

      <p className="text-base text-justify text-secondColor py-2.5  ">
        Unveiling the S22 Ultra a true masterpiece of mobile technology that
        redefines the boundaries of innovation. With an exquisite blend of
        sophisticated design and unparalleled performance, this flagship device
        is a testament to precision engineering. Immerse yourself in the
        brilliance of an expansive, crystal-clear display that brings every
        detail to life. The S22 Ultra is not just a phone; its a photography
        powerhouse with a revolutionary camera system that captures moments with
        astonishing clarity and creativity. Powered by cutting-edge processors,
        it effortlessly handles multitasking and resource-intensive
        applications, delivering a seamless and lightning-fast user experience.
        Elevate your connectivity with 5G capabilities, and revel in a world of
        possibilities at your fingertips. The S22 Ultra where elegance meets
        extraordinary functionality, setting a new standard for premium
        smartphones.
      </p>
    </section>
  );
};

export default AdditionalDetail;
