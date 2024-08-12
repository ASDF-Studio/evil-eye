import { Flex } from "@/components/layout";
import AudioPlayer from "@/components/audioPlayer";

const AudiobuttonForPages = () => {
  return (
    <div>
      <Flex className="fixed bottom-0 left-0 p-[20px] hidden x:block">
        <AudioPlayer />
      </Flex>
      <div className="fixed bottom-0 right-0 p-[20px] block x:hidden">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default AudiobuttonForPages;
