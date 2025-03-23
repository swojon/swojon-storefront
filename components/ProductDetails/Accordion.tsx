import { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({ title, content }: { title: string; content: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-300 py-2">
      {/* Accordion Header */}
      <button
        className="w-full flex justify-between items-center p-4 text-left text-xl font-bold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FaChevronDown
          className={`text-gray-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Accordion Content with Smooth Transition */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-3 pt-2 ps-8 pe-4 text-base text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
