import React, { useState } from "react";
import { FlexCenter, FlexColumn } from "../../layout";
import ModalFrameLogin from "../modalFrameLogin";
import ModalScroll from "../modalScroll";
const videos = [
  { videoId: "dQw4w9WgXcQ", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg", label: "11.5k" },
  { videoId: "9bZkp7q19f0", thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg", label: "11.5k" },
  { videoId: "oHg5SJYRHA0", thumbnail: "https://i.ytimg.com/vi/oHg5SJYRHA0/mqdefault.jpg", label: "SHORTS" },
  { videoId: "OV5bFOyrJd8", thumbnail: "https://i.ytimg.com/vi/OV5bFOyrJd8/mqdefault.jpg", label: "11.5k" },
  { videoId: "3JZ_D3ELwOQ", thumbnail: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg", label: "SHORTS" },
  { videoId: "2Vv-BfVoq4g", thumbnail: "https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg", label: "11.5k" },
  { videoId: "iEfK2Hg015M", thumbnail: "https://i.ytimg.com/vi/iEfK2Hg015M/mqdefault.jpg", label: "SHORTS" },
  { videoId: "nGRMQZ-x8NQ", thumbnail: "https://i.ytimg.com/vi/nGRMQZ-x8NQ/mqdefault.jpg", label: "11.5k" },
  { videoId: "fJ9rUzIMcZQ", thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg", label: "SHORTS" },
];
const YoutubeGalleryModal = ({ isvisible, onClose }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  if (!isvisible) return null;
  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm transform -translate-x-1/2 -translate-y-1/2"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrameLogin onClose={onClose} title="YOUTUBE GALLERY">
        <ModalScroll>
          <FlexColumn className="px-4 py-6 w-[958px] bg-[#091440] gap-6">
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
) : (
  <></>
)}
            {/* Top Two Videos */}
            <div className="grid grid-cols-2 gap-4 mb-0">
  {videos.slice(0, 2).map((video) => (
    <div
  key={video.videoId}
  className="relative w-full h-auto 2xl:w-[445px] 2xl:h-[259px]"
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
      {video.label}
    </div>
  </div>
</div>
  ))}
</div>
<div className="grid grid-cols-3 gap-4">
  {videos.slice(2).map((video) => (
    <div
  key={video.videoId}
  className="relative w-full h-auto 2xl:w-[292px] 2xl:h-[166px]"
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
        </ModalScroll>
      </ModalFrameLogin>
    </FlexCenter>
  );
};
export default YoutubeGalleryModal;