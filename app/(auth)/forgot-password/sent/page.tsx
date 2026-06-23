import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className=" bg-white lg:w-[50%] md:w-[75%] w-full">
    <div className="lg:px-24 md:px-16 flex flex-col items-center w-full">
      <Link href="/">
        <Image
          src="/assets/swojon.svg"
          width={100}
          height={500}
          alt="logo"
          className="lg:w-[120px] md:w-20 w-16  "
        />
      </Link>
    <div className="py-7 w-full flex flex-col items-center">
        <h6 className="text-base text-primaryColor text-center">
        You will get an email with
        instruction on resetting your password. If it doesnt arrive, be
        sure to check your spam folder.
        </h6>
        <Link href="/login">
        <button className="pt-8 text-lg  text-activeColor text-center rounded-md font-bold  bg-white  cursor-pointer relative mx-auto">
            Back to Log in
        </button>
        </Link>
  </div>
  </div>
  </div>
  )
}

export default page