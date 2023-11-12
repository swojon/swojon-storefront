import React from "react";

const SettingsInfo = () => {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <h6 className="text-lg text-primaryColor font-lexed font-medium">
          Language
        </h6>
        <div className="p-2 bg-[#F4F4F4] text-sm text-gray-400 rounded-md">
          English
        </div>
      </div>

      <div className="space-y-1.5">
        <h6 className="text-lg text-primaryColor font-lexed font-medium">
          Currency
        </h6>
        <div className="p-2 bg-[#F4F4F4] text-sm text-gray-400 rounded-md">
          BDT
        </div>
      </div>

      <div className="space-y-1.5">
        <h6 className="text-lg text-primaryColor font-lexed font-medium">
          Time Zone
        </h6>
        <div className="p-2 bg-[#F4F4F4] text-sm text-gray-400 rounded-md">
          BD (- 6Hours)
        </div>
      </div>
    </div>
  );
};

export default SettingsInfo;
