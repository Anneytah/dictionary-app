import React from "react";

const Synonyms = (props) => {

  if (props.synonyms) {
    return (
      <div className="my-4 p-0 ">
        {props.synonyms.map(function(synonyms, index){
          return <p key={index}  className="inline-block text-sm border-1 text-center m-1 p-1.5 rounded-full">
            {synonyms}</p>;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Synonyms;
