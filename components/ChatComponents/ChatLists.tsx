import { useListChatsQuery } from "@/apollograph/generated";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import ChatListLoader from "../Loader/ChatListsLoader";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { timeAgo, timeAgoNarrow } from "@/lib/helpers/timeAgo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import defaultAvatar from "@/public/assets/defaultAvatar.svg";

const ChatLists = () => {
  const authState = useSelector((state: any) => state.auth);
  const pathname = usePathname();

  const { data, error, loading } = useListChatsQuery({
    variables: {
      userId: authState.user.id,
    },
    skip: !authState.user.id,
  });

  if (error) {
    return <div>error...</div>;
  }
  if (loading) {
    return (
      <>
        <ChatListLoader />
      </>
    );
  }
  console.log("list chatrooms", data?.listChatRooms.items)
  return (
    <section className="bg-[#F1F7FF] h-full w-full  space-y-2 lg:space-y-4 overflow-y-hidden relative pb-10">
      <div className="flex justify-between items-center px-3 pt-3">
        <h5 className="lg:text-lg text-base text-primaryColor font-lexed font-bold">
          Chat List
        </h5>
        {/* 
        <div
          className=" text-primaryColor  cursor-pointer"
          // onClick={() => setSideProfile("")}
        >
          <AiOutlineClose />
        </div> */}
      </div>

      <div className="relative mx-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
          <MagnifyingGlassIcon
            className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-9 leading-5 placeholder-[#C0C0C0] focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>

      <div className="space-y-3 h-[70dvh] overflow-y-auto px-3 scroll-hover pb-10">
        {data?.listChatRooms.items &&
          data.listChatRooms.items.map((chatroom) => (
            <Link
              href={`/chat/${chatroom.id}`}
              key={`chatroom${chatroom.id}`}
              className="block"
            >
              <div
                // onClick={(e) => dispatch(setActiveChatRoom(chatroom))}

                className={`xl:p-2 lg:p-1 p-2 w-full grid grid-cols-5 h-[65px] rounded-md border  hover:border-activeColor cursor-pointer gap-3 ${
                  `/chat/${chatroom.id}` === pathname
                    ? "bg-gray-100 border-gray-400"
                    : "bg-white border-transparent"
                }`}
              >
                <div className="my-auto">
                  <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full relative">
                  {chatroom.members
                      ?.filter((crm) => crm.userId !== authState.user.id)
                      ?.map((m) => (
                        <Image
                          key={m.userId}
                          src={m.user?.profile?.avatar ?? defaultAvatar}
                          alt="user"
                          width={100}
                          height={100}
                          className="w-ful h-full object-cover rounded-full"
                        />
                      ))}
                    <span className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-green-400"></span>
                  </div>
                </div>
                <div className="col-span-3  space-y-2 my-auto">
                  <h5 className="xl:text-sm lg:text-xs text-primaryColor font-lexed truncate capitalize  leading-none font-semibold">
                    {chatroom.members
                      ?.filter((crm) => crm.userId !== authState.user.id)
                      ?.map((m) => m.user?.username ?? m.user?.profile?.name )
                      .join(",") ?? chatroom.chatName}
                  </h5>
                  <p className="text-xs text-secondColor truncate">
                    {chatroom.messages!.slice(-1)[0]
                      ? chatroom.messages!.slice(-1)[0].content
                      : ""}{" "}
                  </p>
                </div>
                <div className=" flex flex-col space-y-2 justify-center  truncate ">
                  <h6 className="xl:text-xs text-[9px] truncate text-secondColor pe-[2px]">
                    {chatroom.messages!.slice(-1)[0] &&
                      timeAgoNarrow(
                        chatroom.messages!.slice(-1)[0].dateSent
                      )}{" "}
                    asss
                  </h6>
                  <div className="flex justify-end">
                    <span className="xl:w-4 w-3 xl:h-4 h-3 rounded-full bg-green-400 xl:text-xs text-[9px] text-white flex justify-center items-center ">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default ChatLists;
