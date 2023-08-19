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
    <div className="bg-white w-full h-[70vh] pt-2">
      {categoryData.data.listCategories.items.map((item) => (
        <div
          className="category-items  "
          onMouseEnter={() => handleItemHover(item.id)}
          // onMouseLeave={handleItemLeave}
          key={item.id}
        >
          <h2 className="hover:bg-red-50 p-3 w-[27%] rounded-sm text-xl font-semibold">
            {item.name}
          </h2>

          {hoveredItem === item.id && (
            <div className="category-sub-items px-4 mt-5  h-[70vh] grid grid-cols-4 gap-4">
              {item.children.map((sub) => (
                <div className="sub-item " key={sub.id}>
                  <h3 className="text-lg italic	">{sub.name}</h3>
                  {sub.children.map((child) => (
                    <p
                      key={child.id}
                      className="text-base text-gray-500 py-[3px]"
                    >
                      {child.name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
