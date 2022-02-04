import React from "react";

const Navbar = ({ lang, setLang }) => {
  return (
    <nav className="p-4 bg-indigo-700 text-indigo-50 flex flex-col md:flex-row justify-between font-sans items-center">
      <h1 className="text-2xl w-full md:w-fit font-semibold text-indigo-50">
        Online Code Editor
      </h1>
      <div className="w-full md:w-fit">
        <span className="">Choose a language: </span>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-transparent rounded ml-1 px-2 py-1 border-2 border-indigo-500 text-sm"
          style={{ outlineWidth: 0 }}
        >
          <option className="bg-indigo-700" value="c">
            C
          </option>
          <option className="bg-indigo-700" value="cpp">
            C++
          </option>
          <option className="bg-indigo-700" value="py">
            Python
          </option>
          <option className="bg-indigo-700" value="java" disabled>
            Java
          </option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
