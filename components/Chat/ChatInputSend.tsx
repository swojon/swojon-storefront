"use client";
import React, { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GetChatMessageDocument, useGetChatMessageQuery, useSendChatMessageMutation } from "@/apollograph/generated";
import { useSelector } from "react-redux";

const schema = Yup.object().shape({
    msgText: Yup.string().required(),
});


let nextId = 1;
interface Iprop {
    disMsg: {
        id: Number,
        msg: String
    }[],
    setDisMsg: React.Dispatch<React.SetStateAction<{ id: Number, msg: String }[]>>
}


const ChatInputSend = () => {
    const[sendChatMessage, {data, loading, error}] = useSendChatMessageMutation()
    
    const activeChat = useSelector((state:any) => state.chat.activeChatRoom);

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
                    input :{
                        message: msgText,
                        chatRoomId: activeChat
                    } 
                }
                // update: (cache, {data}) => {
                //     const {listChatMessages}:any = cache.readQuery({
                //         query: GetChatMessageDocument,
                //         variables: {
                //             chatRoomId: activeChat
                //         }})
                //     console.log("list Chat Message", listChatMessages)
                //     cache.writeQuery({
                //         query: GetChatMessageDocument,
                //         variables: {
                //             chatRoomId: activeChat
                //         },
                //         data : {
                //             listChatMessages: {
                //                 items: [...listChatMessages.items, data?.sendChatMessage]
                //             }
                //         }
                //     })
                // }
            
            }
)
                
                
            // setDisMsg([...disMsg, { id: nextId++, msg: msgText }])
            //set the form to its initial state
            formik.resetForm();
        },



    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    const handleSendButton = (e:any) => {
        handleSubmit()
    }


    return (
        <>

            <div>
                <button
                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="2"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="flex-grow ml-4">
                <div className="relative w-full">
                    <form onSubmit={handleSubmit} id="MessageInputForm">
                    <input
                        type="text"
                        id="msgText"
                        name="msgText"
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        value={values.msgText}
                    />
                    </form>
                   
                    <button
                        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    </button>
                    
                </div>
            </div>
            <div className="ml-4">
                <button
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    type="submit"
                    form="MessageInputForm"
                >
                    <span>Send</span>
                    <span className="ml-2">
                        <svg
                            className="w-4 h-4 transform rotate-45 -mt-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                        </svg>
                    </span>
                </button>
            </div>


        </>
    )
}

export default ChatInputSend;