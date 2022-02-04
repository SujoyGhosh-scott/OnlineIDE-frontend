import React from "react";

const OutputScreen = ({ output, error }) => {
  return (
    <>
      <p className="text-xl text-indigo-700">Output</p>
      <div className="bg-gray-100 p-1 flex-1 overflow-y-scroll mt-1">
        <p>{output}</p>
        <p>{error}</p>
      </div>
    </>
  );
};

export default OutputScreen;
