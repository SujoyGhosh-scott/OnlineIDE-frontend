import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("c");
  const [error, setError] = useState("");
  const [jobId, setJobId] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    //setCode("");
    setOutput("");
    setError("");
    const payload = { lang, code };

    axios
      .post("http://localhost:5000/run", payload)
      .then((res) => {
        console.log("run data: ", res.data);
        setJobId(res.data.jobId);
        let intervalId;

        //after every 1sec we'll use the /status api to get the output
        intervalId = setInterval(async () => {
          const { data: dataResp } = await axios.get(
            `http://localhost:5000/status?id=${res.data.jobId}`
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
    <div className="App">
      <h1 className="text-3xl font-bold underline">Online Code compiler</h1>
      <br />
      <div>
        <label>Coose a language: </label>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="py">python</option>
        </select>
      </div>
      <br />
      <textarea
        rows="20"
        cols="75"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>Job Id: {jobId}</p>
      {output && (
        <div>
          <h1>{status}</h1>
          <p>{output}</p>
        </div>
      )}
      {error && (
        <div>
          <h1>Error</h1>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;

/*
#include<stdio.h>
int main() {
  printf("hello world!");
  return 0;
}
*/
