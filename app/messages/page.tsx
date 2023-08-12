"use client";
import { NextPage } from "next";
import RootLayout from "../layout";
import ChatBox from "@/components/Chat/ChatBox";
// import { FormEventHandler, useState } from "react";
// import login from "../../../public/login.svg";
// import Image from "next/image";
// import Link from "next/link";

interface Props {}

const Messages: NextPage = (): JSX.Element => {

  return (

    <ChatBox />

  )
};

export default Messages;
