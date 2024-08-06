import React from "react";
import { DesignButton } from "../button/designButton";
import { PauseAudio, PlayAudio } from "../logo";
import { useAudio } from "@/context/AudioContext";

const AudioPlayer = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="w-[85px]">
      <DesignButton
        variant="text"
        className=""
        audioClassName="px-[1px]"
        typoVariant="buttonLabel2"
        onClick={togglePlay}
      >
        {isPlaying ? <PlayAudio /> : <PauseAudio />}
      </DesignButton>
    </div>
  );
};

export default AudioPlayer;
