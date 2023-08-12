import React from 'react'
import noActiveChatSelected from "../../public/no_active_chat.svg"
import Image from 'next/image'

const NoActiveChat = () => {
  return (

    <div className="items-center bg-slate-100 h-full">
        <Image src={noActiveChatSelected} alt="" className="h-64" /> 
      </div>

  )
}

export default NoActiveChat;