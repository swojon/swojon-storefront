"use client";
import React, { useState } from "react";

let nextId = 1;

const ChatboxFooter = ({ disMsg, setDisMsg }) => {
  const [message, setMessage] = useState("");
  console.log(disMsg);
  const handleKeyDown = (e) => {
    let newMsg = e.target.value;
    if (e.key === "Enter") {
      setDisMsg([...disMsg, { id: nextId++, msg: newMsg }]);
    }
  };
  return (
    <div className="border absolute left-0 w-full bottom-0 overflow-hidden p-4">
      <input
        type="text"
        placeholder="type text here"
        className="border border-green-900 w-full"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ChatboxFooter;
