import React from "react";

const Editor = ({ code, setCode, handleSubmit, resetCode, jobId, status }) => {
  return (
    <>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 w-full bg-gray-200"
        style={{ outlineWidth: 0 }}
      ></textarea>

      <div className="flex mt-2">
        <div className="text-sm">
          {jobId && <p>jobId: {jobId}</p>}
          {status && (
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
          )}
          {/*<p>created At: {Date().slice(0, 34)}</p>*/}
        </div>

        <button
          onClick={resetCode}
          className="bg-transparent ml-auto text-indigo-700 border-2 border-indigo-700 text-sm font-semibold py-2 px-4 mr-2 rounded-md inline-flex items-center"
        >
          <span>Reset</span>
        </button>

        <button
          onClick={handleSubmit}
          className="bg-indigo-700 text-indigo-50 text-sm font-semibold py-2 px-4 rounded-md inline-flex items-center"
        >
          <span className="mr-2">Run</span>
          <img
            src="https://img.icons8.com/ios-glyphs/18/ffffff/play--v1.png"
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default Editor;
