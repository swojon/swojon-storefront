
import React from "react";
import ProfileArea from "@/components/Profile/ProfileArea";

interface Iprops {
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <ProfileArea>
      {children}
      </ProfileArea>
  );
}

export default layout;
