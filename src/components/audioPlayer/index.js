import React from "react";
import { DesignButton } from "../button/designButton";
import { PauseAudio, PlayAudio } from "../logo";
import { useAudio } from "@/context/AudioContext";

const AudioPlayer = () => {
  const { isPlaying, togglePlay } = useAudio();
  const audioSrc = "/audio/Cosmic Space.mp3";

  return (
    <div className="w-[85px]">
      <DesignButton
        variant="text"
        className=""
        audioClassName="px-[1px]"
        typoVariant="buttonLabel2"
        onClick={() => togglePlay(audioSrc)}
      >
        {isPlaying && audioSrc === "/audio/Cosmic Space.mp3" ? (
          <PlayAudio />
        ) : (
          <PauseAudio />
        )}
      </DesignButton>
    </div>
  );
};

export default AudioPlayer;
