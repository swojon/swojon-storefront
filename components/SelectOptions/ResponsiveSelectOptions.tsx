import { useState, useRef, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const options = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
];

const ResponsiveSelectOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const [selected, setSelected] = useState(options[0]); // Default selection
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to toggle dropdown and determine its position
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);

    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      setPosition(
        spaceBelow > 200 || spaceBelow > spaceAbove ? "bottom" : "top"
      );
    }
  };
  return (
    <div className="relative inline-block">
      {/* Selected Option (Trigger) */}
      <div
        className="p-3 w-[100px] border border-secondColor rounded-2xl cursor-pointer bg-white flex justify-between items-center gap-3"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <span>
          Qty <span className="font-semibold">{selected.label}</span>
        </span>
        <span className="text-gray-500">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul
          className={`absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10 transition-all ${
            position === "bottom" ? "top-full mt-1" : "bottom-full mb-1"
          }`}
        >
          {options.map((option) => (
            <li
              key={option.id}
              className="p-3 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              <span
                className={`${
                  selected.id === option.id
                    ? "text-primaryColor font-semibold"
                    : "text-secondColor"
                }`}
              >
                {option.label}
              </span>
              {selected.id === option.id && (
                <span className="text-green-500">✔</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResponsiveSelectOptions;
