import React from "react";
import { Flex, FlexCenter } from "../layout";
import ModalFrame from "./modalFrame";
import { Typography } from "../typography";
import { DesignButton } from "../button/designButton";

const Pricing = ({ isvisible, onClose }) => {
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
      <ModalFrame onClose={onClose} title="Pricing">
      <Flex className="justify-center"><Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            $5 per prayer
          </Typography></Flex>
        <div className="px-5 mb-3.5">
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
            >
              Recite the Prayer
            </DesignButton>
          </Flex>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default Pricing;
