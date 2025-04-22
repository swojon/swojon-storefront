"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const ReelCard = ({
  videoSrc,
  videoId,
  user,
  description,
  isPlaying,
  setPlayingVideoId,
}: {
  videoSrc: string;
  videoId: number;
  user: string;
  description: string;
  isPlaying: boolean;
  setPlayingVideoId: (id: number) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

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
        {/* Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full lg:h-[500px] 
          md:h-[350px] h-[280px] object-cover"
          loop
          muted={isMuted}
        />

        {/* User Tag */}
        <div className="absolute bottom-3 left-3 text-white bg-black/50 px-2 py-1 text-sm rounded-md">
          {user}
        </div>

        {/* Mute Button */}
        <button
          className="absolute bottom-3 right-3 text-white bg-black/50 p-2 rounded-full"
          onClick={toggleMute}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
      <div className="flex gap-3 lg:p-4 p-2">
        <div className="h-[70px]">
          <Image
            src="/assets/cat11.png"
            alt=""
            className="lg:h-[70px] md:h-[40px] h-[30px] 
            md:w-[50px] w-[20px] object-cover "
            width={400}
            height={400}
          />
        </div>
        <div>
          <h6 className="lg:text-lg md:text-base text-sm font-bold">৳125</h6>
          <p className="md:line-clamp-3 line-clamp-2 lg:text-sm text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReelCard;
