"use client";
import SettingsEditInfo from "@/components/Settings/SettingsEditInfo";
import SettingsInfo from "@/components/Settings/SettingsInfo";
import React, { useState } from "react";

const Settings = () => {
  const [editInformation, setEditInformation] = useState("edit");
  return (
    <section>
      <div className="border-b lg:px-5 md:px-3 px-2 lg:py-3.5 md:py-2.5 py-2">
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base  font-lexed font-medium">
          Settings
        </h6>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 py-8 px-5">
        <div className=" lg:w-[80%] w-full">
          {editInformation === "edit" ? <SettingsInfo /> : <SettingsEditInfo />}
        </div>
        <div className="flex md:justify-end justify-center items-start gap-3">
          {editInformation === "update" ? (
            <>
              <button
                onClick={() => setEditInformation("edit")}
                className="bg-white px-3 py-2 text-sm text-primaryColor rounded-md border border-gray-300"
              >
                cancel
              </button>
              <button
                onClick={() => setEditInformation("update")}
                className="bg-activeColor px-3 py-2 text-sm text-white rounded-md border border-activeColor"
              >
                Update
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditInformation("update")}
              className="bg-activeColor px-3 py-2 text-sm text-white rounded-md border border-activeColor"
            >
              Edit Information
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Settings;
