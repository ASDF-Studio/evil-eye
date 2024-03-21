import React from "react";

import ModalFrame from "./modalFrame";
import { Typography } from "../typography";
import { Flex, FlexBetween, FlexCenter } from "../layout";
import { Input } from "postcss";
import { Button } from "react-scroll";
import { DesignButton } from "../button/designButton";
import { DesignButton3 } from "../button/designButton3";



const ReciteModal = ({
  isvisible,
  onClose,
  
}) => {
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
      <div>
      <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            PRAYER
          </Typography>
      </div>
        
      </ModalFrame>
    </FlexCenter>
  );
};

export default ReciteModal;
