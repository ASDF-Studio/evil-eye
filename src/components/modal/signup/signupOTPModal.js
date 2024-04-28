import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { verifyOTP } from "@/action";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { InlineError } from "@/validity";

const SignupOtpModal = ({ isvisible, onClose, openNotification }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInvalidInputs({
      isOTPInvalid: otpValue ? false : true,
    });

    if (!otpValue) return;

    const data = {
      email: user.email,
      otp: otpValue,
    };

    try {
      await dispatch(verifyOTP(data));
      onClose();
      openNotification("signup");
    } catch (error) {
      console.error("Error during signup:", error);
    }
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
            <Typography variant="h12" classname=" text-color-brand-yellow2">
              We have sent you an OTP to your email address:
              <span className=" hover:underline">
                {" "}
                adamvoigt@gmail.com.
              </span>{" "}
              Please enter your code <br></br>below to finish changing your
              email.
            </Typography>
          </div>

          <div className="pt-3.5">
            <label for="email" className="block  mb-1.5">
              <Typography variant="h12" classname=" text-color-brand-yellow2">
                OTP
              </Typography>
            </label>
            <Flex className="relative w-full h-[40px] ">
              <Input
                type="number"
                placeholder="XXXX"
                value={otpValue}
                onChange={(e) => setOTPValue(e.target.value)}
              />
            </Flex>

            {invalidInputs.isOTPInvalid && <InlineError message={"otp"} />}
          </div>
          <FlexBetween className="mt-3">
            <Button
              variant="text"
              className="w-full"
              typoVariant="text"
            ></Button>
            <Button variant="text" className="w-full" typoVariant="text">
              <Typography
                variant="h12"
                classname="underline flex justify-end text-color-brand-yellow2"
              >
                Resend
              </Typography>
            </Button>
          </FlexBetween>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handleSubmit}
            >
              {auth.loading == false ? "Finish Sign Up" : "Loading..."}
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default SignupOtpModal;
