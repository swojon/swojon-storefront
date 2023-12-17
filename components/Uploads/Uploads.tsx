import { MdKeyboardArrowRight } from "react-icons/md";
import CompleteStatusBar from "./CompleteStatusBar";
import UploadImage from "./UploadImage";
import Category from "./Category";

const Uploads = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-5 shadow-xl ">
        <div className="flex items-start gap-2 border-b custom-container">
          <div className="flex-1 space-y-5">
            <div className="flex items-center space-x-1  text-sm text-secondColor">
              <h6>Home</h6>
              <MdKeyboardArrowRight />
              <h6 className="text-primaryColor">List product</h6>
            </div>

            <h5 className="text-2xl text-primaryColor font-lexed font-medium">
              List your Item
            </h5>

            <p className="text-base text-secondColor pb-4">
              Listing an item is unbelievably easy in Swojon.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-end gap-4">
            <button className="py-2 w-24 rounded-md bg-secondColor text-white text-sm hover:shadow-lg">
              Cancel
            </button>
            <button className="py-2 w-24 rounded-md bg-activeColor text-white text-sm hover:shadow-lg">
              Post
            </button>
          </div>
        </div>

        <div className="  pb-5 custom-container">
          <div className="lg:w-[50%] md:w-[70%] w-full">
            <span className="text-base text-secondColor">Let’s complete </span>
            <CompleteStatusBar bar={"35%"} />
          </div>
        </div>
      </div>

      <div className=" custom-container   ">
        <div className="space-y-5 ">
          <UploadImage />
          <Category />
        </div>
      </div>
    </section>
  );
};

export default Uploads;
