"use client";
import SettingsEditInfo from "@/components/Settings/SettingsEditInfo";
import SettingsInfo from "@/components/Settings/SettingsInfo";
import React, { useState } from "react";

const Settings = () => {
  const [editInformation, setEditInformation] = useState("edit");
  return (
    <section>
      <div className="border-b px-5 py-3.5">
        <h6 className="text-primaryColor text-2xl font-lexed font-medium">
          Settings
        </h6>
      </div>
      <div className="grid grid-cols-2 py-8 px-5">
        <div className=" w-[80%]">
          {editInformation === "edit" ? <SettingsInfo /> : <SettingsEditInfo />}
        </div>
        <div className="flex justify-end items-start gap-3">
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
