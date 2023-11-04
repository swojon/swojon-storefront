import { setModalClose, setModalOpen } from "@/app/redux/modalSlice";
import Image from "next/image";
import React from "react";
import { FiPaperclip } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

function ChatModal({ props }: { props: any }) {
  const dispatch = useDispatch();

  return (
    <section className="  w-full h-full  space-y-3 lg:space-y-4 pb-4">
      <div className="flex justify-between p-4 bg-[#F1F7FF] items-center">
        <h5 className="font-lexed text-base lg:text-lg text-primaryColor">
          Chat with Mr. Ananta Jalil
        </h5>
        <button
          className="rounded-full bg-activeColor p-1 border  text-white"
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>

      <div className="flex items-center gap-2 px-4">
        <div className="w-24 h-16 rounded-md">
          <Image
            src="/assets/pro4.png"
            alt="product"
            width="500"
            height="500"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h5 className="font-lexed text-primaryColor xl:text-lg text-base font-medium">
            Partex Personal Bed
          </h5>
          <p className="text-activeColor xl:text-base text-sm">TK 1,230.00</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center px-4">
        <div className="p-2 text-xs rounded-lg bg-[#F1F7FF]">
          <span>I’m interested in this item.</span>
        </div>
        <div className="p-2 text-xs rounded-lg bg-[#F1F7FF]">
          <span>Is this item still available?</span>
        </div>
        <div className="p-2 text-xs rounded-lg bg-[#F1F7FF]">
          <span>What condition is this item in?</span>
        </div>
        <div className="p-2 text-xs rounded-lg bg-[#F1F7FF]">
          <span>Do you deliver?</span>
        </div>
        <div className="p-2 text-xs rounded-lg bg-[#F1F7FF]">
          <span>Is this authentic?</span>
        </div>
      </div>

      <div className="rounded-lg  min-h-[150px] bg-[#F1F7FF] mx-4 relative">
        <div className="absolute  bottom-0 left-0 h-14 px-3  w-full  flex items-center space-x-2">
          <div className=" flex rounded-lg shadow-sm w-full">
            <input
              type="text"
              name="company-website"
              id="company-website"
              className="block w-full min-w-0 flex-1  rounded-lg border border-gray-300 px-3 py-2 focus:border-activeColor focus:ring-activeColor sm:text-sm"
              placeholder="Please type your message to the seller..."
            />
          </div>
          <button className="p-1 rounded-full bg-activeColor">
            <Image src="/assets/Send.png" alt="plane" width={30} height={30} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatModal;