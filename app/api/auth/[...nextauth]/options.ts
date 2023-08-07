import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCookieParser } from "next/dist/server/api-utils";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthState } from "@/app/redux/authSlice";
import {cookies} from 'next/headers';
import setCookie from 'set-cookie-parser';

// const dispatch = useDispatch();

export const options: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "x@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const {data, error} = await res.json();
        let res_cookies = setCookie.parse(res, {})
        res_cookies.forEach((cookie: any) => {
            // console.log(cookie)
            // if (cookie.name === 'qsid') {
              cookies().set(cookie)
        })


        // const cookies = response.headers['set-cookie']

        // res.setHeader('Set-Cookie', cookies)
        // console.log(data)
        const user = data.login;
        // console.log(user)

        if (user) { 
            
            return user
        } else {
            // If you return null or false then the credentials will be rejected
            return null
            // You can also Reject this callback with an Error or with a URL:
            // throw new Error('error message') // Redirect to error page
            // throw '/path/to/redirect'        // Redirect to a URL
        }
        
    }
    }),
  ],
  session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // session: {
  //     strategy: "session",
  //     maxAge: 30 * 24 * 60 * 60, // 30 days
  // },

  // callbacks: {
  //     async jwt({token, user}) {
  //         return {...token, ...user}
  //     },

  //     async session({session, token}) {
  //         session.user = token as any;
  //         return session
  //     }

  // }
  // pages: {
  //     signIn: "/auth/signin",
  //     signOut: "/auth/signout",
  //     error: "/auth/error", // Error code passed in query string as ?error=
  //     verifyRequest: "/auth/verify-request", // (used for check email message)
  //     // newUser: null, // If set, new users will be directed here on first sign in
  // },
  pages: {
    signIn: "/auth/signin",
    signOut: "/",
  },
};
