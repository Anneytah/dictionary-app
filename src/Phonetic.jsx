import React from "react";
import Audio from "./Audio";

const Phonetic = (props) => {
  
  return (
    <div className="flex">
      <Audio sound={props.phonetics.audio} />
      <div className="py-2 px-3 opacity-50 font-bold">
      {props.phonetics.text}
      </div>
    </div>
  );
}


export default Phonetic;
