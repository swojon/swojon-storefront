import { setModalClose, setModalOpen } from "@/app/redux/modalSlice";
import Image from "next/image";
import { FiPaperclip } from "react-icons/fi";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";

const Category = [
  { id: 1, item: "Furniture ", img: "/assets/seater-sofa 1.png" },
  { id: 2, item: "fitness sports", img: "/assets/dumbbell 1.png" },
  { id: 3, item: "Furniture", img: "/assets/seater-sofa 1.png" },
  { id: 4, item: "fitness sports", img: "/assets/dumbbell 1.png" },
  { id: 5, item: "fitness sports", img: "/assets/dumbbell 1.png" },
  { id: 6, item: "fitness sports", img: "/assets/dumbbell 1.png" },
  { id: 7, item: "fitness sports", img: "/assets/dumbbell 1.png" },
  { id: 8, item: "fitness sports", img: "/assets/dumbbell 1.png" },
  { id: 9, item: "fitness sports", img: "/assets/dumbbell 1.png" },
];

const SellProductModal = ({}: {props: any}) => {
  const dispatch = useDispatch();
  return (
    <section className="  w-full h-full  space-y-3 lg:space-y-4 pb-4">
      <div className="flex justify-between p-4  items-center">
        <h5 className="font-lexed text-base lg:text-lg text-primaryColor font-medium">
          Please, select a category
        </h5>
        <button
          className="rounded-full bg-activeColor p-1 border  text-white"
          onClick={() => dispatch(setModalClose(true))}
        >
          <MdClose />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 px-4">
        {Category.map((cat) => (
          <div
            className="p-2 rounded-md border bg-[#F1FAF7] flex justify-between items-center cursor-pointer"
            key="cat.id"
          >
            <div className="flex items-center space-x-2 ">
              <Image
                src={cat.img}
                alt="icon"
                className="h-4 w-5 "
                width={160}
                height={100}
              />
              <h6 className="text-base text-activeColor font-lexed capitalize">
                {cat.item}
              </h6>
            </div>

            <MdKeyboardArrowRight className="text-lg text-primaryColor" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellProductModal;
