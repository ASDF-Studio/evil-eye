import { ScreenPadding } from "@/components/layout/padding";
import { LandingPage } from "./landingPage";

const LandingUI = () => {
  return (
    <ScreenPadding className="pt-[80px] sm:pt-[90px] 5xl:pt-[130px] ">
      <LandingPage />
    </ScreenPadding>
  );
};

export default LandingUI;
