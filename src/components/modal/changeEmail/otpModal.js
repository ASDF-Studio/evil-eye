import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2, Xmark } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

const OtpModal = ({ isvisible, onClose }) => {
  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
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
            Change Email
          </Typography>
          <div className="pt-6">
            <Typography
              variant="h12"
              classname=" text-color-brand-yellow2 drop-shadow-3xl "
            >
              We have sent you an OTP to your email address:
              <span className=" underline"> adamvoigt@gmail.com.</span> Please
              enter your code <br></br>below to finish changing your email.
            </Typography>
          </div>

          <div className="pt-4">
            <label for="email" className="block  mb-1.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 drop-shadow-3xl "
              >
                OTP
              </Typography>
            </label>
            <Flex className=" relative w-full h-[40px] ">
              <Input type="email" placeholder="XXXX"/>
            </Flex>
          </div>
          <FlexBetween className="mt-3">
            <Button variant="text" className="w-full" typoVariant="text">
              <Typography
                variant="h12"
                classname="hover:underline flex justify-start text-color-brand-yellow2 drop-shadow-3xl "
              >
                Change Email
              </Typography>
            </Button>
            <Button variant="text" className="w-full" typoVariant="text">
              <Typography
                variant="h12"
                classname="hover:underline flex justify-end text-color-brand-yellow2 drop-shadow-3xl "
              >
                Resend
              </Typography>
            </Button>
          </FlexBetween>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton className=" w-full" typoVariant="buttonLabel2">
              ENTER
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default OtpModal;
