import React from "react";
import "./Footer.scss";
// import googleImg from "@/public/assets/googlePlay.png";
// import logo from "@/public/assets/swojon_Logo_-01-cropped.svg";
// import appStoreImg from "@/public/assets/appStore.png";
import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#ffffff] custom-container py-5">
      <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-4 py-9">
        <div className=" col-span-2 space-y-4  ">
          <Link
            href="/"
            className={`flex  font-lexed text-activeColor font-semibold  justify-start    items-center`}
          >
            <Image
              src="/assets/swojon.svg"
              width={100}
              height={500}
              alt="logo"
              className=" lg:w-[35%] md:w-[25%] w-[45%] "
            />
          </Link>
          <p className="text-sm text-secondColor">
          Stay connected with us! Follow our social media channels for updates and the latest news.
          </p>

          {/* <div className="flex space-x-2">
            <Image
              src={googleImg}
              alt="googleimg"
              className="lg:w-[35%] md:w-[22%] w-[35%]"
            />
            <Image
              src={appStoreImg}
              alt="appStoreImg"
              className="lg:w-[35%] md:w-[22%] w-[35%]"
            />
          </div> */}

          <div className="flex space-x-2">
            <Link
              href="https://x.com/WeAreSwojon"
              className="p-2 border  border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
            >
              <BiLogoTwitter />
            </Link>
            <Link
              href="https://www.facebook.com/WeAreSwojon/"
              className="p-2 border border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
              target="_blank"
            >
              <BiLogoFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/weareswojon/"
              className="p-2 border border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
            >
              <BiLogoInstagram />
            </Link>
            {/* <Link
              href="/"
              className="p-2 border border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
            >
              <BiLogoGithub />
            </Link> */}
          </div>
        </div>

        <div className="col-span-4 ">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
            {/* <div className="space-y-2.5  ">
              <h6 className="lg:text-2xl md:text-lg text-base font-lexed font-medium text-primaryColor">
                Company
              </h6>
              <ul className="font-light  md:text-sm text-xs text-secondColor space-y-1">
                <li>
                  <Link href="">Community</Link>
                </li>
                <li>
                  <Link href="/categories">Category</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/contact-us">Contact us</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/chat">Messages</Link>
                </li>
                <li>
                  <Link href="">All Adds</Link>
                </li>
              </ul>
            </div> */}

            {/* 
            <div className="space-y-2.5  ">
              <h6 className="lg:text-2xl md:text-lg text-base font-lexed font-medium text-primaryColor">
                Shop
              </h6>
              <ul className="font-light  md:text-sm text-xs text-secondColor space-y-1">
                <li>
                  <Link href="">Fashion</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Furniture</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Electronics</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Instructional</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">And many more</Link>
                </li>
              </ul>
            </div> */}

            <div className="space-y-2.5 ">
              <h6 className="lg:text-2xl md:text-lg text-base font-lexed font-bold text-primaryColor">
                Help
              </h6>
              <ul className=" md:text-base text-sm font-medium text-secondColor space-y-1">
                <li>
                  <Link href="/FAQ">FAQ</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/terms-condition">Terms & Condition</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/help-center">Help Center</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5  ">
              <h6 className="lg:text-2xl md:text-lg text-base font-lexed font-bold text-primaryColor">
                Extra Link
              </h6>
              <ul className="md:text-base text-sm font-medium text-secondColor space-y-1">
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/site-map">Site Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E6E6E6] pt-5 text-center text-secondColor text-sm">
        © {currentYear} Swojon, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
