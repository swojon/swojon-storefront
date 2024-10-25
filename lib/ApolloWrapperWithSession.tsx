"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Provider, useDispatch } from "react-redux";
import { ApolloWrapper } from "./apollo-wrapper";

export const ApolloWrapperWithSession = async ({ children }: { children: React.ReactNode }) => {
    // store.dispatch(setAuthState( session))
    const session = await getServerSession(options)
    return  (<ApolloWrapper session={session}>
        {children}
    </ApolloWrapper>)
}