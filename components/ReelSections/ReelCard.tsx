"use client";

import { useGetListingQuery } from "@/apollograph/generated";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const ReelCard = ({
  videoSrc,
  videoId,
  user,
  description,
  isPlaying,
  productId,
  setPlayingVideoId,
}: {
  videoSrc: string;
  videoId: number;
  user: string;
  description: string;
  isPlaying: boolean;
  productId: number;
  setPlayingVideoId: (id: number) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { data, error, loading } = useGetListingQuery({
      variables: {
        id: productId,
      },
      skip: !productId,
    });
    const product = data?.getListing;
  

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset video when not playing
      }
    }
  }, [isPlaying]);

  const handleMouseEnter = () => {
    setPlayingVideoId(videoId); // Play this video
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div
      className="border border-gray-100 rounded-sm"
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="relative rounded-t-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
      >
        {/* {videoSrc.includes("youtube.com") ? (
          // <iframe
          //   className="w-full lg:h-[500px] md:h-[350px] h-[280px] object-cover"
          //   src={videoSrc.replace("/shorts/", "/embed/").split("?")[0]}
          //   title="YouTube video player"
          //   frameBorder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //   allowFullScreen
          // />
          <iframe
            width="100%"
            className="w-full lg:h-[500px] md:h-[350px] h-[280px] object-cover"
            src={
              videoSrc.replace("/shorts/", "/embed/").split("?")[0] +
              "?controls=0&modestbranding=1&rel=0&showinfo=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full lg:h-[500px] md:h-[350px] h-[280px] object-cover"
            loop
            muted={isMuted}
          />
        )} */}

        <div className="w-full lg:h-[500px] md:h-[350px] h-[280px] object-cover">
          <iframe
            width="100%"
            height="100%"
            src={
              videoSrc.replace("/shorts/", "/embed/").split("?")[0] +
              "?controls=0&modestbranding=1&rel=0&showinfo=0"
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* User Tag */}
        {/* <div className="absolute bottom-3 left-3 text-white bg-black/50 px-2 py-1 text-sm rounded-md">
          {user}
        </div> */}

        {/* Mute Button */}
        {/* <button
          className="absolute bottom-3 right-3 text-white bg-black/50 p-2 rounded-full"
          onClick={toggleMute}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button> */}
      </div>
      <div className="flex gap-3 lg:p-4 p-2">
        <div className="h-[70px] w-[60px]">
          <Image
            src={product ? product?.media?.length! > 0 ? product.media![0].url : '/assets/pro1.png' : '/assets/pro1.png'}
            alt=""
            className="lg:h-[70px] md:h-[40px] h-[30px] 
            md:w-[50px] w-[20px] object-cover "
            width={400}
            height={400}
          />
        </div>
        <Link href={`/products/${productId}`}>
        <div className="text-start">
          {/* @ts-ignore next-line */}
          <h6 className="lg:text-lg md:text-base text-sm font-bold">৳{ product ?  product.variants.length > 0 ? product.variants[0].salePrice : product.price : "Loading..."}</h6>
          <p className="md:line-clamp-3 line-clamp-2 lg:text-sm text-xs">
            {product?.title || "Loading..."}
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ReelCard;
