import React, { useState } from "react";
import Link from "next/link";
import {
  Logo,
  LogoWithBackground,
  LogoWithBackgroundMobile,
  MobileBars,
  User,
  X,
} from "../components/logo";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { Flex, FlexCenter, FlexColumn } from "@/components/layout";
import LoginModal from "@/components/modal/login/loginModal";
import DashModal from "@/components/modal/dashboard/dashModal";
import PassModal from "@/components/modal/changePass/passModal";
import SignupModal from "@/components/modal/signup/signupModal";
import SignupOtpModal from "@/components/modal/signup/signupOTPModal";
import ForgotPass1 from "@/components/modal/login/forgotpass1";
import ForgotPass2 from "@/components/modal/login/forgotpass2";
import ForgotPass3 from "@/components/modal/login/forgotpass3";
import Pricing from "@/components/modal/pricing";
import Contact from "@/components/modal/contact";
import { DesignButton } from "@/components/button/designButton";

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
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const [showDashModal, setShowDashModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSignupOTPModal, setShowSignupOTPModal] = useState(false);

  const [showForgotPass1Modal, setShowForgotPass1Modal] = useState(false);
  const [showForgotPass2Modal, setShowForgotPass2Modal] = useState(false);
  const [showForgotPass3Modal, setShowForgotPass3Modal] = useState(false);

  const closeAllModal = () => {
    setShowLoginModal(false);
    setShowContactModal(false);
    setShowPricingModal(false);
  };

  const handlePath = (path) => {
    setNavbar(false);
    closeAllModal();
    path === "login" && setShowLoginModal(!showLoginModal);
    path === "contact" && setShowContactModal(!showContactModal);
    path === "price" && setShowPricingModal(!showPricingModal);
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
      <div className="w-[100%] px-0 mt-0 sm:mt-[10px] fixed z-20 sm:px-0">
        <FlexCenter className={["h-[60px] justify-between"].join(" ")}>
          <Link href={"/"} className="relative hidden sm:block">
            <LogoWithBackground />
          </Link>
          <div className="block sm:hidden">
            {/* <Logo /> */}
            <LogoWithBackgroundMobile />
          </div>

          <FlexCenter className="gap-2 pr-8 hidden sm:flex">
            {NAV__LINK.map((item, index) => (
              <React.Fragment key={index}>
                <Button variant="text2" onClick={() => handlePath(item.path)}>
                  <FlexCenter className="gap-2">
                    {item.icon && <User />}
                    <Typography
                      variant="buttonPrimary"
                      classname="text-color-brand-yellow2 font-roman whitespace-nowrap"
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
          </FlexCenter>

          <Flex className="p-5 block sm:hidden">
            <DesignButton
              variant="text"
              className="flex text-center sm:hidden"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <X /> : <MobileBars />}
            </DesignButton>
          </Flex>
        </FlexCenter>

        <div className="w-[100%] h-auto backdrop-blur shadow-buttonShadow3 flex justify-center items-center px-2 pt-0">
          <FlexColumn
            className={`w-full h-full v-screen items-start justify-center gap-5 shadow-headerShadow  bg-backgroundColor-brand-blue-90 border-2 border-color-brand-yellow2
            ${navbar ? "p-5 md:p-0 block" : "hidden"}`}
          >
            {NAV__LINK.map((item, index) => (
              <React.Fragment key={index}>
                <Button
                  key={index}
                  variant="text2"
                  onClick={() => handlePath(item.path)}
                >
                  <FlexCenter className="gap-2">
                    {item.icon && <User />}
                    <Typography
                      variant="mobileNav"
                    >
                      {item.display}
                    </Typography>
                  </FlexCenter>
                </Button>
                {index < NAV__LINK.length - 1 && (
                  <hr className="w-full border-color-brand-op" />
                )}
              </React.Fragment>
            ))}
          </FlexColumn>
        </div>
      </div>

      <Pricing
        isvisible={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />

      <Contact
        isvisible={showContactModal}
        onClose={() => setShowContactModal(false)}
      />

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
