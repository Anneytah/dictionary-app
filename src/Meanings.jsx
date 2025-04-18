import React from "react";

const Meanings = (props) => {
  return (
    <div>
      <h2 className="">{props.meaning.partOfSpeech}</h2>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="my-2">
            <p>
              Definition: {definition.definition}
              <br />
              <em>Example: {definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Meanings;
