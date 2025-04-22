import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

const Results = (props) => {
  if (props.results) {
    return (
      <div>
        <section className="bg-white my-4 p-6 rounded-md">
          <h1 className="text-3xl font-sans py-2">
            {props.results.word}
          </h1>
          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <div key={index} className="py-2">
                <Phonetic phonetics={phonetics} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="my-6">
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
