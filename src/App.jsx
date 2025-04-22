import React from "react";
import "./App.css";
import "./index.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <>
      <div className="bg-[#076767] overflow-hidden">
        <div className="lg:max-w-5xl h-full m-20 rounded-xl mx-auto p-10">
          <h1 className="text-[#888] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-3 text-center">
            DICTIONARY
          </h1>

          <p className="text-white pb-10 text-center text-sm sm:text-sm md:text-2xl lg:text-2xl">
            Welcome to my Dictionary Project built with React and Tailwind
          </p>

          <Dictionary />

          <footer className="dictionary-footer text-white">
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
