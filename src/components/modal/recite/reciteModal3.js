import React from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { Button } from "react-scroll";
import { DesignButton } from "../../button/designButton";
import { DesignButton3 } from "../../button/designButton3";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";

const ReciteModal3 = ({ 
  isvisible,
  onClose,
  openRecite4,

 }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const openReciteModal4 = () => {
    onClose();
    openRecite4();
  };
  

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
      <div className="px-5 mb-3.5">
          <Typography
            variant="h11"
            classname="text-color-brand-yellow2 drop-shadow-3xl "
          >
            PRAYER
          </Typography>
        </div>
        <FlexColumn className="px-5 mb-3.5 gap-2">
          
          <div className="pb-3">
            <Typography
              variant="h12"
              classname=" text-color-brand-yellow2 drop-shadow-3xl "
            >
              Whenever a person gets affected with an evil eye curse, it affects
              them physically, mentally, emotionally and financially.
            </Typography>
          </div>
          <hr className="w-auto border-color-brand-op" />
          <div className="pt-3">
          <Typography
              variant="h12"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              Who’s the recipient of this prayer?
            </Typography>
          </div>
          
          

          <div className="flex gap-4 mb-4">
            <div className="h-full w-full">
              <Flex className="relative h-[40px]">
                <CheckBox>Myself</CheckBox>
              </Flex>
            </div>

            <div className="h-full w-full">
              <Flex className="relative h-[40px]">
                <CheckBox>Someone Else</CheckBox>
              </Flex>
            </div>
          </div>
          <hr className="w-auto border-color-brand-op" />

          <div className="pt-3">
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

          <div className="pt-3">
          <Typography
              variant="h12"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              Recipient’s phone or email
            </Typography>
            <div><Typography
              variant="h17"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              We’ll use this to let them know a prayer is being recited for them
            </Typography></div>
          </div>
          
          

          <div className="flex gap-4">
            <div className="h-full w-full">
              <Flex className="relative h-[40px]">
                <CheckBox>Phone</CheckBox>
              </Flex>
            </div>

            <div className="h-full w-full">
              <Flex className="relative h-[40px]">
                <CheckBox>Email</CheckBox>
              </Flex>
            </div>
          </div>
          <div className="pt-3">
          <Flex className="relative h-[40px]">
                <Input type="text" placeholder="123-345-6789" />
              </Flex>
          </div>

          <Flex className=" justify-center pt-3 pb-2 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
               onClick={openReciteModal4}
            >
              Next
            </DesignButton>
          </Flex>
        </FlexColumn>
      </ModalFrame>
    </FlexCenter>
  );
};

export default ReciteModal3;
