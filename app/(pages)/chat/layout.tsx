'use client';
import ChatArea from "@/components/ChatComponents/ChatArea";
import ChatLists from "@/components/ChatComponents/ChatLists";
import React, { useState } from "react";
import "@/components/ChatComponents/Chat.css";
import ResUserProfile from "@/components/ChatComponents/ResUserProfile";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { usePathname, useSearchParams } from "next/navigation";

const Chats = ({children}: {children:any}) => {
    const [sideProfile, setSideProfile] = useState("chatlist");
    //ACTIVE DIV, CHATLIST, chat area, user detail/profile
    // sideProfile === chatlist: 
    // sideProfile === user detail :
    // < button, Separate state: ChatList(Default), 
    const isMobile = useIsMobile()
    console.log("is Mobile", isMobile)
    //the areas are: chatList, chatArea, chatInfo
    // we will add search params section in the mobile.
    //?expand=""

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const expand  = searchParams.get("expand")

    const [activeArea, setActiveArea ] = useState("chatList")
    const [backArea, setBackArea ] = useState<null|string>(null)
    console.log("pathname", pathname)
    return (
        <section>
        <div className="custom-container pt-6 sticky w-full h-[87vh] ">
        <div className="w-full flex h-full border rounded-md">
            
                
                {/* if the screen is not mobile or mobile + expand == list  */}
                    {(!isMobile ||  (expand === "list" || pathname === "/chat")) && 
                    <div className={`xl:w-[25%] lg:w-[25%] w-full    h-full   ${
                        sideProfile === "chatlist"
                        ? "opacity-100"
                        : " opacity-0 hidden pointer-events-none"
                    }`}
                    > 
                        <ChatLists setSideProfile={setSideProfile} /> 
                    </div> }
                {children}
            </div>
        </div>
        </section>
    );
};

export default Chats;
