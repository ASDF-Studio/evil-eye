import React, { useState } from "react";
import Link from "next/link";
import {
  LogoWithBackground,
  MobileBars,
  User,
  Xmark,
} from "../components/logo";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { Flex, FlexCenter, FlexColumn } from "@/components/layout";
import LoginModal from "@/components/modal/login/loginModal";
import DashModal from "@/components/modal/dashModal";
import PassModal from "@/components/modal/changePass/passModal";
import SignupModal from "@/components/modal/signup/signupModal";
import SignupOtpModal from "@/components/modal/signup/signupOTPModal";
import ForgotPass1 from "@/components/modal/login/forgotpass1";
import ForgotPass2 from "@/components/modal/login/forgotpass2";
import ForgotPass3 from "@/components/modal/login/forgotpass3";

const NAV__LINK = [
  {
    path: "price",
    display: "Price",
    icon: "",
  },
  {
    path: "contact",
    display: "Contact Us",
    icon: "",
  },
  {
    path: "login",
    display: "login",
    icon: "user",
  },
];

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDashModal, setShowDashModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSignupOTPModal, setShowSignupOTPModal] = useState(false);

  const [showForgotPass1Modal, setShowForgotPass1Modal] = useState(false);
  const [showForgotPass2Modal, setShowForgotPass2Modal] = useState(false);
  const [showForgotPass3Modal, setShowForgotPass3Modal] = useState(false);

  const closeAllModal = () => {
    setShowLoginModal(false);
  };

  const handlePath = (path) => {
    path === "login" && setShowLoginModal(!showLoginModal);
  };

  const openDashboard = () => {
    closeAllModal;
    setShowDashModal(true);
  };

  const openForgotPassword = () => {
    closeAllModal;
    setShowPassModal(true);
  };

  const openSignup = () => {
    closeAllModal;
    setShowSignupModal(true);
  };

  const openSignupOTP = () => {
    closeAllModal;
    setShowSignupOTPModal(true);
  };

  const openForgotPass1 = () => {
    closeAllModal;
    setShowForgotPass1Modal(true);
  };

  const openForgotPass2 = () => {
    closeAllModal;
    setShowForgotPass2Modal(true);
  };

  const openForgotPass3 = () => {
    closeAllModal;
    setShowForgotPass3Modal(true);
  };

  return (
    <>
      <div className="w-full mt-[10px] fixed z-50">
        <FlexCenter className={["justify-between h-[60px]"].join(" ")}>
          <Link href={"/"} className="">
            <LogoWithBackground />
          </Link>

          <FlexCenter className="gap-2 pr-8">
            {NAV__LINK.map((item, index) => (
              <React.Fragment key={index}>
                <Button variant="text2" onClick={() => handlePath(item.path)}>
                  <FlexCenter className="gap-2">
                    {item.icon && <User />}
                    <Typography
                      variant="buttonPrimary"
                      classname="text-color-brand-yellow2 font-roman"
                    >
                      {item.display}
                    </Typography>
                  </FlexCenter>
                </Button>
                {index < NAV__LINK.length - 1 && (
                  <Flex className="text-center justify-center">
                    <i className="w-[1px] h-[40px] border-r-2 border-color-brand-yellow2 opacity-20" />
                  </Flex>
                )}
              </React.Fragment>
            ))}
            <Flex className="text-center justify-center 1xl:hidden">
              <i className="w-[1px] h-[40px] border-r-2 border-lightBlue mr-3" />
            </Flex>
            <Flex
              className="text-center 1xl:hidden"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <Xmark /> : <MobileBars />}
            </Flex>
          </FlexCenter>
        </FlexCenter>

        <FlexColumn
          className={`w-auto h-auto v-screen items-start justify-center gap-5 shadow-headerShadow 
            ${navbar ? "p-5 md:p-0 block" : "hidden"}`}
        >
          {NAV__LINK.map((item, index) => (
            <Button
              key={index}
              variant="text"
              onClick={() => handlePath(item.path)}
            >
              {item.display}
            </Button>
          ))}
        </FlexColumn>
      </div>

      <LoginModal
        isvisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        openDashboard={openDashboard}
        openForgotPassword={openForgotPassword}
        openSignup={openSignup}
        openForgotPass1={openForgotPass1}
      />
      <DashModal
        isvisible={showDashModal}
        onClose={() => setShowDashModal(false)}
      />
      <PassModal
        isvisible={showPassModal}
        onClose={() => setShowPassModal(false)}
      />
      <SignupModal
        isvisible={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        openForgotPassword={openForgotPassword}
        openSignupOTP={openSignupOTP}
      />
      <SignupOtpModal
        isvisible={showSignupOTPModal}
        onClose={() => setShowSignupOTPModal(false)}
      />
      <ForgotPass1
        isvisible={showForgotPass1Modal}
        onClose={() => setShowForgotPass1Modal(false)}
        openForgotPass2={openForgotPass2}
      />
      <ForgotPass2
        isvisible={showForgotPass2Modal}
        onClose={() => setShowForgotPass2Modal(false)}
        openForgotPass3={openForgotPass3}
      />
      <ForgotPass3
        isvisible={showForgotPass3Modal}
        onClose={() => setShowForgotPass3Modal(false)}
      />
    </>
  );
};
