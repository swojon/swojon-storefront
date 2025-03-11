import Image from "next/image";
import React from "react";
import beauty from "@/public/hero/beauty.jpg";
import fashion from "@/public/hero/fashion.jpg";
import decor from "@/public/hero/decor.jpg";
import youth from "@/public/hero/youth.jpg";
import model from "@/public/hero/model.jpg";
import scooty from "@/public/hero/scooty.jpg";
import banner from "@/public/hero/banner.jpg";
import homeApp from "@/public/hero/homeApp.png";
import furniture from "@/public/hero/pro3.png";
import shoes from "@/public/hero/shoes.jpg";

const COLUMN1 = [
  { id: 1, title: "Beauty, in bloom", image: beauty, colSpan: "col-span-1" },
  {
    id: 2,
    title: "Time for a reset",
    image: fashion,
    colSpan: "col-span-1",
  },
  {
    id: 3,
    title: "Popular kitchen picks",
    image: decor,
    colSpan: "col-span-1",
  },
];
const COLUMN2 = [
  { id: 1, title: "Beauty, in bloom", image: youth, colSpan: "col-span-2" },
  {
    id: 2,
    title: "Time for a reset",
    image: model,
    colSpan: "col-span-1",
  },
  {
    id: 3,
    title: "Popular kitchen picks",
    image: scooty,
    colSpan: "col-span-1",
  },
  {
    id: 4,
    title: "Popular kitchen picks",
    image: banner,
    colSpan: "col-span-2",
  },
];

const COLUMN3 = [
  { id: 1, title: "Beauty, in bloom", image: homeApp, colSpan: "col-span-1" },
  {
    id: 2,
    title: "Time for a reset",
    image: furniture,
    colSpan: "col-span-1",
  },
  {
    id: 3,
    title: "Popular kitchen picks",
    image: shoes,
    colSpan: "col-span-1",
  },
];

const MasonryColumn = ({
  colSpan,
  column,
}: {
  colSpan: string;
  column: { id: number; title: string; image: any; colSpan: string }[];
}) => {
  return (
    <div className={`${colSpan}  grid gap-4`}>
      {column.map((item) => (
        <div key={item.id} className={`${item.colSpan} `}>
          <Image
            className="h-full w-full rounded-2xl shadow-md"
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

const HeroSectionMasonry = () => {
  return (
    <section className="custom-container mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
        <MasonryColumn colSpan="col-span-1" column={COLUMN1} />
        <MasonryColumn colSpan="col-span-2" column={COLUMN2} />
        <MasonryColumn colSpan="col-span-1" column={COLUMN3} />
      </div>
    </section>
  );
};

export default HeroSectionMasonry;
