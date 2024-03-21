import React from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { Button } from "react-scroll";
import { DesignButton } from "../../button/designButton";
import { DesignButton3 } from "../../button/designButton3";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";

const ReciteModal = ({ isvisible, onClose }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
        <FlexColumn className="px-5 mb-3.5 gap-2">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            Prayer
          </Typography>
          <div className="pt-5">
            <Typography
              variant="h12"
              classname=" text-color-brand-yellow2 drop-shadow-3xl "
            >
              Whenever a person gets affected with an evil eye curse, it affects
              them physically, mentally, emotionally, and financially.
            </Typography>
          </div>

          <div>
            <Typography
              variant="h12"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              Name of recipient
            </Typography>
            <Flex className="relative h-[40px]">
              <Input type="text" placeholder="Name" />
            </Flex>
          </div>

          <div>
          <Typography
              variant="h12"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              Recipient’s phone or email
            </Typography>
          </div>

          <div className="flex gap-4">
            <div className="h-full w-full">
              <Flex className="relative h-[40px]">
                <CheckBox>Phone</CheckBox>
              </Flex>
            </div>

            <div className="h-full w-full">
              <Flex className="relative h-[40px]">
                <CheckBox>Phone</CheckBox>
              </Flex>
            </div>
          </div>

          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              // onClick={openForgotPass2Modal}
            >
              Next
            </DesignButton>
          </Flex>
        </FlexColumn>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ReciteModal;
