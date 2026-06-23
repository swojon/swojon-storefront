import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        token?:string,
        id?: number,
        email?: string,
        username?: string,
        roles?: string[],
        user? : {
            id: number,
            email: string,
            token: string,
            username?:string;   
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