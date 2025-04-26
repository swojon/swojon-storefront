export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/upload-product",
    "/chat",
    "/chat/:path*",
    // "/profile",
    // "/profile/:path*",
    "/edit-product/:path*",
    "/wishlists",
    // "/my-orders",
    "/my-ads",
    "/followers",
    "/following",
    "/login-security",
  ],
};
