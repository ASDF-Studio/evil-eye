import PageFrame from "./component/pageFrame";
import FooterPages from "./footerPages";
import PrivacyText from "./pages/privacyText";

const PrivacyAndPolicy = () => {
  return (
    <div className="h-[100%]">
      <PageFrame title={"Privacy Policy"}>
        <PrivacyText />
        <FooterPages />
      </PageFrame>
    </div>
  );
};

export default PrivacyAndPolicy;
