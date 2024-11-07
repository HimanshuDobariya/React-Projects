import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center my-7">
      <img src="/src/assets/not-found.png" alt="" className="h-48 w-fit" />
      <h1 className="text-4xl font-semibold mt-6">Not Found</h1>
      <p className="text-center mt-2">
        Please Write Valid City Name and find Weather Condition of The City
      </p>
    </div>
  );
};

export default NotFound;
