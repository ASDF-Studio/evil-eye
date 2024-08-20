import { FlexBetween, FlexCenter, FlexColumn } from "@/components/layout";
import { Design1, Design2 } from "@/components/logo";
import { Typography } from "@/components/typography";
import React, { useRef } from "react";

const PageFrame = ({ children, title }) => {
  const scrollRef = useRef(null);
  return (
    <div className="flex justify-center items-center ">
      <FlexCenter
        className="w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur shadow-sm"
        id="wrapper"
      >
        <FlexColumn className="w-full h-auto">
          <FlexBetween className=" mt-20 w-full h-[40px] gap-1 border-2 border-color-brand-yellow2">
            <Design1 />
            {/* <Typography
              variant="title"
              classname="w-full flex justify-center items-center h-full text-color-brand-yellow2 "
            >
              {title}
            </Typography> */}
            <h1 className="w-full flex justify-center items-center h-full text-color-brand-yellow2 text-center text-[18px] font-normal font-roman tracking-[-0.9px]">
              {title}
            </h1>
            <Design2 />
          </FlexBetween>
          <div
            ref={scrollRef}
            className="text-brand-yellow p-[20px] w-auto h-[80svh] rounded relative overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent"
            id="smoothScrolling"
          >
            {children}
          </div>
        </FlexColumn>
      </FlexCenter>
    </div>
  );
};
export default PageFrame;
