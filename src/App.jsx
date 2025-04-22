import React from "react";
import "./App.css";
import "./index.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <>
      <div className="bg-[#f8f7fd] overflow-hidden">
        <div className="max-w-3xl h-full m-20 rounded-xl border-2 mx-auto p-10">
          <h1 className="text-red-300 font-bold text-5xl p-3 text-center">
            DICTIONARY
          </h1>

          <p className="text-[#888] pb-10 text-center">
            Welcome to my Dictionary Project built with React and Tailwind
          </p>

          <Dictionary />

          <footer className="dictionary-footer">
            This project was coded by
            <a href="https://github.com/Anneytah" target="_blank">
              {""} Aniago Somtochukwu
            </a>
            , is
            <a
              href="https://github.com/Anneytah/Advanced-WeatherApp"
              target="_blank"
            >
              {""} open-sourced on GitHub
            </a>{" "}
            and
            <a href="https://advancedweatherapp25.netlify.app/" target="_blank">
              {""} hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
