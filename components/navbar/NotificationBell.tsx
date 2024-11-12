import { NewNotificationDocument, useListNotificationsQuery } from '@/apollograph/generated';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { FaRegBell } from 'react-icons/fa6';


const SubscribeForMore = (subscribeToMore:any) => {
  subscribeToMore({
    document : NewNotificationDocument,
    updateQuery: (
      prev: any,
      {subscriptionData} : any
    ) => {
      if (!subscriptionData.data) return prev;
      const newNotification = subscriptionData.data.newNotification;
      toast.success(newNotification.content, {id: newNotification.id})
      if (prev.listNotifications.items.find((ln:any) => ln.id === newNotification.id)){
        return prev;
      }
      
      const newData =  Object.assign({}, prev, {
        listNotifications: {
          ...prev.listNotifications,
          items: [newNotification , ...prev.listNotifications?.items ?? []],
        },
      });
      
      return newData;
    }
  })
}
export default function NotificationBell({border,  handleBellClick}:{border:any, handleBellClick:any} ) {
  const {data:session} = useSession();

  const unreadFilter = {
    filters: {
      unreadOnly: [true],
    },
  };
  const { data, loading, error, subscribeToMore, fetchMore } = useListNotificationsQuery({
    variables: unreadFilter,
    skip: !session?.user?.id
  });
  
 
  const notifications = data?.listNotifications.items;
  
  useEffect(() => {
    SubscribeForMore(subscribeToMore);
  }, [data?.listNotifications.items]);
 
  return (
    <button
                    className="relative cursor-pointer"
                    onClick={handleBellClick}
                  >
                    <FaRegBell
                      className={`text-lg  ${
                        border === "border"
                          ? "text-primaryColor"
                          : "text-primaryColor"
                      }`}
                    />
                    {notifications && notifications.length > 0 && (
                      <div
                        className="absolute -top-2 -right-1 bg-white border w-4
                      h-4 text-[16px] text-red-500 rounded-full flex items-center justify-center "
                      >
                        <small className="leading-none">{notifications.length}{data?.listNotifications.hasMore ? "+" : ""}</small>
                      </div>
                    )
                    }
                  </button>
  )
}
