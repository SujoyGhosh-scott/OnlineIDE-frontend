import React from "react";

const Editor = ({ code, setCode }) => {
  return (
    <>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 w-full bg-gray-200"
        style={{ outlineWidth: 0 }}
      ></textarea>
      <div className="flex justify-end mt-2">
        <button className="bg-transparent text-indigo-700 border-2 border-indigo-700 text-sm font-semibold py-2 px-4 mr-2 rounded-md inline-flex items-center">
          <span>Reset</span>
        </button>
        <button className="bg-indigo-700 text-indigo-50 text-sm font-semibold py-2 px-4 rounded-md inline-flex items-center">
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
