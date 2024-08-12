import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import AudiobuttonForPages from "./component/audiobuttonForPages";
import DescriptionText from "./pages/descriptionText";

const DescriptionModal = () => {
  return (
    <div className="h-[100%]">
      <PageFrame title={"Description modal"}>
        <DescriptionText />
        <FooterPages />
        <AudiobuttonForPages />
      </PageFrame>
    </div>
  );
};

export default DescriptionModal;
