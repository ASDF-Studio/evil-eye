import { useEffect } from 'react';

const useGlobalClickAudio = (playAudio) => {
  useEffect(() => {
    const handleClick = () => {
      playAudio();
    };

    // Add event listener for button clicks
    document.addEventListener('click', handleClick);

    return () => {
      // Clean up the event listener on unmount
      document.removeEventListener('click', handleClick);
    };
  }, [playAudio]);
};

export default useGlobalClickAudio;
