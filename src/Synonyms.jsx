import React from "react";

const Synonyms = (props) => {

  if (props.synonyms) {
    return (
      <ul className="list-disc">
        <strong>Synonyms:</strong> <br />
        {props.synonyms.map(function(synonyms, index){
          return <li key={index}>
            {synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default Synonyms;
