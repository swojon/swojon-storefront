import { useListNotificationsQuery, NewNotificationDocument, useMarkNotificationReadMutation } from '@/apollograph/generated';
import { timeAgo } from '@/lib/helpers/timeAgo';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go';
import { LuBellDot, LuMessageSquare, LuShoppingCart } from 'react-icons/lu';
import NotificationToggle from './NotificationToggle';
import { useRouter } from 'next/navigation';
import NotMatched from '../NotMatched/NotMatched';
import NotFound from '../NotMatched/NotFound';
import { useSession } from 'next-auth/react';

const NotificationList = () => {
  console.log("I m nto renderd")
    const [unreadOnly, setUnreadOnly] = useState(true);
    const router = useRouter();
    const {data:session} = useSession()
    const [markNotificationasRead, {data:markData, error:markError, loading:markLoading}] = useMarkNotificationReadMutation();

    let unreadFilter:any;

    if (!unreadOnly) {
      unreadFilter = {
        filters: null,
      };
    } else {
      unreadFilter = {
        filters: {
          unreadOnly: [true],
        },
      };
    }
  
    const { data, loading, error, subscribeToMore, fetchMore } = useListNotificationsQuery({
      variables: unreadFilter,
      skip: !session?.user?.id
    });

    const notifications = data?.listNotifications.items;
   
      const handleLoadMore = () => {
        fetchMore({
          variables: {
            variables: unreadFilter,
            // endingBefore: listings![listings!.length - 1]?.id,
            // startingAfter: data?.listNotifications.afterCursor
          },
          updateQuery: (
            prev: any,
            { fetchMoreResult }: any
          ) => {
            if (!fetchMoreResult.listNotifications.items)
              return prev;
            
              // console.log("Fetch More Result", fetchMoreResult)  
            return {
              listNotifications: {
                ...prev.listNotifications,
                items: [
                  ...prev.listNotifications.items,
                  ...fetchMoreResult.listNotifications.items,
                ],
                hasMore:
                  fetchMoreResult.listNotifications.hasMore
              },
            };
          },
        });
      }

    const handleNotificationClick = (n:any) => {
      markNotificationasRead({
        variables: {
          notificationId: n.id
        },
        update: (cache, {data}) => {
          const cId = cache.identify(n);
          cache.modify({
            id: cId,
            fields: {
              read(prev:any){
                return true
              }
            }
          })
        }
      })
      if (n.chatRoomId){
          router.push(`/chat/${n.chatRoomId}`);
      }
      if (n.listingId) {
        router.push(`/products/${n.listingId}`)
      }

      if (n.relatedUserUsername) {
        router.push(`/seller/${n.relatedUserUsername}`)
      }
    }
    return (
      <>
      <div className="flex  items-center justify-end">
              <span className="text-lg text-secondColor px-2 pb-2">
                only show unread
              </span>{" "}
              <NotificationToggle
                unreadOnly={unreadOnly}
                setUnreadOnly={setUnreadOnly}
              />
            </div>
        {notifications && (<>
          {notifications.map((n) => (
            <div
              key={n.id}
              className="flex justify-between items-center  gap-3 border-b p-2 cursor-pointer"
              onClick={() => handleNotificationClick(n)}
            >
              <div className="w-80% flex items-center gap-4">
                <div className="2">
                 {(n.chatRoomId || n.listingId) ?  (
                    <>
                 {n.chatRoomId && <LuMessageSquare className="h-6 w-6"/>}
                 {n.listingId && <LuShoppingCart className='h-6 w-6' />}   
                    </>
                 )
                 
                 : <LuBellDot className='h-6 w-6'/>
                }
                </div>
                <div className="text-lg space-y-1.5">
                  <p>{n.content} </p>
  
                  {/* <div className="w-full py-1 px-2 border md:text-sm text-xs truncate rounded-md text-primaryColor">
                      this is great
                    </div> */}
                  <span className="italic text-gray-400  block">
                    {timeAgo(n.dateCreated)}
                  </span>
                </div>
              </div>
              {!n.read && <GoDotFill className="text-activeColor" />}
            </div>
          ))}
  
           {data?.listNotifications.hasMore && 
            <div className="flex justify-center mt-7">
              <button onClick={handleLoadMore} className=" w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Load More
              </button>
            </div>
            }
        </>)}
          
        {loading && <p>Loading</p>}
        {!loading && notifications?.length === 0 && (
          <NotFound title={"You are all caught up"}/>
        )}
      </>
    );
  };
  
  export default NotificationList;