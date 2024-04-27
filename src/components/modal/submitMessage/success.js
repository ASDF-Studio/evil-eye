import React from "react";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import { DesignButton } from "../../button/designButton";

const variantMapping = {
  "contact": {
    header: "Please enter your name.",
    title: "Please enter a valid email address.",
    info: "Phone number is invalid.",
    button: "Please enter your message to us",
  },
  "login": {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    phone: "Phone number is invalid.",
    message: "Please enter your message to us",
  },
};

const SuccessModal = ({ isvisible, onClose, type }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleDone = () => {
    onClose();
  };

  const { header, title, info, button } = variantMapping[type];

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm "
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title={header}>
        <div className="px-5">
          <div className="flex justify-center mb-3.5">
            <Typography
              variant="h11"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              {title}
            </Typography>
          </div>
          <FlexColumn className="mb-3.5 gap-2">
            <div className="flex justify-center pt-5">
              <Typography variant="h13" classname="text-color-brand-yellow2">
                {info}
              </Typography>
            </div>
            <div className="">
              <Flex className=" justify-center pt-3 pb-2.5 w-[100%]">
                <DesignButton
                  className=" w-full"
                  typoVariant="buttonLabel2"
                  onClick={handleDone}
                >
                  {button}
                </DesignButton>
              </Flex>
            </div>
          </FlexColumn>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default SuccessModal;
