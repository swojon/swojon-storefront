import Link from "next/link";
import categoryData from "../../data/categoryData";
import "./CategoryCard.css";
import Image from "next/image";
import { ImArrowRight2 } from "react-icons/im";

const CategoryCard = () => {
  return (
    <div className="custom-container grid grid-cols-5 gap-5">
      {categoryData.data.listCategories.items.map((item) => (
        <Link
          href={`/categories/${item.slug}`}
          key={item.id}
          className=" relative h-[200px] w-[200px] shadow rounded-lg category-item"
        >
          <Image
            src={item.cardImg}
            alt="categoryImg"
            className="object-cover absolute bottom-0 left-0 w-full h-full rounded-lg "
          />
          <div className="categoryCard z-30 relative p-3 w-full h-full rounded-lg">
            <div class="img-wrapper h-[165px] rounded-lg">
              <Image
                src={item.cardImg}
                alt="categoryImg"
                className="object-cover  w-full h-full rounded-lg categoryImg "
              />
            </div>

            <div className="pt-4 flex justify-between items-center">
              <h2 className=" text-black text-xl  font-semibold">
                {item.name}
              </h2>
              <ImArrowRight2 className="text-xl ]" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;
