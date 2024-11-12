"use client";
import { setNotificationDrawerClose } from "@/app/redux/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Notification.css";
import { AiOutlineClose } from "react-icons/ai";

import { ListNotificationsDocument, useMarkAllNotificationAsReadMutation } from "@/apollograph/generated";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import dynamic from "next/dynamic";

const DynamicNotificationList = dynamic(() => import("../Notification/NotificationList"), {ssr: false});

const NotificationDrawerNew = () => {
  const [markAllasRead, {data:markAllData, loading:markAllLoading, error:markAllError}] = useMarkAllNotificationAsReadMutation()
  const handleMarkAllAsRead = () => {
    markAllasRead({
      onError : (e) => {
        toast.error(e.message);
      },
      refetchQueries: [ListNotificationsDocument]
    })
  }
  const dispatch = useDispatch();
  const isNotificationDrawerOpen =
    useSelector((state: any) => state.notificationDrawer.open) ?? false; //setting default false

  console.log("isNotificationDrawerOpen", isNotificationDrawerOpen)
  return (
    <> {isNotificationDrawerOpen ? 
      (<div
        className={`fixed right-0 z-[1000] w-10/12 md:w-6/12 xl:w-3/12 lg:w-4/12 resNav transition delay-200 duration-700 ease-in-out shadow-xl`}
      > 
       
        <div
          className={` bg-white resNav opacity-100   relative transition duration-700 ease-in-out delay-200 `}
        >
          <button
            className="absolute -left-12 top-0  p-3 bg-black rounded-sm text-white"
            onClick={() => dispatch(setNotificationDrawerClose())}
          >
            <AiOutlineClose className="text-2xl text-white" />
          </button>
          <div className="relative h-full">
            <div className="flex flex-wrap  border-b px-5 py-4 items-center justify-between font-semibold  gap-3">
            
             <div className="flex pt-3 items-center gap-3 w-full">
              <span className="w-full text-center text-base text-primaryColor font-lexed font-medium">
                Notifications
              </span>
            </div>
            </div>
            
            <div className="h-[96dvh] custom-scroll overflow-y-auto p-5">
                <DynamicNotificationList/>
            </div>
            
            <footer className="absolute py-5 md:px-14 sm:px-10 px-3 bg-white bottom-0 left-0 w-full h-20 border-t flex justify-between items-center text-primaryColor">
            <div className="flex items-center w-full">
              <button onClick={handleMarkAllAsRead}className="w-full text-center text-base text-primaryColor font-lexed font-medium">
                {markAllLoading ? <BiLoaderCircle className="h-8 w-8" /> : "Mark all as read"}
              </button>
            </div>
          </footer>
          </div>
        </div>
      </div> ) : 
      <></>}
    </>
   
  );
};

export default NotificationDrawerNew;
