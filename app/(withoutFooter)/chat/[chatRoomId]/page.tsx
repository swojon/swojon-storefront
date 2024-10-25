"use client";
import { useGetChatRoomQuery } from "@/apollograph/generated";
import ChatMessage from "@/components/ChatComponents/ChatMessage";
import ChatUserProfile from "@/components/ChatComponents/ChatUserProfile";
import ChatMessageLoader from "@/components/Loader/ChatMessageLoader";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ChatAreaPage = ({ params }: { params: { chatRoomId: string } }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const {data: session} = useSession();
  let expand = searchParams.get("expand");
  // console.log("Got expand", expand);
  if (!expand) expand = "";

  const isMobile = useIsMobile();

  const chatroomId = parseInt(params.chatRoomId, 10);
  const [sideProfile, setSideProfile] = useState<string | null>(
    expand === "info" ? "profile" : null
  );
  const { data, loading, error } = useGetChatRoomQuery({
    variables: {
      chatRoomId: chatroomId,
    },
  });
  const chatRoom = data?.getChatRoom;
  if (loading) return <ChatMessageLoader />;
  console.log("isMobile", isMobile, expand);
  if (error) {
    toast.error("Chatroom not found");
    return router.push("/chat")
  }
  
  if (!chatRoom?.members?.some((crm) => crm.userId === session?.user?.id)){
      return router.push("/chat")
    }
  
  // useEffect(() => {
  //     let expand = searchParams.get("expand")
  //     if (expand === "info") setSideProfile("profile")
  //     else setSideProfile(null)
  // }, [searchParams])
  return (
    <>
      {(!isMobile || (expand !== "list" && expand !== "info")) && (
        <div className={`w-full  h-full lg:block`}>
          <ChatMessage
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
