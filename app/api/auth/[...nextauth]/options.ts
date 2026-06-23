import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import {cookies} from 'next/headers';
import setCookie from 'set-cookie-parser';

import { jwtDecode } from "jwt-decode";


export const options: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "x@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/auth/login`,
            {
              method: "POST",
              body: JSON.stringify({
                username: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              redirect: "follow",
            }
          );
        const data = await res.json();
        // console.log("got data", data)
        if (data.user) { 
            return {...data.user, token: data.token}
        } else {
          throw new Error(data.message)
        }
        
    }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
  ],
  session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
      async jwt({token, user, account}) {
      if (account && account.provider == "google") {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/auth/google/token`,
        {
            method: "POST",
            headers: {
            // "Authorization": `Bearer ${account?.id_token}`,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            tokenId : account?.id_token
            })
        });
        const resParsed = await res.json(); // return {"refresh", "access"} 
        // console.log("jwtresparse", resParsed)
        var decodedJwt = jwtDecode(resParsed.token);
        // console.log("decodedJWT", decodedJwt);
        token = Object.assign({}, token, {
            //@ts-ignore 
            id: decodedJwt.id,
            token: resParsed.token,
            tokenExpires: decodedJwt.exp!* 1000
        });
        // console.log("setting token", token);

        return { ...user, ...token };
      }
      //from credentials provider, data: {token: "", user: {}} will be provided as user
      return {...token, ...user}
      },

      async signIn({account, profile}) {
        if (account?.provider === "google"){
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/auth/google/token`,
              {
                method: "POST",
                headers: {
                  // "Authorization": `Bearer ${account?.id_token}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  tokenId : account?.id_token
                })
              }
            );
            const resParsed = await res.json();
            console.log("resParsed signin", resParsed)
            if (resParsed.status === "success"){
              return true
            }else {
              return false
            }
          }
     
        // Custom logic to handle sign-in events
        return true; // Must return true to indicate successful sign-in
      },
      async session({session, token}) {
          session.user = token as any;
          return session
      }
    },

  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login"
  },
};
