import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProviders } from "./redux/provider";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NotificationDrawer from "@/components/Notification/NotificationDrawer";
import ImagePop from "@/components/ImagePop/ImagePop";
import { Analytics } from "@vercel/analytics/react";
import { NextAuthProvider } from "./providers";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import Modal from "@/components/Modal/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swojon.com"),
  title: {
    default: "Swojon | Bangladesh's trusted marketplace",
    template: "%s | Swojon",
  },
  description:
    "Swojon is the perfect place to declutter your home and make some extra money, or to find the perfect used item at a fraction of the price of new",
};

interface Iprops {
  session: any;
  children: React.ReactNode;
}

const DynamicResNavbar = dynamic(()=> import("@/components/navbar/ResNavbarDrawer"), {ssr: false})
const DynamicResFilter = dynamic(()=> import("@/components/FilterBar/ResFilter"), {ssr: false})

export default async function RootLayout({ children }: Iprops) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          <NextAuthProvider>
          <ApolloWrapper>
            <div className="min-h-[30vh] relative">
              <SpeedInsights />
              <Analytics />
              <Toaster />
              <NotificationDrawer />
              <DynamicResNavbar />
              <DynamicResFilter />
              <ImagePop />
              {children}
            </div>
            <Modal />
          </ApolloWrapper>
          </NextAuthProvider>
        </ReduxProviders>
      </body>
    </html>
  );
}
