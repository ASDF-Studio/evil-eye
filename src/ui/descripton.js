import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import AudiobuttonForPages from "./component/audiobuttonForPages";
import DescriptionText from "./content/descriptionText";
import ReciteProcess from "./component/reciteModal";

const DescriptionModal = () => {
  return (
    <div className="h-[100%]">
      <PageFrame
        title={
          "Understanding the Evil Eye: Symptoms and Powerful Prayer for Protection"
        }
        large={true}
      >
        <DescriptionText />
        <ReciteProcess />
        <FooterPages />
        <AudiobuttonForPages />
      </PageFrame>
    </div>
  );
};

export default DescriptionModal;
