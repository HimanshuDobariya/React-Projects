import React from "react";

const SearchMsg = () => {
  return (
    <div className="flex flex-col items-center my-7">
      <img src="/src/assets/search-city.png" alt="" className="h-48 w-fit" />
      <h1 className="text-4xl font-semibold mt-6">Search City</h1>
      <p className="text-center mt-2">
        Find Out the Weateher Condition of The City
      </p>
    </div>
  );
};

export default SearchMsg;
