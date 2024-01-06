"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductLists = ({children}: {children:any}) => {
    const tabData = [
        { id: 2, tab: "approved", url: `/my-ads/approved` },
        { id: 1, tab: "pending", url: `/my-ads/pending` },
        { id: 3, tab: "rejected", url: `/my-ads/rejected` },
        { id: 4, tab: "all", url: "/my-ads"},
      ];
  const pathname = usePathname();

  return (
    <section>
      <div className="border-b px-5 py-3.5">
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base font-lexed font-medium">
          My Product Lists
        </h6>
      </div>          
      <div className="">
            <div className=" flex justify-between items-center pb-10 lg:px-2">
              <div
                className={`flex flex-row items-center gap-5 text-base capitalize`}
              >
                {tabData.map((item) => (
                  <Link
                    href={item.url}
                    key={item.id}
                    className={` cursor-pointer ${
                      pathname === item.url
                        ? "border-b border-activeColor text-primaryColor font-semibold"
                        : "border-b border-transparent hover:border-gray-200 text-secondColor font-semibold"
                    }`}
                  >
                    {item.tab}{" "}
                    {/* {selectedTab === item.tab && (
                  <span className="text-gray-400 text-sm">(45)</span>
                )} */}
                  </Link>
                ))}
              </div>
         
            </div>
            {children}
          </div>
    </section>
  );
};

export default ProductLists;
