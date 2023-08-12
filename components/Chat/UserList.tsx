"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useListChatsQuery } from "@/apollograph/generated";
import { useDispatch, useSelector } from "react-redux";
import { ChatRoom, getChatRoomWithMessageAsync, setActiveChatRoom } from "@/app/redux/chatSlice";
import { ChatRoomWithMessage } from "@/gql/graphql";
// import { useListChatsQuery } from "@/urqlgraph/generated";

interface Props {
  chatRooms: ChatRoom[]
}
export default function ListUsers({chatRooms}:Props) {

  // const chatRooms = useSelector((state:any) => state.chat.chatRooms)
  const dispatch = useDispatch()

  console.log(chatRooms)

  if (!chatRooms) {
    return <div>No Chat Rooms...</div>;
  }
  console.log("chatRooms", chatRooms)
 
  return (
    <>
      {chatRooms && chatRooms.map((item:ChatRoomWithMessage) => (
        <div className="flex flex-row items-center h-12 w-full">
        <button onClick={e => dispatch(setActiveChatRoom(item.id))} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2" key={item.id}>
          <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
              {item.chatName!.charAt(0)}
          </div>
          <div className="">
            <div className="flex ml-2 text-sm font-semibold">{item.chatName}</div>
            <div className="flex ml-2 text-[13px]">{item.messages!.slice(-1)[0]? item.messages!.slice(-1)[0].content: ""}, · 24 Mar</div>
          </div>
         
        </button>
        </div>
      ))}
    </>
  );
};

