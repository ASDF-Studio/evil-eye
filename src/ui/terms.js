import FooterList from "./component/footerList";
import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import TermText from "./pages/termText";

const TermsAndConditions = () => {
  return (
    <div className="h-[100%]">
      <PageFrame title={"Terms and Conditions"}>
        <TermText />
        <FooterPages />
      </PageFrame>
    </div>
  );
};

export default TermsAndConditions;
