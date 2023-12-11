"use client"
import React, { useState } from 'react';

interface DropdownWithCheckboxProps {
  options: string[];
  onChange: (selected: string[]) => void;
}

const DropdownWithCheckbox1: React.FC<DropdownWithCheckboxProps> = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      // If the clicked option is already selected, clear the selection
      setSelectedOptions((prevSelected) => prevSelected.filter((item) => item !== option));
    } else {
      // Clear the current selection and set the new one
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    }

    // Notify parent component about the change
    onChange(selectedOptions);

    // Close the dropdown when an option is selected
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-20 py-6 font-bold text-xl mark font-medium text-black  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 "
        >
          Topic <span className="ml-2">&#9662;</span> {/* Down arrow symbol */}
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white rounded-lg shadow-lg optionDiv">
          <ul
            className="p-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
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

export default DropdownWithCheckbox1;
