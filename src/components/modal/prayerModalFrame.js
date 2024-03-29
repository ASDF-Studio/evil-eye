import React from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../layout";
import { Design1, Design2, Xmark } from "../logo";
import { Typography } from "../typography";

const PrayerModalFrame = ({ onClose, children, title }) => {
  return (
    <div className=" flex justify-center items-center w-screen sm:w-[650px] ">
      <FlexCenter
      className="w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur shadow-sm"
      id="wrapper"
      onClick={onClose}
    >
      <FlexColumn className=" h-[600px] overflow-y-auto overflow-hidden sm:h-auto mt-20 sm:mt-0 m-3">
      <FlexColumn className="bg-backgroundColor-brand-blue-95 h-auto border-2 border-color-brand-yellow2 shadow-buttonShadow3 w-auto ">
        <FlexBetween className=" w-full h-[40px] gap-1 border-2 border-color-brand-yellow2">
          <Design1 />
          <Typography
            variant="title"
            classname="w-full ml-10 flex justify-center items-center h-full text-color-brand-yellow2 "
          >
            {title}
          </Typography>
          {/* <FlexCenter>
            <button
              className="text-textColor-brand-yellow place-self-end w-[28px]"
              onClick={() => onClose()}
            >
              <Xmark />
            </button>
          </FlexCenter> */}
          <Design2 />
        </FlexBetween>
        <div className=" text-brand-yellow w-auto sm:w-[648px] h-[750px] rounded relative">
          {children}
        </div>
      </FlexColumn>
      </FlexColumn>
    </FlexCenter>
    </div>
  );
};
export default PrayerModalFrame;
