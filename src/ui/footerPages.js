import { ScreenPadding } from "@/components/layout/padding";
import { LandingPage } from "./landingPage";
import { Typography } from "@/components/typography";
import { Flex, FlexBetween, FlexColumn } from "@/components/layout";
import { Borderline, BorderlinePC, Logo } from "@/components/logo";
import FooterList from "./component/footerList";
import FooterListTablet from "./component/footerListTablet";
import Link from "next/link";

const FooterPages = () => {
  return (
    // <FlexColumn className="w-[100%] absolute bottom-0">
    <FlexColumn className="w-[100%]">
      <div className="w-[100%] p-4 flex items-center justify-center">
        <div className="hidden sm:block">
          <BorderlinePC />
        </div>
        <div className="block sm:hidden">
          <Borderline />
        </div>
      </div>
      <div className="flex items-center justify-center pt-[20px] pb-[30px]">
        <Logo />
      </div>
      <div className="block sm:hidden x:block">
        <FooterList />
      </div>
      <div className="hidden sm:block x:hidden">
        <FooterListTablet />
      </div>
      <Flex
        className={
          "w-full flex-col items-center justify-center pt-[35px] pb-[15px]"
        }
      >
        <div>
          <Typography
            variant="h24"
            classname=" text-color-brand-yellow2 opacity-80 flex flex-col px-[0px] x:flex-row x:pt-[0px]"
          >
            <Link
              className="cursor-pointer hover:underline"
              href="/privacy&policy"
            >
              Privacy Policy
            </Link>
            <span className="hidden x:block"> &nbsp;•&nbsp; </span>
            <Link
              className="cursor-pointer hover:underline"
              href="/terms&conditions"
            >
              Terms & Conditions
            </Link>
            <span className="hidden x:block"> &nbsp;•&nbsp; </span>
            <Link
              className="cursor-pointer hover:underline"
              href="/legalDisclaimer"
            >
              Legal Disclaimer
            </Link>
          </Typography>
        </div>
        <div className="pt-[20px]">
          <Typography
            variant="h24"
            classname=" text-color-brand-yellow2 opacity-80]"
          >
            Copyright © 2024 Evil Eye Remedy All Rights Reserved.
          </Typography>
        </div>
      </Flex>
    </FlexColumn>
  );
};

export default FooterPages;
