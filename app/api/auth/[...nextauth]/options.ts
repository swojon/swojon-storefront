import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthState } from "@/app/redux/authSlice";

// const dispatch = useDispatch();

export const options: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "text", placeholder: "x@example.com" },
              password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                // console.log("I am here")
                // Add logic here to look up the user from the credentials supplied
                interface Response {
                    login: { id?: number; token?: string; email?: string };
                  }
                  
                const {data, errors}  = await getClient().mutate({
                    mutation: gql`mutation Login {
                        login(userData: {email: "${credentials?.email}", password: "${credentials?.password}"}) {
                            id
                            email
                            token
                        }
                      }`
                    })

                
                
                console.log(data, errors)
                // const cookies = response.headers['set-cookie']

                // res.setHeader('Set-Cookie', cookies)
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
          })
    ],
    // session: {
    //     strategy: "jwt",
    //     maxAge: 30 * 24 * 60 * 60, // 30 days
    // },
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

}

