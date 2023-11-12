import React from "react";
import Language from "./Language";
import Currency from "./Currency";
import TimeZone from "./TimeZone";

const SettingsEditInfo = () => {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <label className="text-lg text-primaryColor font-lexed font-medium">
          Language
        </label>
        <Language />
      </div>

      <div className="space-y-1.5">
        <label className="text-lg text-primaryColor font-lexed font-medium">
          Currency
        </label>
        <Currency />
      </div>

      <div className="space-y-1.5">
        <label className="text-lg text-primaryColor font-lexed font-medium">
          Time Zone
        </label>
        <TimeZone />
      </div>
    </div>
  );
};

export default SettingsEditInfo;
