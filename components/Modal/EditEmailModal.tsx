import { setModalClose } from "@/app/redux/modalSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const EditEmailModal = ({ props }: { props: any }) => {
  const dispatch = useDispatch();
  return (
    <section className=" lg:w-[30%] md:w-[45%] sm:w-[55%] w-[80%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 py-7 px-5 relative">
      <button
        className="rounded-full bg-activeColor p-1 border  text-white absolute right-2 top-2"
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>
      <h6 className="text-2xl font-lexed font-medium text-primaryColor text-center">
        Edit Email
      </h6>

      <p className="text-sm text-secondColor py-2.5 w-[75%] mx-auto text-center">
        We’ll email you a code to verify your email address for security
        purposes.
      </p>
      <button className="whitespace-nowrap border border-activeColor py-2 px-2 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg  font-lexed font-medium shadow-md text-center w-full">
        Email me
      </button>
    </section>
  );
};

export default EditEmailModal;
