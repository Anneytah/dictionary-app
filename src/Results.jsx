import React from "react";
import Meanings from "./Meanings";

const Results = (props) => {
  if (props.results) {
    return (
      <div>
        <h1 className="text-3xl font-sans capitalize">{props.results.word}</h1>

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
    return null
  }
};

export default Results;
