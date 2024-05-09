import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { recitePrayer } from "@/action";
import { useAppSelector } from "@/hooks";
import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexCenter, FlexColumn } from "../../layout";
import { DesignButton } from "../../button/designButton";

const PaymentSuccessReciteModal = ({
  isvisible,
  onClose,
  openPrayerReciteModal,
}) => {
  const [prayerId, setPrayerId] = useState(null);
  const dispatch = useDispatch();
  const prayerState = useAppSelector((state) => state.prayer);
  const router = useRouter();

  useEffect(() => {
    const prayer_id = router.query.prayer_id;
    if (prayer_id) {
      setPrayerId(prayer_id);
    }
  }, [router.query.prayer_id]);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const reciteModal = () => {
    onClose();
    openPrayerReciteModal();
  };

  const handlePrayer = async (e) => {
    e.preventDefault();
    if (!prayerId) return;

    const data = {
      prayerId: prayerId,
    };

    try {
      reciteModal();
      await dispatch(recitePrayer(data));
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  if (!isvisible) return null;

  return (
    <FlexCenter
      className="z-50 fixed left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm top-[70%] sm:top-[50%]"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
        <div className="px-5">
          <div className="flex justify-center mb-3.5">
            <Typography
              variant="h11"
              classname="text-color-brand-yellow2 drop-shadow-3xl "
            >
              PAYMENT SUCCESSFUL
            </Typography>
          </div>
          <FlexColumn className="mb-3.5 gap-2">
            <div className="flex justify-center pt-5">
              <Typography variant="h13" classname="text-color-brand-yellow2">
                We have successfully processed your payment. Please click below
                to continue.
              </Typography>
            </div>
            <div className="">
              <Flex className="justify-center pt-3 pb-2.5 w-[100%]">
                <DesignButton
                  className="w-full"
                  typoVariant="buttonLabel2"
                  onClick={handlePrayer}
                >
                  {prayerState.loading == false
                    ? "Recite Prayer"
                    : "Loading..."}
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
