
import React, { useState } from "react";
import ProfileArea from "@/components/Profile/ProfileArea";

interface Iprops {
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <ProfileArea children={children} />
  );
}

export default layout;
