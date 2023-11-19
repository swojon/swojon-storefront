import React from "react";
import "./not-found.css";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center custom-container page-height">
      <Image
        src="/assets/notfound.svg"
        className="w-full h-[200px]"
        width={700}
        height={900}
        alt="not-found"
      />
      <h2 className="pt-7 text-lg text-primaryColor font-lexed">Not Found</h2>
      <p className="py-3 text-sm text-secondColor ">we didn`t find anything</p>
      <Link
        href="/"
        className="py-2 px-3 bg-activeColor text-white text-sm font-lexed rounded-md"
      >
        Bak to Home page
      </Link>
    </section>
  );
};

export default NotFound;
