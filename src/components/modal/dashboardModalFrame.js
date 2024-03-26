import React from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../layout";
import { Design1, Design2, Xmark } from "../logo";
import { Typography } from "../typography";

const DashboardModalFrame = ({ onClose, children, title }) => {
  return (
    <FlexCenter
      className="w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur shadow-sm"
      id="wrapper"
      onClick={onClose}
    >
      <FlexColumn className=" w-screen h-screen mt-36 ">
      <FlexColumn className="bg-backgroundColor-brand-blue-95 w-auto h-auto border-2 border-color-brand-yellow2 shadow-buttonShadow3 sm:top-50% m-3">
        <FlexBetween className=" w-full h-[40px] gap-1 border-2 border-color-brand-yellow2">
          <Design1 />
          <Typography
            variant="title"
            classname="w-full ml-10 flex justify-center items-center h-full text-color-brand-yellow2 "
          >
            {title}
          </Typography>
          <FlexCenter>
            <button
              className="text-textColor-brand-yellow place-self-end w-[28px]"
              onClick={() => onClose()}
            >
              <Xmark />
            </button>
          </FlexCenter>
          <Design2 />
        </FlexBetween>
        <div className=" text-brand-yellow w-auto h-auto rounded ">
          {children}
        </div>
      </FlexColumn>
      </FlexColumn>
    </FlexCenter>
  );
};
export default DashboardModalFrame;
