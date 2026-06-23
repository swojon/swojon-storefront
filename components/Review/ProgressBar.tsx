import React from "react";

const ProgressBar = ({ bar }: { bar: any }) => {
  return (
    <div className="progress-bar rounded-md w-full ">
      <div
        className="bar relative left-0 h-full rounded-md bg-green-600"
        style={{ width: `${bar}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
