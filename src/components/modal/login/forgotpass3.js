import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2, Xmark } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import EmailModal from "../changeEmail/emailModal";
import { Input } from "@/components/input";

const ForgotPass3 = ({ isvisible, onClose }) => {
  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <FlexCenter
      className="z-50 fixed left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm top-[50%]"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="USER ACCOUNT">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            Reset Password
          </Typography>
          <div className="pt-5">
            <label for="password" className="block mb-1.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 "
              >
                New Password
              </Typography>
            </label>
            <Flex className=" relative w-full h-[40px] ">
              <Input type="password"/>
            </Flex>
          </div>
          <div className="pt-5">
            <label for="password" className="block mb-1.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2  "
              >
                Confirm Password
              </Typography>
            </label>
            <Flex className=" relative w-full h-[40px] ">
              <Input type="password"/>
            </Flex>
          </div>
          <Flex className=" justify-center pt-5 pb-2.5">
            <DesignButton className=" w-full" typoVariant="buttonLabel2">
              ENTER
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ForgotPass3;
