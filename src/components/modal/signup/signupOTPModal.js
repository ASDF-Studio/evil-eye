import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2, Xmark } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import DashModal from "../dashModal";
import { Button } from "react-scroll";

const SignupOtpModal = ({ isvisible, onClose }) => {
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
            SIGN UP
          </Typography>
          <div className="pt-3.5">
            <Typography
              variant="h12"
              classname=" text-color-brand-yellow2 drop-shadow-3xl "
            >
              We have sent you an OTP to your email address: 
              <span className=" hover:underline"> adamvoigt@gmail.com.</span> Please enter your code <br></br>below to finish
              changing your email.
            </Typography>
          </div>

          <div className="pt-3.5">
            <label for="email" className="block  mb-1.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 drop-shadow-3xl "
              >
                OTP
              </Typography>
            </label>
            <Flex className=" relative w-[410px] h-[40px] ">
              <FlexBetween className="w-full h-[40px] absolute border-[#D2A42B] border-2 text-brand-gold bg-brand-blue">
                <Design1 />
                <Flex className="absolute justify-start items-center w-full h-[40px] z-50">
                  <input
                    type="text"
                    name="text"
                    id="otp"
                    className="outline-none bg-transparent items-center placeholder:text-textColor-brand-gold2 absolute flex w-full px-7 text-textColor-brand-gold2 h-[40px] "
                    placeholder="XXXX"
                    required
                  />
                </Flex>
                <Design2 />
              </FlexBetween>
            </Flex>
          </div>
          <FlexBetween className="mt-3"><Button
                  variant="text"
                  className="w-full"
                  typoVariant="text"
                  
                >
                  <Typography
                variant="h12"
                classname="hover:underline flex justify-start text-color-brand-yellow2 drop-shadow-3xl "
              >
                Change Email
              </Typography>
                </Button><Button
                  variant="text"
                  className="w-full"
                  typoVariant="text"
                  
                >
                  <Typography
                variant="h12"
                classname="hover:underline flex justify-end text-color-brand-yellow2 drop-shadow-3xl "
              >
                Resend
              </Typography>
                </Button></FlexBetween>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton className=" w-full" typoVariant="buttonLabel2">
              Finish Sign Up
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default SignupOtpModal;
