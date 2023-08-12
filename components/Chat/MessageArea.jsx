"use client";
import React, { useState } from "react";
import ChatBoxFooter from "./ChatboxFooter";
import DetailsMessage from "./DetailsMessage";
import ChatInputSend from "./ChatInputSend";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import NoActiveChat from "./NoActiveChat";
import { NewMessageAddedDocument, useGetChatMessageQuery } from "@/apollograph/generated";

let nextId = 1;

const MessageArea = () => {
  const activeChat = useSelector((state) => state.chat.activeChatRoom);

  const {data, loading, error, subscribeToMore } = useGetChatMessageQuery({
    variables: {
      chatRoomId: activeChat
    },
    skip: !activeChat,
  })

  const more = () => subscribeToMore({
    document: NewMessageAddedDocument ,
    variables: {
      chatRoomId: activeChat
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      console.log(subscriptionData.data)
      console.log("previous data", prev)
    
      // const { mutation, node } = subscriptionData.data.Message.node;

      // console.log(node)
      // if (mutation !== 'CREATED') return prev;
      return Object.assign({}, prev, {
        listChatMessages: {
          items: [subscriptionData.data, ...prev.listChatMessages.items],
        }
      });
    },
  });

  if (!activeChat) {
    return (<NoActiveChat />)
  }

  // const chatMessages = activeChatWithMessages.find((chat) => chat.id === activeChat.id)
  // const messages = chatMessages?.messages;
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <MessageAreaData data={data}  subscribeToMore={more}/>
  );
};

const MessageAreaData = ({data, subscribeToMore}) => {
  useEffect(() => {
    subscribeToMore()
  }, [])

  return (
<div
  className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
>
  <div className="flex flex-col h-full overflow-x-auto mb-4">
    <div className="flex flex-col h-full">
     
      <div className="grid grid-12 gap-y-1">
      {data.listChatMessages.items.map(msg => (
        <DetailsMessage msg={msg} key={msg.key} />
      ))}
       
      </div>
    </div>
  </div>
  <div
    className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
  >
    <ChatInputSend />
  </div>
</div>

)
}
export default MessageArea;

