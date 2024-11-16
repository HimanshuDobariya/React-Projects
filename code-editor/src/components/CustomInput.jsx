import React from "react";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <label className="font-bold text-xl mb-2">
        Inputs :
      </label>
      <textarea
        rows="6"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder="Write inputs Here.."
        className="focus:outline-none w-full border-2 border-black z-10 rounded-md px-4 py-2 bg-white mt-2 overflow-auto resize-none mb-6"
      ></textarea>
    </>
  );
};

export default CustomInput;
