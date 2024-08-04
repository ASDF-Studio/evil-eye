import { ScreenPadding } from "@/components/layout/padding";
import { LandingPage } from "./landingPage";
import { Typography } from "@/components/typography";
import { Flex, FlexBetween } from "@/components/layout";

const Footer = () => {
  return (
    <Flex
      className={
        "w-full flex-col items-center justify-center py-[35px] x:flex-row x:py-[0px] x:justify-between"
      }
    >
      <div>
        <Typography
          variant="h24"
          classname=" text-color-brand-yellow2 opacity-80 "
        >
          <a className="cursor-pointer hover:underline" href="/privacy">
            Privacy Policy
          </a>{" "}
          •{" "}
          <a
            className="cursor-pointer hover:underline"
            href="/terms&conditions"
          >
            Terms & Conditions
          </a>{" "}
          • <a className="cursor-pointer hover:underline">Legal Disclaimer</a>
        </Typography>
      </div>
      <div>
        <Typography
          variant="h24"
          classname=" text-color-brand-yellow2 opacity-80 "
        >
          Copyright © 2024 Evil Eye Remedy All Rights Reserved.
        </Typography>
      </div>
    </Flex>
  );
};

export default Footer;
