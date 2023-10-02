"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
  session?: Session|null;
};

export const NextAuthProvider = ({ children, session }: Props) => {
  // console.log("provider session set", session)
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
