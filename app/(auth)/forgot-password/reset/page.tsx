"use client";
import { useResetRequestMutation } from "@/apollograph/generated";
import ResetPasswordForm from "@/components/SignIn/ResetPasswordForm";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import * as Yup from "yup";

const formSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
});

const ResetPasswordPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
    const token = searchParams.get("token")
  
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
         <div className="space-y-2 pt-4 w-full ">
            {!token ?  
            <h4 className="text-3xl font-bold text-primaryColor text-center">
              You can&apos;t reset password without token
            </h4>
            :
            <ResetPasswordForm token={token!} />
            }
          </div>

      </div>
    </div>
  );
};

export default ResetPasswordPage;
