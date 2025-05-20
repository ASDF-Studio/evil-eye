import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState("/audio/Cosmic Space.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = (src) => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying && src !== currentAudio) {
        audio.pause();
      }

      audio.src = src;
      audio.play().catch((err) => console.log("Play prevented:", err));
      setCurrentAudio(src);
      setIsPlaying(true);
    }
  };
  const resumeAudio = () => {
  const audio = audioRef.current;
  if (audio && audio.paused && currentAudio === "/audio/Cosmic Space.mp3") {
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        console.log("Background audio resumed");
      })
      
  }
};

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (src) => {
    if (isPlaying && currentAudio === src) {
      pauseAudio();
    } else {
      playAudio(src);
    }
  };

  useEffect(() => {
    const handleFirstClick = () => {
      playAudio("/audio/Cosmic Space.mp3");
      document.removeEventListener("click", handleFirstClick);
    };

    document.addEventListener("click", handleFirstClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{ isPlaying, playAudio, pauseAudio, resumeAudio, togglePlay }}
    >
      <audio ref={audioRef} />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
