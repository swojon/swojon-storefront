
import React, { useEffect } from "react";
import userImg from "../../public/user1.jpg";
import Image from "next/image";
import { useSession } from "next-auth/react";

const DetailsMessage = ( {msg} ) => {
  const {data:session} = useSession();
  let currentUserId = session?.user.email;
  if (!currentUserId) currentUserId = "iqbal@test.com"
  

  console.log(msg.sender.email , session, "sender")
  if (msg.sender.email === currentUserId) return (
      <div className="col-start-6 col-end-13 p-3 rounded-lg" key={msg.id} >
          <div className="flex items-center justify-start flex-row-reverse">
            <div
              className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
            >
              {msg.sender.email.charAt(0)}
            </div>
            <div
              className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
            >
              <div>{msg.content}</div>
            </div>
          </div>
        </div>
   )

   return (
          
           <div className="col-start-1 col-end-8 p-3 rounded-lg" key={msg.id}>
            <div className="flex flex-row items-center">
            <div
              className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
            >
                {msg.sender.email.charAt(0)}
            </div>
            <div
              className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
            >
              <div>{msg.content}</div>
            </div>
          </div>
        </div>
  )
}

      

     


export default DetailsMessage;
