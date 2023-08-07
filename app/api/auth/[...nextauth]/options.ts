import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import {cookies} from 'next/headers';
import setCookie from 'set-cookie-parser';



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
        const res : any = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        let res_cookies = setCookie.parse(res, {})
        const {data, error} = await res.json();
        res_cookies.forEach((cookie: any) => {
              cookies().set(cookie)
        })

        const user = data.login;

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
