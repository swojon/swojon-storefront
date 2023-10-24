// export {default} from 'next-auth/middleware';

import { setCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server"

export const protectedRoutes = ["/chat"]

export const middleware = (request: NextRequest) => {
    // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
    // Getting cookies from the request using the `RequestCookies` API
    
    const authToken = request.nextUrl.searchParams.get('token');
    if (authToken){
        console.log("token is set. ")
        setCookie("authorization", authToken, {secure:true })
        let query = ""
        request.nextUrl.searchParams.delete('token')
        const res = NextResponse.redirect(request.nextUrl)
        res.cookies.set("aurhoriza", authToken)
        return res
    }
    console.log("pathName", request.nextUrl.pathname)

    protectedRoutes.forEach((route) => {
        if (!!request.nextUrl.pathname.match(route)){
            console.log("Accessing a protected route")
            let cookie = request.cookies.get('authorization')
            console.log("cookie", cookie)
            console.log("cookie", request.cookies)
            if (!cookie){
                // console.log(request.nextUrl.pathname)
                const url = request.nextUrl.clone()
                url.pathname = `/signin`;
                const res = NextResponse.redirect(url);
                res.cookies.set("redirectTo", request.nextUrl.pathname, {maxAge: 10 * 60})
                return res
            }
        }
    })
    
    
}
