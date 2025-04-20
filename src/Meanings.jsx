import React from "react";
import Synonyms from "./Synonyms";

const Meanings = (props) => {
  return (
    <div>
      <h2 className="font-semibold capitalize">{props.meaning.partOfSpeech}</h2>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="my-2">
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <em>
                {" "}
                <strong>Example:</strong> {definition.example}
              </em>
            </p>
          </div>
        );
      })}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
};

export default Meanings;
