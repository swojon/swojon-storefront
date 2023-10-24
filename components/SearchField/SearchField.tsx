import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import LocationDropDown from "../LocationDropDown/LocationDropDown";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchHistory = ["I phone 12", "I phone 12 pro", "I phone 13"];

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value && !showSuggestions) {
      setShowSuggestions(true);
    } else if (!value) {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (term: any) => {
    setSearchTerm(term);
    setShowSuggestions(false);
  };

  const filteredSuggestions = searchHistory.filter((term) =>
    term.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative ">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  ">
          <MagnifyingGlassIcon
            className="h-7 w-7  p-1.5 bg-activeColor text-white rounded-full mr-1 "
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-2xl border border-gray-300 bg-white py-2 pl-3 pr-8 leading-5 placeholder-[#C0C0C0] focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div
            id="suggestions"
            className="bg-white border border-gray-300 absolute w-full mt-2  rounded-lg z-20"
          >
            <div className=" px-3 pt-3 pb-2">
              <h6 className="text-primaryColor font-lexed text-base font-medium pb-2.5 border-b">
                Previous History
              </h6>
            </div>
            {searchHistory.map((term, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(term)}
                className="text-primaryColor py-0.5 px-3  text-sm hover:text-secondColor cursor-pointer"
              >
                {term}
              </div>
            ))}
            <div className="border-t p-3 mt-3 grid grid-cols-2">
              <div className="flex justify-center items-center border-r gap-2">
                <MdLocationPin className="text-activeColor" />
                <span className="text-primaryColor font-lexed text-sm font-medium  ">
                  <LocationDropDown />
                </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaUsers className="text-activeColor" />
                <span className="text-primaryColor font-lexed text-sm font-medium  ">
                  Community
                </span>
                <IoIosArrowDown className="text-sm text-activeColor" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchField;
