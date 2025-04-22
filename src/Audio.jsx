import React, { useRef } from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const Audio = (props) => {
  const audioUrl = props.sound;
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div>
      <div className="inline">
        <button
          onClick={handlePlay}
          className="text-blue-500 cursor-pointer hover:text-blue-700 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-300"
        >
          <HiOutlineSpeakerWave size={24} />
        </button>
        <audio ref={audioRef} src={audioUrl} />
      </div>
    </div>
  );
};

export default Audio;
