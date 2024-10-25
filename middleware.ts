export { default } from "next-auth/middleware"
export const config = {
    matcher: [
        "/upload-product",
        "/chat",
        "/profile",
        "/profile/:path*",
        // "/messages/:path*",
        "/wishlists",
        "/my-ads",
        "/followers",
        "/following",
        "/login-security"
    ]
}

// export const middleware = (request: NextRequest) => {
//     // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
//     // Getting cookies from the request using the `RequestCookies` API
//     let cookie = request.cookies.get('authorization')
//     // console.log("cookie", cookie)
//     // console.log("cookie", request.cookies)
//     if (!cookie){
//         // console.log(request.nextUrl.pathname)
//         const url = request.nextUrl.clone()
//         url.searchParams.set('next', request.nextUrl.pathname)
//         url.pathname = `/login`;
//         const res = NextResponse.redirect(url);
//         // res.cookies.set("redirectTo", request.nextUrl.pathname, {maxAge: 10 * 60})
//         return res
//     }
    
// }