import React, { useEffect, useState } from "react";
import "./MegaMenu.css";
import categoryData from "@/data/categoryData";

const MegaMenu = () => {
  const [hoveredItem, setHoveredItem] = useState("item1");

  // useEffect(() => {
  //   setHoveredItem("item1");
  // }, []);

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

      {/* <div
        className="category-items "
        onMouseEnter={() => handleItemHover("item2")}
       
      >
        <h2 className="hover:bg-red-50 p-3 w-[27%] rounded-sm text-2xl font-semibold">
          Electronics
        </h2>
        {hoveredItem === "item2" && (
          <div className="category-sub-items  px-4 mt-6  h-[70vh]">
           
            <div className="sub-item">Sub Item 2.1</div>
            <div className="sub-item">Sub Item 2.2</div>
          
          </div>
        )}
      </div>
      <div
        className="category-items "
        onMouseEnter={() => handleItemHover("item3")}
       
      >
        <h2 className="hover:bg-red-50 p-3 w-[27%] rounded-sm text-2xl font-semibold">
          Monitor
        </h2>
        {hoveredItem === "item3" && (
          <div className="category-sub-items  px-4 mt-6  h-[70vh]">
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
          </div>
        )}
      </div> */}
    </div>
  );
};

export default MegaMenu;
