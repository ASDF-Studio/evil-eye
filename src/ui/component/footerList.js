import { Button } from "@/components/button";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "@/components/layout";
import { Design1, Design2 } from "@/components/logo";
import { Typography } from "@/components/typography";
import React from "react";

const FooterList = ({ children, title }) => {
  const NAV__LINK = [
    {
      path: "price",
      display: "Home",
      icon: "",
    },
    {
      path: "contact",
      display: "What is Evil Eye",
      icon: "",
    },
    {
      path: "login",
      display: "Symptoms",
      icon: "",
    },
    {
      path: "price",
      display: "Cure",
      icon: "",
    },
    {
      path: "contact",
      display: "Pricing",
      icon: "",
    },
    {
      path: "login",
      display: "Contact us",
      icon: "",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <FlexCenter className="gap-2 flex flex-col items-center justify-center sm:flex-row">
        {NAV__LINK.map((item, index) => (
          <React.Fragment key={index}>
            <Button variant="text2" onClick={() => handlePath(item.path)}>
              <FlexCenter className="gap-2">
                <Typography
                  variant="buttonPrimary"
                  classname="text-color-brand-yellow2 font-roman whitespace-nowrap"
                >
                  {item.display}
                </Typography>
              </FlexCenter>
            </Button>
            {index < NAV__LINK.length - 1 && (
              <Flex className="text-center justify-center hidden sm:block">
                <i className="w-[1px] h-[40px] border-r-2 border-color-brand-yellow2 opacity-20" />
              </Flex>
            )}
          </React.Fragment>
        ))}
      </FlexCenter>
    </div>
  );
};
export default FooterList;



