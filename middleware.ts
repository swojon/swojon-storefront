import { NextRequest, NextResponse } from "next/server"

export const config = {
    matcher: [
        "/user/:path*",
        "/upload-product"
        // "/messages/:path*"
    ]
}

export const middleware = (request: NextRequest) => {
    // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
    // Getting cookies from the request using the `RequestCookies` API
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