import React, { useEffect, useState } from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { DesignButton3 } from "../../button/designButton3";
import { Stripe } from "@/components/logo";
import { DesignButton1 } from "@/components/button/designButton1";
import { paymentCheckout, prayer, validateCoupon } from "@/action";
import { useAppDispatch, useAppSelector } from "@/hooks";

// import { loadStripe } from "@stripe/stripe-js";

const PaymentReciteModal = ({
  isvisible,
  onClose,
  openPaymentSuccessReciteModal,
  prayerData,
}) => {
  const dispatch = useAppDispatch();
  const prayerState = useAppSelector((state) => state.prayer);

  const [haveCouponCode, setCouponCode] = useState("3c7ovGI9");

  useEffect(() => {
    const couponCode = {
      couponCode: haveCouponCode,
    };

    dispatch(validateCoupon(couponCode));
  }, [dispatch]);

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    //stripe

    const updatedPrayerData = {
      ...prayerData,
      couponCode: couponCode,
    };

    try {
      await dispatch(paymentCheckout(updatedPrayerData));

      // onClose();
      // openPaymentSuccessReciteModal();
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <FlexCenter
      className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <ModalFrame onClose={onClose} title="Recite the prayer">
        <div className=" divide-[#FFCE70] divide-y-2">
          <div className="px-5">
            <div>
              <Typography
                variant="h11"
                classname="text-color-brand-yellow2 drop-shadow-3xl "
              >
                PAYMENT
              </Typography>
            </div>
            <FlexColumn className="mb-3.5 gap-2">
              <div className="pt-5 pb-5">
                <Typography
                  variant="h12"
                  classname="text-color-brand-yellow2 opacity-80"
                >
                  Ready for the prayer? Please pay and continue.
                </Typography>
              </div>

              <hr className="w-auto border-color-brand-op" />

              <FlexBetween className="pb-3.5 pt-2 w-auto ">
                <Typography
                  variant="h13"
                  classname=" text-color-brand-yellow2 opacity-80"
                >
                  1 Evil Eye Remedy for {prayerData?.name}
                </Typography>
                <Typography variant="h14" classname=" text-color-brand-yellow2">
                  ${prayerData?.price}
                </Typography>
              </FlexBetween>
              <hr className="w-auto border-color-brand-op" />

              <FlexBetween className="pt-2 w-auto ">
                <Flex className="flex-col sm:flex-row gap-2">
                  <Typography
                    variant="h13"
                    classname=" text-color-brand-yellow2 opacity-80"
                  >
                    Coupon
                  </Typography>
                  <Typography
                    variant="h20"
                    classname=" text-color-brand-yellow2 opacity-60"
                  >
                    50% Discount Applied
                  </Typography>
                </Flex>
                <Flex className="justify-end h-full w-[190px]">
                  <Flex className="relative w-[170px] h-[40px]">
                    <DesignButton3>{haveCouponCode}</DesignButton3>
                  </Flex>
                </Flex>
              </FlexBetween>
            </FlexColumn>
          </div>

          <div className="px-5">
            <div className="pt-3.5">
              <FlexBetween className="pt-2 w-auto">
                <Typography
                  variant="h13"
                  classname=" text-color-brand-yellow2 opacity-80"
                >
                  Total
                </Typography>
                <Typography variant="h14" classname=" text-color-brand-yellow2">
                  ${prayerData?.price}
                </Typography>
              </FlexBetween>
            </div>

            <Flex className=" justify-center pt-5 pb-5 w-[100%]">
              <DesignButton1
                className="w-full  "
                typoVariant="buttonLabel2"
                onClick={handlePayment}
              >
                {prayerState.loading == false
                  ? "CONTINUE WITH PAYMENT"
                  : "Loading..."}
              </DesignButton1>
            </Flex>
            <FlexCenter className="pb-5">
              <Typography
                variant="h13"
                classname=" text-color-brand-yellow2 opacity-80"
              >
                Secured by
              </Typography>

              <div className="pl-2">
                <Stripe />
              </div>
            </FlexCenter>
          </div>
        </div>
      </ModalFrame>
    </FlexCenter>
  );
};

export default PaymentReciteModal;
