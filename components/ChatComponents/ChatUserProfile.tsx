import useIsMobile from "@/lib/hooks/useIsMobile";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  AiFillMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { HiArrowLeft } from "react-icons/hi2";

import { useSelector } from "react-redux";
import defaultAvatar from "@/public/assets/defaultAvatar.svg";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import { useSession } from "next-auth/react";

const ChatUserProfile = ({ setSideProfile, chatRoom }: { setSideProfile: any; chatRoom:any }) => {
  const {data: session} = useSession();
  const isMobile = useIsMobile()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const participants = chatRoom?.members?.filter((crm: any) => crm.userId !== session?.user?.id)

  const handleLeftArrowIconClick = () => {
    if (isMobile) {
      const params = new URLSearchParams(searchParams.toString())
      params.delete("expand")
      !!params.toString() ? router.push(pathname + '?' + params.toString()) : router.push(pathname)
    }
  }
  console.log("Loaded chat user info item")
  return (
    <div className="w-full h-full px-3 py-5 bg-white border-l overflow-y-auto sticky top-0   min-h-[70vh]">
      {!isMobile && 
      <div
        className="absolute right-1 top-1 text-primaryColor  p-2 cursor-pointer"
        onClick={() => setSideProfile(null)}
      >
        <AiOutlineClose />
      </div>
      }
      {isMobile &&  
      <div
        className="absolute p-2 top-2 left-2 border border-secondColor me-1 rounded-md block cursor-pointer "
        onClick={handleLeftArrowIconClick}
      >
        <HiArrowLeft className="text-primaryColor" />
      </div>}

      <div className="flex flex-col items-center space-y-3 border-b pb-4">
        <div className="w-14 h-14 rounded-full relative">
          {participants?.map((m:any) => (
            <Image
              key={m.user.id}
              src={m.user?.profile?.avatar ?? defaultAvatar}
              alt="user"
              width={100}
              height={100}
              className="w-ful h-full object-cover rounded-full"
            />))}
          <span className="absolute right-1 bottom-0 w-3 h-3 border rounded-full bg-green-400"></span>
        </div>
        <h5 className="xl:text-lg lg:text-base text-base font-lexed font-medium text-primaryColor">
          {participants?.map((m: any ) => m.user?.username ?? m.user?.profile?.name ?? m.user?.email.split("@")[0]).join(',')  ?? chatRoom?.chatName }
        </h5>
        <div className="flex items-center gap-5	">
        {participants?.map((m: any ) =>
          (<Link key={m.user.id} href={`/seller/${m.user.username}`} className="flex flex-col items-center">
            <div className="w-7 h-7 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
              <RxAvatar />
            </div>
            <h6 className="text-xs text-primaryColor pt-1 capitalize">Profile</h6>
          </Link>
          ))}
{/*     }
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
              <AiFillMessage />
            </div>
            <h6 className="text-xs text-primaryColor pt-1 capitalize">
              Message
            </h6>
          </div> */}
{/* 
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
              <AiFillMinusCircle />
            </div>
            <h6 className="text-xs text-primaryColor pt-1 capitalize">Block</h6>
          </div> */}
        </div>
      </div>

      <div className="space-y-2 py-4 border-b">
        {/* <div> */}
          {/* <h6 className="xl:text-base lg:text-sm font-lexed text-primaryColor">
            Phone
          </h6>
          <p className="xl:text-sm lg:text-xs text-secondColor">
            01515
          </p> */}
        {/* </div> */}
        {/* <div>
          <h6 className="xl:text-base lg:text-sm font-lexed text-primaryColor">
            Email
          </h6>
          <p className="xl:text-sm lg:text-xs text-secondColor">
            {participants?.map((m:any) => m.user.email)}
          </p>
        </div> */}
        <div>
          <h6 className="xl:text-base lg:text-sm font-lexed text-primaryColor">
            Member Since
          </h6>
          <p className="xl:text-sm lg:text-xs text-secondColor">
          {participants?.map((m:any) => new Date(m?.user?.createdAt).toLocaleString('en-us',{month:'short', year:'numeric'}))}
            
          </p>
        </div>
      </div>
      {/* <div className="pt-4 space-y-3">
        <h6 className="text-base font-lexed text-primaryColor font-medium">
          Shared files
        </h6>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
              <TbFileText className="xl:text-sm lg:text-xs" />
            </div>
            <div className="flex flex-col">
              <span className="xl:text-sm lg:text-xs text-primaryColor font-lexed">
                Product image.abc
              </span>
              <span className="text-xs text-secondColor">02 Jan, 2022</span>
            </div>
          </div>
          <span className="text-primaryColor xl:text-sm lg:text-xs font-lexed">
            1.1 MB
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default ChatUserProfile;
