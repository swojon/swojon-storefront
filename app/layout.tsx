import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProviders } from "./redux/provider";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { NextAuthProvider } from "./providers";
import Footer from "../components/footer/Footer";

import { Session } from "next-auth";
import { cookies, headers } from "next/headers";

import "swiper/css";
import "swiper/css/pagination";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import Modal from "@/components/Modal/Modal";
import ResNavbar from "@/components/navbar/ResNavbar";
import { getCookie } from "cookies-next";
import ResFilter from "@/components/FilterBar/ResFilter";
import { store } from "./redux/store";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swojon | Bangladesh's trusted marketplace",
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

  try{
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/profile`, {
      headers: {
        Authorization : `Bearer ${cookies().get('authorization')?.value}`
      },
      credentials: 'include'
      });

    const session = await response.json();
    console.log("Got Session", session);
    return Object.keys(session).length > 0 ? {user: session, token: cookies().get('authorization')?.value } : null
     
  } catch {
    return null
  }

}

export default async function RootLayout({ children }: Iprops) {
  // const router = useRouter();
  // const { pathname, query } = router;

  // const params = query.params;
  // const headersList = headers();
  // const activePath = headersList.get("x-invoke-path");

  console.log("Current URL", headers().get("cookie"));

  const session: Session | null = await getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders session={session}>
          {/* <NextAuthProvider session={session}> */}
            <ApolloWrapper>
              <div className="min-h-[30vh] relative">
                <ResNavbar />
                <ResFilter />
                {children}
              </div>

              <Modal />

              <Footer />
            </ApolloWrapper>
          {/* </NextAuthProvider> */}
        </ReduxProviders>
      </body>
    </html>
  );
}
