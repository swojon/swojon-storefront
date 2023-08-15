import React, { useEffect, useState } from "react";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // Start with null

  useEffect(() => {
    // Show the first category's sub-items by default when nothing is hovered
    setHoveredItem("item1");
  }, []); // Empty dependency array ensures this effect runs only once

  const handleItemHover = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };
  return (
    <div className="bg-white w-full h-[70vh] pt-2">
      <div
        className="category-items  "
        onMouseEnter={() => handleItemHover("item1")}
        onMouseLeave={handleItemLeave}
      >
        <h2 className="hover:bg-red-50 p-3 w-[27%] rounded-sm text-2xl font-semibold">
          Car
        </h2>
        {hoveredItem === "item1" && (
          <div className="category-sub-items px-4 mt-6  h-[70vh]">
            <div className="sub-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at
              mollitia in modi dolorum vitae, exercitationem animi, quisquam
              maxime repellat error quibusdam iste beatae est soluta? Impedit
              aliquid odit possimus, iure iusto non in tempora blanditiis
              magnam? Facilis, itaque repellendus assumenda cumque, harum
              deleniti natus, qui tempora consequuntur nobis necessitatibus?
            </div>
            <div className="sub-item">Sub Item 1.2</div>
            <div className="sub-item">Sub Item 1.2</div>
            <div className="sub-item">Sub Item 1.2</div>
          </div>
        )}
      </div>
      <div
        className="category-items "
        onMouseEnter={() => handleItemHover("item2")}
        onMouseLeave={handleItemLeave}
      >
        <h2 className="hover:bg-red-50 p-3 w-[27%] rounded-sm text-2xl font-semibold">
          Electronics
        </h2>
        {hoveredItem === "item2" && (
          <div className="category-sub-items  px-4 mt-6  h-[70vh]">
            {/* Sub-items content for Item 2 */}
            <div className="sub-item">Sub Item 2.1</div>
            <div className="sub-item">Sub Item 2.2</div>
            {/* Add more sub-items as needed */}
          </div>
        )}
      </div>
      <div
        className="category-items "
        onMouseEnter={() => handleItemHover("item3")}
        onMouseLeave={handleItemLeave}
      >
        <h2 className="hover:bg-red-50 p-3 w-[27%] rounded-sm text-2xl font-semibold">
          Monitor
        </h2>
        {hoveredItem === "item3" && (
          <div className="category-sub-items  px-4 mt-6  h-[70vh]">
            {/* Sub-items content for Item 2 */}
            <div className="sub-item">Sub Item 3.1</div>
            <div className="sub-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic
              vitae fugit, nulla incidunt consequatur consectetur alias
              recusandae tenetur suscipit. Porro eos obcaecati voluptate itaque
              quidem expedita laboriosam ad eveniet quisquam optio maxime
              numquam placeat, quam, esse aperiam dolorum a laborum incidunt
              exercitationem nam quo dicta. Natus sapiente eius laudantium illum
              aliquam voluptas tenetur non obcaecati. Minus impedit sequi vero
              molestias nostrum aut explicabo? Atque quas ipsa veritatis! Neque,
              ipsum.
            </div>
            {/* Add more sub-items as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
