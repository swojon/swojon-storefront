import React from "react";
import signin from "@/public/assets/signin.svg";
import Image from "next/image";
import "./signInUp.css";

const AuthLayout = ({ children }: { children: any }) => {
  return (
    <section className="fixed top-0 left-0 w-full min-h-screen h-full bg-white">
      <div className="  w-full h-full flex items-center custom-container">
        <div className="lg:w-[50%] w-[35%] h-full md:flex   min-h-screen  items-center   hidden">
          <div className="lg:w-2/3  lg:h-2/3 h-full m-auto">
            <Image src={"/stickers/Welcome.svg"} height={500} width={375} alt="" className="w-full  h-full" />
          </div>
          {/* <div className="absolute left-0 bottom-0 ">
            <Image
              src="/assets/loginDesign.png"
              width={100}
              height={100}
              className="w-full h-full"
              alt="design"
            />
          </div> */}
        </div>

        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
