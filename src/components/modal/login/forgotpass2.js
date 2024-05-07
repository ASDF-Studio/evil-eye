import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { useAppSelector } from "@/hooks";

const ForgotPass2 = ({ 
  isvisible, 
  onClose,
  openForgotPass3, 
}) => {

  const resetEmail = useAppSelector((state) => state.auth.resetEmail);

  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // const openForgotPass3Modal = () => {
  //   onClose();
  //   openForgotPass3();
  // };
  
  const handleLinkSend = () => {
    onClose();
  };

  return (
    <FlexCenter
      className="z-50 fixed left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm top-[70%] sm:top-[50%]"
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
          <div className="pt-6">
            <Typography
              variant="h19"
              classname=" text-color-brand-yellow2"
            >
              We’ve sent you a reset email to your email address: {" "}
              <span className="underline">{resetEmail}</span>
            </Typography>
          </div>

          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton 
              className=" w-full" 
              typoVariant="buttonLabel2"
              onClick={handleLinkSend}
            >
              OKAY
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ForgotPass2;
