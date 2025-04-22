import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import Results from "./Results";

const Dictionary = (props) => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function search(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
    setError(null)
  }

  function showSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(search).catch(() => {
      setError ("Incorrect Word!");
      setResult(null);
    });
  }

  function handleChange(event) {
    setWord(event.target.value);
    setError(null)
  }


    return (
      <div>
        <h1 className="font-sans text-2xl pb-3 mt-4">
          What word do you want to look up?
        </h1>
        <form onSubmit={showSearch} className="pb-8 p-6 py-6 bg-white rounded-md w-full">
          <input
            placeholder="Type a word..."
            type="search"
            className="p-3 border border-gray-300 rounded-md w-full"
            onChange={handleChange}
          />
        </form>

        {error && (
        <p className="text-red-500 text-lg font-medium py-6">{error}</p>
      )}

      {/* Only show results if available */}
      {result && <Results results={result} />}
      </div>
    );
};

export default Dictionary;
