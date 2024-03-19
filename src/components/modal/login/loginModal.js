import React from "react";
import { Flex, FlexBetween, FlexCenter } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2 } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Button } from "../../button";
import { Input } from "../../input";
import { DesignButton3 } from "../../button/designButton3";

const LoginModal = ({
  isvisible,
  onClose,
  openDashboard,
  openSignup,
  openForgotPass1,
}) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const openDashboardModal = () => {
    onClose();
    openDashboard();
  };

  const openSignupModal = () => {
    onClose();
    openSignup();
  };
  const openForgotPass1Modal = () => {
    onClose();
    openForgotPass1();
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
            LOGIN
          </Typography>
        </div>  
        <div className="px-5 text-left pb-5">
          <div className="space-y-5" action="#">
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
            <Flex className="w-[410px] justify-end">
              <FlexBetween className="w-auto">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Forgot Password?
                </Typography>
                <Button
                  variant="text"
                  className="w-full"
                  typoVariant="text"
                  onClick={openForgotPass1Modal}
                >
                  <Typography
                    variant="text"
                    classname="hover:underline cursor-pointer text-color-brand-yellow2"
                  >
                    Reset
                  </Typography>
                </Button>
              </FlexBetween>
            </Flex>
            <Flex className="justify-center pb-2.5 w-[100%]">
              <DesignButton
                className="w-full"
                typoVariant="buttonLabel2"
                onClick={openDashboardModal}
              >
                ENTER
              </DesignButton>
            </Flex>

            <hr className="w-[410px] border-color-brand-op" />
            <div className="pb-2.5">
              <FlexCenter className="w-[410px] mb-5 text-color-brand-yellow2">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 drop-shadow-3xl "
                >
                  Don't have account
                </Typography>
              </FlexCenter>
              <Flex className="relative focus:none focus:border-none w-[100%] h-[40px]">
                <DesignButton3
                  className="w-full"
                  typoVariant="buttonLabel2"
                  onClick={openSignupModal}
                >
                  SIGN UP
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

export default LoginModal;
