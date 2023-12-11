"use client"
import React, { useState } from 'react';
// ... (existing imports)

interface DropdownWithCheckboxProps {
  options: string[];
  onChange: (selected: string[]) => void;
}

const DropdownWithCheckbox2: React.FC<DropdownWithCheckboxProps> = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    let newSelection: string[];

    if (selectedOptions.includes(option)) {
      // If the clicked option is already selected, clear the selection
      newSelection = [];
    } else {
      // Clear the current selection and set the new one
      newSelection = [option];
    }

    // Update the state with the new selection
    setSelectedOptions(newSelection);

    // Notify the parent component about the change
    onChange(newSelection);
  };

  const handleMouseEnter = () => {
    // Open the dropdown when the mouse enters the div
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Close the dropdown when the mouse leaves the div
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-20 py-6 font-bold text-xl mark font-medium text-black  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 "
        >
          Tags <span className="ml-2">&#9662;</span> {/* Down arrow symbol */}
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white rounded-lg shadow-lg optionDiv" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul
            className="p-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option: string) => (
              <li key={option}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="form-checkbox h-5 w-5 text-violet-950"
                  />
                  <span className="ml-2 text-gray-700">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckbox2;
