import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import LegalDisclaimerText from "./pages/legalDisclaimerText";

const LegalDisclaimer = () => {
  return (
    <div className="h-[100%]">
      <PageFrame title={"Legal Disclaimer"}>
        <LegalDisclaimerText />
        <FooterPages />
      </PageFrame>
    </div>
  );
};

export default LegalDisclaimer;
