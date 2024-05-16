import React from "react";
import { Flex, FlexCenter } from "../layout";
import ModalFrame from "./modalFrame";
import { Typography } from "../typography";
import { DesignButton } from "../button/designButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { guest, userRecite } from "@/action/modal.action";

const Pricing = ({ isvisible, onClose }) => {
  const auth = useAppSelector((state) => state.auth);
  const modal = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  if (!isvisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handlePrayerModal = async (e) => {
    e.preventDefault();
    if (auth.authenticate) {
      onClose();
      await dispatch(userRecite(true));
    } else {
      onClose();
      await dispatch(guest(true));
    }
  };
  return (
    <FlexCenter
      className="z-50 fixed left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm top-[50%]"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Pricing">
        <Flex className="justify-center">
          <Typography
            variant="h11"
            classname=" text-color-brand-yellow2 drop-shadow-3xl "
          >
            $5 per prayer
          </Typography>
        </Flex>
        <div className="px-5 mb-3.5">
          <Flex className=" justify-center pt-5 pb-2.5 w-[100%]">
            <DesignButton
              className=" w-full"
              typoVariant="buttonLabel2"
              onClick={handlePrayerModal}
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
