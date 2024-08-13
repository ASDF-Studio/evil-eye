import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import AudiobuttonForPages from "./component/audiobuttonForPages";
import DescriptionText from "./pages/descriptionText";
import { DesignButton } from "@/components/button/designButton";
import { Flex } from "@/components/layout";
import ReciteProcess from "./component/reciteModal";

const DescriptionModal = () => {
  return (
    <div className="h-[100%]">
      <PageFrame title={"Description modal"}>
        <DescriptionText />
        <ReciteProcess />
        <FooterPages />
        <AudiobuttonForPages />
      </PageFrame>
    </div>
  );
};

export default DescriptionModal;
