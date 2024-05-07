import React from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../layout";
import { Design1, Design2, Xmark } from "../logo";
import { Typography } from "../typography";

const DashboardModalFrame = ({ onClose, children, title }) => {
  return (
    <FlexCenter
      className="w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur shadow-sm  "
      id="wrapper"
      onClick={onClose}
    >
      <FlexColumn className=" w-screen h-screen 1xl:h-auto mt-32 1xl:mt-0 ">
        <div className="h-[85%] 1xl:h-auto overflow-y-auto overflow-hidden  m-3 sm:m-0">
          <FlexColumn className="bg-backgroundColor-brand-blue-95 w-auto 1xl:h-auto border-2 border-color-brand-yellow2 shadow-buttonShadow3 sm:top-50%">
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
            <div className=" text-brand-yellow w-auto sm:h-auto rounded ">
              {children}
            </div>
          </FlexColumn>
        </div>
      </FlexColumn>
    </FlexCenter>
  );
};
export default DashboardModalFrame;
