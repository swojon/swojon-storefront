import { useListChatsQuery } from "@/apollograph/generated";
import { setActiveChatRoom } from "@/app/redux/chatSlice";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import ChatListsModal from "../Loader/ChatListsLoader";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ChatLists = ({ setSideProfile }: { setSideProfile: any }) => {
  const activeChat = useSelector((state: any) => state.chat.activeChatRoom);
  const authState = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
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
        <ChatListsModal />
      </>
    );
  }

  return (
    <section className="bg-[#F1F7FF] h-full w-full p-3 space-y-2 lg:space-y-4 overflow-y-auto relative">
      <div className="flex justify-between items-center">
        <h5 className="lg:text-lg text-base text-primaryColor font-lexed font-medium">
          Chat List
        </h5>

        <div
          className=" text-primaryColor  cursor-pointer"
          onClick={() => setSideProfile("")}
        >
          <AiOutlineClose />
        </div>
      </div>

      <div className="relative ">
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

      <div className="space-y-2.5">
        {data?.listChatRooms.items &&
          data.listChatRooms.items.map((chatroom) => (
            <div
              onClick={(e) => dispatch(setActiveChatRoom(chatroom.id))}
              key={`chatroom${chatroom.id}`}
              className={`xl:p-2 lg:p-1 p-2 w-full flex items-center  rounded-md border  hover:border-activeColor cursor-pointer ${
                activeChat === chatroom.id
                  ? "bg-gray-200 border-gray-300"
                  : "bg-white border-transparent"
              }`}
            >
              <div className="lg:w-[18%] w-[12%] ">
                <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full relative">
                  <Image
                    src="/user1.jpg"
                    alt="user"
                    width={100}
                    height={100}
                    className="w-ful h-full object-cover rounded-full"
                  />
                  <span className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-green-400"></span>
                </div>
              </div>
              <div className="lg:w-[82%] w-[88%] flex justify-between">
                <div className="pr-3 space-y-1 w-[80%] ">
                  <h5 className="xl:text-sm lg:text-xs text-primaryColor font-lexed truncate">
                    {chatroom.chatName}
                  </h5>
                  <p className="text-xs text-primaryColor truncate">
                    {chatroom.messages!.slice(-1)[0]
                      ? chatroom.messages!.slice(-1)[0].content
                      : ""}
                  </p>
                </div>
                <div className="flex flex-col space-y-1 items-end justify-center w-[20%] ">
                  <span className="xl:text-xs text-[9px] truncate">
                    7:30 PM
                  </span>
                  <span className="xl:w-4 w-3 xl:h-4 h-3 rounded-full bg-green-400 xl:text-xs text-[9px] text-white flex justify-center items-center">
                    2
                  </span>
                </div>
              </div>
            </div>
          ))}

        {/* 
        <div className="xl:p-2 lg:p-1 p-2 w-full flex items-center bg-white rounded-md border border-transparent hover:border-activeColor">
          <div className="lg:w-[18%] w-[12%]  ">
            <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full relative">
              <Image
                src="/user1.jpg"
                alt="user"
                width={100}
                height={100}
                className="w-ful h-full object-cover rounded-full"
              />
              <span className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
          <div className="lg:w-[82%] w-[88%] flex justify-between">
            <div className="pr-3 space-y-1 w-[80%] ">
              <h5 className="xl:text-sm lg:text-xs text-primaryColor font-lexed truncate">
                Ibrahim K. Sakib
              </h5>
              <p className="text-xs text-primaryColor truncate">
                I need a Furniture!
              </p>
            </div>
            <div className="flex flex-col space-y-1 items-end justify-center w-[20%]  ">
              <span className="xl:text-xs text-[9px] truncate">7:30 PM</span>
              <span className="xl:w-4 w-3 xl:h-4 h-3 rounded-full bg-green-400 xl:text-xs text-[9px] text-white flex justify-center items-center">
                2
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ChatLists;
