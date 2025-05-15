import { useState, useEffect } from "react";


import { fetchYoutubeFeed } from "@/action/youtubeFeed";
import { FlexCenter, FlexColumn } from "@/components/layout";



const GalleryVideos = ({ isvisible }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log({ isvisible });

  useEffect(() => {
    if (isvisible) {
      fetchYoutubeFeed().then(setVideos).catch(console.error);
    }
  }, [isvisible]);

  if (!isvisible) return null;
  return (
    <FlexCenter
      
    >
      
          <FlexColumn className="px-4 py-6 w-full h-auto bg-[#091440] gap-6">
            {selectedVideo ? (
              <div className="w-full h-full">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border-[1.5px] border-[#D2A42B]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube video player"
                  ></iframe>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="mt-4 text-sm font-roman text-yellow-400 no-underline"
                >
                  ← Back to Gallery
                </button>
              </div>
            ) : null}
            {/* Top Two Videos */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-0">
  {videos.slice(0, 2).map((video) => (
    <div
      key={video.videoId}
      className="relative aspect-video w-full"
    >
                  <div
                    onClick={() => setSelectedVideo(video.videoId)}
                    className="cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt="YouTube thumbnail"
                      className="w-full h-full object-cover border-[1.5px] border-[#D2A42B]"
                    />
                    <div className="absolute bottom-[12px] right-2 bg-[#0C0B59] font-roman text-[#FFCE70] text-[8px] px-2 py-1 rounded">
                      {video.label === "SHORTS" ? `"SHORTS "` : "Video"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
  {videos.slice(2).map((video) => (
    <div
      key={video.videoId}
      className="relative aspect-video w-full"
    >

                  <div
                    onClick={() => setSelectedVideo(video.videoId)}
                    className="cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt="YouTube thumbnail"
                      className="w-full h-full object-cover border-[1.5px] border-[#D2A42B]"
                    />
                    <div className="absolute bottom-2 right-2 bg-[#0C0B59] font-roman text-[#FFCE70] text-[8px] px-2 py-1 rounded">
                      {video.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FlexColumn>
       
    </FlexCenter>
  );
};
export default GalleryVideos;