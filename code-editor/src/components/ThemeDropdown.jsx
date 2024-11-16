import React from "react";
import monacoThemes from "monaco-themes/themes/themelist";

const ThemeDropdown = ({ theme, handleThemeChange }) => {

  return (
    <div className="mb-5 w-56 relative">
      <select
        value={theme}
        onChange={handleThemeChange}
        className="border-2 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 appearance-none cursor-pointer capitalize"
      >
        {Object.entries(monacoThemes).map(([themeId, ThemeName]) => (
          <option key={themeId} value={ThemeName}>
            {ThemeName}
          </option>
        ))}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.2"
        stroke="currentColor"
        className="h-5 w-5 ml-1 absolute top-3.5 right-2.5 bg-white"
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

export default ThemeDropdown;
