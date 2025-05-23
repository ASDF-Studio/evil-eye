import { useState, useEffect } from "react";
import { fetchYoutubeFeed } from "@/action/youtubeFeed";
import { FlexCenter, FlexColumn } from "@/components/layout";
import { Design1, Design2, Xmark } from "@/components/logo";
import { Typography } from "@/components/typography";
import { useAudio } from "@/context/AudioContext";
import { useRouter } from "next/router";


const GalleryVideos = ({ isvisible }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const { pauseAudio, resumeAudio } = useAudio(); // ✅ Access context
  const router = useRouter();


useEffect(() => {
  const handleRouteChange = (url) => {
    if (!url.includes("/videos")) {
      resumeAudio();
    }
  };

  router.events.on("routeChangeStart", handleRouteChange);
  return () => {
    router.events.off("routeChangeStart", handleRouteChange);
  };
}, []);
  useEffect(() => {
    if (isvisible) {
      fetchYoutubeFeed().then(setVideos).catch(console.error);
      pauseAudio(); 
    }
  }, [isvisible]);

  
  useEffect(() => {
  if (!isvisible && selectedVideo === null) {
  
    setTimeout(() => {
      resumeAudio();
    }, 300); // 300ms delay
  }
}, [isvisible, selectedVideo]);

  if (!isvisible) return null;

  return (
    <FlexCenter>
      <FlexColumn className="px-4 py-6 w-full h-auto bg-[#091440] gap-6">

        {/* 🔳 Unified 3-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div
              key={video.videoId}
              className="relative aspect-video w-full cursor-pointer"
              onClick={() => setSelectedVideo(video.videoId)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt="YouTube thumbnail"
                className="w-full h-full object-cover border-[1.5px] border-[#D2A42B]"
                onLoad={(e) => {
                  const isGray =
                    e.currentTarget.naturalWidth === 120 &&
                    e.currentTarget.naturalHeight === 90;
                  if (isGray) {
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }
                }}
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" // ← use your uploaded YouTube play icon or this one
      alt="Play"
      className="w-[64px] h-[45px]"
    />
  </div>
              <div className="absolute bottom-2 right-2 bg-[#0C0B59] font-roman text-[#FFCE70] text-[8px] px-2 py-1 rounded">
                {video.label === "SHORTS" ? "SHORTS" : "Video"}
              </div>
            </div>
          ))}
        </div>
      </FlexColumn>

      {/* 🎬 Styled Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
          <div
            className="relative w-full max-w-4xl bg-[#091440] border-2 border-[#D2A42B] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Header */}
            <div className="relative flex items-center justify-between h-[40px] border-b border-[#D2A42B] ">
              <Design1 />
              <Typography
                variant="title"
                classname="text-[16px] text-[#FFCE70] font-roman font-semibold w-full text-center"
              >
                Playing Video
              </Typography>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-[#FFCE70] absolute right-1 top-0"
              >
                <Xmark />
              </button>
              <Design2 />
            </div>

            {/* Bottom gold line under header */}
            <div className="w-full h-[1px] bg-[#D2A42B]" />

            {/* Video */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full border-none"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </FlexCenter>
  );
};

export default GalleryVideos;
