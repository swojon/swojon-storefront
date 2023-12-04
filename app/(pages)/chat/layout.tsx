'use client';
import ChatArea from "@/components/ChatComponents/ChatArea";
import ChatLists from "@/components/ChatComponents/ChatLists";
import React, { useState } from "react";
import "@/components/ChatComponents/Chat.css";
import ResUserProfile from "@/components/ChatComponents/ResUserProfile";

const Chats = ({children}: {children:any}) => {
    const [sideProfile, setSideProfile] = useState("chatlist");
    return (
        <section>
        <div className="custom-container pt-6 sticky w-full h-[87vh] ">
        <div className="w-full flex h-full border rounded-md">
            <div
                className={`xl:w-[25%] lg:w-[25%] w-full    h-full   ${
                sideProfile === "chatlist"
                    ? "opacity-100"
                    : " opacity-0 hidden pointer-events-none"
                }`}
            >
                <ChatLists setSideProfile={setSideProfile} />
            </div>
                {children}
            </div>
        </div>
        </section>
    );
};

export default Chats;
