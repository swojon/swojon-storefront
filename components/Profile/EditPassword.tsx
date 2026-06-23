import React from "react";

const EditPassword = ({ setEditBtn }: { setEditBtn: any }) => {
  return (
    <div>
      <form>
        <span className="md:text-base text-sm font-medium text-primaryColor font-lexed capitalize ">
          Edit Password
        </span>
        <div className="pt-2">
          <label
            htmlFor="currentPass"
            className="block text-sm font-medium text-gray-700 capitalize"
          >
            Current password
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="password"
                name="currentPass"
                id="currentPass"
                className="block w-full rounded-none rounded-l-md border border-gray-300 pl-3 focus:outline-none focus:border-activeColor focus:ring-activeColor text-sm bg-gray-50"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border-r border-t border-b border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700   focus:outline-none "
            >
              Show
            </button>
          </div>
        </div>

        <div className="pt-2">
          <label
            htmlFor="confirmPass"
            className="block text-sm font-medium text-gray-700 capitalize"
          >
            Confirm password
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                className="block w-full rounded-none rounded-l-md border border-gray-300 pl-3 focus:outline-none focus:border-activeColor focus:ring-activeColor text-sm bg-gray-50"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border-r border-t border-b border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700   focus:outline-none "
            >
              Show
            </button>
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

export default EditPassword;
