"use client";
import { setNotificationDrawerClose } from "@/app/redux/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Notification.css";
import NotificationToggle from "./NotificationToggle";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

const NotificationDrawer = () => {
  const dispatch = useDispatch();
  const isNotificationDrawerOpen = useSelector(
    (state: any) => state.notificationDrawer.open
  );
  return (
    <section
      className={`fixed top-0 z-[1000]  w-full   transition delay-200 duration-700 ease-in-out h-screen flex justify-end
       ${
         isNotificationDrawerOpen
           ? "translate-x-0  right-0 "
           : "translate-x-full origin-right"
       }
      `}
    >
      <div
        onClick={() => dispatch(setNotificationDrawerClose())}
        className="w-full h-full bg-transparent absolute right-0 top-0 z-100 "
      ></div>
      <div className="lg:w-[27%] md:w-[45%] mt-auto bg-white notification-container opacity-100   relative transition duration-700 ease-in-out delay-200 shadow-lg rounded-tl-md border-t border-l border-gray-300 pt-6 pb-3 px-4 space-y-3 overflow-hidden">
        <button
          className="absolute right-1.5 top-1.5   text-activeColor "
          onClick={() => dispatch(setNotificationDrawerClose())}
        >
          <AiOutlineClose className="text-base" />
        </button>

        <div className="flex justify-between items-center">
          <h6 className="text-lg font-lexed text-primaryColor">
            Notifications
          </h6>
          <div className="flex  items-center">
            <span className="text-xs text-secondColor pe-2">
              only show unread
            </span>{" "}
            <NotificationToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 border-b">
          <span className="border-b border-activeColor text-sm pb-0.5">
            All
          </span>
          <span className="border-b border-transparent text-sm pb-0.5 relative">
            Unread
            <div
              className="absolute -top-1.5 -right-4 bg-white border w-4
                    h-4 text-[8px] text-secondColor rounded-full flex items-center justify-center "
            >
              <small className="leading-none"> 10</small>
            </div>
          </span>
        </div>

        <div className="space-y-3 overflow-auto">
          <h6 className="text-base font-lexed text-secondColor">Today</h6>

          <div className="flex justify-between items-start gap-3 border-b pb-2">
            <div className="w-80% flex items-start gap-3">
              <div className="md:w-6 md:h-6 w-4 h-4 rounded-full ">
                <Image
                  src="/user1.jpg"
                  alt="user"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-xs space-y-1.5">
                <p>user100 commented on your post </p>

                <div className="w-full py-1 px-2 border md:text-sm text-xs truncate rounded-md text-primaryColor">
                  this is great
                </div>
                <span className="italic text-gray-400  block">30 min ago</span>
              </div>
            </div>

            <GoDotFill className="text-activeColor" />
          </div>

          <div className="flex justify-between items-start gap-3 border-b pb-2">
            <div className="w-80% flex items-start gap-3">
              <div className="md:w-6 md:h-6 w-4 h-4 rounded-full ">
                <Image
                  src="/user1.jpg"
                  alt="user"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-xs space-y-1.5">
                <p>user100 commented on your post </p>

                <span className="italic text-gray-400  block">30 min ago</span>
              </div>
            </div>

            <GoDotFill className="text-activeColor" />
          </div>

          <div className="flex justify-between items-start gap-3 border-b pb-2">
            <div className="w-80% flex items-start gap-3">
              <div className="md:w-6 md:h-6 w-4 h-4 rounded-full ">
                <Image
                  src="/user1.jpg"
                  alt="user"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-xs space-y-1.5">
                <p>user100 commented on your post </p>

                <span className="italic text-gray-400  block">30 min ago</span>
              </div>
            </div>

            <GoDotFill className="text-activeColor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationDrawer;
