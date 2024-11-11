import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProviders } from "./redux/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NotificationDrawer from "@/components/Notification/NotificationDrawer";
import ImagePop from "@/components/ImagePop/ImagePop";
import { Analytics } from "@vercel/analytics/react";
import { NextAuthProvider } from "./providers";
import { Toaster } from "react-hot-toast";
import Modal from "@/components/Modal/Modal";
import { ApolloWrapperWithSession } from "@/lib/ApolloWrapperWithSession";
import ResNavbar from "@/components/navbar/ResNavbarDrawer";
import ResFilter from "@/components/FilterBar/ResFilter";
import NotificationDrawerNew from "@/components/Notification/NotificationDrawerNew";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swojon.com"),
  title: {
    default: "Swojon | Your Personal Shop, Our trusted Marketplace",
    template: "%s | Swojon",
  },
  description:
    "Turn Your Items into Income, Without the Hassle",
};

interface Iprops {
  session: any;
  children: React.ReactNode;
}


export default async function RootLayout({ children }: Iprops) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          <NextAuthProvider>
          <ApolloWrapperWithSession>
            <div className="min-h-[30vh] relative">
              <SpeedInsights />
              <Analytics />
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
