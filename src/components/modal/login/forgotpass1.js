import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2, Xmark } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import DashModal from "../dashboard/dashModal";
import { Input } from "@/components/input";

const ForgotPass1 = ({ 
  isvisible, 
  onClose,
  openForgotPass2,
}) => {
  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const openForgotPass2Modal = () => {
    onClose();
    openForgotPass2();
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="USER ACCOUNT">
        <div className="px-5 mb-3.5">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            Forgot Password
          </Typography>
          <div className="pt-5">
            <Typography
              variant="h19"
              classname=" text-color-brand-yellow2 "
            >
              Please enter your email below to reset your <br></br> password. We’ll send
              you an email with a reset link.
            </Typography>
          </div>

          <div className="pt-5">
            <label htmlFor="email" className="block mb-1.5">
              <Typography
                variant="h12"
                classname="text-color-brand-yellow2 "
              >
                Email
              </Typography>
            </label>
            <Flex className="relative h-[40px]">
              <Input type="email" placeholder="example@domain.com" />
            </Flex>
          </div>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={openForgotPass2Modal}
            >
              Send RESET Email
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ForgotPass1;
