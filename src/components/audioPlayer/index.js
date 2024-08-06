import { useState, useEffect, useRef } from "react";
import { DesignButton } from "../button/designButton";
import { PauseAudio, PlayAudio } from "../logo";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.muted = true;
      audio
        .play()
        .then(() => {
          audio.muted = false;
        })
        .catch((err) => {
          console.log("Autoplay prevented:", err);
          setIsPlaying(false);
        });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=" w-[85px]">
      <audio ref={audioRef} src="/audio/Cosmic Space.mp3" />
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
