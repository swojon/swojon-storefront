import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        id?: number,
        email?: string,
        username?: string,
        roles?: string[],
        user? : {
            id: number,
            email: string,
            token: string 
        }
        passport? : {
            user: {
                id: number,
                email: string,
                username: string
            }
        }
    }
}