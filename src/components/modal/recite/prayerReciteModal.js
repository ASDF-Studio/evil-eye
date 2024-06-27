import React, { useState, useEffect } from "react";
import { Typography } from "../../typography";
import { Flex, FlexCenter } from "../../layout";
import { DesignButton3 } from "../../button/designButton3";
import {
  PrayerBG,
  PrayerBGMobile,
  PrayerBGvideo,
} from "@/components/background";
import PrayerModalFrame from "../prayerModalFrame";
import { LoadingFrame } from "@/components/loading/loadingFrame";
import { DesignButton1 } from "@/components/button/designButton1";
import { guest } from "@/action/modal.action";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/router";
import { verifyCheckoutSession } from "@/action";

const PrayerReciteModal = ({
  isvisible,
  onClose,
  openReciteModal,
  openDashboard,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);
  const [prayerDone, setPrayerDone] = useState(false);

  useEffect(() => {
    if (prayerDone) {
      const session_id = router.query.session_id;
      const prayer_id = router.query.prayer_id;
      localStorage.removeItem("evileye-prayer");
      router.replace(router.pathname, undefined, { shallow: true });

      const data = {
        sessionId: session_id,
        prayerId: prayer_id,
        prayerCount: 100,
      };
      dispatch(verifyCheckoutSession(data));
    }
  }, [prayerDone, dispatch]);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const openReciteModal3 = () => {
    setPrayerDone(false);
    onClose();
    openReciteModal();
  };

  const openAnotherReciteModal = () => {
    setPrayerDone(false);
    onClose();
    openReciteModal();
  };

  const openDashboardModal = () => {
    onClose();
    openDashboard();
  };

  const prayerProgress = () => {
    setPrayerDone(true);
  };

  const handleAnotherPrayer = async (e) => {
    e.preventDefault();
    onClose();
    // router.replace(router.pathname, undefined, { shallow: true });
    if (auth.authenticate) {
      openAnotherReciteModal();
    } else {
      await dispatch(guest(true));
    }
  };

  const handleHistory = async (e) => {
    e.preventDefault();
    onClose();
    // router.replace(router.pathname, undefined, { shallow: true });
    if (auth.authenticate) {
      openDashboardModal();
    } else {
      await dispatch(guest(true));
    }
  };

  if (!isvisible) return null;

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-30"
      id="wrapper"
      onClick={handleClose}
    >
      <PrayerModalFrame onClose={onClose} title="Recite the prayer">
        <div className="overflow-hidden hidden sm:block">
          <PrayerBGMobile />
          <PrayerBGvideo />
        </div>

        <div className="overflow-hidden block sm:hidden">
          <PrayerBG />
          <PrayerBGvideo />
        </div>

        {prayerDone ? (
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
                  onClick={handleAnotherPrayer}
                >
                  RECITE ANOTHER PRAYER
                </DesignButton1>
              </div>
              <Flex className="relative bg-backgroundColor-brand-blue mt-3 focus:none focus:border-none w-[100%] h-[40px]">
                <DesignButton3
                  className="w-full"
                  typoVariant="buttonLabel2"
                  onClick={handleHistory}
                >
                  View Order History
                </DesignButton3>
              </Flex>
            </div>
          </Flex>
        ) : (
          <Flex className="h-full items-end justify-center">
            <div className="flex flex-col justify-center mb-3.5">
              <Typography
                variant="h11"
                classname="text-color-brand-yellow2 drop-shadow-3xl"
              >
                Please wait...
                <br /> We are Reciting Your prayer
              </Typography>
              <FlexCenter className="pt-3 relative w-full">
                <Typography variant="h13" classname="text-color-brand-yellow2">
                  Be kind to each other. Be kind to the Earth.
                </Typography>
              </FlexCenter>
              <div className="pt-6 pb-[40px] w-full flex items-center justify-center">
                <LoadingFrame
                  className="relative"
                  prayerProgress={prayerProgress}
                />
              </div>
            </div>
          </Flex>
        )}
      </PrayerModalFrame>
    </FlexCenter>
  );
};

export default PrayerReciteModal;
