import Image from "next/image";
import React from "react";
import beauty from "@/public/hero/hero-3.jpeg";
import fashion from "@/public/assets/long_banner/Kids Fashion.png";
import decor from "@/public/assets/small_banner/Baby Food.png";
import all_kids from "@/public/assets/main_banner/All Kids Item.png";
import model from "@/public/hero/hero-4.jpeg";
import scooty from "@/public/hero/hero-5.jpeg";
import banner from "@/public/assets/main_banner/2nd.png";
import homeApp from "@/public/assets/small_banner/Baby Accessories.png";
import furniture from "@/public/hero/hero-2.jpeg";
import shoes from "@/public/assets/long_banner/Gift Items.png";
import Link from "next/link";


const MASONRY_DATA = [
  // COLUMN2 (middle - col-span-2)
  {
    id: 4,
    title: "Explore all kids Item",
    image:
      "https://res.cloudinary.com/dvqgrbz4r/image/upload/v1745471749/All_Kids_Item_1_svl1ov.png",
    col: 2,
    colSpan: 2,
    cover: true,
  },
  {
    id: 5,
    title: "New Mom Essentials",
    image:
      "https://res.cloudinary.com/dvqgrbz4r/image/upload/v1745330342/New_Mom_Essentials_ukzeir.png",
    col: 2,
    colSpan: 1,
  },
  {
    id: 6,
    title: "Feeder Bottles",
    image:
      "https://res.cloudinary.com/dvqgrbz4r/image/upload/v1745330336/Feeder_Bottles_gecssm.png",
    col: 2,
    colSpan: 1,
    // rowSpan: 2,
  },
  // { id: 7, title: "Popular kitchen picks", image: banner, col: 2, colSpan: 2 },

  // COLUMN1 (left)
  {
    id: 1,
    title: "Accessories for little ones",
    image:
      "https://res.cloudinary.com/dvqgrbz4r/image/upload/v1745330325/Baby_Accessories_vtgdsy.png",
    col: 1,
    colSpan: 1,
  },
  {
    id: 2,
    title: "Kids! Looks good",
    image:
      "https://res.cloudinary.com/dvqgrbz4r/image/upload/v1745334906/Kids_Fashion_1_oddic7.png",
    col: 1,
    colSpan: 1,
    rowSpan: 2,
  },
  // { id: 3, title: "Popular kitchen picks", image: decor, col: 1, colSpan: 1 },

  // COLUMN3 (right)
  {
    id: 10,
    title: "Make it Memorable",
    image:
      "https://res.cloudinary.com/dvqgrbz4r/image/upload/v1745334116/Gift_Items_di9cil.png",
    col: 3,
    colSpan: 1,
    rowSpan: 2,
  },
  // {
  //   id: 8,
  //   title: "Beauty, in bloom",
  //   image: homeApp,
  //   col: 3,
  //   colSpan: 1,
  // },
  {
    id: 9,
    title: "Toys & Fun",
    image:
      "https://res.cloudinary.com/dvqgrbz4r/image/upload/v1745330346/Toys_And_Fun_dwb1z6.png",
    col: 3,
    colSpan: 1,
  },
];

const COLUMN1 = MASONRY_DATA.filter((item) => item.col === 1);
const COLUMN2 = MASONRY_DATA.filter((item) => item.col === 2);
const COLUMN3 = MASONRY_DATA.filter((item) => item.col === 3).sort((a, b) =>
  a.id === 10 ? 1 : b.id === 10 ? -1 : 0
);

const MasonryColumn = ({
  colSpan,
  column,
}: {
  colSpan: string;
  column: {
    id: number;
    cover?: boolean;
    title: string;
    image: any;
    colSpan: number;
  }[];
}) => {
  return (
    <div className={`${colSpan}  grid gap-5 `}>
      {column.map((item) => (
        <div
          key={item.id}
          className={`${
            item.colSpan === 2 ? "col-span-2" : "col-span-1"
          } shadow-md  rounded-lg relative cursor-pointer`}
        >
          <Image
            className="h-full w-full object-cover rounded-lg shadow-md"
            width={1000}
            height={1000}
            src={item?.image || fashion}
            alt={item.title}
          />
          <div className="absolute inset-0 text-blue-950">
            <div className="p-2 md:p-3 lg:p-6 space-y-1.5  ">
              <h5
                className={`${
                  item.cover
                    ? "text-[1.1rem] lg:text-4xl"
                    : "text-[1.1rem] lg:text-[1.37rem]"
                }  font-extrabold line-clamp-2 me-14 tracking-normal`}
              >
                {item.title}
              </h5>
              <Link
                href="/"
                className="underline underline-offset-3 text-xs lg:text-base inline-block text-blue-950/75"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HeroSectionMasonry = () => {
  return (
    <section className="px-[2vw]  max-w-[1700px] mx-auto mt-5 ">
      <div className="h-full sm:grid grid-cols-2 sm:grid-cols-4 gap-5 hidden">
        <MasonryColumn colSpan="col-span-1" column={COLUMN1} />
        <MasonryColumn colSpan="col-span-2" column={COLUMN2} />
        <MasonryColumn colSpan="col-span-1" column={COLUMN3} />
      </div>

      <div className="grid grid-cols-[auto_auto] gap-5 sm:hidden ">
        {MASONRY_DATA.map((banner) => (
          <div
            key={banner.id}
            className={` relative ${
              banner.colSpan === 2 ? "col-span-2" : "col-span-1"
            } ${
              banner.rowSpan === 2 ? "row-span-2" : "row-span-1"
            }  shadow-md  rounded-lg overflow-hidden cursor-pointer`}
          >
            <Image
              className="w-full h-full object-cover  rounded-lg"
              width={1000}
              height={1000}
              src={banner.image}
              alt={banner.title}
            />

            <div className="absolute inset-0 text-blue-950">
              <div className="p-2.5 ">
                <h5
                  className={`${
                    banner.cover ? "text-xl" : "text-[0.8rem] "
                  } font-extrabold line-clamp-2 me-4`}
                >
                  {banner.title}
                </h5>
                <Link
                  href="/"
                  className="underline underline-offset-3 text-xs inline-block"
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
