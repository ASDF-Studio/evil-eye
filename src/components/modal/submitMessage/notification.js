import React from "react";
import { FlexCenter } from "../../layout";
import NotificationFrame from "../notificationFrame";

const NotificationModal = ({ isvisible, onClose }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[10%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm "
      id="wrapper"
      onClick={handleClose}
    >
      <NotificationFrame onClose={onClose} title={"Welcome back. You have successfully login. "} />
    </FlexCenter>
  );
};

export default NotificationModal;
