import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import AudiobuttonForPages from "./component/audiobuttonForPages";


import ReciteProcess from "./component/reciteModal";
import GalleryVideos from "./content/galleryVideos";

const YTModal = () => {
  return (
    <div className="h-[100%]">
      <PageFrame
        title={
          "VIDEO LIBRARY"
        }
        large={true}
      >
        <GalleryVideos isvisible={true} />
        <ReciteProcess />
        <FooterPages />
        <AudiobuttonForPages />
      </PageFrame>
    </div>
  );
};

export default YTModal;
