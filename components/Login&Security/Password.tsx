import React from "react";

const Password = ({ setEditBtn }: { setEditBtn: any }) => {
  return (
    <>
      <form className="space-y-3">
        <div>
          <label
            htmlFor="userName"
            className="block sm:text-base text-sm font-medium text-secondColor font-lexed capitalize"
          >
            Current password
          </label>
          <div className="my-1">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="John Doe"
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
          <span className="relative   whitespace-nowrap cursor-pointer text-base text-activeColor">
            Need new a password
            <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-activeColor"></span>
          </span>
        </div>

        <div>
          <label
            htmlFor="userName"
            className="block sm:text-base text-sm font-medium text-secondColor font-lexed capitalize"
          >
            New password
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="John Doe"
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="userName"
            className="block sm:text-base text-sm font-medium text-secondColor font-lexed capitalize"
          >
            Confirm password
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="John Doe"
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center justify-end py-3 ">
          <button
            onClick={() => setEditBtn("")}
            className="text-sm text-secondColor"
          >
            Cancel
          </button>

          <button className="py-2 px-4 rounded-md border border-activeColor text-sm text-white bg-activeColor">
            Update Password
          </button>
        </div>
      </form>
    </>
  );
};

export default Password;
