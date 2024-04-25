import React from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { Button } from "react-scroll";
import { DesignButton } from "../../button/designButton";
import { DesignButton3 } from "../../button/designButton3";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";

const PaymentSuccessReciteModal = ({ isvisible, onClose, openPrayerReciteModal }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const openReciteModal6 = () => {
    onClose();
    openPrayerReciteModal();
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm "
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
        <div className=" px-5">
          <div className="flex justify-center mb-3.5">
            <Typography
              variant="h11"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              PAYMENT SUCCESSFUL
            </Typography>
          </div>
          <FlexColumn className="mb-3.5 gap-2">
            <div className="flex justify-centerpt-5">
              <Typography variant="h13" classname="text-color-brand-yellow2">
                We have successfully processed your payment. Please click below
                to continue.
              </Typography>
            </div>
            <div className="">
              <Flex className=" justify-center pt-3 pb-2.5 w-[100%]">
                <DesignButton
                  className=" w-full"
                  typoVariant="buttonLabel2"
                  onClick={openReciteModal6}
                >
                  Recite Prayer
                </DesignButton>
              </Flex>
            </div>
          </FlexColumn>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default PaymentSuccessReciteModal;
