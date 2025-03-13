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
import Link from "next/link";

const RESDATA = [
  {
    id: 1,
    title: "Beauty, in bloom",
    image: youth,
    colSpan: "col-span-2",
    rowSpan: "1",
  },

  {
    id: 2,
    title: "Time for a reset",
    image: model,
    colSpan: "col-span-1",
    rowSpan: "1",
  },
  {
    id: 24,
    title: "Time for a reset",
    image: fashion,
    colSpan: "col-span-1",
    rowSpan: "2",
  },
  {
    id: 3,
    title: "Popular kitchen picks",
    image: scooty,
    colSpan: "col-span-1",
    rowSpan: "1",
  },

  {
    id: 4,
    title: "Popular kitchen picks",
    image: banner,
    colSpan: "col-span-2",
    rowSpan: "1",
  },
  {
    id: 36,
    title: "Popular kitchen picks",
    image: shoes,
    colSpan: "col-span-1",
    rowSpan: "2",
  },
  {
    id: 12,
    title: "Beauty, in bloom",
    image: homeApp,
    colSpan: "col-span-1",
    rowSpan: "1",
  },

  {
    id: 25,
    title: "Time for a reset",
    image: furniture,
    colSpan: "col-span-1",
    rowSpan: "1",
  },
];

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
    <div className={`${colSpan}  grid gap-5 `}>
      {column.map((item) => (
        <div key={item.id} className={`${item.colSpan} `}>
          <Image
            className="h-full w-full rounded-lg shadow-md"
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
    <section className="px-[2vw] max-w-[1700px] mx-auto mt-5 ">
      <div className="h-full sm:grid grid-cols-2 sm:grid-cols-4 gap-5 hidden">
        <MasonryColumn colSpan="col-span-1" column={COLUMN1} />
        <MasonryColumn colSpan="col-span-2" column={COLUMN2} />
        <MasonryColumn colSpan="col-span-1" column={COLUMN3} />
      </div>

      <div className="grid grid-cols-[auto_auto] gap-5 sm:hidden ">
        {RESDATA.map((banner) => (
          <div
            key={banner.id}
            className={` relative ${
              banner.colSpan === "col-span-2" && "col-span-2"
            } ${banner.rowSpan === "2" && "row-span-2"}  shadow-md`}
          >
            <Image
              className="w-full h-full object-cover  rounded-lg"
              src={banner.image}
              alt={banner.title}
            />

            <div className="absolute inset-0 text-blue-950">
              <div className="p-2.5 space-y-1">
                <h5 className="text-[1.1rem ] font-bold truncate">
                  {banner.title}
                </h5>
                <Link
                  href="/"
                  className="underline underline-offset-3 text-sm inline-block"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSectionMasonry;
