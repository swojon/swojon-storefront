import Image from "next/image";
import Link from "next/link";
import { HiOutlineMailOpen } from "react-icons/hi";

import { BsDot } from "react-icons/bs";

const CheckCode = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Link href="/">
        <Image
          src="/assets/swojon.svg"
          width={100}
          height={500}
          alt="logo"
          className="lg:w-[90px] md:w-20 w-16  "
        />
      </Link>

      <div className="space-y-3 pt-4 flex flex-col items-center text-center">
        <h6 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed capitalize">
          {" "}
          Check your mailbox
        </h6>
        <HiOutlineMailOpen className="text-8xl text-gray-400" />

        <p className="text-sm text-activeColor"> Back to Log in</p>

        <p className="text-sm text-secondColor">
          {" "}
          Dont get the email?{" "}
          <span className="italic text-activeColor ">click here to resend</span>
        </p>
      </div>
      {/* <span className="border-t mt-5 block w-full" /> */}
      <div className="flex  items-center gap-3 cursor-pointer pt-7">
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
};

export default CheckCode;
