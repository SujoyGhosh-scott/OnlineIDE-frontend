import React from "react";

const OutputScreen = ({ status }) => {
  return (
    <>
      <p className="text-xl text-indigo-700">Output</p>
      <div className="bg-gray-100 p-1 flex-1 overflow-y-scroll mt-1">
        <p>Hello World!!!</p>
      </div>
      <div className="text-sm">
        {/*<p>jobId: 12341234</p>*/}
        <p>
          status:{" "}
          <span
            className={`${
              status === "success"
                ? "text-green-500"
                : status === "pending"
                ? "text-yellow-400"
                : "text-red-600"
            }`}
          >
            {status}
          </span>
        </p>
        <p>created At: {Date().slice(0, 34)}</p>
      </div>
    </>
  );
};

export default OutputScreen;