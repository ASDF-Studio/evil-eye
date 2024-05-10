import React, { useState, useEffect } from "react";

import { Typography } from "../../typography";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import { DesignButton3 } from "../../button/designButton3";
import { PrayerBG, PrayerBGvideo } from "@/components/background";
import PrayerModalFrame from "../prayerModalFrame";
import { DesignButton1 } from "@/components/button/designButton1";

const PrayerReciteModalDone = ({
  isvisible,
  onClose,
  openReciteModal,
  openDashboard,
}) => {
  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const openReciteModal3 = () => {
    setPrayerDone(false);
    onClose();
    openReciteModal();
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
              <Typography
                variant="h13"
                classname="text-color-brand-yellow2 opacity-80"
              >
                🧿 Thank you 🧿
              </Typography>
            </FlexCenter>
            <div className="pt-3">
              <DesignButton1
                className="relative w-full"
                typoVariant="buttonLabel2"
                onClick={openReciteModal3}
              >
                RECITE ANOTHER PRAYER
              </DesignButton1>
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

export default PrayerReciteModalDone;
