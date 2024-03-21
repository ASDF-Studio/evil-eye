import React from "react";
import { Flex, FlexBetween, FlexCenter } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2 } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Button } from "../../button";
import { Input } from "../../input";
import { DesignButton3 } from "@/components/button/designButton3";

const SignupModal = ({
  isvisible,
  onClose,
  openDashboard,
  openForgotPassword,
  openSignupOTP,
}) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const openForgotPasswordModal = () => {
    onClose();
    openForgotPassword();
  };

  const openDashboardModal = () => {
    onClose();
    openDashboard();
  };

  const openSignupOTPModal = () => {
    onClose();
    openSignupOTP();
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
            classname="text-color-brand-yellow2 drop-shadow-3xl "
          >
            SIGNUP
          </Typography>
        </div>
        <div className="px-2 text-left pb-5">
          <div className="space-y-5 h-[300px] w-full overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-5 text-left" >
            <div>
              <label htmlFor="email" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Your Name
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input type="text" placeholder="Your Name" />
              </Flex>
            </div>
            <div>
              <label htmlFor="email" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Email
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input type="email" placeholder="example@domain.com" />
              </Flex>
            </div>

            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Password
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input type="password" />
              </Flex>
            </div>

            <div>
              <label htmlFor="password" className="block mb-1.5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Confirm Password
                </Typography>
              </label>
              <Flex className="relative h-[40px]">
                <Input type="password" />
              </Flex>
            </div>
            <Flex className="justify-center w-[100%]">
              <DesignButton
                className="w-full"
                typoVariant="buttonLabel2"
                onClick={openSignupOTPModal}
              >
                SIGN UP
              </DesignButton>
            </Flex>

            <hr className="w-[410px] border-color-brand-op" />
            <div className="">
              <FlexCenter className="w-[410px] mt-2 text-color-brand-yellow2">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Already have an account?
                </Typography>
              </FlexCenter>
              <Flex className="relative focus:none focus:border-none w-full h-[40px] mt-2">
                <DesignButton3
                  className="w-full"
                  typoVariant="buttonLabel2"
                >
                  LOGIN
                </DesignButton3>
              </Flex>
            </div>
            <hr className="w-[410px] border-color-brand-op" />
            <FlexCenter className="w-[410px]">
              <Typography
                variant="h12"
                classname="hover:underline text-color-brand-yellow2 drop-shadow-3xl "
              >
                Continue as guest
              </Typography>
            </FlexCenter>
          </div>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default SignupModal;
