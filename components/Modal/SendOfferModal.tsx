import { setModalClose, setModalOpen } from "@/app/redux/modalSlice";
import Image from "next/image";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function SendOfferModal({ props }: { props: any }) {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);

  return (
    <section className="  w-full h-full  space-y-3 lg:space-y-4 p-4">
      <div className="w-full h-[140px]  relative">
        <Image
          src="/assets/pro4.png"
          alt="product"
          width="500"
          height="500"
          className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
        />
        <button
          className="absolute right-0 top-0 rounded-full bg-activeColor p-1 border  text-white"
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>
      <div>
        <h5 className="font-lexed text-primaryColor xl:text-lg text-base font-medium">
          Partex Personal Bed
        </h5>
        <p className="text-secondColor xl:text-base text-sm">
          Offer a reasonable fare
        </p>
      </div>

      <div>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor sm:text-sm p-2.5"
          placeholder="Enter your offer"
        />
        <div className="flex flex-wrap gap-2 pt-2">
          <button className="border border-activeColor px-1 py-0.5 text-activeColor rounded">
            <span className="text-xs">TK 4000</span>
          </button>
          <button className="border border-activeColor px-1 py-0.5 text-activeColor rounded">
            <span className="text-xs">TK 5000</span>
          </button>
          <button className="border border-activeColor px-1 py-0.5 text-activeColor rounded">
            <span className="text-xs">TK 6000</span>
          </button>
          <button className="border border-activeColor px-1 py-0.5 text-activeColor rounded">
            <span className="text-xs">TK 9000</span>
          </button>
        </div>
      </div>

      {authState.isAuthenticated === false ? (
        <button
          className="bg-[#C0C0C0] w-full py-2 text-primaryColor rounded font-medium text-center"
          onClick={() =>
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "loginModal",
              })
            )
          }
        >
          <span className="text-sm">Login to Continue</span>
        </button>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-[#C0C0C0] w-full py-2 text-primaryColor rounded font-medium text-center">
            <span className="text-sm">Cancel</span>
          </button>
          <button className="bg-[#C0C0C0] w-full py-2 text-white rounded font-medium text-center">
            <span className="text-sm">Send offer</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default SendOfferModal;
