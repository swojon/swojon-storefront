import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const PointRow = () => {
  return (
    <tr>
      <td className="relative w-12 px-6 sm:w-16 sm:px-8 overflow-visible">
        {/* {selectedListing.includes(listing.id) && (
          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
        )} */}
        <input
          type="checkbox"
          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor sm:left-6"
        />
      </td>
      <td className="h-7 px-3 py-4 text-sm text-secondColor  ">12/11/2023</td>
      <td className="h-7 px-3 py-4 text-sm text-secondColor  ">1200</td>
      <td className="h-7 px-3 py-4 text-sm text-secondColor  ">$ 200</td>
      <td className="h-7 px-3 py-4 text-sm text-secondColor  ">Master Card</td>
      <td className="h-7 px-3 py-4 text-sm text-secondColor  ">
        <BsThreeDots />
      </td>
    </tr>
  );
};

const MyPoints = () => {
  return (
    <section>
      <div className="border-b px-5 py-3.5">
        <h6 className="text-primaryColor text-2xl font-lexed font-medium">
          My Points
        </h6>
      </div>
      <div className="px-5 py-6 space-y-6">
        <div className="space-y-1.5">
          <span className="text-sm text-secondColor ">Available Point</span>
          <div className="flex items-center space-x-1">
            <BiSolidDollarCircle className="text-2xl text-yellow-500" />
            <span className="text-3xl text-primaryColor font-lexed">1230</span>
          </div>
        </div>
        <span className="text-2xl text-primaryColor font-lexed">
          Transaction History
        </span>

        <div className="grid grid-cols-2 ">
          <div className="flex justify-start items-start gap-3">
            <button className="bg-activeColor px-3 py-2 text-sm text-white rounded-md border border-activeColor">
              Purchase
            </button>
            <button className="bg-white px-3 py-2 text-sm text-activeColor rounded-md border border-activeColor">
              Expanse
            </button>
          </div>
          <div className="flex justify-end items-start gap-3">
            <button className="bg-activeColor px-3 py-2 text-sm text-white rounded-md border border-activeColor flex items-center">
              <AiOutlinePlus className="me-1 text-lg" /> Buy my points
            </button>
          </div>
        </div>

        <div className="inline-block min-w-full py-2 align-middle ">
          <div className=" shadow ring-1 ring-secondColor ring-opacity-5 md:rounded-sm">
            <table className="min-w-full divide-y bg-white table-scroll">
              <thead className="bg-gray-10">
                <tr>
                  <th
                    scope="col"
                    className="relative w-12 px-6 sm:w-16 sm:px-8"
                  >
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-base font-bold text-primaryColor  "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-left text-base font-bold text-primaryColor  "
                  >
                    Points
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-base font-bold text-primaryColor "
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-base font-bold text-primaryColor "
                  >
                    Payment method
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-base font-bold text-primaryColor "
                  >
                    actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <PointRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPoints;
