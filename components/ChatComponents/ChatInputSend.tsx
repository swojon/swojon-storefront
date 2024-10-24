"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useSendChatMessageMutation,
} from "@/apollograph/generated";
import { useSelector } from "react-redux";
import { FiPaperclip } from "react-icons/fi";
import Image from "next/image";

const schema = Yup.object().shape({
  msgText: Yup.string().required(),
});


interface Iprop {
  disMsg: {
    id: Number;
    msg: String;
  }[];
  setDisMsg: React.Dispatch<
    React.SetStateAction<{ id: Number; msg: String }[]>
  >;
}

const ChatInputSend = ({
  activeChat
}: {activeChat: any}) => {
  const [sendChatMessage, { data, loading, error }] =
    useSendChatMessageMutation();

  // const activeChat = useSelector((state: any) => state.chat.activeChatRoom);
  const authState = useSelector((state: any) => state.auth);
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      msgText: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: ({ msgText }) => {
      // Make a request to your backend to store the data
      sendChatMessage({
        variables: {
          input: {
            message: msgText,
            chatRoomId: activeChat.id,
            senderId: authState.user.id,
          },
        },
        // update: (cache, {data}) => {
        //     const {listChatMessages}:any = cache.readQuery({
        //         query: GetChatMessageDocument,
        //         variables: {
        //             chatRoomId: activeChat.id
        //         }})
        //     // console.log("list Chat Message", listChatMessages)
        //     cache.writeQuery({
        //         query: GetChatMessageDocument,
        //         variables: {
        //             chatRoomId: activeChat.id
        //         },
        //         data : {
        //             listChatMessages: {
        //                 items: [...listChatMessages.items, data?.sendChatMessage]
        //             }
        //         }
        //     })
        // }
        // refetchQueries: [
        //   useGetChatMessageQuery({
        //     variables: {
        //       chatRoomId: activeChat?.id,
        //       limit: 20,
        //     },
        //     skip: !activeChat,
        //   });   
        // ]
      });

      // setDisMsg([...disMsg, { id: nextId++, msg: msgText }])
      //set the form to its initial state
      formik.resetForm();
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("sending messages")
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSendButton = (e: any) => {
    handleSubmit();
  };

  return (
    <form onSubmit={handleSubmit} id="MessageInputForm">
      <div className="absolute  bottom-0 left-0 h-14 px-3 border-t w-full bg-[#F1F7FF] flex items-center space-x-2">
        <div className=" flex rounded-lg shadow-sm w-full">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
            <FiPaperclip />
          </span>

          <input
            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-activeColor focus:ring-activeColor text-base"
            placeholder="Please type your message"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={values.msgText}
            type="text"
            id="msgText"
            name="msgText"
          />
        </div>

        <button
          type="submit"
          form="MessageInputForm"
          className="p-1 rounded-full bg-activeColor"
        >
          <Image src="/assets/Send.png" alt="plane" width={30} height={30} />
        </button>
      </div>
    </form>
  );
};

export default ChatInputSend;
