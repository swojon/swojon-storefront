import React from "react";

const CompleteStatusBar = ({ bar }: { bar: any }) => {
  return (
    <div className="my-[10px] mx-auto bg-[#edeff1] h-[8px] rounded-md w-full ">
      <div
        className="min-w-[1%] relative left-0 h-full rounded-md bg-green-600"
        style={{ width: `${bar}` }}
      ></div>
    </div>
  );
};

export default CompleteStatusBar;
