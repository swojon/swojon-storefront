import React, { useEffect, useState } from "react";
import "./MegaMenu.css";
import categoryData from "@/data/categoryData";

const MegaMenu = () => {
  const [hoveredItem, setHoveredItem] = useState("item1");

  useEffect(() => {
    setHoveredItem("item1");
  }, []);

  const handleItemHover = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };
  return (
    <div className="bg-white  pt-2">
      <h1 className="text-3xl"> hello</h1>
    </div>
  );
};

export default MegaMenu;
