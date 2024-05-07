import React from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../layout";
import { Design1, Design2, Xmark } from "../logo";
import { Typography } from "../typography";

const NotificationFrame = ({ onClose, children, title }) => {
  return (
    <FlexCenter
      className="fixed inset-0 bg-black bg-opacity-25 shadow-sm z-50"
      id="wrapper"
      onClick={onClose}
    >
      <FlexColumn className="w-screen px-4 sm:w-[650px] ">
        <FlexColumn className="bg-backgroundColor-brand-blue-95 bg-opacity-95 border-2 border-color-brand-yellow2 shadow-buttonShadow3">
          <FlexBetween className="w-auto h-auto border-1 border-color-brand-yellow2">
            <Design1 />
            <Typography
              variant="title"
              classname="w-screen text-color-brand-yellow2"
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
          <div className="text-brand-yellow rounded relative h-auto w-auto">
            {children}
          </div>
        </FlexColumn>
      </FlexColumn>
    </FlexCenter>
  );
};
export default NotificationFrame;
