// OtpModal.js
import React, { useState } from "react";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { verifyEmailOTP } from "@/action";
import { InlineError } from "@/validity";

const OtpModal = ({ isvisible, newEmail, onClose, openNotification }) => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);

  const [otpValue, setOTPValue] = useState("");

  const [invalidInputs, setInvalidInputs] = useState({
    isOTPInvalid: false,
  });

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();

    setInvalidInputs({
      isOTPInvalid: otpValue ? false : true,
    });

    if (!otpValue) return;

    const data = {
      email: user.email,
      newEmail: newEmail,
      otp: otpValue,
    };

    try {
      await dispatch(verifyEmailOTP(data));
      onClose();
      openNotification("email");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <FlexCenter
      className="z-[60] fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
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
            <Typography variant="h12" classname=" text-color-brand-yellow2 ">
              We have sent you an OTP to your email address:
              <span className=" underline"> {newEmail}.</span> Please enter your
              code <br></br>below to finish changing your email.
            </Typography>
          </div>

          <div className="pt-4">
            <div className="block  mb-1.5">
              <Typography variant="h12" classname=" text-color-brand-yellow2">
                OTP
              </Typography>
            </div>
            <Flex className=" relative w-full h-[40px] ">
              <Input
                type="number"
                placeholder="XXXX"
                value={otpValue}
                onChange={(e) => setOTPValue(e.target.value)}
              />
            </Flex>

            {invalidInputs.isOTPInvalid && <InlineError message={"otp"} />}
          </div>
          <Flex className="justify-end mt-3">
            <Button variant="text" className="w-full" typoVariant="text">
              <Typography
                variant="h12"
                classname="underline flex justify-end text-color-brand-yellow2"
              >
                Resend
              </Typography>
            </Button>
          </Flex>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handleOTPSubmit}
            >
              {auth.loading == false ? "ENTER" : "Loading..."}
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default OtpModal;
