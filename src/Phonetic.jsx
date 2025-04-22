import React from "react";
import Audio from "./Audio";

const Phonetic = (props) => {
  
  return (
    <div className="flex">
      <Audio sound={props.phonetics.audio} />
      <div className="py-2 px-3">
      {props.phonetics.text}
      </div>
    </div>
  );
}


export default Phonetic;
