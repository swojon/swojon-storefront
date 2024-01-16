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

      <p className="whitespace-pre-line text-base text-justify text-secondColor py-2.5  ">
        {props?.description}
      </p>
    </section>
  );
};

export default AdditionalDetail;
