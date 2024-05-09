import React, { useEffect, useState } from "react";

import ModalFrame from "../modalFrame";
import { Typography } from "../../typography";
import { Flex, FlexBetween, FlexCenter, FlexColumn } from "../../layout";
import { DesignButton3 } from "../../button/designButton3";
import { Stripe } from "@/components/logo";
import { DesignButton1 } from "@/components/button/designButton1";
import { paymentCheckout, prayer, validateCoupon } from "@/action";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Input } from "@/components/input";

const PaymentReciteModal = ({ isvisible, onClose, prayerData }) => {
  const dispatch = useAppDispatch();
  const prayerState = useAppSelector((state) => state.prayer);

  const [haveCouponCode, setCouponCode] = useState("");

  if (!isvisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleCoupon = async (e) => {
    e.preventDefault();

    const couponCode = {
      couponCode: haveCouponCode,
    };

    try {
      await dispatch(validateCoupon(couponCode));
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    let updatedPrayerData;

    let discountedPrice =
      prayerData.price -
      prayerData.price * (prayerState.discountPercentage / 100);

    if (prayerState.couponValid) {
      updatedPrayerData = {
        ...prayerData,
        discountedPrice: discountedPrice,
        couponCode: haveCouponCode,
      };
    } else {
      updatedPrayerData = {
        ...prayerData,
        discountedPrice: discountedPrice,
      };
    }

    try {
      await dispatch(prayer(updatedPrayerData));
      // console.log("updatedPrayerData", updatedPrayerData);
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

              <FlexBetween className="flex-col w-[100%] sm:flex-row gap-2">
                <Typography
                  variant="h13"
                  classname=" text-color-brand-yellow2 opacity-80"
                >
                  Coupon
                </Typography>
                {prayerState.couponValid && (
                  <Typography
                    variant="h20"
                    classname=" text-color-brand-yellow2 opacity-60"
                  >
                    {prayerState.discountPercentage}% Discount Applied
                  </Typography>
                )}

                {prayerState.invalidCoupon && (
                  <Typography
                    variant="h20"
                    classname=" text-color-brand-yellow2 opacity-60"
                  >
                    {prayerState.invalidCoupon}
                  </Typography>
                )}
              </FlexBetween>

              <FlexBetween className="h-full w-[100%]">
                <Flex className="relative w-[57%] h-[40px]">
                  <Input
                    type="text"
                    placeholder="Code"
                    value={haveCouponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </Flex>
                <Flex className="relative w-[40%] h-[40px]">
                  <DesignButton3 onClick={handleCoupon}>
                    {prayerState.loading == false ? "Check" : "Loading..."}
                  </DesignButton3>
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
                  $
                  {prayerState.couponValid
                    ? prayerData.price -
                      prayerData.price * (prayerState.discountPercentage / 100)
                    : prayerData.price}
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
