import { setModalClose } from "@/app/redux/modalSlice";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const EditNumberlModal = ({props}: {props: any}) => {
  const dispatch = useDispatch();
  return (
    <section className="w-full h-full  space-y-3 lg:space-y-4 p-5 relative">
      <button
        className="rounded-full bg-activeColor p-1 border  text-white absolute right-2 top-2"
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>
      <h6 className="text-2xl font-lexed font-medium text-primaryColor text-center">
        Enter verification code
      </h6>

      <div className="text-sm  text-secondColor text-center">
        <span className="block">We sent a verification code to: </span>
        <span>mousumitu@gmail.com</span>
      </div>

      <div className=" flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            className="block w-full rounded-none rounded-l-md border border-gray-300 pl-3 focus:outline-none focus:border-activeColor focus:ring-activeColor text-sm bg-gray-50"
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700   focus:outline-none "
        >
          resend
        </button>
      </div>

      <button className="whitespace-nowrap border border-activeColor py-2 px-2 rounded bg-activeColor text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs hover:shadow-lg  font-lexed font-medium shadow-md text-center w-full">
        Submit code
      </button>
      <button className="whitespace-nowrap   px-2 rounded  text-activeColor relative  transition ease-in-out delay-150 duration-300 xl:text-sm text-xs   font-lexed font-medium  text-center w-full">
        Cancel
      </button>
    </section>
  );
};

export default EditNumberlModal;
