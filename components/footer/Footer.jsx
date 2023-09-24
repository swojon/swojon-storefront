import React from "react";
import "./Footer.scss";
import googleImg from "@/public/assets/googlePlay.png";
import appStoreImg from "@/public/assets/appStore.png";
import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#ffffff] custom-container py-5">
      <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-4 py-9">
        <div className=" col-span-2 space-y-4 ">
          <span className="text-2xl text-activeColor font-medium">Swojon</span>
          <p className="text-sm text-secondColor">
            Download our mobile app. Get all <br /> service at a glance.
          </p>
          <div className="flex space-x-2">
            <Image
              src={googleImg}
              alt="googleimg"
              className="lg:w-[35%] md:w-[25%] "
            />
            <Image
              src={appStoreImg}
              alt="appStoreImg"
              className="lg:w-[35%] md:w-[25%]"
            />
          </div>

          <div className="flex space-x-2">
            <Link
              href="/"
              className="p-2 border  border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
            >
              <BiLogoTwitter />
            </Link>
            <Link
              href="/"
              className="p-2 border border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
            >
              <BiLogoFacebook />
            </Link>
            <Link
              href="/"
              className="p-2 border border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
            >
              <BiLogoInstagram />
            </Link>
            <Link
              href="/"
              className="p-2 border border-gray-200 rounded-full hover:bg-activeColor hover:text-whiteColor"
            >
              <BiLogoGithub />
            </Link>
          </div>
        </div>

        <div className="col-span-4 ">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <div className="space-y-1 ">
              <h6 className="lg:text-2xl md:text-lg text-base heading-font font-medium text-primaryColor">
                Company
              </h6>
              <ul className="font-light lg:text-base md:text-sm text-xs text-secondColor space-y-1">
                <li>
                  <Link href="">Community</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Category</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Membership</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Product Promote</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">All Adds</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-1 ">
              <h6 className="lg:text-2xl md:text-lg text-base heading-font font-medium text-primaryColor">
                Company
              </h6>
              <ul className="font-light lg:text-base md:text-sm text-xs text-secondColor space-y-1">
                <li>
                  <Link href="">Community</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Category</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Membership</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Product Promote</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">All Adds</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-1 ">
              <h6 className="lg:text-2xl md:text-lg text-base heading-font font-medium text-primaryColor">
                Company
              </h6>
              <ul className="font-light lg:text-base md:text-sm text-xs text-secondColor space-y-1">
                <li>
                  <Link href="">Community</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Category</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Membership</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Product Promote</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">All Adds</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-1 ">
              <h6 className="lg:text-2xl md:text-lg text-base heading-font font-medium text-primaryColor">
                Company
              </h6>
              <ul className="font-light lg:text-base md:text-sm text-xs text-secondColor space-y-1">
                <li>
                  <Link href="">Community</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Category</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Membership</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Product Promote</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">All Adds</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
