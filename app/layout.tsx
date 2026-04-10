import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
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
import Script from "next/dist/client/script";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

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

  return (
    <html lang="en" className={nunito.variable}>
      <head>
          
          <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-59R8D5GT');
            `,
          }}
        />
       
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59R8D5GT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      
        <ReduxProviders>
          <NextAuthProvider>
            <ApolloWrapperWithSession>
              <div className="min-h-[30vh] relative ">
                <SpeedInsights />
                {/* <FacebookPixel /> */}
                {/* <Analytics /> */}
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
