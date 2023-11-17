import React from "react";

const ChatListsLoader = () => {
  return (
    <section className="bg-[#F1F7FF] h-full w-full p-3 space-y-2 lg:space-y-4 ">
      <div className="flex items-center">
        <h5 className="lg:text-lg text-base text-primaryColor font-lexed font-medium">
          Chat List
        </h5>
      </div>
      <div className="space-y-2.5">
        <div className="xl:p-2 lg:p-1 p-2 w-full flex items-center bg-white rounded-md animate-pulse ">
          <div className="lg:w-[18%] w-[12%] ">
            <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full bg-gray-300 relative"></div>
          </div>
          <div className="lg:w-[82%] w-[88%] flex justify-between">
            <div className="pr-3 space-y-2.5 w-[80%] ">
              <h5 className="  h-3 w-[80%] bg-gray-300 rounded-md "></h5>
              <p className="h-2 w-[60%] bg-gray-200 rounded-md"></p>
            </div>
            <div className="flex   justify-end w-[20%] ">
              <span className=" h-3 w-7 bg-gray-200 rounded-md"></span>
            </div>
          </div>
        </div>
        <div className="xl:p-2 lg:p-1 p-2 w-full flex items-center bg-white rounded-md animate-pulse ">
          <div className="lg:w-[18%] w-[12%] ">
            <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full bg-gray-300 relative"></div>
          </div>
          <div className="lg:w-[82%] w-[88%] flex justify-between">
            <div className="pr-3 space-y-2.5 w-[80%] ">
              <h5 className="  h-3 w-[80%] bg-gray-300 rounded-md "></h5>
              <p className="h-2 w-[60%] bg-gray-200 rounded-md"></p>
            </div>
            <div className="flex   justify-end w-[20%] ">
              <span className=" h-3 w-7 bg-gray-200 rounded-md"></span>
            </div>
          </div>
        </div>
        <div className="xl:p-2 lg:p-1 p-2 w-full flex items-center bg-white rounded-md animate-pulse ">
          <div className="lg:w-[18%] w-[12%] ">
            <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full bg-gray-300 relative"></div>
          </div>
          <div className="lg:w-[82%] w-[88%] flex justify-between">
            <div className="pr-3 space-y-2.5 w-[80%] ">
              <h5 className="  h-3 w-[80%] bg-gray-300 rounded-md "></h5>
              <p className="h-2 w-[60%] bg-gray-200 rounded-md"></p>
            </div>
            <div className="flex   justify-end w-[20%] ">
              <span className=" h-3 w-7 bg-gray-200 rounded-md"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatListsLoader;
