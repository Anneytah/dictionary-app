import React from 'react'
import './App.css'
import Dictionary from './Dictionary'

function App() {

  return (
    <>
      <div className="text-center m-20 bg-gray-100 p-20">
         
      <h1 className='text-red-400 font-bold text-4xl p-3'>DICTIONARY APP</h1>
     
      <p className="text-[#888] pb-10">
        Welcome to my Dictionary Project with React
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
    </>
  )
}

export default App
