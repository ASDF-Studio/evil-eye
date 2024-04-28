import React from "react";
import { FlexCenter } from "../../layout";
import NotificationFrame from "../notificationFrame";

const NotificationModal = ({ isvisible, onClose, notificationData }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const variantMapping = {
    login: "Welcome back. You have successfully login.",
    signup: "Welcome. You have successfully login.",
    logout: "successfully logged out",
    save: "Data saved.",
    password: "Password updated",
    email: "Email change successfully"
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[10%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm "
      id="wrapper"
      onClick={handleClose}
    >
      <NotificationFrame onClose={onClose} title={variantMapping[notificationData]} />
    </FlexCenter>
  );
};

export default NotificationModal;
