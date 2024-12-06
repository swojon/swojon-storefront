import React from "react";
import FrontPage from "@/components/DeliveryRecord/FrontPage";
import BannerCTA from "@/components/CTABanner/BannerCTA";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.swojon.com/courier-shield"),
  title: "Courier History Shield: Prevent Delivery Fraud Now",
  description:
    "Protect your business from courier scams with our powerful tool. Verify customer delivery history, detect potential fraud, and ensure safe online transactions effortlessly.",
  twitter: {
    card: "summary_large_image",
    description: "Protect your business from courier fraud! Our tool verifies customer delivery history, stops scams, and shields you from fake customers. Stay safe in ecommerce with instant background checks. Prevent delivery fraud before it happens. #OnlineSafety #FraudPrevention"
  }
};

const DeliveryRecordPage = () => {
  return (
    <>
        <FrontPage />
        <BannerCTA />
    </>
  );
};

export default DeliveryRecordPage;
