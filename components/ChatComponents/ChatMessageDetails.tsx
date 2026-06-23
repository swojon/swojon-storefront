import { timeAgo } from "@/lib/helpers/timeAgo";
import { useSession } from "next-auth/react";
import Image from "next/image";
import defaultAvatar from "@/public/assets/defaultAvatar.svg";

const MessageDetail = ({ msg }: { msg: any }) => {
    const {data:session, status} = useSession();
    if (msg.sender.id === session?.user?.id)
      return (
        <div className="relative w-full flex justify-end items-start  pb-3.5">
          <div className="md:w-1/2 w-full flex justify-end px-2  relative ">
            <span className="p-2 inline-block bg-activeColor text-white text-sm rounded-md rounded-br-none">
              {msg.content}
            </span>
            <span className="absolute right-2 -bottom-4 text-[#979696] text-xs block">
              {timeAgo(msg.dateSent)}
            </span>
          </div>
        </div>
      );
    else
      return (
        <div className="relative w-full flex justify-start pb-1">
          <div className="md:w-1/2 w-full flex justify-start items-start p-2 gap-2 mb-1 ">
            <div className="sm:w-9 sm:h-8 w-4 rounded-full">
              <Image
                src={msg.sender?.profile?.avatar ?? defaultAvatar}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
                alt="user"
              />
            </div>
            <div className="relative w-full">
              <p className="p-2  bg-[#F1F7FF] text-primaryColor text-sm rounded-md rounded-bl-none inline-block">
                {msg.content}
              </p>
              <span className="absolute left-0 -bottom-5 text-[#979696] text-xs block">
                {timeAgo(msg.dateSent)}
              </span>
            </div>
          </div>
        </div>
      );
  };

export default MessageDetail;