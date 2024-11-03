import React from 'react'
import { FaRegBell } from 'react-icons/fa6';

export default function NotificationBell({border,  handleBellClick}:{border:any, handleBellClick:any} ) {
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
                    <div
                      className="absolute -top-2 -right-1 bg-white border w-4
                    h-4 text-[16px] text-red-500 rounded-full flex items-center justify-center "
                    >
                      <small className="leading-none">*</small>
                    </div>
                  </button>
  )
}
