import { setModalClose } from "@/app/redux/modalSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const AdditionalDetail = ({ props }: { props: any }) => {
  const dispatch = useDispatch();
  return (
    <section className="lg:w-[30%] md:w-[45%] sm:w-[55%] w-[85%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 py-7 px-5 relative ">
      <div className="flex justify-between items-center">
        <h6 className="md:text-2xl text-xl font-lexed font-bold text-primaryColor ">
          More about {props?.title}
        </h6>
        <button
          className="text-2xl text-primaryColor "
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>

      <pre style={{
        whiteSpace: "pre-wrap",
        overflowY: 'auto',
        maxHeight: '400px',
        wordBreak: "keep-all"
      }} className="font-lexed text-base text-justify text-primaryColor py-2.5 scrollbar-none scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
        {props?.description}
        </pre>
    </section>
  );
};

export default AdditionalDetail;
