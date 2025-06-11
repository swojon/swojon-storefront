import Image from "next/image";
import { setModalClose } from "@/app/redux/modalSlice";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const OrderSuccessModal = ({}: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleButtonClick = (link: string) => {
    dispatch(setModalClose(true));
    router.push(link);
  };
  return (
    <section className="lg:w-[30%] md:w-[45%] sm:w-[55%] w-[85%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 p-5 relative">
      <button
        className="text-2xl text-primaryColor absolute right-3 top-3"
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>
      <div className="flex justify-center">
        <Image
          src="/stickers/PostSuccessfull.svg"
          alt="success"
          width={200}
          height={200}
          className="w-48"
        />
      </div>

      <p className="text-base font-medium text-secondColor text-center ">
         We recieved your order
      </p>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => handleButtonClick("/profile/my-orders")}
          className="px-4 w-full py-3 text-base bg-activeColor text-white rounded-md "
        >
          View Orders
        </button>
        <button
          onClick={() => handleButtonClick("/")}
          className="px-4 w-full py-3 text-base bg-secondColor text-white rounded-md"
        >
          Go to Home
        </button>
      </div>
    </section>
  );
};

export default OrderSuccessModal;
