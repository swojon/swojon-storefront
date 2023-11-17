"use client";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/system";

const StyledSlider = styled(Slider)(({ theme: any }) => ({
  color: "#3b51a4", // Track color
  "& .MuiSlider-thumb": {
    backgroundColor: "#3b51a4",
    width: 14,
    height: 14,
    boxShadow: "0px 0px 20px #a7b4e2",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#a7b4e2", // Rail color
  },
}));

const PriceRangeSlider = () => {
  const [range, setRange] = useState([0, 50]);
  function handleChanges(event: any, newValue: any) {
    setRange(newValue);
  }
  return (
    <div className="px-1">
      <StyledSlider
        value={range}
        onChange={handleChanges}
        valueLabelDisplay="auto"
      />
      <div className="pt-1 grid grid-cols-2 gap-2">
        <div className="border flex items-center justify-center py-1.5 rounded">
          <span className=" leading-none flex items-center text-sm">
            {range[0]}
          </span>
        </div>
        <div className="border flex items-center justify-center py-1.5 rounded">
          <span className=" leading-none flex items-center text-sm">
            {range[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
