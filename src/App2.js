import React, { useState, useEffect } from "react";
import axios from "axios";

import Editor from "./components/Editor";
import { data } from "./components/langTemplate";
import Navbar from "./components/Navbar";
import OutputScreen from "./components/OutputScreen";

const App2 = () => {
  const [lang, setLang] = useState("c");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const [jobId, setJobId] = useState("");
  const [status, setStatus] = useState("");

  console.log("msg: ", process.env.REACT_APP_SECRET_NAME);

  useEffect(() => {
    setCode(data[lang]);
  }, [lang]);

  const resetCode = () => {
    setCode(data[lang]);
  };

  const handleSubmit = () => {
    //setCode("");
    setOutput("");
    setError("");
    const payload = { lang, code };
    //http://localhost:5000/run
    axios
      .post(`${process.env.REACT_APP_APIBASE}/run`, payload)
      .then((res) => {
        console.log("run data: ", res.data);
        setJobId(res.data.jobId);
        let intervalId;

        //after every 1sec we'll use the /status api to get the output
        intervalId = setInterval(async () => {
          const { data: dataResp } = await axios.get(
            `${process.env.REACT_APP_APIBASE}/status?id=${res.data.jobId}`
          );
          console.log("status data: ", dataResp);
          const { success, job, error } = dataResp;

          if (success) {
            const { status, output: jobOutput } = job;
            setStatus(status);
            if (status === "pending") return;
            setOutput(jobOutput);

            clearInterval(intervalId);
          } else {
            console.error("status api error: ", error);
            //set error message

            clearInterval(intervalId);
          }
        }, 1000);
      })
      .catch(({ response }) => {
        console.error("err resp: ", response);
        //if (response) setErro r(response.data.err.stderr);
        //else setError("Error connecting to server");
      });
  };

  return (
    <div className="container flex flex-col">
      <Navbar lang={lang} setLang={setLang} />

      {/**main body. editor and output screen */}
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full flex-1 flex flex-col md:w-3/5 p-2">
          <Editor
            code={code}
            setCode={setCode}
            handleSubmit={handleSubmit}
            resetCode={resetCode}
            status={status}
            jobId={jobId}
          />
        </div>
        <div
          className="border-2 border-indigo-700 p-2 flex flex-col w-full md:w-2/5"
          style={{ minHeight: 200 }}
        >
          <OutputScreen output={output} error={error} />
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
