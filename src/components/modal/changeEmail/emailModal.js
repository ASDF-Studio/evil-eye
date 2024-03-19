import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2, Xmark } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import OtpModal from "./otpModal";

const EmailModal = ({ isvisible, onClose }) => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const closeHighlightModal = () => {
    setShowOtpModal(false);
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
            Change Email
          </Typography>

          <div className="mt-5">
            <label for="email" className="block  mb-1.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 drop-shadow-3xl "
              >
                Email
              </Typography>
            </label>
            <Flex className=" relative w-[410px] h-[40px] ">
              <FlexBetween className="w-full h-[40px] absolute border-[#D2A42B] border-2 text-brand-gold bg-brand-blue">
                <Design1 />
                <Flex className="absolute justify-start items-center w-full h-[40px] z-50">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-none bg-transparent items-center placeholder:text-textColor-brand-gold2 absolute flex w-full px-7 text-textColor-brand-gold2 h-[40px] "
                    placeholder=""
                    required
                  />
                </Flex>
                <Design2 />
              </FlexBetween>
            </Flex>
          </div>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={() => {
                closeHighlightModal();
                setShowOtpModal(!showOtpModal);
              }}
            >
              ENTER
            </DesignButton>
            <OtpModal
              isvisible={showOtpModal}
              onClose={() => setShowOtpModal(false)}
            />
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default EmailModal;
