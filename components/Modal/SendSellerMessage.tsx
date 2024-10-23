import { useSendChatMessageMutation } from "@/apollograph/generated";
import { setModalClose, setModalOpen } from "@/app/redux/modalSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function SendSellerMessage({ props }: { props: any }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleButtonClick = (link: string) => {
    dispatch(setModalClose(true));
    router.push(link);
  };
  const authState = useSelector((state: any) => state.auth);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [sendChatMessage, { data, loading, error }] =
    useSendChatMessageMutation();

  const handleChange = (e: any) => {
    setMessage(e.target.value);
    if (e.target.value.length > 0 && disabled) {
      console.log("disabled button enable");
      setDisabled(false);
    }
  };

  const handleChatSend = () => {
    if (!message) {
      toast.error("A message can't be empty");
    } else {
      if (!authState.user.id) {
        console.log("Please login before sending the message");
      } else {
        setDisabled(true);
        sendChatMessage({
          variables: {
            input: {
              message: message,
              senderId: authState.user.id,
              receiverId: props.seller.id,
            },
          },
          onCompleted: () => {
            toast.success("Message sent successfully");
            setMessage("");
            setDisabled(true);
            dispatch(setModalClose(true));
          },
          onError: () => {
            toast.error("Failed to send message. Please try again");
            setDisabled(false);
          },
        });
      }
    }
  };

  return (
    <section className="lg:w-[38%] md:w-[45%] sm:w-[55%] w-[90%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 pb-5  relative">
      <div className="flex justify-between p-5 bg-[#F1F7FF] items-center rounded-t-md">
        <h5 className="font-lexed text-base lg:text-lg text-primaryColor">
          Chat with {props.seller.username ?? props.seller.email}
        </h5>
        <button
          className="rounded-full bg-activeColor p-1 border  text-white"
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 items-center px-5">
        <div className="p-2 text-sm rounded-lg bg-[#F1F7FF]">
          <span onClick={() => setMessage("Are you available for a quick chat?")}>
            Are you available for a quick chat?.
          </span>
        </div>
        <div className="p-2 text-sm rounded-lg bg-[#F1F7FF]">
          <span onClick={() => setMessage("Hello There.")}>
            Hello There.
          </span>
        </div>
       
      </div>

      <div className="rounded-lg  min-h-[150px] bg-[#F1F7FF] mx-5  relative">
        <div className="absolute  bottom-0 left-0 h-14 px-3  w-full  flex items-center space-x-2">
          {authState.user ? (
            <>
              {props.seller.id !== authState.user?.id ? (
                <>
                  <div className=" flex rounded-lg shadow-sm w-full">
                    <input
                      onChange={handleChange}
                      type="text"
                      value={message}
                      name="company-website"
                      id="company-website"
                      className="block w-full min-w-0 flex-1  rounded-lg border border-gray-300 px-3 py-2 focus:border-activeColor focus:ring-activeColor sm:text-sm"
                      placeholder="Please type your message to the seller..."
                    />
                  </div>
                  <button
                    onClick={handleChatSend}
                    disabled={disabled}
                    className="p-1 rounded-full bg-activeColor"
                  >
                    {loading ? (
                      <BiLoaderCircle className="text-white text-xl animate-spin" />
                    ) : (
                      <Image
                        src="/assets/Send.png"
                        alt="plane"
                        width={30}
                        height={30}
                      />
                    )}
                  </button>
                </>
              ) : (
                <div className="flex rounded-lg shadow-sm w-full">
                  <input
                    onChange={handleChange}
                    type="text"
                    value={message}
                    disabled
                    name="company-website"
                    id="company-website"
                    className="block w-full min-w-0 flex-1  rounded-lg border border-gray-300 px-3 py-2 focus:border-activeColor focus:ring-activeColor sm:text-sm"
                    placeholder="you can't literally send message to you :)"
                  />
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => handleButtonClick("/login")}
              className="w-full text-center py-2 md:text-base text-sm font-bold bg-activeColor text-white rounded-md"
            >
              Login to Continue
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default SendSellerMessage;
