import React, { useState } from "react";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import ModalFrame from "../modalFrame";
import { Design1, Design2, Xmark } from "../../logo";
import { Typography } from "../../typography";
import { DesignButton } from "../../button/designButton";
import EmailModal from "../changeEmail/emailModal";

const PassModal = ({ isvisible, onClose }) => {
  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const [showEmailModal, setShowEmailModal] = useState(false);
  const closeHighlightModal = () => {
    setShowEmailModal(false);
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
            Change Password
          </Typography>
          <div className="pt-5">
            <label for="password" className="block mb-1.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 drop-shadow-3xl "
              >
                New Password
              </Typography>
            </label>
            <Flex className=" relative w-[410px] h-[40px] ">
              <FlexBetween className="w-full h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue absolute ">
                <Design1 />
                <Flex className="absolute justify-start items-center w-full h-[40px] z-50">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className=" bg-transparent outline-none absolute flex w-[410px] px-7 text-textColor-brand-gold2 h-[40px]"
                    placeholder=""
                    required
                  />
                </Flex>
                <Design2 />
              </FlexBetween>
            </Flex>
          </div>
          <div className="pt-5">
            <label for="password" className="block mb-1.5">
              <Typography
                variant="h12"
                classname=" text-color-brand-yellow2 drop-shadow-3xl "
              >
                Confirm Password
              </Typography>
            </label>
            <Flex className=" relative w-[410px] h-[40px] ">
              <FlexBetween className="w-full h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue absolute ">
                <Design1 />
                <Flex className="absolute justify-start items-center w-full h-[40px] z-50">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className=" bg-transparent outline-none absolute flex w-[410px] px-7 text-textColor-brand-gold2 h-[40px]"
                    placeholder=""
                    required
                  />
                </Flex>
                <Design2 />
              </FlexBetween>
            </Flex>
          </div>
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton className=" w-full" typoVariant="buttonLabel2">
              ENTER
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default PassModal;
