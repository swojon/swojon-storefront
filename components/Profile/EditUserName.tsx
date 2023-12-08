import React from "react";

const EditUserName = ({ setEditBtn }: { setEditBtn: any }) => {
  return (
    <div>
      <form>
        <div>
          <label
            htmlFor="userName"
            className="block md:text-base text-sm font-medium text-primaryColor font-lexed capitalize"
          >
            Edit full name
          </label>
          <div className="mt-3">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="John Doe"
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end py-3 ">
          <button
            onClick={() => setEditBtn("")}
            className="  hover:border-b text-sm text-secondColor"
          >
            Cancel
          </button>

          <button className="py-1 px-4 rounded-md border border-activeColor text-sm text-white bg-activeColor">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserName;
