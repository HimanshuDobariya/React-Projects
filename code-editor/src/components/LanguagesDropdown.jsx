import React from "react";
import { languageOptions } from "../constant/languageoptions";

const LanguagesDropdown = ({ language, onSelectChange }) => {
  return (
    <div className="mb-5 w-48 relative">
      <select
        value={language}
        onChange={onSelectChange}
        className="border-2 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 appearance-none cursor-pointer capitalize"
      >
        {languageOptions.map((languageOption) => (
          <option key={languageOption.id} value={languageOption.name}>
            {languageOption.name}
          </option>
        ))}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.2"
        stroke="currentColor"
        className="h-5 w-5 ml-1 absolute top-3.5 right-2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        />
      </svg>
    </div>
  );
};

export default LanguagesDropdown;
