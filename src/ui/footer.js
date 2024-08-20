import { Typography } from "@/components/typography";
import { Flex } from "@/components/layout";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      className={
        "w-full flex-col items-center justify-center py-[35px] x:flex-row x:py-[0px] x:justify-between x:px-[40px]"
      }
    >
      <div>
        <Typography
          variant="h24"
          classname=" text-color-brand-yellow2 opacity-80 "
        >
          <Link
            className="cursor-pointer hover:underline"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>{" "}
          •{" "}
          <Link
            className="cursor-pointer hover:underline"
            href="/terms-and-conditions"
          >
            Terms & Conditions
          </Link>{" "}
          •{" "}
          <Link
            className="cursor-pointer hover:underline"
            href="/legal-disclaimer"
          >
            Legal Disclaimer
          </Link>
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
