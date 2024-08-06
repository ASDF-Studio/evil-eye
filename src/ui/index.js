import { ScreenPadding } from "@/components/layout/padding";
import { LandingPage } from "./landingPage";

const LandingUI = () => {
  return (
    <ScreenPadding className="pt-[1px] overflow-auto h-600:pt-[20px] h-600:overflow-hidden h-800:pt-[40px] sm:pt-[90px] 5xl:pt-[130px] ">
      <LandingPage/>
    </ScreenPadding>
  );
};

export default LandingUI;
