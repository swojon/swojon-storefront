import React from "react";
import img1 from "@/public/assets/comm1.png";
import img2 from "@/public/assets/comm2.png";
import img3 from "@/public/assets/comm3.png";
import img4 from "@/public/assets/comm4.png";
import CommunityCard from "@/components/Community/CommunityCard";

const card = [
  { id: 134, banner: img1, title: "Chittagong University" },
  { id: 143, banner: img2, title: "Chittagong University" },
  { id: 123, banner: img3, title: "Chittagong University" },
  { id: 122, banner: img4, title: "Chittagong University" },
];

const Community = () => {
  return (
    <section className="my-20 custom-container">
      <div className="flex md:flex-row flex-col justify-between items-center space-y-2 md:space-x-0">
        <h2 className="lg:text-4xl text-2xl font-lexed text-primaryColor font-semiBold">
          Join Your Community
        </h2>
        <button className="border border-activeColor md:py-2 md:px-3 py-1 px-2 rounded  text-activeColor lg:text-base text-sm font-lexed hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 ">
          See All Community
        </button>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 pt-10">
        {card.map((card) => (
          <CommunityCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Community;
