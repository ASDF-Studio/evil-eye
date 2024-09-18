import AudiobuttonForPages from "./component/audiobuttonForPages";
import FooterList from "./component/footerList";
import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import TermText from "./content/termText";

const TermsAndConditions = () => {
  return (
    <div className="h-[100%]">
      <PageFrame title={"Terms"}>
        <TermText />
        <FooterPages />
        <AudiobuttonForPages />
      </PageFrame>
    </div>
  );
};

export default TermsAndConditions;
