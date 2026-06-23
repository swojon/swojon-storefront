"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
  session?: Session|null;
};

export const NextAuthProvider = ({ children }: Props) => {
  // console.log("provider session set", session)
  return <SessionProvider>{children}</SessionProvider>;
};
