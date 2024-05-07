import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Input } from "@/components/input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { generateResetPasswordLink } from "@/action";
import { InlineError } from "@/validity";

const ForgotPass1 = ({ isvisible, onClose, openForgotPass2 }) => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  const [invalidInputs, setInvalidInputs] = useState({
    isEmailInvalid: false,
  });

  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const openForgotPass2Modal = () => {
    onClose();
    openForgotPass2();
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    setInvalidInputs({
      isEmailInvalid: email ? false : true,
    });
    if (!email) return;

    const data = {
      email: email,
    };

    try {
      await dispatch(generateResetPasswordLink(data));
      openForgotPass2Modal();
    } catch (error) {
      console.error("Error during reset password:", error);
    }
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
          <div className="pt-5">
            <Typography variant="h19" classname=" text-color-brand-yellow2 ">
              Please enter your email below to reset your <br></br> password.
              We’ll send you an email with a reset link.
            </Typography>
          </div>

          <div className="pt-5">
            <label htmlFor="email" className="block mb-1.5">
              <Typography variant="h12" classname="text-color-brand-yellow2 ">
                Email
              </Typography>
            </label>
            <Flex className="relative h-[40px]">
              <Input
                type="email"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Flex>
            {invalidInputs.isEmailInvalid && <InlineError message={"email"} />}
          </div>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handleEmailSubmit}
            >
              {auth.loading == false ? "Send RESET Email" : "Loading..."}
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ForgotPass1;
