import React, { useEffect, useState } from "react";
import { Flex, FlexCenter } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Input } from "../../input";
import { DesignButton3 } from "@/components/button/designButton3";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { signup } from "@/action";
import { InlineError } from "@/validity";
import ModalScroll from "../modalScroll";

const SignupModal = ({
  isvisible,
  onClose,
  openDashboard,
  openLogin,
  openForgotPassword,
  openSignupOTP,
  openNotification,
}) => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const { signupError: signupError } = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    setError(signupError);
  }, [signupError]);

  useEffect(() => {
    if (auth.otp_open) {
      openSignupOTPModal(email);
    }
  }, [dispatch, auth.otp_open]);

  const [invalidInputs, setInvalidInputs] = useState({
    isNameInvalid: false,
    isEmailInvalid: false,
    isPasswordInvalid: false,
    isPasswordConfirmedInvalid: false,
  });

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

  const openLoginModal = () => {
    onClose();
    openLogin();
  };

  const openSignupOTPModal = (email) => {
    onClose();
    openSignupOTP(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidInputs({
      isNameInvalid: name ? false : true,
      isEmailInvalid: email ? false : true,
      isPasswordInvalid: password ? false : true,
      isPasswordConfirmedInvalid: confirmPassword ? false : true,
    });

    if (!name || !email || !password || !confirmPassword) return;

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      await dispatch(signup(user));
      if (auth.otp_open) {
        openSignupOTPModal(email);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  if (!isvisible) return null;

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm 2xl:mt-16 4xl:mt-0"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="USER ACCOUNT">
        <ModalScroll>
          <div className="px-5 mb-3.5">
            <Typography
              variant="h11"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              SIGNUP
            </Typography>
          </div>
          <div className="px-2 text-left">
            <div className="space-y-5 h-[500px] sm:h-[600px] 2xl:h-auto w-full overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-5 text-left  pb-5">
              <div>
                <label htmlFor="email" className="block mb-1.5">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    Your Name
                  </Typography>
                </label>
                <Flex className="relative h-[40px]">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Flex>
                {invalidInputs.isNameInvalid && (
                  <InlineError message={"name"} />
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1.5">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
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
                {invalidInputs.isEmailInvalid && (
                  <InlineError message={"email"} />
                )}
              </div>

              <div>
                <label htmlFor="password" className="block mb-1.5">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    Password
                  </Typography>
                </label>
                <Flex className="relative h-[40px]">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Flex>
                {invalidInputs.isPasswordInvalid && (
                  <InlineError message={"password"} />
                )}
              </div>

              <div>
                <label htmlFor="password" className="block mb-1.5">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2 "
                  >
                    Confirm Password
                  </Typography>
                </label>
                <Flex className="relative h-[40px]">
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Flex>
                {invalidInputs.isPasswordConfirmedInvalid && (
                  <InlineError message={"password"} />
                )}

                {error && (
                  <div className="pt-2">
                    <Typography variant="h12" classname="text-red-600">
                      {error}
                    </Typography>
                  </div>
                )}
              </div>
              <Flex className="justify-center w-[100%]">
                <DesignButton
                  className="w-full"
                  typoVariant="buttonLabel2"
                  onClick={handleSubmit}
                >
                  {auth.loading == false ? "SIGN UP" : "Loading..."}
                </DesignButton>
              </Flex>

              <hr className="w-auto sm:w-[410px] border-color-brand-op" />
              <div className="">
                <FlexCenter className="w-auto mt-2 text-color-brand-yellow2">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    Already have an account?
                  </Typography>
                </FlexCenter>
                <Flex className="relative focus:none focus:border-none w-full h-[40px] mt-2">
                  <DesignButton3
                    className="w-full"
                    typoVariant="buttonLabel2"
                    onClick={openLoginModal}
                  >
                    LOGIN
                  </DesignButton3>
                </Flex>
              </div>
              <hr className="w-auto sm:w-[410px] border-color-brand-op" />
              <FlexCenter className="w-auto">
                <Typography
                  variant="h12"
                  classname="hover:underline text-color-brand-yellow2"
                >
                  Continue as guest
                </Typography>
              </FlexCenter>
            </div>
          </div>
        </ModalScroll>
      </ModalFrame>
    </FlexCenter>
  );
};

export default SignupModal;
