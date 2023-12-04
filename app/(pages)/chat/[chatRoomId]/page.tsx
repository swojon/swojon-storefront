'use client';
import { useGetChatRoomQuery } from '@/apollograph/generated';
import ChatMessage from '@/components/ChatComponents/ChatMessage'
import ChatUserProfile from '@/components/ChatComponents/ChatUserProfile'
import ChatMessageLoader from '@/components/Loader/ChatMessageLoader';
import React, { useState } from 'react'

const ChatAreaPage = ({ params }: { params: { chatRoomId: string } }) => {
    const chatroomId = parseInt(params.chatRoomId, 10);
    const [sideProfile, setSideProfile] = useState("profile")
    const { data, loading, error } = useGetChatRoomQuery({
        variables: {
            chatRoomId: chatroomId
        }
    })
    const chatRoom = data?.getChatRoom
    if (loading) return <ChatMessageLoader/>
    return (
                <>
                    <div
                        className={`w-full  h-full lg:block ${sideProfile === "" ? "block" : " hidden"
                            }`}
                    >
                        <ChatMessage
                            sideProfile={sideProfile}
                            setSideProfile={setSideProfile}
                            chatRoom={chatRoom}
                        />
                    </div>

                    <div className={`xl:w-[35%] lg:w-[40%] w-full  h-full  transition-opacity ease-in-out delay-150 ${sideProfile === "profile"
                            ? "opacity-100"
                            : "opacity-0 hidden pointer-events-none"
                        }`}
                    >
                        <ChatUserProfile setSideProfile={setSideProfile} />
                    </div>
                </>
           

    )
}

export default ChatAreaPage;