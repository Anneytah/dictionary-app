import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import Results from "./Results";
import Photo from "./Photo";

const Dictionary = (props) => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [photo, setPhoto] = useState("");

  function search(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
    setError(null);
  }

  function showSearch(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios
      .get(apiUrl)
      .then(search)
      .catch(() => {
        setError(
          "Sorry pal, we couldn't find definitions for the word you were looking for. Enter a valid word or check your internet connection."
        );
        setResult(null);
      });

    const pixabayKey = "49878769-aad1e50dc1b86be8d0b372ffe";
    const pixabayApiUrl = `https://pixabay.com/api/?key=${pixabayKey}&q=${word}&image_type=photo&pretty=true&per_page=9`;
    axios.get(pixabayApiUrl).then((response) => {
      // console.log(response.data.hits);
      setPhoto(response.data.hits);
    });
  }

  function handleChange(event) {
    setWord(event.target.value);
    setError(null);
  }

  return (
    <div>
      <section className="bg-white rounded-md my-4 p-4 pb-10 mb-9">
        <h1 className="font-sans lg:text-2xl font-semibold sm:text-sm px-6 mt-4">
          What word do you want to look up?
        </h1>
        <form onSubmit={showSearch} className="p-5 pb-2 py-6">
          <input
            placeholder="Type a word..."
            type="search"
            className="p-3 border border-gray-300 rounded-md w-full"
            onChange={handleChange}
          />
        </form>

        <p className="px-6 italic pt-0">i.e. sunset, wine, yoga, coding</p>
      </section>

      {error && (
        <p className="text-red-400 text-lg font-medium py-6">{error}</p>
      )}

      {/* Only show results if available */}
      {result && (
        <>
          <Results results={result} />

          <Photo photo={photo} />
        </>
      )}
    </div>
  );
};

export default Dictionary;
