import { setModalClose } from "@/app/redux/modalSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const AdditionalDetail = ({ props }: { props: any }) => {
  const dispatch = useDispatch();
  return (
    <section className="lg:w-[30%] md:w-[45%] sm:w-[55%] w-[85%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 py-7 px-5 relative">
      <div className="flex justify-between items-center">
        <h6 className="md:text-2xl text-xl font-lexed font-bold text-primaryColor ">
          Additional Details
        </h6>
        <button
          className="text-2xl text-primaryColor "
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>

      <p className="text-base text-justify text-primaryColor py-2.5  ">
        {props?.description}
      </p>
    </section>
  );
};

export default AdditionalDetail;
