import React, { useState, useEffect } from "react";

import Editor from "./components/Editor";
import { data } from "./components/langTemplate";
import Navbar from "./components/Navbar";
import OutputScreen from "./components/OutputScreen";

const App2 = () => {
  const [status, setStatus] = useState("success");
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("c");

  useEffect(() => {
    setCode(data[lang]);
  }, [lang]);

  return (
    <div className="container flex flex-col">
      <Navbar lang={lang} setLang={setLang} />

      {/**main body. editor and output screen */}
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full flex-1 flex flex-col md:w-3/5 p-2">
          <Editor code={code} setCode={setCode} />
        </div>
        <div
          className="border-2 border-indigo-700 p-2 flex flex-col w-full md:w-2/5"
          style={{ minHeight: 200 }}
        >
          <OutputScreen status={status} />
        </div>
      </div>

      {/**footer */}
      <div className="p-1 text-center text-sm">
        Made by{" "}
        <a
          href="https://sujoy-ghosh-portfolio.netlify.app/"
          className="font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          Sujoy
        </a>
      </div>
    </div>
  );
};

export default App2;
