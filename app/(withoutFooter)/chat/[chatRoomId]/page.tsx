"use client";
import { useGetChatRoomQuery } from "@/apollograph/generated";
import ChatMessageArea from "@/components/ChatComponents/ChatMessageArea";
import ChatUserProfile from "@/components/ChatComponents/ChatUserProfile";
import ChatMessageLoader from "@/components/Loader/ChatMessageLoader";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ChatAreaPage = ({ params }: { params: { chatRoomId: string } }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {data: session} = useSession();
  let expand = searchParams.get("expand");
  // console.log("Got expand", expand);
  if (!expand) expand = "";

  const isMobile = useIsMobile();

  const chatroomId = parseInt(params.chatRoomId, 10);
  const [sideProfile, setSideProfile] = useState<string | null>(expand === "info" ? "profile" : null);
  const { data, loading, error } = useGetChatRoomQuery({
    variables: {
      chatRoomId: chatroomId,
    },
    skip: !chatroomId 
  });
  const chatRoom = data?.getChatRoom;
 
  useEffect(() => {
    if (error) {
      router.push("/chat")
    }
  }, [error])
  
  useEffect(() => {

    if (session?.user?.id && chatRoom && !chatRoom?.members?.some((crm) => crm.userId === session?.user?.id)){
      router.push("/chat")
    }
  }, [chatRoom, session?.user?.id])


  
  // useEffect(() => {
  //     let expand = searchParams.get("expand")
  //     if (expand === "info") setSideProfile("profile")
  //     else setSideProfile(null)
  // }, [searchParams])
  return (
    <>
      {loading && <ChatMessageLoader />}
      {!loading && (!isMobile || (expand !== "list" && expand !== "info")) && (
        <div className={`w-full  h-full lg:block`}>
          <ChatMessageArea
            sideProfile={sideProfile}
            setSideProfile={setSideProfile}
            chatRoom={chatRoom}
          />

        </div>
      )}

      {(!isMobile || expand === "info") && (
        <div
          className={`md:w-[35%]  w-full  h-full  transition-opacity ease-in-out delay-150 ${
            isMobile || sideProfile === "profile"
              ? "opacity-100"
              : "opacity-0 hidden pointer-events-none"
          }`}
        >
          <ChatUserProfile setSideProfile={setSideProfile} chatRoom={chatRoom} />
        </div>
      )}
    </>
  );
};

export default ChatAreaPage;
