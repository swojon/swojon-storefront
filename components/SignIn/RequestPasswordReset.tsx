'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsDot } from 'react-icons/bs';

function RequestPasswordReset() {
    const [isSent, setIsSent] = useState(false)

    return (
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src="/assets/swojon.svg"
              width={100}
              height={500}
              alt="logo"
              className="lg:w-[90px] md:w-20 w-16  "
            />
          </Link>
        {isSent === false ? 
            <div className="space-y-6 pt-4 w-full">
            <div className="text-center">
              <h6 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed capitalize">
                Reset Password
              </h6>
              <p className="text-sm text-secondColor pt-1">
                We will send you a link to your associated email address. 
              </p>
              
            </div>

            <div className="space-y-4 w-full">
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border border-gray-200 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor lg:py-2.5 md:py-2 py-1 pl-2 pr-10 sm:text-sm text-xs"
                  placeholder="Enter your account email"
                />
         
              </div>
    
    
              <button className="lg:py-2 md:py-2 py-1.5 border border-activeColor bg- lg:text-sm md:text-xs text-[12px] text-activeColor w-full rounded-md font-lexed font-medium">
                Request Password Reset 
              </button>
            </div>
          </div> :
          <div className="space-y-6 pt-4 w-full">
            <div className="text-center">
              <h6 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed capitalize">
                Success
              </h6>
              <p className="text-sm text-secondColor pt-1">
              Request is received, you will receive an email shortly.  
              </p>
              
             
            </div>

          </div>
           }
          
          <h6 className="text-center text-secondColor lg:text-sm md:text-xs text-[13px] pt-4">
        already have an account !{" "}
        <Link href="/login">
          <span className="text-activeColor">Login</span>
        </Link>
      </h6>
          <div className="flex items-center gap-3 cursor-pointer pt-7">
            <Link href="">
              <span className="text-xs capitalize text-activeColor">
                privacy policy
              </span>
            </Link>
    
            <BsDot className="text-secondColor" />
    
            <Link href="">
              <span className="text-xs capitalize text-activeColor">
                terms & condition
              </span>
            </Link>
    
            <BsDot className="text-secondColor" />
    
            <Link href="">
              <span className="text-xs capitalize text-activeColor">help</span>
            </Link>
          </div>
        </div>
      );
}

export default RequestPasswordReset