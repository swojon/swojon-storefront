import NextAuth from "next-auth";
import { Inter } from "next/font/google";
import { use } from "react";


declare module "next-auth" {
    interface Session {
        user : {
            id: number,
            email: string,
            token: string 
        }
    }
}