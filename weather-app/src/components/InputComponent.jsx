import React from "react";
import { IoSearch } from "react-icons/io5";
import { useWeather } from "../context/Weather";

const InputComponent = () => {
  const weather = useWeather();

  const handleInput = (e) => {
    if (e.key == "Enter" && weather.search.trim() != "") {
      weather.fetchData();
      weather.setSearch("");
    }
  };

  const handleClick = () => {
    if (weather.search.trim() == "") return;
    weather.fetchData();
    weather.setSearch("");
  };

  return (
    <div className="flex items-center gap-1">
      <input
        type="text"
        placeholder="Search City"
        className="w-full px-4 py-2 rounded-3xl bg-[#00000080] outline-none placeholder:text-[#FFFFFFBF] text-white"
        value={weather.search}
        onChange={(e) => {
          weather.setSearch(e.target.value);
        }}
        onKeyDown={handleInput}
      />
      <button
        className="p-2 bg-[#00000080] text-[#FFFFFFBF] cursor-pointer rounded-full"
        onClick={handleClick}
      >
        <IoSearch className="text-xl" />
      </button>
    </div>
  );
};

export default InputComponent;
