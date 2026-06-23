import Image from "next/image";
import Link from "next/link";
import { FaRegCommentDots, FaRegEnvelope } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const SecondVerification = () => {
  return (
    <div className="flex flex-col items-center ">
      <Link href="/">
        <Image
          src="/assets/swojon.svg"
          width={100}
          height={500}
          alt="logo"
          className="lg:w-[90px] md:w-20 w-16  "
        />
      </Link>

      <div className="space-y-5 pt-4">
        <div className="text-center">
          <h6 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed capitalize">
            Second step verification
          </h6>
          <p className="text-sm text-secondColor pt-1">
            Youre trying to log in. To make sure your account
          </p>
          <p className="text-sm text-secondColor">
            to secure. we have to verify your identity
          </p>
        </div>

        <div className="flex border border-primaryColor border-1  items-center gap-4 cursor-pointer">
          <FaRegEnvelope className="text-5xl text-gray-300 w-[26%]" />
          <div>
            <span className="block text-base text-primaryColor"> Email</span>
            <span className="block text-sm text-secondColor">
              Get verification code via email
            </span>
          </div>
        </div>
        <div className="flex border border-primaryColor border-1  items-center gap-4 cursor-pointer">
          <FaRegCommentDots className="text-5xl text-gray-300 w-[26%]" />
          <div>
            <span className="block text-base text-primaryColor">
              Text Message
            </span>
            <span className="block text-sm text-secondColor">
              Get verification code via sms
            </span>
          </div>
        </div>
      </div>

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
};

export default SecondVerification;
