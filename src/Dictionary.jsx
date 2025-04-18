import React, { useState } from "react";
import "./index.css"
import axios from "axios";
import Results from "./Results";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  function search(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function showSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(search);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <h1 className="font-sans text-2xl pb-3">What word do you want to look up?</h1>
      <form onSubmit={showSearch} className="pb-8 max-w-md  py-3">
        <input
          placeholder="Type a word..."
          type="search"
          className="p-3 border border-gray-300 rounded-md w-full"
          onChange={handleChange}
        />
      </form>
      <Results results={result} />
    </div>
  );
};

export default Dictionary;
