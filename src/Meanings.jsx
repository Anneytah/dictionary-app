import React from "react";
import Synonyms from "./Synonyms";

const Meanings = (props) => {
  return (
    <div className="">
      <section className="bg-white my-4 p-6 rounded-md">
        <h2 className="font-semibold py-3 italic text-xl">
          {props.meaning.partOfSpeech}
        </h2>


        {props.meaning.definitions.map(function (definition, index) {
          if (index < 4){
            return (
              <div key={index} className="mx-6 ">
                <ul className="list-disc">
                <li>{definition.definition}</li>
                </ul>
                <div className="text-sm py-2 opacity-50 italic">
                   {definition.example}
                </div>
              </div>
            );
          }else{
            return null
          }
        })}

        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
};

export default Meanings;
