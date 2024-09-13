import { FlexBetween, FlexCenter, FlexColumn } from "@/components/layout";
import { Design1, Design2 } from "@/components/logo";
import React, { useRef } from "react";

const PageFrame = ({ children, title, large = false }) => {
  const scrollRef = useRef(null);

  return (
    <div className="flex justify-center items-center">
      <FlexCenter
        className="w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur shadow-sm"
        id="wrapper"
      >
        <FlexColumn className="w-full h-auto">
          <FlexBetween
            className={`w-full gap-1 border-2 border-color-brand-yellow2 items-center ${large ? "mt-[200px] sm:mt-20" : "mt-20"}`}
          >
            {large ? (
              <div className="relative flex flex-col justify-center h-auto overflow-hidden sm:h-[40px]">
                <Design1 />
                <Design1 />
                <Design1 />
                <Design1 />
              </div>
            ) : (
              <div className="relative flex flex-col justify-center h-auto overflow-hidden">
                <Design1 />
              </div>
            )}

            <div className="flex justify-center items-center w-full">
              <h1 className="text-color-brand-yellow2 text-center text-[28px] font-normal font-roman tracking-[-1.4px] uppercase leading-[130%]">
                {title}
              </h1>
            </div>

            {large ? (
              <div className="relative flex flex-col justify-center h-auto overflow-hidden sm:h-[40px]">
                <Design2 />
                <Design2 />
                <Design2 />
                <Design2 />
              </div>
            ) : (
              <div className="relative flex flex-col justify-center h-auto overflow-hidden">
                <Design2 />
              </div>
            )}
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
