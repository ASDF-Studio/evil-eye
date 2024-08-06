// AudioContext.js
import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((err) => console.log("Play prevented:", err));
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  useEffect(() => {
    const handleFirstClick = () => {
      playAudio();
      document.removeEventListener("click", handleFirstClick);
    };

    document.addEventListener("click", handleFirstClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{ isPlaying, playAudio, pauseAudio, togglePlay }}
    >
      <audio ref={audioRef} src="/audio/Cosmic Space.mp3" />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
