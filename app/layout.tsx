import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProviders } from "./redux/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImagePop from "@/components/ImagePop/ImagePop";
import { Analytics } from "@vercel/analytics/react";
import { NextAuthProvider } from "./providers";
import { Toaster } from "react-hot-toast";
import Modal from "@/components/Modal/Modal";
import { ApolloWrapperWithSession } from "@/lib/ApolloWrapperWithSession";
import ResNavbar from "@/components/navbar/ResNavbarDrawer";
import ResFilter from "@/components/FilterBar/ResFilter";
import NotificationDrawerNew from "@/components/Notification/NotificationDrawerNew";
import FacebookPixel from "@/components/FacebookPixel";
import CartDrawer from "@/components/Cart/CartDrawer";
import FloatingCart from "@/components/Cart/CartIcon";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swojon.com"),
  title: {
    default: "Shop for Kids & Moms with Love | Swojon Official Store",
    template: "%s |  Swojon Official Store",
  },
  description:
    "Discover thoughtful essentials for moms and kids at Swojon — where you shop for your own people. Fast delivery, quality products, and heartfelt care.",
  twitter: {
    card: "summary_large_image",
    description:
      "Discover thoughtful essentials for moms and kids at Swojon — where you shop for your own people. Fast delivery, quality products, and heartfelt care.",
  },
};

interface Iprops {
  session: any;
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Iprops) {
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="en">
      <head>
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="fb-pixel"
          />
        </noscript> */}
      </head>
      <body className={inter.className}>
        <ReduxProviders>
          <NextAuthProvider>
            <ApolloWrapperWithSession>
              <div className="min-h-[30vh] relative ">
                <SpeedInsights />
                <FacebookPixel />
                <Analytics />
                <CartDrawer />
                <FloatingCart />
                <Toaster />
                <NotificationDrawerNew />
                <ResNavbar />
                <ResFilter />
                <ImagePop />

                {children}
              </div>
              <Modal />
            </ApolloWrapperWithSession>
          </NextAuthProvider>
        </ReduxProviders>
      </body>
    </html>
  );
}
