import React from "react";
import { FlexCenter } from "../../layout";
import NotificationFrame from "../notificationFrame";

const NotificationModal = ({
  isvisible,
  onClose,
  notificationData,
  notificationRawData,
}) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const variantMapping = {
    login: "Welcome back. You have successfully login.",
    signup: "Welcome. You have successfully login.",
    logout: "successfully logged out",
    save: "Data saved.",
    password: "Password updated, Please login",
    email: "Email change successfully",
    otp: "OTP has been sent to your email",
    otpAgain: "User already registered, Input OTP",
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[10%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm "
      id="wrapper"
      onClick={handleClose}
    >
      {notificationData ? (
        <NotificationFrame
          onClose={onClose}
          title={variantMapping[notificationData]}
        />
      ) : (
        <NotificationFrame onClose={onClose} title={notificationRawData} />
      )}
    </FlexCenter>
  );
};

export default NotificationModal;
