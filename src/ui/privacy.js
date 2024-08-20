import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import PrivacyText from "./content/privacyText";
import AudiobuttonForPages from "./component/audiobuttonForPages";

const PrivacyAndPolicy = () => {
  return (
    <div className="h-[100%]">
      <PageFrame title={"Privacy Policy"}>
        <PrivacyText />
        <FooterPages />
        <AudiobuttonForPages />
      </PageFrame>
    </div>
  );
};

export default PrivacyAndPolicy;
