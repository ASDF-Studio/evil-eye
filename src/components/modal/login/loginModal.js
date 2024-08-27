import React, { useEffect, useState } from "react";
import { Flex, FlexBetween, FlexCenter } from "../../layout";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import { Button } from "../../button";
import { Input } from "../../input";
import { DesignButton3 } from "../../button/designButton3";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { isUserLoggedIn, login } from "@/action";
import { InlineError } from "@/validity";
import { guest, guestFromLogin } from "@/action/modal.action";
import ModalScroll from "../modalScroll";
import { useRouter } from "next/router";

const LoginModal = ({
  isvisible,
  onClose,
  openDashboard,
  openSignup,
  openForgotPass1,
  openNotification,
}) => {
  const dispatch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);

  const router = useRouter();

  const [error, setError] = useState("");
  const { loginError: loginError } = useAppSelector((state) => state.auth);

  const [showGuestModal, setShowGuestModal] = useState(true);

  React.useEffect(() => {
    setError(loginError);
  }, [loginError]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [invalidInputs, setInvalidInputs] = useState({
    isEmailInvalid: false,
    isPasswordInvalid: false,
  });

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

  const handleGuest = async (e) => {
    e.preventDefault();

    setShowGuestModal(true);
    onClose();
    dispatch(guest(false));
    await dispatch(guestFromLogin(showGuestModal));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInvalidInputs({
      isEmailInvalid: email ? false : true,
      isPasswordInvalid: password ? false : true,
    });

    if (!email || !password) return;

    const user = {
      email,
      password,
    };

    try {
      const loginSuccess = await dispatch(login(user));
      if (loginSuccess) {
        onClose();
        openNotification("login");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (!isvisible) return null;

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm 2xl:mt-10 4xl:mt-0"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="USER ACCOUNT">
        <ModalScroll>
          <div className="px-5 mb-3.5">
            <FlexCenter className="w-auto sm:w-[410px] mb-[15px] text-color-brand-yellow2">
              <Typography variant="h12" classname="text-color-brand-yellow2">
                {"Don't want to Log In or Sign Up?"}
              </Typography>
            </FlexCenter>
            <Flex className="justify-center w-[100%]">
              <DesignButton
                className="w-full text-[14px] lsm:text-[18px]"
                typoVariant="buttonLabel3"
                onClick={handleGuest}
              >
                {auth.loading == false ? "Continue As a Guest" : "Loading..."}
              </DesignButton>
            </Flex>
            <hr className="w-auto space-y-5 my-[25px] sm:w-[410px] border-color-brand-op" />
            <Typography
              variant="h11"
              classname="text-color-brand-yellow2 drop-shadow-3xl"
            >
              LOGIN
            </Typography>
          </div>
          <div className="px-5 text-left">
            <div className="space-y-5" action="#">
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
                    value={email}
                    type="email"
                    placeholder="example@domain.com"
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
                    value={password}
                    type="password"
                    placeholder="xxx"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Flex>
                {invalidInputs.isPasswordInvalid && (
                  <InlineError message={"password"} />
                )}
              </div>

              {error && (
                <div className="pt-2">
                  <Typography variant="h12" classname="text-red-600">
                    {error}
                  </Typography>
                </div>
              )}
              <Flex className="w-auto justify-end">
                <FlexBetween className="w-auto">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    Forgot Password?
                  </Typography>
                  <Button
                    variant="text"
                    className="w-full pb-1 underline cursor-pointer text-color-brand-yellow2"
                    typoVariant="h12"
                    onClick={openForgotPass1Modal}
                  >
                    Reset
                  </Button>
                </FlexBetween>
              </Flex>
              <Flex className="justify-center pb-2.5 w-[100%]">
                <DesignButton
                  className="w-full"
                  typoVariant="buttonLabel2"
                  onClick={handleSubmit}
                >
                  {auth.loading == false ? "Enter" : "Loading..."}
                </DesignButton>
              </Flex>

              <hr className="w-auto sm:w-[410px] border-color-brand-op" />
              <div className="pb-2.5">
                <FlexCenter className="w-auto sm:w-[410px] mb-5 text-color-brand-yellow2">
                  <Typography
                    variant="h12"
                    classname="text-color-brand-yellow2"
                  >
                    {"Don't have an account?"}
                  </Typography>
                </FlexCenter>
                <Flex className="relative w-[100%] h-[40px] focus:none focus:border-none">
                  <DesignButton3
                    className="w-full"
                    typoVariant="buttonLabel2"
                    onClick={openSignupModal}
                  >
                    SIGN UP
                  </DesignButton3>
                </Flex>
              </div>
            </div>
          </div>
        </ModalScroll>
      </ModalFrame>
    </FlexCenter>
  );
};

export default LoginModal;
