import { useState, useRef, useEffect } from "react";

export function SearchableDropdown({
  options,
  placeholder,
  value,
  onChange,
  touched,
  error,
  disabled = false,
}: {
  options: any[]
  placeholder: string
  value: string
  onChange: (value: string) => void
  touched?: boolean;
  error?: string
  disabled?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Filter options based on search term
  const filteredOptions = options.filter((option:any) => option.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // Get selected option name
  const selectedOption = options.find((option:any) => option.name === value)

  return (
    <div className="relative">
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-2 text-sm border rounded-md cursor-pointer ${
          touched && error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white hover:border-gray-400"}`}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption ? selectedOption.name : placeholder}
        </span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-[10000] w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
          }}
        >
          <div className="p-2 border-b border-gray-100">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option:any) => (
                <div
                  key={option.id}
                  onClick={() => {
                    onChange(option)
                    setIsOpen(false)
                    setSearchTerm("")
                  }}
                  className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${
                    option.id === value ? "bg-blue-50 text-blue-700" : "text-gray-900"
                  }`}
                >
                  {option.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">No results found for {searchTerm}</div>
            )}
          </div>
        </div>
      )}

      {touched && error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}