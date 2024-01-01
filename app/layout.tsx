import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProviders } from "./redux/provider";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { NextAuthProvider } from "./providers";
import Footer from "../components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Session } from "next-auth";
import { cookies, headers } from "next/headers";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import Modal from "@/components/Modal/Modal";
import ResNavbar from "@/components/navbar/ResNavbarDrawer";
import { getCookie } from "cookies-next";
import ResFilter from "@/components/FilterBar/ResFilter";
import { store } from "./redux/store";
import NotificationDrawer from "@/components/Notification/NotificationDrawer";
import DynamicModal from "@/components/Modal/DynamicModal";
import ResNavbarDrawer from "@/components/navbar/ResNavbarDrawer";
import ImagePop from "@/components/ImagePop/ImagePop";

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

async function getSession(): Promise<any> {
  // console.log(process.env.NEXT_PUBLIC_BACKEND_AUTH_URL)
  // console.log("cookies", cookies().get('authorization').value)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/profile`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("authorization")?.value}`,
        },
        credentials: "include",
      }
    );

    const session = await response.json();
    // console.log("Got Session", session);
    return Object.keys(session).length > 0
      ? { user: session, token: cookies().get("authorization")?.value }
      : null;
  } catch {
    return null;
  }
}

export default async function RootLayout({ children }: Iprops) {
  // const router = useRouter();
  // const { pathname, query } = router;

  // const params = query.params;
  // const headersList = headers();
  // const activePath = headersList.get("x-invoke-path");

  // console.log("Current URL", headers().get("cookie"));

  const session: Session | null = await getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders session={session}>
          {/* <NextAuthProvider session={session}> */}
          <ApolloWrapper>
            <div className="min-h-[30vh] relative">
              <SpeedInsights />
              <Toaster />
              <NotificationDrawer />
              <ResNavbarDrawer />
              <ResFilter />
              <ImagePop />
              {children}
            </div>
            <Modal />
          </ApolloWrapper>
          {/* </NextAuthProvider> */}
        </ReduxProviders>
      </body>
    </html>
  );
}
