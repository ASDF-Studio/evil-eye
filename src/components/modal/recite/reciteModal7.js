import React from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { Button } from "react-scroll";
import { DesignButton } from "../../button/designButton";
import { DesignButton3 } from "../../button/designButton3";
import { Input } from "@/components/input";
import { CheckBox } from "@/components/input/checkbox";
import { PrayerBG, PrayerBGvideo } from "@/components/background";
import PrayerModalFrame from "../prayerModalFrame";

const ReciteModal7 = ({ isvisible, onClose, openRecite8, openDashboard }) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const openReciteModal8 = () => {
    onClose();
    openRecite8();
  };
  const openDashboardModal = () => {
    onClose();
    openDashboard();
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-30"
      id="wrapper"
      onClick={handleClose}
    >
      <PrayerModalFrame onClose={onClose} title="Recite the prayer">
        <div className="overflow-hidden">
          <PrayerBG />
          <PrayerBGvideo />
        </div>
        <Flex className="h-full items-end justify-center">
          <div className="flex flex-col justify-center px-3 mb-[37px]">
            <Typography
              variant="h11"
              classname="text-color-brand-yellow2 drop-shadow-3xl"
            >
              Prayer is Complete
            </Typography>
            <FlexCenter className="pt-3 relative w-full">
              <Typography variant="h13" classname="text-color-brand-yellow2 opacity-80">
                🧿 Thank you 🧿
              </Typography>
            </FlexCenter>
            <div className="pt-3">
              <DesignButton
                className="relative w-full"
                typoVariant="buttonLabel2"
                onClick={openReciteModal8}
              >
                Recite another Prayer
              </DesignButton>
            </div>
            <Flex className="relative bg-backgroundColor-brand-blue mt-3 focus:none focus:border-none w-[100%] h-[40px]">
              <DesignButton3
                className="w-full"
                typoVariant="buttonLabel2"
                onClick={openDashboardModal}
              >
                View Order History
              </DesignButton3>
            </Flex>
          </div>
        </Flex>
      </PrayerModalFrame>
    </FlexCenter>
  );
};

export default ReciteModal7;
