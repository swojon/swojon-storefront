import React from "react";
import banner1 from "@/public/drmo (2).jpg";
import banner2 from "@/public/drmo (1).jpg";
import banner3 from "@/public/hero/model.jpg";
import banner4 from "@/public/pro3.png";
import banner5 from "@/public/hero/beauty.jpg";
import Image from "next/image";

const DATA = [
  {
    id: 1,
    title: "Amazing new arrivals",
    image: banner1,
    colSpan: "2",
    rowSpan: "2",
    bb: true,
  },
  {
    id: 12,
    title: "Amazing new arrivals",
    image: banner2,
    colSpan: "2",
    rowSpan: "1",
  },
  {
    id: 13,
    title: "Amazing new arrivals",
    image: banner3,
    colSpan: "1",
    rowSpan: "2",
  },
  {
    id: 14,
    title: "Amazing new arrivals",
    image: banner4,
    colSpan: "1",
    rowSpan: "1",
  },
  {
    id: 15,
    title: "Amazing new arrivals",
    image: banner5,
    colSpan: "1",
    rowSpan: "1",
  },
];

const MasonryBoxes = () => {
  return (
    <div className="custom-container2">
      <div className="grid md:grid-cols-[auto_auto_auto_auto_auto] grid-cols-[auto_auto] md:gap-5 gap-3 ">
        {DATA.map((box) => (
          <div
            key={box.id}
            className={` relative ${box.colSpan === "2" && "col-span-2"} ${
              box.rowSpan === "2" && "row-span-2"
            }  rounded-lg`}
          >
            <Image
              className="w-full h-full object-cover  rounded-lg"
              src={box.image}
              alt={box.title}
            />

            <div className="absolute inset-0 md:p-3 p-1 md:space-y-2 space-y-1 text-blue-950">
              <span
                className={`${
                  box.bb
                    ? "lg:text-4xl md:text-3xl text-2xl"
                    : "lg:text-xl md:text-lg sm:text-base text-sm"
                } font-bold block text-wrap 
`}
              >
                {box.title}
              </span>

              <button
                className={`underline underline-offset-2  ${
                  box.bb
                    ? "md:text-lg text-base"
                    : "md:text-base sm:text-sm text-xs"
                }`}
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryBoxes;
