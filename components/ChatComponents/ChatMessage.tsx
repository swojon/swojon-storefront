import {
  GetChatMessageQuery,
  NewMessageAddedDocument,
  useGetChatMessageQuery,
} from "@/apollograph/generated";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsInfo } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import ChatInputSend from "./ChatInputSend";
import { timeAgo } from "@/lib/helpers/timeAgo";

import ChatMessageLoader from "../Loader/ChatMessageLoader";
import { Waypoint } from "react-waypoint";
import useIsMobile from "@/lib/hooks/useIsMobile";
import {
  HiArrowLeft,
} from "react-icons/hi2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import defaultAvatar from "@/public/assets/defaultAvatar.svg";
import { useSession } from "next-auth/react";

const subscribeForMore = (subscribeToMore:any, activeChat:any) =>
  subscribeToMore({
    document: NewMessageAddedDocument,
    variables: {
      chatRoomId: activeChat?.id,
    },
    updateQuery: (
      prev: any,
      { subscriptionData }: any
    ) => {
      if (!subscriptionData.data) return prev;
      // const { mutation, node } = subscriptionData.data.Message.node;
      console.log("updating..", )
      if (prev.listChatMessages.items.find((item:any) => item.id == subscriptionData.data.newMessageAdded.id)){
        return prev
      }
      // console.log(node)
      // if (mutation !== 'CREATED') return prev;
      return Object.assign({}, prev, {
        ...prev,
        listChatMessages: {
          ...prev.listChatMessages,
          items: [subscriptionData.data.newMessageAdded, ...prev.listChatMessages.items],
        },
      });
    },
  });

const ChatMessage = ({
  sideProfile,
  setSideProfile,
  chatRoom,
}: {
  sideProfile: any;
  setSideProfile: any;
  chatRoom: any;
}) => {

  const activeChat = chatRoom;

  const { data, loading, error, subscribeToMore, fetchMore } =
    useGetChatMessageQuery({
      variables: {
        chatRoomId: activeChat?.id,
        limit: 20,
      },
      skip: !activeChat,
    });

  
  // const chatMessages = activeChatWithMessages.find((chat) => chat.id === activeChat.id)
  // const messages = chatMessages?.messages;
  if (loading) {
    return (
      <>
        <ChatMessageLoader />
      </>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <MessageAreaData
      sideProfile={sideProfile}
      fetchMore={fetchMore}
      setSideProfile={setSideProfile}
      data={data!}
      subscribeToMore={subscribeToMore}
      activeChat={activeChat}
    />
  );
};

const MessageAreaData = ({
  data,
  fetchMore,
  subscribeToMore,
  setSideProfile,
  sideProfile,
  activeChat,
}: {
  data: GetChatMessageQuery;
  fetchMore: any;
  subscribeToMore: any;
  sideProfile: any;
  setSideProfile: any;
  activeChat: any;
}) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  // const authState = useSelector((state: any) => state.auth);
  const {data: session} = useSession();
  // const activeChat = useSelector((state: any) => state.chat.activeChatRoom);
  const isMobile = useIsMobile();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Function to keep the chat scroll at the bottom
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    subscribeForMore(subscribeToMore, activeChat);
    scrollToBottom();
  }, [data.listChatMessages.items]);

  const messages = data?.listChatMessages?.items.slice().reverse();
  const handleInfoIconClick = () => {
    if (isMobile) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("expand", "info");
      router.push(pathname + "?" + params.toString());
    } else setSideProfile("profile");
  };

  const handleLeftArrowIconClick = () => {
    if (isMobile) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("expand", "list");
      !!params.toString()
        ? router.push(pathname + "?" + params.toString())
        : router.push(pathname);
    }
  };
  const participants = activeChat?.members?.filter(
    (crm: any) => crm.userId !== session?.user?.id
  );


  return (
    <section className="h-full w-full relative border-l">
      <div className="sticky top-0 left-0 h-14 px-3  w-full flex justify-between items-center gap-2">
        {isMobile && (
          <button
            className="p-1.5 border border-secondColor me-1 rounded-md block "
            onClick={handleLeftArrowIconClick}
          >
            <HiArrowLeft className="text-primaryColor" />
          </button>
        )}{" "}
        <div className="flex items-center gap-2 sm:w-auto w-[70%] ">
          <div className="sm:w-8 w-5 sm:h-8 rounded-full ">
            {participants?.map((m: any) => (
              <Image
                key={m.user.id}
                src={m.user?.profile?.avatar ?? defaultAvatar}
                alt="user"
                width={100}
                height={100}
                className="w-ful h-full object-cover rounded-full"
              />
            ))}
          </div>
          <div className="pr-3 space-y-1 truncate ">
            <span className="text-sm text-primaryColor font-medium truncate ">
              {participants
                ?.map((m: any) => m.user?.username ?? m.user?.profile?.name ?? m.user?.email.split("@")[0])
                .join(",") ?? activeChat?.chatName}
            </span>
            <div className="flex items-center space-x-1">
              <span className=" right-0 bottom-0 w-2 h-2 rounded-full bg-green-400"></span>
              <p className="text-xs text-secondColor">Active Now</p>
            </div>
          </div>
        </div>
        <button
          // className="text-lg cursor-pointer block "
          className="p-1.5 border border-secondColor me-1 rounded-md  "
          onClick={handleInfoIconClick}
        >
          <BsInfo />
        </button>
      </div>
      {/* Related Product State */}
      {activeChat.relatedListing && (
        <div className="sticky h-24 border bg-[#F1F7FF] px-3 flex space-x-3 items-center">
          <div className="h-20 w-32 border rounded-md ">
            <Image
              src={
                activeChat.relatedListing.media
                  ? activeChat.relatedListing.media[0]?.url
                  : "/assets/pro2.png"
              }
              alt="product"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="">
            <h5 className="font-lexed text-primaryColor text-lg font-medium">
              {activeChat.relatedListing?.title}
            </h5>
            {/* <div className="flex items-center space-x-1">
            <MdLocationPin className="text-activeColor" />
            <span className="block text-secondColor text-sm">
              Fatehpur, Hathazari, Chattogram
            </span>
          </div> */}
            <span className="text-activeColor text-base font-lexed font-medium pt-1">
              TK, {activeChat.relatedListing?.price}
            </span>
          </div>
        </div>
      )}
      <div
        className={` px-3 mb-3 flex items-end  w-full relative overflow-y-auto scroll-hover2 ${
          activeChat.relatedListing ? "chatBox" : "chatBox2"
        }`}
        ref={chatContainerRef}
      >
        <div className="max-h-full w-full space-y-3 ">
          {data.listChatMessages.hasMore && (
            <Waypoint
              onEnter={() => {
                console.log("Fetchin waypoint")
                fetchMore({
                  variables: {
                    limit: 20,
                    startingAfter: data?.listChatMessages.afterCursor,
                  },
                  updateQuery: (prev: any, { fetchMoreResult }: any) => {
                    if (!fetchMoreResult.listChatMessages.items) return prev;

                    return {
                      listChatMessages: {
                        ...prev.listChatMessages,
                        items: [
                          ...prev.listChatMessages.items,
                          ...fetchMoreResult.listChatMessages.items,
                        ],
                        hasMore: fetchMoreResult.listChatMessages.hasMore,
                      },
                    };
                  },
                });
              }}
            />
          )}
          {messages.map((msg) => (
            <MessageDetail msg={msg} key={msg.id} />
          ))}
          {/* <div className="w-full flex justify-end">
            <AdStartConversation />
          </div> */}
        </div>
      </div>

      <ChatInputSend activeChat={activeChat} />
    </section>
  );
};
const MessageDetail = ({ msg }: { msg: any }) => {
  const {data:session, status} = useSession();
  if (msg.sender.id === session?.user?.id)
    return (
      <div className="relative w-full flex justify-end items-start  pb-3.5">
        <div className="md:w-1/2 w-full flex justify-end px-2  relative ">
          <span className="p-2 inline-block bg-activeColor text-white text-sm rounded-md rounded-br-none">
            {msg.content}
          </span>
          <span className="absolute right-2 -bottom-4 text-[#979696] text-xs block">
            {timeAgo(msg.dateSent)}
          </span>
        </div>
      </div>
    );
  else
    return (
      <div className="relative w-full flex justify-start pb-1">
        <div className="md:w-1/2 w-full flex justify-start items-start p-2 gap-2 mb-1 ">
          <div className="sm:w-9 sm:h-8 w-4 rounded-full">
            <Image
              src={msg.sender?.profile?.avatar ?? defaultAvatar}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full"
              alt="user"
            />
          </div>
          <div className="relative w-full">
            <p className="p-2  bg-[#F1F7FF] text-primaryColor text-sm rounded-md rounded-bl-none inline-block">
              {msg.content}
            </p>
            <span className="absolute left-0 -bottom-5 text-[#979696] text-xs block">
              {timeAgo(msg.dateSent)}
            </span>
          </div>
        </div>
      </div>
    );
};

export default ChatMessage;
