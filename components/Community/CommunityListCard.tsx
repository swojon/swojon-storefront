import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsDot } from 'react-icons/bs'
import { TiLocation } from 'react-icons/ti'

function CommunityListCard({item} : {item: any }) {
  return (
     <Link
              href={`/communities/${item.id}`}
              className="flex items-center justify-between gap-1 p-1.5 bg-[#F5F5F6] rounded-md"
              key={item.id}
            >
              <div className="h-[70px] w-[48px] rounded-md ">
                <Image
                  src={!!item.banner ? item.banner :  "/assets/comm1.png"}
                  className="w-full h-full object-cover rounded-md"
                  alt="community"
                  width={400}
                  height={500}
                />
              </div>
              <div className="w-[70%]  space-y-1">
                <h6 className="text-xs text-primaryColor font-lexed font-medium">
                  {item.name}
                </h6>
                <div className="flex items-center  text-secondColor ">
                  <span className=" text-xs font-lexed ">2.8K members</span>
                  <span className=" text-xs font-lexed  flex items-center">
                    <BsDot className="text-xs" /> 8 Post uploaded
                  </span>
                </div>
                <div className="flex items-center text-secondColor ">
                  <TiLocation className="text-sm text-activeColor pe-1" />{" "}
                  <span className="text-xs">{item.location?.name ?? "Bangladesh"}</span>
                </div>
              </div>
              <div className="w-4">
                <Image
                  src={"/assets/community.png"}
                  width={200}
                  height={200}
                  className="w-full"
                  alt="icon"
                />
              </div>
            </Link>

  )
}

export default CommunityListCard