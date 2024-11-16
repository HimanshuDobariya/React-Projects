import React from "react";

const Output = ({ outputDetails, handleCompile, processing }) => {
  const getOutPut = () => {
    const statusId = outputDetails?.status?.id;

    if (statusId == 6) {
      return (
        <pre className="font-normal text-base text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId == 3) {
      return (
        <pre className="font-normal text-base text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="font-normal text-base text-red-500">
          Time Limit Exceeded
        </pre>
      );
    } else {
      return (
        <pre className="font-normal text-base text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <>
      <label className="font-bold text-xl mb-2">Output :</label>
      <div className=" w-full h-72 bg-[#1e293b] text-white  border-2 border-black z-10 rounded-md px-4 py-2 mt-2 overflow-auto resize-none mb-6">
        {outputDetails ? <> {getOutPut()} </> : null}
      </div>

      <button
        onClick={handleCompile}
        className="px-6 py-3 bg-[#1e293b] text-white text-xl rounded-lg cursor-pointer block ml-auto"
      >
        {processing ? "Running..." : "Run Code"}
      </button>
    </>
  );
};

export default Output;
